const Joi = require("joi");

const cardUpdateSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "number.base": "El ID debe ser un número entero.",
    "any.required": "El ID es obligatorio."
  }),
  title: Joi.string().min(3).max(255).optional().messages({
    "string.min": "El título debe tener al menos 3 caracteres.",
    "string.max": "El título no puede exceder los 255 caracteres."
  }),
  description: Joi.string().optional(),
  due_date: Joi.date().optional().messages({
    "date.base": "La fecha de vencimiento debe ser una fecha válida."
  })
});

const validateCardUpdate = (data) => {
  const { error } = cardUpdateSchema.validate(data, { abortEarly: false });
  if (error) throw new Error(error.details.map(err => err.message).join(", "));
};

module.exports = { validateCardUpdate };
