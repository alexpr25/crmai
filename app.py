from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas las rutas

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Backend running. Use the /api/chat endpoint for POST requests."
    }), 200

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
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
    
    except Exception as e:
        print(f"Error handling /api/chat request: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    # Configurar el puerto para Railway
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)