from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField, SubmitField, validators, TextAreaField
from wtforms.validators import DataRequired, EqualTo, Length, Email

class AddEventForm(FlaskForm): 

    venue = StringField('Venue Name: ')
    address = StringField('Address: ')
    city = StringField('City: ')
    event_name = StringField('Event Name: ')
    event_type = StringField('Event Type: ')
    event_description = TextAreaField('Event Description: ')
    organizer_name = StringField('Organizer Name: ')
    organizer_detail = TextAreaField('Organizer Info: ')
    organizer_contact = StringField('Organizer Contact: ')
    organizer_email = StringField('Email: ', validators=[Email()])

    submit = SubmitField('Submit')