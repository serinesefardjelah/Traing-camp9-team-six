#import libraries
import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import category_encoders

#Initialize the flask App
app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
encoder = pickle.load(open('encoder.pkl', 'rb'))

#default page of our web-app

@app.route('/')
def home():
    return render_template('index.html')

#To use the predict button in our web-app
@app.route('/predict',methods=['POST'])

################
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features=[]
    #int_features = [for x in request.form.values()]
    for x in request.form.values():
        int_features.append(x)
    final_features = [np.array(int_features)]
    char = encoder.fit_transform(final_features)
    prediction = model.predict(char)

    

    return render_template('index.html', prediction_text='the predicted price is :{}'.format(prediction))

if __name__ == "__main__":
    app.run(debug=True)