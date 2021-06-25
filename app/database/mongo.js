module.exports = () => {

    const mongoose = require('mongoose')
    const env = require('../config/environment')
    const uriConnection = env.mongoURI
    mongoose.connect(
        uriConnection,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        }
    );

    mongoose.Promisse = global.Promise;

    mongoose.connection.on('connected', (error) => {
        if (error) {
            console.log('Erro na conexão com o banco de dados')
            console.log(error)
        }
        console.log('Conexão com o banco de dados efetuada com sucesso')
    })

}