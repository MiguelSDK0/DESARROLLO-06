const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const conec = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tienda'
});

conec.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexion exitosa');
});

// GET: Obtener todos los productos
app.get('/productos', (req, res) => {
    const query = 'select * from productos';
    conec.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener los productos:', err);
            res.status(500).json({ error: 'Error al obtener los productos'});
            return;
        }
        res.status(200).json(results);
    });
});

// POST: Agregar un nuevo producto
app.post('/productos', (req, res) => {
    const { nombre, precio } = req.body;
    const query = 'insert into productos (nombre, precio) values (?, ?)';
    conec.query(query, [nombre, precio], (err, results) => {
        if (err) {
            console.error('Error al agregar el producto:', err);
            res.status(500).json({ error: 'Error al agregar el producto'});
            return;
        }
        res.status(201).json({ id: results.insertId, nombre, precio });
    });
});

// PUT: Actualizar un producto
app.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, precio } = req.body;
    const query = 'update productos set nombre = ?, precio = ? where id = ?';
    conec.query(query, [nombre, precio, id], (err, results) => {
        if (err) {
            console.error('Error al actualizar el producto:', err);
            res.status(500).json({ error: 'Error al actualizar el producto'});
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ mensaje: 'Producto no encontrado'});
        } else {
            res.status(200).json({ id, nombre, precio });
        }
    });
});

// DELETE: Eliminar un producto
app.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const query = 'delete from productos where id = ?';
    conec.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al eliminar el producto:', err);
            res.status(500).json({ error: 'Error al eliminar el producto'});
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json({ mensaje: 'Producto no encontrado'});
        } else {
            res.status(200).json({ mensaje: 'Producto eliminado correctamente'});
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
