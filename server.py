from flask import Flask, request, jsonify
from flask_cors import CORS
import main


app = Flask(__name__)
CORS(app)
@app.route('/solver', methods=['POST'])
def solver():
    req_data = request.get_json()
    print(req_data)
    mq = main.MQ(req_data)
    mq.merge()
    string = mq.convert()

    return jsonify({'exp': string})

app.run()