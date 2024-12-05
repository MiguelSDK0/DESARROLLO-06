const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/tienda')
  .then(() => console.log('Conectado a la base de datos "tienda"'))
  .catch(err => console.error('Error:', err));

app.use(express.json());

const ArticuloSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
});
const Articulo = mongoose.model('Articulo', ArticuloSchema);

app.put('/articulo/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;

  if (!nombre || precio == null) {
    return res.status(400).send('nombre y precio son obligatorios');
  }

  try {
    const articuloActualizado = await Articulo.findByIdAndUpdate(
      id,
      { nombre, precio },
      { new: true, upsert: true } // upsert: true crea el articulo si no existe
    );
    res.json(articuloActualizado);
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.delete('/articulo/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const articuloEliminado = await Articulo.findByIdAndDelete(id);
    if (!articuloEliminado) return res.status(404).send('Articulo no encontrado');
    res.json({ message: 'Articulo eliminado' });
  } catch (err) {
    res.status(500).send('Error');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
