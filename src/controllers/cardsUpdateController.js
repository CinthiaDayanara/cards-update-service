const Card = require("../models/Card");

// Controlador para obtener todas las tarjetas
const getCards = async (req, res) => {
  try {
    const cards = await Card.findAll();
    return res.status(200).json(cards);
  } catch (error) {
    console.error("Error al obtener las tarjetas:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Controlador para actualizar una tarjeta
const updateCard = async (req, res) => {
  const { id } = req.params;  // ID de la tarjeta a actualizar
  const { titulo, descripcion, fecha_vencimiento, lista_id } = req.body;  // Nuevos datos de la tarjeta

  try {
    // Buscar la tarjeta por ID
    const card = await Card.findByPk(id);
    
    if (!card) {
      return res.status(404).json({ error: "Tarjeta no encontrada" });
    }

    // Actualizar los valores de la tarjeta
    card.titulo = titulo || card.titulo;
    card.descripcion = descripcion || card.descripcion;
    card.fecha_vencimiento = fecha_vencimiento || card.fecha_vencimiento;
    card.lista_id = lista_id || card.lista_id;

    await card.save();  // Guardar los cambios

    return res.status(200).json(card);  // Responder con la tarjeta actualizada
  } catch (error) {
    console.error("Error al actualizar la tarjeta:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { updateCard, getCards };
