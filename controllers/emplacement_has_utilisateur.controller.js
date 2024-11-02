const EmplacementHasUtilisateur = require('../models/emplacement_has_utilisateur.model');

exports.createLink = async (req, res) => {
  try {
    const { Emplacement_idEmplacement, Utilisateur_id } = req.body;
    const newLink = await EmplacementHasUtilisateur.create({ Emplacement_idEmplacement, Utilisateur_id });
    res.status(201).send(newLink);
  } catch (err) {
    res.status(500).send('Erreur lors de la création du lien');
  }
};

exports.getAllLinks = async (req, res) => {
  try {
    const links = await EmplacementHasUtilisateur.findAll();
    res.status(200).send(links);
  } catch (err) {
    res.status(500).send('Erreur lors de la récupération des liens');
  }
};
