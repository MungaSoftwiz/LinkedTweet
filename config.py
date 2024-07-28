#!/usr/bin/python3
""" Configuration for different environments during SDLC """
import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    """ Configures an app """
    SECRET_KEY = os.getenv('SECRET_KEY')

    @staticmethod
    def init_app(app):
        pass


class TestingConfiguration(Config):
    """ Testing environment config """
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('TEST_DATABASE_URL') or \
        'sqlite://'


class DevelopmentConfiguration(Config):
    """ Development environment config """
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DEV_DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')


class ProductionConfiguration(Config):
    """Production environment config"""
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'mysql+mysqlconnector://<username>:<password>@<hostname>/<dbname>'


config = {
    'testing': TestingConfiguration,
    'development': DevelopmentConfiguration,

    'default': DevelopmentConfiguration,
    'production': ProductionConfiguration
}
