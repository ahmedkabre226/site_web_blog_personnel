# Portfolio Ismaël KELA KABRE

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

Portfolio personnel de Ismaël KELA KABRE, développeur de logiciels et administrateur réseaux et systèmes.

## 📋 Description

Ce projet est un portfolio personnel responsive développé en HTML5, CSS3 et JavaScript. Il présente mes compétences, mes réalisations et permet aux visiteurs de me contacter directement via un formulaire intégré.

## 🚀 Fonctionnalités

- **Design responsive** : Compatible avec tous les appareils (mobile, tablette, desktop)
- **Navigation fluide** : Scroll smooth et navigation par ancres
- **Animations interactives** : Effets au scroll, animations de compétences, effets de survol
- **Formulaire de contact** : Validation en temps réel et simulation d'envoi
- **Section portfolio** : Présentation de mes projets avec badges technologiques
- **Optimisation SEO** : Balises meta optimisées pour les moteurs de recherche
- **Performance** : Code optimisé et chargement rapide

## 🛠️ Technologies utilisées

- **Frontend** :
  - HTML5
  - CSS3 (avec variables CSS personnalisées)
  - JavaScript (ES6+)
  - Bootstrap 5.3.8

- **Bibliothèques externes** :
  - Font Awesome 6.0.0 (icônes)
  - Google Fonts (typographie)

- **Outils de développement** :
  - VS Code
  - Live Server (extension VS Code)

## 📁 Structure du projet

```
portfolio-ismail-kela-kabre/
├── index.html              # Page principale
├── css/
│   └── master.css          # Feuilles de style principales
├── js/
│   └── main.js             # Scripts JavaScript
├── images/                 # Images du portfolio
│   ├── photo.jpg           # Photo de profil
│   ├── tableaudebord.jpg   # Capture projet 1
│   ├── appareilsconnectes.png  # Capture projet 2
│   └── gpsserver.jpg       # Capture projet 3
└── README.md               # Documentation du projet
```

## 🎯 Sections du portfolio

1. **Accueil** : Présentation personnelle avec photo
2. **À propos** : Parcours académique et informations personnelles
3. **Compétences** : Barres de progression pour les compétences techniques
4. **Portfolio** : Présentation des projets réalisés
5. **Contact** : Formulaire de contact avec validation

## 🚀 Installation et utilisation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Extension Live Server pour VS Code (recommandée)

### Installation

1. **Cloner le repository** (si applicable) :
   ```bash
   git clone [url-du-repository]
   cd portfolio-ismail-kela-kabre
   ```

2. **Ouverture directe** :
   - Téléchargez ou copiez les fichiers dans un dossier local
   - Ouvrez le dossier dans VS Code

### Lancement

#### Méthode 1 : Avec Live Server (recommandée)
1. Ouvrez VS Code
2. Ouvrez le dossier du projet
3. Cliquez droit sur `index.html`
4. Sélectionnez "Open with Live Server"
5. Le portfolio s'ouvrira automatiquement dans votre navigateur

#### Méthode 2 : Ouverture directe
1. Ouvrez le fichier `index.html` dans votre navigateur
2. **Note** : Certaines fonctionnalités peuvent ne pas fonctionner correctement sans serveur local

## 🎨 Personnalisation

### Modifier les informations personnelles

Dans `index.html` :
- Ligne 6 : Nom dans la balise `<title>`
- Ligne 15 : Nom dans la navbar
- Ligne 32-34 : Informations dans la section hero
- Section "À propos" : Modifier les informations personnelles

### Modifier les compétences

Dans `index.html`, section "Compétences" :
```html
<div class="skill-item">
    <div class="d-flex justify-content-between">
        <span class="skill-name">Nom de la compétence</span>
        <span>Pourcentage%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-level" style="width: Pourcentage%"></div>
    </div>
</div>
```

### Ajouter un nouveau projet

Dans `index.html`, section "Portfolio" :
```html
<div class="col-md-6 col-lg-4">
    <div class="card project-card">
        <img src="images/nom-image.jpg" class="card-img-top" alt="Description">
        <div class="card-body">
            <h5 class="card-title">Titre du projet</h5>
            <p class="card-text">Description du projet</p>
            <div class="d-flex flex-wrap gap-1 mb-3">
                <span class="badge bg-primary">Technologie 1</span>
                <span class="badge bg-secondary">Technologie 2</span>
            </div>
            <a href="lien-du-projet" class="btn btn-outline-primary btn-sm">Voir les détails</a>
        </div>
    </div>
</div>
```

### Modifier les couleurs

Dans `css/master.css`, section "Variables CSS" :
```css
:root {
  --primary-color: #2c3e50;    /* Couleur principale */
  --secondary-color: #3498db;  /* Couleur secondaire */
  --accent-color: #e74c3c;     /* Couleur d'accent */
  --light-color: #ecf0f1;      /* Couleur claire */
  --dark-color: #2c3e50;       /* Couleur sombre */
  --text-color: #333;          /* Couleur du texte */
  --text-light: #7f8c8d;       /* Couleur du texte secondaire */
}
```

## 📱 Responsive Design

Le portfolio est entièrement responsive grâce à Bootstrap et aux media queries personnalisées :

- **Desktop** : > 992px
- **Tablette** : 768px - 992px
- **Mobile** : < 768px

## 🔧 Scripts JavaScript

### Fonctionnalités principales

- **Navigation** : Scroll fluide, mise à jour des liens actifs
- **Animations** : Intersection Observer pour les animations au scroll
- **Formulaire** : Validation en temps réel, simulation d'envoi
- **Images** : Gestion du chargement des images
- **UI/UX** : Bouton scroll-to-top, notifications, effets de survol

### Fonctions exportées

```javascript
window.Portfolio = {
    showNotification,
    validateForm,
    initSkillBars
};
```

## 🌐 Déploiement

### GitHub Pages

1. Poussez votre code sur GitHub
2. Allez dans Settings > Pages
3. Sélectionnez la branche principale
4. Le portfolio sera accessible à l'adresse `https://votre-username.github.io/nom-du-repo`

### Autres plateformes

Le portfolio peut être déployé sur :
- Netlify
- Vercel
- Firebase Hosting
- Tout serveur web statique

## 📞 Contact

**Ismaël KELA KABRE**
- Email : ahmedkabre01@gmail.com
- Téléphone : +243 85 324 2111
- LinkedIn : [ismaël-kela-kabre](https://www.linkedin.com/in/isma%C3%ABl-kela-kabre-107224205/)
- GitHub : [ahmedkabre226](https://github.com/ahmedkabre226)
- Twitter : [@kabre_ahmed](https://x.com/kabre_ahmed)

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- [Bootstrap](https://getbootstrap.com/) pour le framework CSS
- [Font Awesome](https://fontawesome.com/) pour les icônes
- [Google Fonts](https://fonts.google.com/) pour la typographie
- Communauté open source pour l'inspiration et les ressources

---

⭐ **N'hésitez pas à donner une étoile si ce projet vous plaît !**
