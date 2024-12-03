import os
import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, request

cred = credentials.Certificate('eje2-a2289-firebase-adminsdk-hajdf-1e4e1ba991.json')  
firebase_admin.initialize_app(cred)

app = Flask(__name__)

db = firestore.client()

@app.route('/get_data', methods=['GET'])
def get_data():
    try:
        collection_ref = db.collection('dragon ball')
        docs = collection_ref.stream()

        resultados = []
        for doc in docs:
            resultados.append(doc.to_dict())

        return jsonify(resultados), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/add_data', methods=['POST'])
def add_data():
    try:
        data = request.get_json()

        collection_ref = db.collection('dragon ball')

        doc_ref = collection_ref.add(data)

        return jsonify({"message": "Documento agregado", "id": doc_ref.id}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
