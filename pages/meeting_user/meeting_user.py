from flask import Blueprint, render_template, request, redirect, url_for, session

from utilities.mongo_connector import get_all_meeting_from_db

# meeting_user blueprint definition
meeting_user = Blueprint(
    'meeting_user',
    __name__,
    static_folder='static',
    static_url_path='/pages/meeting_user.py',
    template_folder='templates'
)


# Routes
@meeting_user.route('/meeting_user')
def meeting_user_page():
    print(f'{ session.get("log_in")=}')
    print(f'{ session.get("email")=}')
    user_meeting = get_all_meeting_from_db(session.get('email'))
    # print(f'{user_meeting=}')
    my_meeting = []
    for meeting in user_meeting:
        print(f'{meeting=}')
        met = {'meetingType': meeting.get('meetingType'), 'date':meeting.get('date'), 'hour': meeting.get('hour')}
        my_meeting.append(met)
    session['user_meeting'] = my_meeting
    return render_template('meeting_user.html')
