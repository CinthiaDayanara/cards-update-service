const { updateCard } = require("../services/cardService");
const { validateCardUpdate } = require("../utils/validators");

exports.updateCard = async (req, res) => {
  try {
    const { id } = req.params;
    validateCardUpdate({ id, ...req.body });

    const updatedCard = await updateCard(id, req.body);
    res.status(200).json({ message: "Tarjeta actualizada", card: updatedCard });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
