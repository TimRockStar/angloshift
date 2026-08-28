[README.md](https://github.com/user-attachments/files/31567287/README.md)
# AngloShift 🍁

Un tuteur d'anglais propulsé par l'IA, pensé pour les francophones qui doivent parler anglais au travail (entrevues d'embauche, usine, collègues, superviseur) — et pour la vie de tous les jours dans un contexte anglophone (911, rendez-vous médical, propriétaire).

Projet personnel né du besoin de pratiquer l'anglais avant un déménagement au Nouveau-Brunswick.

## Fonctionnalités

- 8 mises en situation réalistes (entrevue d'usine, sécurité, collègue, superviseur, conversation libre, 911, rendez-vous médical, propriétaire)
- Corrections de grammaire et de tournures de phrase en français, mises en évidence
- Traduction française de chaque réponse (au clic, pour ne pas gâcher l'effort de compréhension)
- Voix anglaise (synthèse vocale du navigateur) qui répète la bonne prononciation après une correction
- Mode examen blanc chronométré (entrevue de ~8 minutes) avec évaluation de performance à la fin
- Suivi des erreurs récurrentes dans le temps
- Avatar (tuteur ou tutrice, au choix)
- Reconnaissance vocale pour répondre à voix haute (expérimental)

## Comment l'utiliser

1. Ouvre `index.html` dans un navigateur (Chrome recommandé — meilleures voix anglaises).
2. Crée une clé API **gratuite** sur [console.groq.com](https://console.groq.com/keys).
3. Clique sur ⚙ **Clé API** en haut de l'appli et colle ta clé (elle reste seulement dans ton navigateur, jamais envoyée ailleurs).
4. Choisis une mise en situation et commence à pratiquer !

## Technique

Une seule page HTML/CSS/JS, aucun serveur, aucune installation. Utilise l'API Groq (modèle Llama 3.3) pour les réponses du tuteur et l'API Web Speech du navigateur pour la voix.

## Avertissement

Les photos du tuteur/de la tutrice sont générées par IA — ce ne sont pas de vraies personnes.

## Statut

Prototype personnel en cours de test avant une éventuelle publication sur le Play Store.
