const express = require("express");
const { updateCard } = require("../controllers/cardsUpdateController");

const router = express.Router();

router.put("/:id", updateCard);

module.exports = router;
