from pymongo import MongoClient

client = MongoClient("mongodb+srv://test:test@timetracker-ncrqc.mongodb.net/test?retryWrites=true&w=majority")
db = client.test