from flask import url_for, render_template, redirect, Blueprint
from src.components.user.forms import ResetForm
from src.models.user import User

user_blueprint = Blueprint('users', __name__)

@user_blueprint.route('/reset', methods=["GET", "POST"])
def reset():
    form = ResetForm()
    if form.validate_on_submit():
      user = User.query.filter_by(email=form.email.data).first_or_404()
    return render_template('reset.html', form=form)


def send_reset_password_email(): 

    apikey = "get-this-from-mailgun"
    url = "get-this-from-mailgun"
    from = 'postmaster@sandboxc18d860bcecb45e591e0707a860d7520.mailgun.org'
    to = 'phananhtuan1011@gmail.com'

requests.post(url, 
    auth=("api", apikey), 
    data={"from": '',
    "to": [self.email], 
    "subject": "Reset Password", 
    "text":"This would be where your password reset will go."}
)