from flask import Flask
from routes.test_route import test_route
from routes.time_units_route import time_units_route

app = Flask(__name__)
app.register_blueprint(test_route)
app.register_blueprint(time_units_route)

if __name__ == '__main__':
    app.run()