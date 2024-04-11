from flask import Blueprint, render_template, request, session

from utilities.mongo_connector import save_meeting_to_db

# meeting_create blueprint definition
meeting_create = Blueprint(
    'meeting_create',
    __name__,
    static_folder='static',
    static_url_path='/pages/meeting_create.py',
    template_folder='templates'
)

# Routes
@meeting_create.route('/meeting_create', methods=['POST', 'GET'])
def meeting_create_page():
    if request.method == 'POST':
        meetingType = request.form.get('meetingType')
        date = request.form.get('date')
        hour = request.form.get('hour')
        save_meeting_to_db(request.form, session.get('email'))
        return render_template('meeting_create.html', meetingType=meetingType, date=date, hour=hour)
    else:
        return render_template('meeting_create.html')