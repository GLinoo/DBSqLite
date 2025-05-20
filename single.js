const sqlite = require('sqlite3')

const db = new sqlite.Database('teste.db' , (err) => {
    console.log(err)
})

//realizar operações SQL
db.exec(`CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    data_nascimento TEXT
    )`)

db.run(`INSERT INTO usuarios(nome,email,data_nascimento) VALUES (?,?,?)`, 
    ['Northon', 'northon@gmail.com', '16/03/2008'], 
    (err, data) => {
    console.log(data)
    console.log(err)
})

db.all('SELECT * FROM usuarios', (err, data) =>{
    console.log(data)
    console.log(err)
})

db.close((err) => {
    console.log(err)
})