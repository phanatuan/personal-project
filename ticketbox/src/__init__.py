import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy import MetaData

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

naming_convention = {
    "ix": 'ix_%(column_0_label)s',
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(column_0_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

export PSQL_USER=psql
export PSQL_PWD=
export PSQL_DB=ticketbox
export PSQL_HOST=localhost
export PSQL_PORT=5432

POSTGRES = {
    'user': 'postgres',
    'pw': '',
    'db': 'ticketbox',
    'host': 'localhost',
    'port': '5432',
}

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:\
%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'mysecretkey'

metadata= MetaData(naming_convention=naming_convention)
db = SQLAlchemy(app, metadata=metadata)

# db = SQLAlchemy(app)

from src.models.users import User
from src.models.events import Events
from src.models.tickets import Tickets, TicketTypes

Migrate(app, db)

from src.components.core.views import core_blueprint
from src.components.events.views import events_blueprint

app.register_blueprint(core_blueprint)
app.register_blueprint(events_blueprint, url_prefix='/events')
