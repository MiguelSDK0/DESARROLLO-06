const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Datos del usuario
const user = {
    id: 1,
    username: 'Cesar Chambi Loaiza',
    email: 'CesarChambi@ucsm.edu.pe',
    private: {
        notas: 20,
        puesto: 50
    }
};

// Middleware para verificar token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        next();
    } else {
        res.status(403).json({ message: 'Token requerido' });
    }
}

// Login para obtener token con datos basicos
app.post('/login', (req, res) => {
    const basicInfo = {
        id: user.id,
        username: user.username,
        email: user.email
    };
    jwt.sign({ user: basicInfo }, 'secretkey', { expiresIn: '5m' }, (err, token) => {
        if (err) res.status(500).json({ error: 'Error en token' });
        else res.json({ token });
    });
});

// Login para obtener token con datos completos
app.post('/login/private', (req, res) => {
    jwt.sign({ user }, 'secretkey', { expiresIn: '5m' }, (err, token) => {
        if (err) res.status(500).json({ error: 'Error en token' });
        else res.json({ token });
    });
});

// Ruta protegida para datos basicos
app.get('/api/user', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) res.sendStatus(403);
        else {
            const { id, username, email } = authData.user;
            res.json({
                message: 'Datos basicos',
                user: { id, username, email }
            });
        }
    });
});

// Ruta protegida para datos completos
app.get('/api/user/private', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) res.sendStatus(403);
        else {
            res.json({
                message: 'Datos completos',
                user: authData.user
            });
        }
    });
});

app.listen(5000, () => {
    console.log('Servidor en http://localhost:5000');
});
