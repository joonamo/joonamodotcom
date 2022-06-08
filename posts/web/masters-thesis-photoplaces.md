---
title: "Master's Thesis: Photoplaces"
date: "2015"
cover: "/images/web/masters-thesis-photoplaces/gui-screenshot-2.png"
slideshow: 
  - /images/web/masters-thesis-photoplaces/gui-screenshot-2.png
  - /images/web/masters-thesis-photoplaces/biking-pit-stop_.png
  - /images/web/masters-thesis-photoplaces/flower-garden.png
  - /images/web/masters-thesis-photoplaces/hanami.png
  - /images/web/masters-thesis-photoplaces/kobe_zoo_3.png
---

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
