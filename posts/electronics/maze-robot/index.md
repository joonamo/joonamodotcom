---
title: "Maze Robot \"Robo McRobotface\""
date: "2017-11-26"
---

<iframe src="//www.youtube.com/embed/kVV0BhLAqjQ?wmode=opaque&amp;enablejsapi=1" height="480" width="640" scrolling="no" frameborder="0" allowfullscreen></iframe>

<iframe src="//www.youtube.com/embed/OpJqGdng51Q?wmode=opaque&amp;enablejsapi=1" height="480" width="640" scrolling="no" frameborder="0" allowfullscreen></iframe>

# Maze Robot "Robo McRobotface"

2017

I took part in Hacklab.fi's [Robotit Strömbergin Puistossa](http://robotit.hacklab.fi/2017.html) 2017 robot building competition. The objective was to build an autonomous robot that goes through the race track as fast as possible. I didn't want to program  any specific track, so my robot used IR-based distance sensors to navigate the track. The robot has an Arduino-compatible Teensy-LC microcontroller as its brains. The simple logic tries to keep as much distance on both sides and quickly turn to side with more space if there is an obstacle in front of the robot. The body of the robot is 3D printed ABS plastic with Helsinki Hacklab's printer and designed in Autodesk Fusion 360.

The logic worked very well while running the robot indoors, but the competition was outdoors and the sunlight affected distance measurements. This can be seen as stuttering on the race video. The logic doesn't rely on accurate measurements so the robot was able to find its way through the track. I used fully rotational servo motors attached directly to the wheels. These were easy to control, but were quite slow. I didn't optimize for speed since the last year's winning time wasn't too fast. This year the competing robots were faster and my time granted me the 4th place in the race.

To make my robot look more interesting, I used a rotating face from my earlier project. I made the face always look at the direction the robot wanted to rotate to make it appear "smarter". This made my robot feel more human and it appealed to the crowd.

The robot can also be run in remote controlled mode. I built a simple web server with Python that ran on a Raspberry Pi Zero W. The server provides a touch-screen oriented control panel so a smart phone can be used to drive the robot around. Communications between the phone and server are handled with http requests and serial communications are used to pass the control data to the Arduino.

All code written for the robot is available in [GitHub](https://github.com/joonamo/maze_robot).

\>

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511713734016-MGFSUEZAUSB2DTFF7IOJ/2017\_005.jpg" alt="2017\_005.jpg" />

![2017_005.jpg](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511713734016-MGFSUEZAUSB2DTFF7IOJ/2017_005.jpg)

## What I used in this project

- [Teensy-LC microcontroller](https://www.pjrc.com/teensy/teensyLC.html)
- [Arduino](https://www.arduino.cc/) (software)
- [Autodesk Fusion 360](https://www.autodesk.com/products/fusion-360/overview)
- [Slic3r](http://slic3r.org/)
- Helsinki Hacklab's custom Mendel 90 3D printer
- Sharp GP2Y0A41SK0F Proximity Sensor
- Cheap Chinese fully-rotational servo motors
- LiFe battery
- [Face from my earlier project](/#/face-robot)
- [Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/) (for manual remote control server, not in race)
- [Python](https://www.python.org/) (for manual remote control server, not in race)
