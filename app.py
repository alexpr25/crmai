from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os
import openai

app = Flask(__name__)
CORS(app)

@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({
        "message": "Backend running. Use the /api/chat endpoint for POST requests."
    }), 200

@app.route('/', methods=['GET'])
def index():
    return render_template("chat.html")

@app.route('/api/chat', methods=['POST'])
def chat():
    """
    Endpoint para procesar consultas enviadas al backend.
    En esta versión, usamos la nueva interfaz de openai>=1.0.0:
    openai.Chat.create(...) en lugar de openai.ChatCompletion.create.
    """
    try:
        if not request.is_json:
            return jsonify({"error": "Request body must be JSON"}), 400

        data = request.get_json()
        user_query = data.get("query", "").strip()

        if not user_query:
            return jsonify({"error": "Invalid or missing 'query' parameter"}), 400

        # Carga la clave de API desde la variable de entorno
        openai.api_key = os.environ.get("OPENAI_API_KEY")
        if not openai.api_key:
            return jsonify({"error": "OPENAI_API_KEY not set"}), 500

        # Llama al modelo gpt-3.5-turbo usando la NUEVA sintaxis 'Chat.create'
        response = openai.Chat.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Eres un asistente amigable y útil."},
                {"role": "user", "content": user_query}
            ],
            max_tokens=150,
            temperature=0.7
        )

        # Extrae la respuesta: la estructura es prácticamente igual,
        # salvo que la llamada es a 'Chat.create' en vez de 'ChatCompletion.create'
        ai_answer = response.choices[0].message.content.strip()

        return jsonify({
            "text": ai_answer,
            "confidence": 1.0,
            "sources": ["OpenAI GPT-3.5"]
        }), 200
    
    except Exception as e:
        print(f"Error /api/chat: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)