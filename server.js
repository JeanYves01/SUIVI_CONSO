const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const capteurRoutes = require('./routes/sensor.route');
const emplacementRoutes = require('./routes/emplacement.route');
const consommationRoutes = require('./routes/conso.route');
const alerteRoutes = require('./routes/alerte.route');
const emplacementUtilisateurRoutes = require('./routes/emplacement_has_utilisateur.route');
const sequelize = require('./config/db.config');

// Import des modèles pour établir les relations
const User = require('./models/user.model');
const Capteur = require('./models/sensor.model');
const Emplacement = require('./models/emplacement.model');
const Consommation = require('./models/conso.model');
const Alerte = require('./models/alerte.model');
const EmplacementHasUtilisateur = require('./models/emplacement_has_utilisateur.model');

// Synchronisation des relations
User.hasMany(Consommation, { foreignKey: 'utilisateur_id' });
Consommation.belongsTo(User, { foreignKey: 'utilisateur_id' });

Capteur.hasMany(Consommation, { foreignKey: 'capteur_idCapteur' });
Consommation.belongsTo(Capteur, { foreignKey: 'capteur_idCapteur' });

User.hasMany(Alerte, { foreignKey: 'utilisateur_id' });
Alerte.belongsTo(User, { foreignKey: 'utilisateur_id' });

Capteur.hasMany(Emplacement, { foreignKey: 'capteur_idCapteur' });
Emplacement.belongsTo(Capteur, { foreignKey: 'capteur_idCapteur' });

Emplacement.belongsToMany(User, { 
  through: EmplacementHasUtilisateur, 
  foreignKey: 'Emplacement_idEmplacement', 
  otherKey: 'Utilisateur_id',
  uniqueKey: 'Emplacement_Utilisateur_Unique' // Nom personnalisé de la contrainte unique
});
User.belongsToMany(Emplacement, { 
  through: EmplacementHasUtilisateur, 
  foreignKey: 'Utilisateur_id', 
  otherKey: 'Emplacement_idEmplacement',
  uniqueKey: 'Emplacement_Utilisateur_Unique' // Nom personnalisé de la contrainte unique
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes pour chaque entité
app.use('/api/users', userRoutes);
app.use('/api/sensor', capteurRoutes);
app.use('/api/emplacements', emplacementRoutes);
app.use('/api/conso', consommationRoutes);
app.use('/api/alertes', alerteRoutes);
app.use('/api/emplacement-utilisateurs', emplacementUtilisateurRoutes);

// Synchronisation de la base de données
sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
