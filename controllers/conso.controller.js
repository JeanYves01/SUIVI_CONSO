const Consommation = require('../models/conso.model');

exports.createConsommation = async (req, res) => {
  try {
    const { val_conso, horodatage, capteur_idCapteur, utilisateur_id } = req.body;
    const newConsommation = await Consommation.create({ val_conso, horodatage, capteur_idCapteur, utilisateur_id });
    res.status(201).send(newConsommation);
  } catch (err) {
    res.status(500).send('Erreur lors de la création de la consommation');
  }
};

exports.getAllConsommations = async (req, res) => {
  try {
    const consommations = await Consommation.findAll();
    res.status(200).send(consommations);
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des consommations');
  }
};
