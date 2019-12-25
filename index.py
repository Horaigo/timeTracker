from flask import Flask
from flask_cors import CORS
from routes.test_route import test_route
from routes.time_units_route import time_units_route
from routes.auth import auth

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth)
app.register_blueprint(test_route)
app.register_blueprint(time_units_route)

if __name__ == '__main__':
    app.run()