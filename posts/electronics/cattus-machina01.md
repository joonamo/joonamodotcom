---
title: "Cattus Machina-01"
date: "2019"
cover: "/images/electronics/cattus-machina01/IMG_4698.JPG"
youtube:
  - 3uatXpTok4I
  - En-yaYvyIxo
slideshow:
  - "/images/electronics/cattus-machina01/IMG_4698.JPG"
  - "/images/electronics/cattus-machina01/IMG_20190510_212329.jpg"
  - "/images/electronics/cattus-machina01/IMG-20190615-WA0000.jpg"
---

Once again, I took part in Hacklab.fi’s Robotit Strömbergin Puistossa robot building event and this time wanted to have something special: a maze robot with no traditional steering. This robot can only move forwards, but it has hands that can be used to push it away from walls. This worked surprisingly well and I ended up winning both the fastest time and audience’s favourite competitions!

For the electronics, I reused my [2018 robot’s components](/electronics/maze-robot-2018). It had trouble moving the other wheel both directions reliably, but thankfully I only had one wheel to spin this time. Previously I had two servo-connectors just for show (moving head and tail), but this time they controlled the most important parts of the robot: the hands. I also used the tested Sharp GP2Y0A41SK0F Proximity Sensors, had them only look left and right. The front was this time detected only with a bumper and a micro switch, thankfully I was able to hook it up to free connectors left free by the front proximity sensor. I built the enclosure from laser-cut wood, which I designed in Corel Draw and Affinity Designer. Some LEGO parts were used for the wheel and connecting it.

The working logic for the robot is super simple:

1. Move forward as fast as possible until a hit is detected on the bumper.
2. Pull back a tiny bit and check which side has less free space; spin the hand with less space on its side all the way.
3. Jump to 1.
    

I had to tweak the parameters of the point 2 a bit to complete the maze, but it worked suprisingly well. The two hands were different lenghts, so they had a bit different settings. Everything was written as a simple finite state machina. All code can be found in github: [https://github.com/joonamo/cattusmachina](https://github.com/joonamo/cattusmachina)

### What I used in this project

- [Teensy 3.2 microcontroller](https://www.pjrc.com/store/teensy32.html)
- [Arduino](https://www.arduino.cc/) (software)
- Corel Draw (software)
- Affinity Designer (software)
- Inkscape (Software)
- Autolaser (Software)
- Helsinki Hacklab's Laser Cutter
- Sharp GP2Y0A41SK0F Proximity Sensor
- TI SN754410NE motor controller
- Cheap Chinese gear motors from eBay
- Cheap Chinese servo motors
- LiFe battery
