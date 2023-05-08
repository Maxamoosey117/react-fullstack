const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const db = mysql.createConnection({
    host: 'jenson-mysql.c8qwuofu4md8.us-east-1.rds.amazonaws.com',
    user: 'kennyjay',
    password: 'mysqluser',
    database: 'mad_factions_sp23'
});

function dbConnect() {
    console.log('Connecting to factions database');
    db.connect((err) => {
        if (err) {
            throw err;
        }
        console.log('Connected to factions database');
    });
}

// Create a faction
app.post('/factions', (req, res) => {
    const { faction_name, leader, members } = req.body;
    const sql = `INSERT INTO factionsdata (faction_name, leader, members) VALUES (?, ?, ?)`;
    db.query(sql, [faction_name, leader, members], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

// Get all factions
app.get('/factions', (req, res) => {
    const sql = `SELECT * FROM factionsdata`;
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

// Get a specific faction
app.get('/factions/:id', (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM factionsdata WHERE id = ?`;
    db.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.length === 0) {
            res.status(404).send('Faction not found');
        } else {
            res.send(results[0]);
        }
    });
});

// Update a faction
app.put('/factions/:id', (req, res) => {
    const { id } = req.params;
    const { faction_name, leader, members } = req.body;
    const sql = `UPDATE factionsdata SET faction_name = ?, leader = ?, members = ? WHERE id = ?`;
    db.query(sql, [faction_name, leader, members, id], (err, result) => {
        if (err) {
            console.log("Error in database query: ");
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

// Delete a faction
app.delete('/factions/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM factionsdata WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

dbConnect();
app.listen(3003, () => {
    console.log('Server started on port 3003');
});