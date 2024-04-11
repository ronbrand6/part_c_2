from flask import Blueprint , request
from flask import render_template, redirect, url_for



# homepage blueprint definition
about = Blueprint(
    'about',
    __name__,
    static_folder='static',
    static_url_path='/pages/about',
    template_folder='templates'
)


# Routes
@about.route('/about')
def about_page():
    return render_template('about.html')

