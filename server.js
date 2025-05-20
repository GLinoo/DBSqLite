const express = require('express')
const { conectar } = require('./pool')
const app = express()
const PORT = 3000

let db


app.use(express.json())


app.post('/', async (req,res) =>{
    const {titulo,descricao,id_user} = req.body
    const dataHorario = new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo"
      });
   await db.run(`INSERT INTO tarefas(titulo,descricao,data_criacao,id_usuario) VALUES(?,?,?,?)`
      [titulo,descricao,dataHorario,id_user]  
    )
})

app.get('/', (req,res) => {
    res.send(db.all('SELECT * FROM tarefas', (err, data) => {
        console.log(data)
        console.log(err)
    }))
})

async function startServer() {
    db = await conectar()
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })
}

startServer()



