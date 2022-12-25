from market import app
from flask import render_template, redirect, url_for, flash, request
from market.models import User
from market.forms import RegisterForm, LoginForm
from market import db
from flask_login import login_user, logout_user, login_required, current_user

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('home.html')

@app.post('/register')
def register_page():
    username=request.json["username"]
    email=request.json["email"]
    password=request.json["password"]
    username=request.json["phone_number"]
    wilaya=request.json["wilaya"]
    password=request.json["stars"]
    password=request.json["items"]
    with app.app_context():
        db.create_all()
        new_user=User(username=username,password=password,email=email,phone_number=phone_number,)
        db.session.add(new_user)
        db.session.commit()
    return jsonify("nice")

#     form = RegisterForm()
#     if form.validate_on_submit():
#         user_to_create = User(username=form.username.data,
#                               email_address=form.email_address.data,
#                               password=form.password1.data)
#         db.session.add(user_to_create)
#         db.session.commit()
#         login_user(user_to_create)
#         flash(f"Account created successfully! You are now logged in as {user_to_create.username}", category='success')
#         return redirect(url_for('market_page'))
#     if form.errors != {}: #If there are not errors from the validations
#         for err_msg in form.errors.values():
#             flash(f'There was an error with creating a user: {err_msg}', category='danger')

#     return render_template('register.html', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login_page():
    form = LoginForm()
    if form.validate_on_submit():
        attempted_user = User.query.filter_by(username=form.username.data).first()
        if attempted_user and attempted_user.check_password_correction(
                attempted_password=form.password.data
        ):
            login_user(attempted_user)
            flash(f'Success! You are logged in as: {attempted_user.username}', category='success')
            return redirect(url_for('market_page'))
        else:
            flash('Username and password are not match! Please try again', category='danger')

    return render_template('login.html', form=form)

@app.route('/logout')
def logout_page():
    logout_user()
    flash("You have been logged out!", category='info')
    return redirect(url_for("home_page"))