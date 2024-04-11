from flask import Blueprint, render_template, request, redirect, url_for

from utilities.mongo_connector import save_contact_us_to_db

# homepage blueprint definition
contact_us = Blueprint(
    'contact_us',
    __name__,
    static_folder='static',
    static_url_path='/pages/contact_us',
    template_folder='templates'
)


# Routes
@contact_us.route('/contact_us' ,  methods=['POST', 'GET'])
def contact_us_page():
    if request.method == 'POST':
        res = save_contact_us_to_db(request.form)
        print(f'{res=}')
    return render_template('contact_us.html')


