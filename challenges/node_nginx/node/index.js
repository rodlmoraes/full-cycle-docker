const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodenginxchallengedb',
}
const mysql = require('mysql2')

const names = [
    'Kai',
    'Eliana',
    'Jayden',
    'Ezra',
    'Luca',
    'Rowan',
    'Nova',
    'Amara',
    'Aaliyah',
    'Finn',
    'Zion',
    'Maeve',
    'Kayden',
    'Mia',
    'Mila',
    'Aurora',
    'Alina',
    'Remi',
    'Amaya',
    'Ari',
    'Blake',
    'Elliot',
    'Ivy',
    'Quinn',
    'Leo',
    'Arthur',
    'Rachel',
    'River',
    'Axel',
    'Aria',
    'Alex',
    'Molly',
    'Jude',
    'Elias',
    'Milo',
    'Malachi',
    'Charlie',
    'Ira',
    'Atlas',
    'Evelyn',
]

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function insertPerson(res, connection) {
    let name = names[randomInt(names.length - 1)]
    connection.query(`INSERT INTO people(name) values('${name}');`, (err, results) => {
        if (err) {
            console.error('Error on insertPerson:', err)
            res.status(500).send('Error inserting person')
            return
        }
    
        console.log('Person inserted successfully:', results)
    })
}

function getPeople(res, connection) {
    connection.query(`SELECT id, name FROM people;`, (err, results) => {
        if (err) {
            console.error('Error on getPeople:', err)
            res.status(500).send('Error retrieving person')
            return
        }

        res.send(`
            <h1>Full Cycle Rocks!</h1>
            ${peopleTable(results)}
        `);
    })
}

function peopleTable(people) {
    const tableRows = people.map((person) => `
        <tr>
            <td>${person.id}</td>
            <td>${person.name}</td>
        </tr>
    `).join('')
    return `
      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>${tableRows}
      </table>`
}

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    insertPerson(res, connection)
    getPeople(res, connection)
    connection.end()
})

app.listen(port, () =>{
    console.log('Running on port ' + port)
})