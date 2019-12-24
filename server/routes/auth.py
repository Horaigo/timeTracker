from flask import Blueprint, request, jsonify
from database.db import db
from bson.json_util import dumps

users_col = db['users']

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['POST'])
def login():
    req_data = request.args

    if 'login' not in req_data or 'password' not in req_data:
        return 'Wrong arguments', 400
    if req_data['login'] == '' or req_data['password'] == '':
        return 'Wrong arguments', 400

    if req_data == None:
        return 'Unexpected error', 500
    user = users_col.find_one({'login': req_data['login']})
    if user == None:
        return 'Wrong login/password', 401
    if user['password'] != req_data['password']:
        return 'Wrong login/password', 401
    else:
        return dumps(user), 200
    return 'Unexpected error', 500


@auth.route('/register', methods=['POST'])
def register():
    req_data = request.args

    if 'first_name' not in req_data or\
            'last_name' not in req_data or\
            'login' not in req_data or\
            'password' not in req_data:
        return 'Wrong arguments', 400

    if req_data['first_name'] == '' or\
            req_data['last_name'] == '' or\
            req_data['login'] == '' or \
            req_data['password'] == '':
        return 'Wrong arguments', 400

    user_check = users_col.find_one({'login': req_data['login']})
    if user_check is not None:
        return 'User exist', 400

    user = {}

    if 'patronymic' not in req_data:
        user['patronymic'] = ''
    else:
        user['patronymic'] = req_data['patronymic']

    user['first_name'] = req_data['first_name']
    user['last_name'] = req_data['last_name']
    user['login'] = req_data['login']
    user['password'] = req_data['password']

    user_id = users_col.insert_one(user).inserted_id
    return 'Successfull registered', 200
