from flask import Blueprint, jsonify
from database.db import db

time_units_col = db['timeUnits']

time_units_route = Blueprint('time_units_route', __name__)
@time_units_route.route('/timeUnits/')
def get_time_units():
    docs = time_units_col.find()
    result = list()
    for time_unit in docs:
        time_unit['_id'] = str(time_unit['_id'])
        result.append(time_unit)
    return jsonify(result=result)
