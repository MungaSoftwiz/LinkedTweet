#!/usr/bin/python3
from . import db


class GeneratedContent(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    prompt = db.Column(db.String(256), index=True, nullable=False)
    content = db.Column(db.Text, nullable=False)
