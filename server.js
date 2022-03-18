const {app} = require("./app")

//IMPORTAR DATABASE
const {sequelize} = require("./Util/database")

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
   


//LISTEN 
app.listen(4002, () => {
	console.log('Express app running');
});