from flask import Blueprint, render_template, request, redirect, url_for, session

from utilities.mongo_connector import is_user_authenticate

# user_connection blueprint definition
user_connection = Blueprint(
    'user_connection',
    __name__,
    static_folder='static',
    static_url_path='/pages/user_connection.py',
    template_folder='templates'
)


# Routes
@user_connection.route('/user_connection', methods=['POST', 'GET'])
def user_connection_page():
    email='ron@gmail.com'
    password='123'
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        res = is_user_authenticate(request.form)
        if res:
            session['log_in'] = True
            session['first_name'] = res.get('firstName')
            session['last_name'] = res.get('lastName')
            session['age'] = res.get('age')
            session['email'] = res.get('email')
            session['phoneNumber'] = res.get('phoneNumber')
            return render_template('user_profile.html')

    return render_template('user_connection.html', email=email, password=password)
