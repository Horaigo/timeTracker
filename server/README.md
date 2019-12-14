# TimeTracker Server
## Local startup:

1. `server/venv/Scripts/activate.bat`
1. `pip install -r requirements.txt`
1. `python index.py`
1. `deactivate` for enviroment deactivating

## Add new packege
After package additional (like `pip install ...`):
- `pip freeze > requirements.txt` (be carefull. Don't create new file)
- Add package name and version in `requirements.txt` manualy
