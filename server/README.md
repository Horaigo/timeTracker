# TimeTracker Server
## Local startup:

1. `virtualenv venv`
1. `venv\Scripts\activate.bat`
1. `pip install -r requirements.txt`
1. `python index.py`
1. `deactivate` for enviroment deactivating

## Add new package
After package additional (like `pip install ...`):
- `pip freeze > requirements.txt` (be carefull. Don't create new file)
- Add package name and version in `requirements.txt` manualy

## Database
### Connection string
`mongodb+srv://test:test@timetracker-ncrqc.mongodb.net/test`

You can connect to database with MongoDB Compass: https://www.mongodb.com/download-center/compass
