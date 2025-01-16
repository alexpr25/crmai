from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas las rutas

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_query = data.get("query", "")
    
    # Registro para depuración
    print(f"Received query: {user_query}")
    
    # Validación de entrada
    if not user_query:
        return jsonify({"error": "No query provided"}), 400
    
    # Simula lógica de respuesta
    response = {
        "result": f"Processed your query: {user_query}",
        "additionalInfo": "This is a placeholder response",
    }
    return jsonify(response)

if __name__ == '__main__':
    # Ejecuta el servidor en el puerto 5000
    app.run(host='0.0.0.0', port=5000)