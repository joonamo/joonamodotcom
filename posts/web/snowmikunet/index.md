---
title: "Snowmiku.net"
date: "2020-03-07"
---

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1583614694564-Q1CIJE2FK2H45VVOLK4Z/Screenshot+2020-03-07+at+22.55.55.png" alt="Screenshot 2020-03-07 at 22.55.55.png" />

![Screenshot 2020-03-07 at 22.55.55.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1583614694564-Q1CIJE2FK2H45VVOLK4Z/Screenshot+2020-03-07+at+22.55.55.png)

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1583614730862-5RNDJOF85S6WLX0EZND7/YeHyx4gZR8Ffx1PSR5PVQKZ5bNtH6lXaktrbhH173wMKQrpBUA3aZDAOm\_GzwbgGMyxvl6eLJj0rbklEJQEjrtDYOaRTd8W2A0suPb\_O%3Ds1920.png" alt="YeHyx4gZR8Ffx1PSR5PVQKZ5bNtH6lXaktrbhH173wMKQrpBUA3aZDAOm\_GzwbgGMyxvl6eLJj0rbklEJQEjrtDYOaRTd8W2A0suPb\_O=s1920.png" />

![YeHyx4gZR8Ffx1PSR5PVQKZ5bNtH6lXaktrbhH173wMKQrpBUA3aZDAOm_GzwbgGMyxvl6eLJj0rbklEJQEjrtDYOaRTd8W2A0suPb_O=s1920.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1583614730862-5RNDJOF85S6WLX0EZND7/YeHyx4gZR8Ffx1PSR5PVQKZ5bNtH6lXaktrbhH173wMKQrpBUA3aZDAOm_GzwbgGMyxvl6eLJj0rbklEJQEjrtDYOaRTd8W2A0suPb_O%3Ds1920.png)

# Snowmiku.net

2019 - 2020

I wanted to follow latest entries in Piapro’s Snow Miku design contest, but their pages are not nice to use especially on mobile. So I created my own gallery that scrapes the entries from Piapro! The service consists of a Python server that does the scraping and client web app written in TypeScript and React that displays the entries in responsive format with higher resolution thumbnails. Users can click on the images to go their original pages. The service lets users browse entries from all of the contests from different years and order by popularity or time.

Accessing Piapro from Europe is quite slow, so I wanted to make my service as fast as possible. When user opens a page, the server starts caching the next one in the background. I also upgraded the server to use one of the fastest Python web server available, Fast API, but that gives very little boost to the performance. At least upgrading to asynchronous server should be more responsive in case the site starts getting more traffic and allowed me to learn more about Python 3’s asyncio.

See the service live: [https://snowmiku.net](https://snowmiku.net)  
All code in github: [https://github.com/joonamo/highres-miku/](https://github.com/joonamo/highres-miku/)

### Technologies used:

- [Python 3](https://python.org)
    
- [Fast API](https://fastapi.tiangolo.com/)
    
- [httpx](https://www.python-httpx.org/)
    
- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)
    
- [React](https://reactjs.org/)
    
- [MobX](https://www.google.com/url?cad=rja&cd=1&esrc=s&q=&rct=j&sa=t&source=web&uact=8&url=https%3A%2F%2Fmobx.js.org%2F&usg=AOvVaw1-_-FyJV2iQ9b1emScX5Iz&ved=2ahUKEwitl_7BmonoAhWw0KYKHeNZDWYQFjAAegQIBRAB)
    
- [TypeScript](https://www.google.com/url?cad=rja&cd=1&esrc=s&q=&rct=j&sa=t&source=web&uact=8&url=https%3A%2F%2Fwww.typescriptlang.org%2F&usg=AOvVaw0CNxTP-CKE5ss0r3aWazpG&ved=2ahUKEwilpM3OmonoAhUVwsQBHdSlBqsQFjAAegQIDxAC)
    
- [Bulma](https://bulma.io/)
    
- [Dokku](http://dokku.viewdocs.io/dokku/) (for hosting)
    
- [nginx](https://nginx.org/)
