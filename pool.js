const sqlite3 = require('sqlite')
const { open } = require('sqlite')

async function conectar() {
    const db = await open({
        filename: './teste.db',
        driver: sqlite3.Database
    })

//     await db.exec(`CREATE TABLE IF NOT EXISTS usuarios(
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nome TEXT NOT NULL,
//         email TEXT UNIQUE NOT NULL,
//         data_nascimento TEXT
//         )`)
    
//     await db.run(`INSERT INTO usuarios(nome,email,data_nascimento) VALUES (?,?,?)`, 
//         ['Northon2', 'Northon2@gmail.com', '16/03/2008'], 
//         (err, data) => {
//         console.log(data)
//         console.log(err)
//     })
    
//    await db.all('SELECT * FROM usuarios', (err, data) =>{
//         console.log(data)
//         console.log(err)
//     })

// await db.exec(`CREATE TABLE IF NOT EXISTS tarefas (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     titulo TEXT NOT NULL,
//     descricao TEXT,
//     data_criacao TEXT,
//     id_usuario INTEGER,
//     FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
// )`)

return db
}
conectar()

module.exports = { conectar }


