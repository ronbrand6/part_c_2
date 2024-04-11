from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
# mongodb+srv://ronbrand6:<password>@cluster0.qak4lbq.mongodb.net/
uri = "mongodb+srv://ronbrand6:qQrqq8gtSMedZ2ex@cluster0.qak4lbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    # client.admin.command('ping')
    # print("Pinged your deployment. You successfully connected to MongoDB!")
    mydb = client["group_33"]
    user_col = mydb["user"]
    contact_us_col = mydb["contact_us"]
    meeting_col = mydb["meeting"]
    # x = mycollections.insert_one(mydict)

except Exception as e:
    print(e)


def save_user_to_db(user):
    validate_user = dict()
    validate_user['firstName'] = user.get('firstName', 'no_first_name')
    validate_user['lastName'] = user.get('lastName', 'no_last_name')
    validate_user['age'] = user.get('age','no_age')
    validate_user['email'] = user.get('email','no_email')
    validate_user['password'] = user.get('password','no_password')
    validate_user['phoneNumber'] = user.get('phoneNumber','no_phoneNumber')

    res = user_col.insert_one(validate_user)
    print(res.inserted_id)


def is_user_authenticate(cred):
    user_cred = dict()
    user_cred['email'] = cred.get('email', 'no_email')
    user_cred['password'] = cred.get('password', 'no_password')

    res = user_col.find_one(user_cred)
    print(f'{res=}')
    return res



def save_meeting_to_db(meeting, user_email):
    meeting_details = dict()
    meeting_details['email'] = user_email
    meeting_details['meetingType'] = meeting.get('meetingType', 'no_meetingType')
    meeting_details['date'] = meeting.get('date', 'no_date')
    meeting_details['hour'] = meeting.get('hour', 'no_hour')

    meeting_to_db_res = meeting_col.insert_one(meeting_details)
    print(f'{meeting_to_db_res=}')
    return meeting_to_db_res


def get_all_meeting_from_db(user_email):
    meeting_from_db = meeting_col.find(dict(email=user_email))
    print(f'{meeting_from_db=}')
    return meeting_from_db


def save_contact_us_to_db(contact_us):
    contact_us_details = dict()
    contact_us_details['first_name'] = contact_us.get('firstName', 'no_first_name')
    contact_us_details['last_name'] = contact_us.get('lastName', 'no_last_name')
    contact_us_details['email'] = contact_us.get('email', 'no_email')
    contact_us_details['phone'] = contact_us.get('phone', 'no_phone')
    contact_us_details['message'] = contact_us.get('message', 'no_message')

    contact_us_res = contact_us_col.insert_one(contact_us_details)
    print(f'{contact_us_res=}')
    return contact_us_res
