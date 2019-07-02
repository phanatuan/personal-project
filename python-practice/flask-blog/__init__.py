import os 
from flask import Flask 
from flask-sqlalchemy import SQLAlchemy 
from flask-migrate import migrate

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + 'database.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
Migrate(app, db)