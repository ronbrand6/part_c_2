from pymongo import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://ronbrand6:qQrqq8gtSMedZ2ex@cluster0.qak4lbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client['ronbrand6']
for collection in db.list_collection_names():
    print('collection : ' + collection)
    print()
    for i in list(db[collection].find()):
        print(i)
