---
title: "Classic Controller to XInput adapter"
date: "2018-01-06"
cover: "/images/electronics/classic-controller-to-xinput-adapter/example1.jpg"
---

\>

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511710567435-16IQR1KYXVRVOVEX3OW6/example1.jpg" alt="example1.jpg" />

![example1.jpg](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511710567435-16IQR1KYXVRVOVEX3OW6/example1.jpg)

\>

<img src="https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511710619786-YVCA44QXY69YMEFL2YED/example2.jpg" alt="example2.jpg" />

![example2.jpg](https://images.squarespace-cdn.com/content/v1/5a1957c7bce17620f85c098a/1511710619786-YVCA44QXY69YMEFL2YED/example2.jpg)

# Classic Controller to XInput Adapter

2016

I am very picky about the game controllers I play with, especially when it comes to d-pads. Nintendo has always had the best d-pads in their controllers and I'm especially fond of the Wii Classic controller and the Pro version.

I wanted to play 2d games on my computer with the Classic Controller, so I bought a Chinese adapter for that. Unfortunately the adapter was sub bar. It had weird bugs, had to be plugged in in a very specific way and only supported DirectInput. Also, it was huge! So I took it apart, disconnected the controller connector and made my own adapter.

I found XInput library for Teensy microcontrollers and since the classic controller uses i2c for communications, it wasn't too difficult to get Teensy talking with the controller. Since I was building my own adapter, I added some features I wanted to have. The shoulder buttons can be easily swapped, analog sticks can be disabled and are automatically calibrated. I also fixed the issues my original adapter had regarding plugging and unplugging the controller. And all of this fits in a 3d printed case about 10% the size of the original adapter. Since the adapter talks to the computer with XInput protocol, it works with no hassle with most games and emulators.

All code and wiring diagrams can be found from [GitHub](https://github.com/joonamo/teensy_classic_xinput).

## What I used in this project

- [Teensy-LC microcontroller](https://www.pjrc.com/teensy/teensyLC.html)
- [Arduino](https://www.arduino.cc/) (software)
- [MSF-Xinput library](https://github.com/zlittell/MSF-XINPUT)
- [I used this as reference for Classic Controller i2c](https://havencking.blogspot.fi/2015/12/teensy-usb-wii-classic-controller.html)
