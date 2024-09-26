from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Sample route to display a welcome message
@app.route('/')
def home():
    return jsonify(message="Welcome to the AI-Powered Conflict Resolution Mediator!")

# Example of a conflict resolution API endpoint
@app.route('/api/resolve', methods=['POST'])
def resolve_conflict():
    data = request.get_json()
    # Here you would typically process the data using your mediation logic
    # For demonstration, let's just echo the received data
    response = {
        "success": True,
        "resolved_conflict": data
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
