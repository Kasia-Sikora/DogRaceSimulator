import json

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


# @app.route('/submit', methods=['POST'])
# def submit():
#     data = json.loads(request.data)
#     print(data)


if __name__ == '__main__':
    app.run()
