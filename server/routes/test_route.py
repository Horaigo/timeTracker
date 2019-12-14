from flask import Blueprint

test_route = Blueprint('test_route', __name__)
@test_route.route('/')
def hello_world():
    return 'Hello World!'