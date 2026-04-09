from flask import Flask
from aiapp.extension import db
from aiapp.routers.api import api_bp


def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:abc123@localhost/diabetesdb"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)

    app.register_blueprint(api_bp)

    return app