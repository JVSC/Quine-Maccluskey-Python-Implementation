from flask import Flask, request, jsonify
from flask_cors import CORS
import main
import os

_port = int(os.environ.get('PORT', 5000))
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

app.run(host='0.0.0.0', port=_port)