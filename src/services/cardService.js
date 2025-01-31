const Card = require("../models/Card");

const updateCard = async (id, data) => {
  const card = await Card.findByPk(id);
  if (!card) throw new Error("Tarjeta no encontrada.");

  Object.assign(card, data); // Actualiza solo los campos enviados
  await card.save();

  return card;
};

module.exports = { updateCard };
