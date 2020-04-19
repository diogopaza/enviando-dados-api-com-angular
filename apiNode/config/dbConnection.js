
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cadastro-contatos',
    { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('were connected!')
});
module.exports = mongoose;
