var app = require("./config/server")

app.listen(3000, ()=>{
    console.log("rodando na 3000")
})

app.get("/",(req,res)=>{
    res.send("recebendo no /")
})

contatos = [{
    id: "123",
    nome: "diogo paza",
    email: "diogo@uol.com"
  },
  {
    id: "456",
    nome: "joao",
    email: "joao@uol.com"
  },
  {
    id: "222",
    nome: "Augustinho",
    email: "augusto@terra.com.br"
  }
  ]