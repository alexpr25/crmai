from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas las rutas

@app.route('/', methods=['GET'])
def home():
    """
    Endpoint principal para verificar que el backend está funcionando.
    """
    return jsonify({
        "message": "Backend running. Use the /api/chat endpoint for POST requests."
    }), 200

@app.route('/api/chat', methods=['POST'])
def chat():
    """
    Endpoint para procesar consultas enviadas al backend.
    """
    try:
        # Verificar que la solicitud tiene datos JSON
        if not request.is_json:
            return jsonify({"error": "Request body must be JSON"}), 400
        
        data = request.get_json()
        user_query = data.get("query", "").strip()

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
        return jsonify(response), 200
    
    except Exception as e:
        # Registro de errores en los logs
        print(f"Error handling /api/chat request: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    # Configurar el puerto para Railway
    port = int(os.environ.get("PORT", 5000))
    print(f"Starting server on port {port}...")
    app.run(host='0.0.0.0', port=port)