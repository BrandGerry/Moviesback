const express = require('express');
//IMPORTAR DATABASE
const {sequelize} = require("./Util/database")

//INICIALIZAR APP EN EXPRESS
const app = express();
app.use(express.json());

//Sequilize autenticador
sequelize
   .authenticate()
   .then(() => console.log("Database authenticated"))
   .catch(error => console.log(error))

//sequilize para sincronizar nuestros model(tablas)
sequelize
   .sync()
   .then(() => console.log("Database synced"))
   .catch(error => console.log(error))
   
   //app.use(cors());
//LISTEN 
app.listen(4002, () => {
	console.log('Express app running');
});