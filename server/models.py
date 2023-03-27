from sqlalchemy_serializer import SerializerMixin
db = sqlalchemy()
from config import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Coloumn(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    location = db.Column(db.String, primary_key=True)



class Dog(db.Model):
    __tablename__ = 'dogs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    breed = db.Column(db.String)
    age = db.Column(db.Integer)
    weight = db.Column(db.Integer)
    personality = db.Column(db.String)
    location = db.Column(db.String)
    likes_other_dogs = db.Column(db.Boolean)
    likes_cats = db.Column(db.Boolean)



class Location(db.Model):
    __tablename__ = 'location'

    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String)
    



