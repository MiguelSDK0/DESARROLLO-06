const express = require('express');
const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(require('./serviceAccountKey.json'))
});

const db = admin.firestore();

const app = express();
const port = 3000;

app.use(express.json());

// ruta para agregar un documento en Firestore
app.post('/addDocument', async (req, res) => {
    const { collection, data } = req.body;

    if (!collection || typeof collection !== 'string' || collection.trim() === '') {
      return res.status(400).send('El nombre de la colección no es válido');
    }
  
    try {
      console.log(`Intentando agregar documento a la colección: ${collection}`); 
      const docRef = await db.collection(collection).add(data);
      res.status(200).send(`Documento creado con ID: ${docRef.id}`);
    } catch (error) {
      console.error('Error al crear el documento:', error);
      res.status(500).send('Error al crear el documento: ' + error.message);
    }
});

  

// ruta para obtener documentos de una coleccion
app.get('/getDocuments/:collection', async (req, res) => {
    const { collection } = req.params;
  
    try {
      const snapshot = await db.collection(collection).get();
      
      if (snapshot.empty) {
        return res.status(404).send('No se encontraron documentos.');
      }
  
      const documents = snapshot.docs.map(doc => doc.data());
      res.status(200).json(documents);
    } catch (error) {
      res.status(500).send('Error al obtener documentos: ' + error.message);
    }
  });
  

// iniciar el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});
