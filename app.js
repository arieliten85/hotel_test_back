const express = require("express");
const routes = require("./routes/index.js");
const mysqlConfig = require("./config/mysqlConfig");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

//Sincronización del modelo con la base de datos
const PORT = process.env.PORT || 3000;
mysqlConfig.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
