---
title: "Salasanakone"
date: "2019"
cover: /images/web/salasanakone/salasanacover.jpg
slideshow: 
  - /images/web/salasanakone/Screenshot-2020-03-07-at-23.01.34.png
  - /images/web/salasanakone/screenshot1.png
---
A single-page application for creating [XKCD-style](https://xkcd.com/936/) passwords Finnish. I needed to send encrypted files and tell their password in phone, so I created this app. It has controls to satisfy most of the password requirements in different sites and it works great on both desktop and mobile. The word list is 70 000+ words long and doesn’t contain difficult characters such as ä or ö.

The app is written in TypeScript and served as static site from my Dokku host.

Check it out: [https://salasanakone.joonamo.com/](https://salasanakone.joonamo.com/)  
All code in Github: [https://github.com/joonamo/salasanakone](https://github.com/joonamo/salasanakone)

### Technologies used
- [React](https://reactjs.org/)
- [MobX](https://mobx.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bulma](https://bulma.io/)
- [Dokku](http://dokku.viewdocs.io/dokku/) (for hosting)
