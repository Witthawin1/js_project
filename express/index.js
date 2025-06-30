import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql2/promise'
import { Client } from 'pg';
const cors = require('cors')

const app = express()

const port = 8080

app.use(bodyParser.json())
app.use(cors)
let users = []
let counter = 1

let conn = null

const initPostgres = async () => {
    conn = new Client({
        host: 'localhost',
        user: 'postgres', 
        password: 'w123i456n7890',
        database: 'mydatabase',
        port: 5432 
    });
    await conn.connect();
}

app.get('/usersdb', async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM books');
        res.json(result.rows); 
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Error fetching data' });
    } 
});

app.get('/users',(req,res) => {
    const filterUsers = users.map(user => {
        return {
            id : user.id,
            name : user.name,
            price : user.price
        }
    })
    res.json(filterUsers)
})

app.get('/users/:id',(req,res) => {
    let id = req.params.id

    let selectIndex = users.findIndex(user => user.id == id)
    const user = users[selectIndex]
    res.json(user)
})

// path = Post /users
app.post('/users',(req,res) => {
    let user = req.body
    user.id = counter++
    users.push(user)
    res.json({
        message:'add OK',
        user : user
    })
})

app.post('/usersdb', async (req,res) => {
    let user = req.body
        try {
       const results = await conn.query('INSERT INTO public.books( name, author, description, price) VALUES ($1,$2, $3,$4);',
        [user.name,user.author,user.description,user.price])

        res.json({
            message: 'insert ok',
            data: results.rows[0] 
        });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ message: 'Failed to insert user', error: error.message });
    }
})

//path = Put /users/:id
app.put('/users/:id', (req,res) => {
    let id = req.params.id
    let userIndex = users.findIndex(user => user.id == id)
    users[userIndex] = req.body
    res.json({
        message : 'update completed',
        data : users[userIndex]
    })
})

//path = Delete /users/:id
app.delete('/users/:id',(req,res) => {
    const deleteId = req.params.id
    let selectIndex = users.findIndex(user => user.id = deleteId)

    // delete users[selectIndex]
    users.splice(deleteId,1)
    res.json({
        message : 'delete completed',
        indexDeleted : selectIndex
    })
})

app.listen(port, async (req,res) => {
    await initPostgres()
})