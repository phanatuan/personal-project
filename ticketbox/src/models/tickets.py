from src import db

class TicketTypes(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'))

    expire_date = db.Column(db.DateTime)
    price = db.Column(db.Integer)
    quota = db.Column(db.Integer)


class Tickets(db.Model): 
    id = db.Column(db.Integer, primary_key=True)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    seat = db.Column(db.String(32))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())


