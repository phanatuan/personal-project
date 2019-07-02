from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class DeletePostForm(FlaskForm): 
    id = IntegerField('ID of Post to Delete')
    submit = SubmitField('Remove the Post')

class UpdatePostForm(FlaskForm): 
    id = IntegerField('ID of Post to Update')
    title = StringField('Title')
    body = StringField('Body')
    author_name = StringField('Author Name')
    submit = SubmitField('Update Post')