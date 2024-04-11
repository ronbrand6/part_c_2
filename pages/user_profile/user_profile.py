from flask import Blueprint, render_template, request, redirect, url_for, session

# user_create blueprint definition
user_profile = Blueprint(
    'user_profile',
    __name__,
    static_folder='static',
    static_url_path='/pages/user_profile.py',
    template_folder='templates'
)


# Routes
@user_profile.route('/user_profile')
def user_profile_page():
    print('--- user_profile_page')
    print(f'{session.get("first_name")}'
          f' {session.get("last_name")}'
          f' {session.get("age")}')
    return render_template('user_profile.html')
