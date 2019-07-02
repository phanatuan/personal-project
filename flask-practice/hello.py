from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Student(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))

db.create_all()

@app.route('/')
def hello(): 
    return('Hello Coderschoolllllllsssss')

@app.route('/hello/<username>')
def hello_user(username): 
    return render_template('hello.html', name=username)

@app.route('/students')
def students(): 
    students = Student.query.all()
    return render_template('students.html', students=students)
