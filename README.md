<p align="center">
  <a href="https://web.dev/learn/pwa/progressive-web-apps/" target="blank"><img src="https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png" width="256" alt="PWA Logo" /></a>
</p>

## Projet d'exemple d'une Progressive Web Application

Les exemples seront présentés sous différents frameworks, à partir des branches de ce dépôt.

La branche master n'a pas vocation à présenter en particulier un framework, mais à introduire le concept.

## Webographie

- [web.dev](https://web.dev/learn/pwa/progressive-web-apps/) Ressources PWA
- [what pwa can do](https://whatpwacando.today/) Recueil de fonctionnalités (certaines fonctionnalités sont WIP)
- [what web can do](https://whatwebcando.today/) Recueil de fonctionnalités

## Prérequis

- Bases en HTML / CSS / JavaScript
- Notion sur le Responsive Web Design / sur le concept mobile-first

## Développement

Important:
Les PWA supportent l'adresse http://localhost comme une URL servie en HTTPS.

Pour la mise en production, il est nécessaire, pour le bon fonctionnement du service worker et/ou de certaines fonctionnalités, que votre serveur soit bien en HTTPS, où vous ne pourrez pas installer l'application ou utiliser la plupart des fonctionnalités.

## Installation

Il est nécessaire de disposer d'un fichier `manifest.json` et d'un `service-worker.js` pour rendre l'application installable.

