const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
}
const mysql = require('mysql2')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values('Roger');`
connection.query(sql, (err, results) => {
    if (err) {
        console.error('Erro ao executar a query:', err)
        return
    }
    console.log('Query executada com sucesso:', results)
})
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>O JS tá na area</h1>')
})

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
})