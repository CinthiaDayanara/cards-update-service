const express = require("express");
const { updateCard, getCards } = require("../controllers/cardsController");
const router = express.Router();

// Ruta para obtener todas las tarjetas
router.get("/", getCards);

// Ruta para actualizar una tarjeta
router.put("/:id", updateCard);  // Usamos PUT para actualizar la tarjeta por ID

module.exports = router;
