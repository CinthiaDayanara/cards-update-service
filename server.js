require("dotenv").config();
const express = require("express");
const cardsRoutes = require("./src/routes/cardsUpdateRoutes");
const sequelize = require("./src/config/database");

const app = express();
app.use(express.json());

app.use("/cards", cardsRoutes);

const PORT = process.env.PORT || 5007;
sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Cards Update Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
