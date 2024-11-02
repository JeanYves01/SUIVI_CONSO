const Capteur = require('../models/sensor.model');

exports.createCapteur = async (req, res) => {
  try {
    const { type_capteur } = req.body;
    const newCapteur = await Capteur.create({ type_capteur });
    res.status(201).send(newCapteur);
  } catch (err) {
    res.status(500).send('Erreur lors de la création du capteur');
  }
};

exports.getAllCapteurs = async (req, res) => {
  try {
    const capteurs = await Capteur.findAll();
    res.status(200).send(capteurs);
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des capteurs');
  }
};
