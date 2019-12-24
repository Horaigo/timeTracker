import datetime
import re

from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId

from database.db import db

time_units_col = db['timeUnits']

time_units_route = Blueprint('time_units_route', __name__)


@time_units_route.route('/timeUnits', methods=['GET'])
def get_time_units():
    req_data = request.args
    query = {}
    if 'user_id' in req_data and req_data['user_id'] != '':
        query['user_id'] = req_data['user_id']

    docs = time_units_col.find(query)
    result = list()
    for time_unit in docs:
        time_unit['_id'] = str(time_unit['_id'])
        time_unit['time'] = str(int(time_unit['time']) // 60) + ':' + str(int(time_unit['time']) % 60)
        result.append(time_unit)
    return jsonify(result)


@time_units_route.route('/timeUnits', methods=['POST'])
def insert_time_unit():
    req_data = request.args

    if 'title' not in req_data or \
            'desc' not in req_data or \
            'time' not in req_data:
        return jsonify(result='Wrong arguments'), 400

    if req_data['title'] == '' or \
            req_data['desc'] == '' or \
            req_data['time'] == '':
        return jsonify(result='Wrong arguments'), 400

    time_match = re.match(r"^([0-2]?[0-9]):([0-5][0-9])$", req_data['time'], re.M)
    if time_match.group() != req_data['time']:
        return jsonify(result='Wrong time'), 400

    time_unit = {
        'title': req_data['title'],
        'desc': req_data['desc'],
        'time': int(time_match.group(1)) * 60 + int(time_match.group(2)),
        'creationDate': datetime.datetime.now()
    }

    if 'user_id' in request.cookies:  # TODO: Change cookie name
        time_unit['user_id'] = request.cookies.get('user_id')

    inserted_id = time_units_col.insert_one(time_unit).inserted_id
    return jsonify(result=str(inserted_id)), 200


@time_units_route.route('/timeUnits', methods=['PATCH'])
def update_time_unit():
    req_data = request.args

    if 'unit_id' not in req_data or req_data['unit_id'] == '':
        return jsonify(result='Wrong arguments'), 400

    changes = {}

    if 'title' in req_data and req_data['title'] != '':
        changes['title'] = req_data['title']

    if 'desc' in req_data and req_data['desc'] != '':
        changes['desc'] = req_data['desc']

    if 'time' in req_data and req_data['time'] != '':
        time_match = re.match(r"^([0-2]?[0-9]):([0-5][0-9])$", req_data['time'], re.M)
        if time_match.group() != req_data['time']:
            return jsonify(result='Wrong time'), 400
        changes['time'] = int(time_match.group(1)) * 60 + int(time_match.group(2))

    if len(changes) != 0:
        result = time_units_col.update_one({
            '_id': ObjectId(req_data['unit_id'])
        }, {
            '$set': changes
        })
        return jsonify(result=str(result.upserted_id)), 200
    else:
        return jsonify(result='Wrong arguments'), 400

@time_units_route.route('/timeUnits', methods=['DELETE'])
def delete_time_unit():
    req_data = request.args

    if 'unit_id' not in req_data or req_data['unit_id'] == '':
        return jsonify(result='Wrong arguments'), 400

    result = time_units_col.delete_one({'_id': ObjectId(req_data['unit_id'])})
    return jsonify(result='Successfuly deleted'), 200