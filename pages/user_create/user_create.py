from flask import Blueprint, render_template, request, redirect, url_for

from utilities.mongo_connector import save_user_to_db

# user_create blueprint definition
user_create = Blueprint(
    'user_create',
    __name__,
    static_folder='static',
    static_url_path='/pages/user_create.py',
    template_folder='templates'
)



# Routes
@user_create.route('/user_create',  methods=['POST', 'GET'])
def user_create_page():
    if request.method == 'POST':
        save_user_to_db(request.form)

    return render_template('user_create.html')
