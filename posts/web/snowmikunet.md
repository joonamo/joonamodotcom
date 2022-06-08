---
title: "Snowmiku.net"
date: "2020"
cover: /images/web/snowmikunet/Screenshot-2020-03-07-at-22.55.55.png
slideshow:
  - /images/web/snowmikunet/Screenshot-2020-03-07-at-22.55.55.png
  - /images/web/snowmikunet/screenshot.png
---

I wanted to follow latest entries in Piapro’s Snow Miku design contest, but their pages are not nice to use especially on mobile. So I created my own gallery that scrapes the entries from Piapro! The service consists of a Python server that does the scraping and client web app written in TypeScript and React that displays the entries in responsive format with higher resolution thumbnails. Users can click on the images to go their original pages. The service lets users browse entries from all of the contests from different years and order by popularity or time.

Accessing Piapro from Europe is quite slow, so I wanted to make my service as fast as possible. When user opens a page, the server starts caching the next one in the background. I also upgraded the server to use one of the fastest Python web server available, Fast API, but that gives very little boost to the performance. At least upgrading to asynchronous server should be more responsive in case the site starts getting more traffic and allowed me to learn more about Python 3’s asyncio.

## 2022 renew

In the spring of 2022, I practically rewrote the whole web app of snowmiku.net. Previously, the app was using [MobX](https://mobx.js.org/) state management system, but now it's just plain React Hooks. This made the app a little simpler to maintain. I also migrated the app from self-managed [Dokku](http://dokku.viewdocs.io/dokku/) instance to [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform).

See the service live: [https://snowmiku.net](https://snowmiku.net)  
All code in github: [https://github.com/joonamo/highres-miku/](https://github.com/joonamo/highres-miku/)

### Technologies used:
- [Python 3](https://python.org)
- [Fast API](https://fastapi.tiangolo.com/)
- [httpx](https://www.python-httpx.org/)
- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)
- [React](https://reactjs.org/)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
- [TypeScript](https://www.typescriptlang.org/)
- [Bulma](https://bulma.io/)

### Technologies used previously:
- [MobX](https://mobx.js.org/)
- [Dokku](http://dokku.viewdocs.io/dokku/) (for hosting)
- [nginx](https://nginx.org/)
