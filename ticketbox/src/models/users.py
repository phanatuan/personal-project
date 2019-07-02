from src import db
from werkzeug.security import check_password_hash, generate_password_hash

class User(db.Model): 

    __tablename__ = 'user' 

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32))
    email = db.Column(db.String(64), nullable=False)
    address = db.Column(db.String(100))
    password_hash = db.Column(db.String(128))

    tickets = db.relationship('Tickets', backref='buyer', lazy=True)
    events = db.relationship('Events', backref='organizer', lazy=True)

    def set_password(self, password): 
        self.password_hash = generate_password_hash(password)

    def check_password(self, password): 
        return check_password_hash(self.password_hash, password)

