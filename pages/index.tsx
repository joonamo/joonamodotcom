import type { NextPage } from 'next'
import React from 'react'
import { Column, DesktopTitle, MobileTitle, Spacer } from '../components/Basic'
import { Youtube } from '../components/Youtube'
import an1 from '../public/images/an/Alienation-2016-02-05.jpg'
import an2 from '../public/images/an/AN_Fort_Itaipu_explosion_01.jpg'
import an3 from '../public/images/an/AN_Pripyat_01.jpg'
import an4 from '../public/images/an/AN_Shot_02.jpg'
import an5 from '../public/images/an/AN-PS4-Behind-Closed-Doors.jpg'
import an6 from '../public/images/an/AN-PS4-Flying.jpg'
import an7 from '../public/images/an/alienation12.jpg'
import { ImageCarousel } from '../components/ImageCarousel'

const Home: NextPage = () => {
  return (
    <div className={"container mx-auto"}>
      <div className={"md:grid grid-cols-2"}>
        <Column>
          <MobileTitle subtitle={"2016"}>Alienation (Housemarque, PS4)</MobileTitle>
          <Youtube id="xObRmJujaG8" />
          <Spacer />
          <ImageCarousel
            images={[an1, an7, an2, an3, an4, an5, an6, an1, an7, an2, an3, an4, an5, an6]}
          />
        </Column>
        <Column>
          <DesktopTitle subtitle={"2016"}>Alienation (Housemarque, PS4)</DesktopTitle>
          <p>
            Alienation is a top-down action game by Housemarque released for PlayStation 4. Alienation features explosive action with tons of enemies on screen at once with up to four player online and offline multiplayer.
          </p>
          <p>
            I worked as a Gameplay Programmer in Alienation. My main responsibilities were scripting the player characters, enemy AI and their network syncing system. The gameplay script was mostly written in Housemarque&apos;s in-house scripting language and state-machine tool Stated. I worked closely with the art, animation and design teams to help with their needs. I gave a speech about the tools and workflows used in Alienation at Assembly 2016, the recording is embedded below.
          </p>
          <h2>More info about the game</h2>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href="http://www.housemarque.com/games/alienation/">
                Official page
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Alienation_(video_game)">
                Wikipedia
              </a>
            </li>
          </ul>

          <Spacer />
          <Youtube id="ClOCOcPvUuo" />

          <h2>What I used in this project</h2>
          <h3>Programming languages</h3>
          <ul>
            <li>C++</li>
            <li>Stated (Housemarque in-house scripting language)</li>
            <li>Python</li>
          </ul>

          <h3>Software</h3>
          <ul>
            <li>Stated editor</li>
            <li>Microsoft Visual Studio</li>
            <li>Sublime Text</li>
            <li>Havok Animation Studio</li>
          </ul>
        </Column>
      </div>
    </div>
  )
}

export default Home
