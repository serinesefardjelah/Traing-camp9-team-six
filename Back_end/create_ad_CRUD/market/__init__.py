

from flask import Flask, request, jsonify

from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///market.db'
app.config['SECRET_KEY'] = '4b0c0a1a46a9468e69e54d9d'
db = SQLAlchemy(app)
ma = Marshmallow(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = "login_page"
login_manager.login_message_category = "info"
from market import routes

class Product(db.Model):
    id = db.Column(db.Integer(), primary_key = True)
    price = db.Column(db.Integer(), nullable=False)
    wilaya = db.Column(db.String(), nullable=False)
    description = db.Column(db.String(), nullable=False)
    #phone_number = db.Column(db.String(), nullable=False)
    saved = db.Column(db.Boolean, default= False)
    sold = db.Column(db.Boolean, default= False)
    #owner = db.Column(db.Integer(), db.ForeignKey('user.id'))


    def __init__(self, id, price, wilaya, description):
        self.id = id
        self.price = price
        self.wilaya = wilaya
        self.description = description
        #self.date_created = datetime.utcnow
class ProductSchema(ma.Schema):
    class Meta:
        fields = ('id','price', 'wilaya', 'description', 'saved', 'sold')

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)
#getting all products
@app.route("/products", methods=['GET'])

def get_products():
    all_products = Product.query.all()
    products = products_schema.dump(all_products)
    return jsonify(products)
#get one product
@app.get("/products/<id>")
def get_product(id):
    product = Product.query.get(id)
    return product_schema.jsonify(product)
#create one product
@app.post('/products')
def create_product():
    id = request.json['id']
    wilaya= request.json['wilaya']
    description = request.json['description']
    #saved = request.json['saved']
    #sold = request.json['sold']
    #date_created = request.json['date_created']
    price = request.json['price']

    new_product = Product(id, price, wilaya, description)
    db.session.add(new_product)
    db.session.commit()
    return product_schema.jsonify(new_product)

#update one product
@app.route("/products/<id>", methods=['PUT'])
def update_product(id):
    product = Product.query.get(id)
    id = request.json['id']
    wilaya= request.json['wilaya']
    description = request.json['description']
    #saved = request.json['saved']
    #sold = request.json['sold']
    price = request.json['price']

   
    product.wilaya = wilaya
    product.id = id
    product.description = description
    product.price = price
    db.session.commit()
    return product_schema.jsonify(product)


# Delete Product
@app.route('/products/<id>', methods=['DELETE'])
def delete_product(id):
    
  product = Product.query.get(id)
  product.sold = True
  db.session.delete(product)
  db.session.commit()

  return product_schema.jsonify(product)
if __name__ == '__main__':
    app.run(debug=True)