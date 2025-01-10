from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/query', methods=['POST'])
def query():
    data = request.json
    user_query = data.get("query", "")
    response = {"result": f"Received your query: {user_query}"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)