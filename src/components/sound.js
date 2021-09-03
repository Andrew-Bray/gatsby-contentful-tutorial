import React from 'react'
import useSound from 'use-sound'

import morning from '../assets/audio/good_morning.mp3'
import leaves from '../assets/audio/falling_leaves.mp3'
import romance from '../assets/audio/office_romance.mp3'
import dangerZone from '../assets/audio/danger_zone.mp3'

import * as soundStyles from './sound.module.scss'

const Sounds = () => {
  const options = {
    loop: true,
    volume: 0.5,
    html5: true
  }

  const [playLeaves, leavesOptions] = useSound(leaves, options);
  const [playMorning, morningOptions] = useSound(morning, options);
  const [playRomance, romanceOptions] = useSound(romance, options);
  const [playDanger, dangerOptions] = useSound(dangerZone, options);

  const soundOptions = [
    leavesOptions,
    morningOptions,
    romanceOptions,
    dangerOptions]

  const soundAndAction = {
    leaves: playLeaves,
    morning: playMorning,
    romance: playRomance,
    danger: playDanger
  }

 const handleClick = async(e) => { 
   const sound = e.target.value;

    soundOptions.forEach(sound => {
      sound.stop();
    });

    if(sound !== 'stop') {
      console.log(soundAndAction[sound]);
      soundAndAction[sound]();
    } else if (sound === 'stop') {
      soundOptions.forEach(sound => {
        sound.stop()
      })
    };
  }
  
  return (
    <div className={soundStyles.wrapper}>
    <div className={soundStyles.container}>
      <h3>Why not a sonic experience?</h3>
      <div className={soundStyles.buttonDivs}>
         <label>
          <input
            type="radio"
            name="sound"
            value="romance"
            onClick={e => handleClick(e)}/>
            Office Romance
        </label>
        <label>
          <input
            type="radio"
            name="sound"
            value="leaves"
            onClick={e => handleClick(e)}/>
            Falling Leaves
        </label>

        <label>
          <input
            type="radio"
            name="sound"
            value="morning"
            onClick={e => handleClick(e)}/>
           Good Morning
        </label>

                <label>
          <input
            type="radio"
            name="sound"
            value="danger"
            onClick={e => handleClick(e)}/>
           Danger Zone
        </label>

        <label >
          <input
            
            type="radio"
            name="sound" 
            value="stop"
            onClick={e => handleClick(e)} />
            stop
        </label>
      </div>
    </div>
    <div className={soundStyles.notes}>
      All audio created by Andrew Bray
    </div>
    </div>
  )
}

export default Sounds
