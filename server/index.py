from flask import Flask
from routes.test_route import test_route

app = Flask(__name__)
app.register_blueprint(test_route)

if __name__ == '__main__':
    app.run()