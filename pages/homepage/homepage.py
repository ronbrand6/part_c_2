from flask import Blueprint, render_template, request, redirect, url_for


# homepage blueprint definition
homepage = Blueprint(
    'homepage',
    __name__,
    static_folder='static',
    static_url_path='/pages/homepage',
    template_folder='templates'
)


# Routes
@homepage.route('/home')
def index_page():
    return render_template('index.html')

@homepage.route('/')
def home_page():
    return redirect('/home')


# @homepage.route('/homepage')
# @homepage.route('/home')
# def redirect_homepage():
#     # print('I am in /Homepage route!')
#     return redirect(url_for('homepage.index'))
