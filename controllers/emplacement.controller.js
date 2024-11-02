const Emplacement = require('../models/emplacement.model');

exports.createEmplacement = async (req, res) => {
  try {
    const { adresse, capteur_idCapteur } = req.body;
    const newEmplacement = await Emplacement.create({ adresse, capteur_idCapteur });
    res.status(201).send(newEmplacement);
  } catch (err) {
    res.status(500).send('Erreur lors de la création de l\'emplacement');
  }
};

exports.getAllEmplacements = async (req, res) => {
  try {
    const emplacements = await Emplacement.findAll();
    res.status(200).send(emplacements);
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des emplacements');
  }
};
