# Tesla Theater Pro

Une interface optimisée pour le navigateur Tesla, permettant de lancer vos services de streaming préférés en plein écran.

## 🚀 Lancement avec Docker

Vous pouvez facilement lancer cette application dans un conteneur Docker.

### 1. Prérequis
- [Docker](https://docs.docker.com/get-docker/) installé sur votre machine.

### 2. Construction de l'image
Ouvrez un terminal à la racine du projet et exécutez :

```bash
docker build -t tesla-theater-pro .
```

### 3. Lancement du conteneur
Une fois l'image construite, lancez le conteneur :

```bash
docker run -d -p 3000:3000 --name tesla-theater tesla-theater-pro
```

L'application sera alors accessible sur `http://localhost:3000`.

---

## 🛠️ Développement Local

Si vous souhaitez lancer l'application sans Docker :

1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

### 4. Publication sur un Registry (Docker Hub / GHCR)

Pour partager votre image, vous pouvez la pousser sur un registre :

```bash
# Exemple pour GitHub Container Registry (GHCR)
docker tag tesla-theater-pro ghcr.io/votre-username/tesla-theater-pro:latest
docker push ghcr.io/votre-username/tesla-theater-pro:latest
```

## 🤖 Automatisation avec GitHub Actions

Ce projet est configuré pour construire et pousser automatiquement une image Docker vers **GitHub Container Registry (GHCR)** à chaque création de **Release** sur GitHub.

### Configuration requise :
1. Poussez votre code sur un dépôt GitHub.
2. Allez dans **Settings > Actions > General** et assurez-vous que `Workflow permissions` est réglé sur `Read and write permissions`.
3. Créez une nouvelle **Release** (ex: v1.0.0).
4. Le workflow `.github/workflows/docker-publish.yml` se déclenchera automatiquement.

L'image sera disponible sous : `ghcr.io/votre-username/votre-repo:v1.0.0`

---

## 📱 Utilisation dans la Tesla

1. Connectez votre Tesla au Wi-Fi ou au partage de connexion.
2. Ouvrez le navigateur web.
3. Entrez l'URL de votre instance (ex: `http://votre-ip:3000`).
4. Utilisez les boutons de lancement rapide ou le bouton "Plein écran" (icône en haut à droite de chaque carte) pour une immersion totale.
