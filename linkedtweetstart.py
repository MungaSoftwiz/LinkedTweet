#!/usr/bin/python3
""" Defines flask application instance and tasks to manage app """
import os
from app import create_app, db
from dotenv import load_dotenv
from flask_migrate import Migrate
load_dotenv()


app = create_app(os.getenv('FLASK_CONFIG') or 'default')
database_migrate = Migrate(app, db, include_schema=True)
