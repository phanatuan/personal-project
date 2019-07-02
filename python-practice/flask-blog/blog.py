from flask import Flask, flash, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from forms import DeletePostForm, UpdatePostForm, AddCommentForm

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + 'database.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Posts(db.Model): 
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(128), nullable=False)
    body = db.Column(db.Text, nullable=False)
    author_name = db.Column(db.String(64), nullable=False)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    comments = db.relationship('Comments', backref='posts', lazy='dynamic')

    def __init__(self, title, body, author_name): 
        self.title = title 
        self.body = body
        self.author_name = author_name

    def __repr__(self): 
        print(f'This {self.title} is written by {self.author_name}')

class Comments(db.Model): 
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key = True) 
    comment_body = db.Column(db.Text, nullable = False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, comment_body, post_id): 
        self.comment_body = comment_body
        self.post_id = post_id


db.create_all()


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/posts')
def posts(): 
    posts = Posts.query.all()
    comments = Comments.query.all()
    return render_template('posts.html', posts=posts, comments=comments)

@app.route('/add/comment', methods=['POST', 'GET'])
def add_comment(): 
    form = AddCommentForm()
    if form.validate_on_submit(): 
        comment_body = form.comment_body.data
        post_id = form.post_id.data

        new_comment = Comments(comment_body, post_id)

        db.session.add(new_comment)
        db.session.commit()
        
        return redirect(url_for('posts'))

    return render_template('add_comment.html', form=form)

@app.route('/create', methods=['POST', 'GET'])
def create():
    if request.method == 'POST': 
        f = request.form
        new_post = Posts(f['title'], f['body'], f['name'])
        db.session.add(new_post)
        db.session.commit()

        flash('You successfully post new thing')
        # return redirect(url_for('posts'))
        return render_template('posts.html')
    return render_template('create.html')

@app.route('/delete', methods=['POST', 'GET'])
def delete(): 
    form = DeletePostForm()

    if form.validate_on_submit():

        id=form.id.data
        post = Posts.query.get(id)
        db.session.delete(post)
        db.session.commit()
        return redirect(url_for('posts'))

    return render_template('delete.html', form=form)

@app.route('/update', methods=['POST','GET'])
def update(): 
    form = UpdatePostForm()
    if form.validate_on_submit(): 
        id = int(form.id.data)
        post = Posts.query.filter_by(id=id).first()
        post.title = form.title.data
        post.body = form.body.data
        post.author_name = form.author_name.data
        db.session.commit()
        return redirect(url_for('posts'))

    return render_template('update.html', form=form)