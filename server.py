from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import main
import os

_port = int(os.environ.get('PORT', 3000))
app = Flask(__name__, static_url_path="", template_folder='static')
CORS(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')
@app.route('/solver', methods=['POST'])
def solver():
    req_data = request.get_json()
    mq = main.MQ(req_data)
    mq.merge()
    string = mq.convert()
    return jsonify({'exp': string})


if __name__ == "__main__":
    app.run('localhost', _port)