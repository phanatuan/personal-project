from flask import Flask, render_template, flash, redirect, url_for, request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import current_user, login_user, login_required, logout_user, LoginManager, UserMixin

app = Flask(__name__)

app.config['SECRET_KEY'] = 'mysecretkey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + 'data.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

class User(UserMixin, db.Model): 

    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(64), index=True, unique=True)
    password_hash = db.Column(db.String(128), nullable=False)

    posts = db.relationship('Post', backref='author', lazy='dynamic')


    def __init__(self, username, email): 
        self.username = username
        self.email = email

    def set_password(self, password): 
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash,password)

class Post(db.Model): 

    __tablename__ = 'post'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    body = db.Column(db.Text, nullable=False)
    author_name = db.Column(db.String(64), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, title, body, author_name, user_id): 
        self.title = title 
        self.body = body
        self.author_name = author_name
        self.user_id = user_id

    def __repr__(self): 
        print(f'This {self.title} is written by {self.author_name}')


db.create_all()

@login_manager.user_loader
def load_user(id): 
    return User.query.get(int(id))

@app.route('/')
def index(): 
    return render_template('home.html')


@app.route('/signup', methods=['GET', 'POST'])
def sign_up(): 
    if request.method == 'POST':
        username = request.form['username'] 
        email = request.form['email']
        password = request.form['password']
        
        new_user = User(username, email)
        new_user.set_password(password)

        db.session.add(new_user)
        db.session.commit()
        flash('User Created. Please login now')
        return redirect(url_for('login'))

    return render_template('sign_up.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':

        email = request.form['email']
        password = request.form['password']
        user = User.query.filter_by(email=email).first()

        if user is not None and user.check_password(password): 
            
            flash('You successfully login oh yeah', 'success') 
            login_user(user)
            # next = request.args.get('next')
            # print('***********', next)
            # if next == None or not next[0] == '/': 
            #     return redirect(url_for('index'))
            # else: 
            return redirect(url_for('add_post'))
            
        else: 
            flash('Wrong email and password', 'danger')
            return redirect(url_for('login'))

    return render_template('login.html')

@app.route('/logout', methods=['GET', 'POST'])
@login_required
def logout(): 
    logout_user()
    flash('You are logout, bye bye')
    return redirect(url_for('login')) 

@app.route('/add', methods=['GET', 'POST'])
@login_required
def add_post(): 
    
    if request.method == 'POST': 
        title = request.form['title']
        body = request.form['body']
        

        new_post = Post(title, body, current_user.username, current_user.id)
        db.session.add(new_post)
        db.session.commit()

        print(current_user.username)
        return redirect(url_for('display_post', name='A'))

    return render_template('add.html')
    
@app.route('/hello/<name>')
@login_required
def display_post(name): 
    return render_template('display_post.html', username=current_user.username, 
                                                    posts = current_user.posts, 
                                                    id = id)


if __name__ == '__main__': 
    app.run(debug=True)