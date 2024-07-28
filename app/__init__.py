#!/usr/bin/python3
""" Create application instance """
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flasgger import Swagger
from config import config

db = SQLAlchemy()
swagger = Swagger()


def create_app(config_name):
    """ Creates an app """
    app = Flask(__name__)

    """ Configure application """
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    """ Initialize extensions """
    db.init_app(app)
    swagger.init_app(app)

    """ Create all database schemas """
    with app.app_context():
        from .models import GeneratedContent
        db.create_all()

    """ Register blueprints (Modules main and api TBD) """
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .api import api as api_blueprint
    app.register_blueprint(api_blueprint, url_prefix='/api/v1')

    return app