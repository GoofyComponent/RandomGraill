# RandomGraill

RandomGraill est une application qui vous permet de rechercher des restaurants autour d'une adresse ou de votre position actuelle, et de choisir de manière aléatoire où manger grâce à une roue interactive.

## Fonctionnalités

- **Recherche par adresse** : Entrez une adresse et obtenez une liste de restaurants situés à proximité.
- **Recherche par position actuelle** : Utilisez la géolocalisation pour trouver les restaurants proches de vous.
- **Roue de décision** : Créez une roue qui sélectionnera de manière aléatoire un restaurant parmi ceux proposés.

## Installation

<!-- 1. Créez un fichier `firebaseCredentials.ts` a la racine du projet et ajoutez-y la configuration du projet Firebase. -->

```typescript
export const firebaseConfig = {
apiKey
authDomain
projectId
storageBucket
messagingSenderId
appId
};

export const functionsURL = '';

export const stripePublicKey = '';

export const DB_NAME = null;
```

2. Installez les dépendances du projet

```bash
npm install
```

3. Lancez le serveur de développement

   ```bash
    npm run dev
   ```

## Conventions

### Commits

Nous utilisont commitlint, les messages de commit doivent donc suivre la convention suivante :

```sh
type(scope?): subject  #scope est facultatif; des scope simultanés sont possible (pour les delimiter : "/", "\" et ",")
```

La liste des types disponibles est :

- `build`: Changements qui affectent le système de construction ou les dépendances externes (exemples de champs d'application : gulp, broccoli, npm)
- `ci`: Changements dans nos fichiers de configuration et scripts CI (exemples : Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Changements dans la documentation uniquement
- `feat`: Une nouvelle fonctionnalité
- `fix`: Correction d'un bogue
- `perf`: une modification du code qui améliore les performances
- `refactor`: une modification du code qui ne corrige pas de bogue et n'ajoute pas de fonctionnalité
- `style`: Changements qui n'affectent pas la signification du code (espaces blancs, formatage, points-virgules manquants, etc.)
- `test`: Ajout de tests manquants ou correction de tests existants
- `wip`: Du code en cours de développement
- `chore`
- `revert`

## Déploiement

Le déploiement de l'application se fait automatiquement à chaque push sur la branche `prod` via GitHub Actions.
Les clés secrètes necessaires au déploiement sont :

- `FIREBASE_SERVICE_ACCOUNT_WRPLNKR` : La valeur de la clé de service Firebase (via Google Cloud Platform)

Les fichiers de configuration Firebase necessaires au déploiement sont :

- `prod.firebase.json`
- `prod.firebaserc`

### Example de fichier `prod.firebase.json`

```json
{
  "hosting": [
    {
      "site": "hosting_target",
      "source": ".",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "frameworksBackend": {
        "region": "europe-west1"
      }
    },
    ...
  ]
}
```

### Exemple de fichier `prod.firebaserc`

```json
{
  "projects": {
    "default": "<project-id>"
  },
  "targets": {
    "<project-id>": {
      "hosting": {
        "<target>": ["<site-name>"]
      }
    }
  }
}
```

## Changelogs

<details>
<summary>⚠️<b>TITLE</b> YYYY-MM-DD</summary>

This is a text.

</details>

.
