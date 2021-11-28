---
title: "Master's Thesis: Photoplaces"
date: "2017-11-26"
---

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692323538-I8M7HFCWNRD2R6MYA0QX/gui+screenshot+2.png" alt="gui screenshot 2.png" />

![gui screenshot 2.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692323538-I8M7HFCWNRD2R6MYA0QX/gui+screenshot+2.png)

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692310883-LAJT3FRHCTSZBOTI06H8/biking+pit+stop\_.png" alt="biking pit stop\_.png" />

![biking pit stop_.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692310883-LAJT3FRHCTSZBOTI06H8/biking+pit+stop_.png)

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692310065-7VV1451JPPT2N651HFK7/flower+garden.png" alt="flower garden.png" />

![flower garden.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692310065-7VV1451JPPT2N651HFK7/flower+garden.png)

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692325684-62T0HBPQ3MEO6IMVC075/hanami.png" alt="hanami.png" />

![hanami.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692325684-62T0HBPQ3MEO6IMVC075/hanami.png)

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692329094-4YQ2KU3M5B6CRP4C58AK/kobe\_zoo\_3.png" alt="kobe\_zoo\_3.png" />

![kobe_zoo_3.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692329094-4YQ2KU3M5B6CRP4C58AK/kobe_zoo_3.png)

![gui screenshot 2.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692323538-I8M7HFCWNRD2R6MYA0QX/gui+screenshot+2.png)

![biking pit stop_.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692310883-LAJT3FRHCTSZBOTI06H8/biking+pit+stop_.png)

![flower garden.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692310065-7VV1451JPPT2N651HFK7/flower+garden.png)

![hanami.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692325684-62T0HBPQ3MEO6IMVC075/hanami.png)

![kobe_zoo_3.png](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511692329094-4YQ2KU3M5B6CRP4C58AK/kobe_zoo_3.png)

# Master's Thesis: Photoplaces

2015

For my Master's Thesis, I researched using publicly available metadata from photos to find interesting places for tourists to visit. The results were displayed in web browser.

The analysis algorithm uses "Density-Join" clustering method to find clusters of photos that are close to each other in both time and space. Analysed photos were acquired using Flickr public API. The results can be intuitively browsed on Google Maps-based map view. The cluster icons highlight the seasonal distribution of the photos in each cluster.

Since this was a web project, I used a bunch of open source libraries building the web service part. The server is ran on Python with Django framework and Gunicorn http server with MySQL. The front-end is loosely built on top of Bootstrap and uses Google Maps for the map component. The animated graphs are build with D3js and jQuery is used to glue it all together.

The research paper can be found in [Aaltodoc](https://aaltodoc.aalto.fi/handle/123456789/16348). All code written for the project is available in [GitHub](https://github.com/joonamo/photoplaces). The web service is hosted on a shared server and may or may not be available [here](http://joonamo.kapsi.fi/photoplaces/).

## What I used in this project

- [Python](https://www.python.org/) + virtualenv
- [Scipy](https://scipy.org/)
- [Django Web Framework](https://www.djangoproject.com/)
- [Gunicorn http server](http://gunicorn.org/)
- [MySQL](https://www.mysql.com/)
- [Flickr API](https://www.flickr.com/services/api/)
- [Google Maps API](https://developers.google.com/maps/)
- [jQuery](https://jquery.com/)
- [D3js](https://d3js.org/)
- [Bootstrap](https://getbootstrap.com/)
