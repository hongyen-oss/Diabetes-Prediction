from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.secret_key = "dshfuidsfjdshfjdh"
app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:root@localhost/diabetesdb?charset=utf8mb4"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["PAGE_SIZE"] = 8

db = SQLAlchemy(app)
