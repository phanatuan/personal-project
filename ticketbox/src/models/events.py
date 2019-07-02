from src import db

event_category =  db.Table('event_category', 
    db.Column('event_id', db.Integer, db.ForeignKey('event.id'), primary_key=True),
    db.Column('category_id', db.Integer, db.ForeignKey('category.id'), primary_key=True)
)

class Events(db.Model): 
#Location
    __tablename__ = 'event'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(132), nullable=False)
    description = db.Column(db.Text, nullable=False)
    start_time = db.Column(db.DateTime)
    end_time = db.Column(db.DateTime)
    organizer_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    ticket_types= db.relationship('TicketTypes', backref='event', lazy=True)

    categories = db.relationship('Category', 
                    secondary= event_category, 
                    lazy='subquery',
                    backref = db.backref('of_events', lazy=True))

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, name, description):
        self.name = name
        self.description = description


class Category(db.Model): 

    __tablename__ = 'category'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), nullable=False)

    def __init__(self, name): 
        self.name =name
    

