from flask import Blueprint, url_for, redirect, render_template, flash, request
from src.components.events.forms import AddEventForm
from src.models.events import Events
from src import db

events_blueprint = Blueprint('events',__name__
                                     ,template_folder= 'templates/')

@events_blueprint.route('/add', methods=['POST', 'GET'])
def add():
    form = AddEventForm()
    
    if form.validate_on_submit(): 
        print('I am RUNNNNIGGG')
        new_event = Events(form.event_name.data, form.event_description.data)
        
        print('*****', form.event_name.data)

        db.session.add(new_event)
        db.session.commit()

        flash('Event is added', 'success')
        return redirect(url_for('core.index'))

    return render_template('events/add_event.html', form=form)

@events_blueprint.route('/view/<event_id>')
def view(event_id): 
    event = Events.query.get(event_id)
    return render_template('events/view.html', event=event)