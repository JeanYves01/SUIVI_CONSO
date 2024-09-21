const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const saltRounds = 10;

exports.createUser = async (req, res) => {
  try {
    console.log('req.body ❤️😍 ', req.body);  // Vérifiez les données reçues depuis le frontend

    const { nomComplet, email, motDePasse } = req.body;

    if (!nomComplet || !email || !motDePasse ) {
      return res.status(400).send('Tous les champs sont requis');
    }

    console.log('email ❤️😍 ', email);  // Vérifiez la valeur de "email" ici
    const user = await User.findOne({ where: { email } });
    console.log('user ❤️😍 ', user);  // Vérifiez la valeur de "email" ici

    if (!user) {
      const hashPassword = await bcrypt.hash(motDePasse, saltRounds);
      const newUser = await User.create({ nomComplet, email, motDePasse: hashPassword });

      console.log('Nouvel utilisateur créé: ', newUser);
      return res.status(201).send('Utilisateur créé avec succès');
    } else {
      return res.status(409).send('Cet utilisateur existe déjà');
    }
  } catch (err) {
    console.error('Erreur lors du traitement de la demande:', err);
    return res.status(500).send('Erreur du serveur');
  }
};

exports.userLogin = async (req, res) => {

  const { email, motDePasse } = req.body;

  try {

    const user = await User.findOne({ where: { email } });

    // Vérifier si l'utilisateur existe
    if (!user) {
      return res.status(404).send('Utilisateur introuvable');
    }

    // // Comparer le mot de passe fourni avec le mot de passe hashé stocké
    const match = await bcrypt.compare(motDePasse, user.motDePasse);

    // // Si les mots de passe ne correspondent pas
    if (!match) {
      return res.status(401).send('Login ou mot de passe incorrecte');
    }
    res.status(201).send('Authentification réussie');
  } catch (err) {
    res.status(500).send(err);
  }
};
