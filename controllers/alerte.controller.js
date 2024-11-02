const Alerte = require('../models/alerte.model');

exports.createAlerte = async (req, res) => {
  try {
    const { type_alerte, description, horodatage, utilisateur_id } = req.body;
    const newAlerte = await Alerte.create({ type_alerte, description, horodatage, utilisateur_id });
    res.status(201).send(newAlerte);
  } catch (err) {
    res.status(500).send('Erreur lors de la création de l\'alerte');
  }
};

exports.getAllAlertes = async (req, res) => {
  try {
    const alertes = await Alerte.findAll();
    res.status(200).send(alertes);
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des alertes');
  }
};
