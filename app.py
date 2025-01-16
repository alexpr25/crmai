from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_query = data.get("query", "")
    
    # Simula la lógica de respuesta del backend
    if not user_query:
        return jsonify({"error": "No query provided"}), 400
    
    response = {"result": f"Processed your query: {user_query}"}
    return jsonify(response)

@app.route('/query', methods=['POST'])
def query():
    data = request.json
    user_query = data.get("query", "")
    response = {"result": f"Received your query: {user_query}"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)