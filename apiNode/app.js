var app = require("./config/server")
var mongoose = require("./config/dbConnection")
var cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

var contatos;
var contatoSchema = mongoose.Schema({
  codigo: String,
  nome: String,
  email: String
})
schemaContato = mongoose.model('contatos', contatoSchema)

app.listen(3000, () => {
  console.log("rodando na 3000")
})

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  getContatos(res)
})
async function getContatos(res) {
  let result
  schemaContato.find({})
    .then((data) => {
      if (data != undefined) {
        res.json(data)
      }
    })
    .catch((err) => {
      console.log("erro", err)
    })
  return result
}
app.post("/add", (req, res) => {
  novoContato = req.body
  contato = new schemaContato(novoContato)
  contato.save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ "status": "Nao foi possivel cadastrar o contato" });
      return
    })   
})

