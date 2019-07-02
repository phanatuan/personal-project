from flask import Blueprint, flash, render_template, redirect
from src.models.events import Events

core_blueprint = Blueprint('core', __name__, template_folder='templates/')

@core_blueprint.route('/')
def index():
    events = Events.query.all()
    return render_template('core/index.html', events=events)
