import React, { useState } from 'react'
import ReactHlsPlayer from 'react-hls-player'
import './player.css'

function Player() {
  //const Src = 'http://YOURSERVERIP:PORT/hls/show.m3u8'
  const [data, setData] = useState(
    'https://5f9c-103-80-62-197.in.ngrok.io/hls/.m3u8'
  )
  //const test = 'abcd'
  const Copy = (val) => {
    //console.log('http://YOURSERVERIP:PORT/hls/' + val.target.value + '.m3u8')
    setData(
      'https://5f9c-103-80-62-197.in.ngrok.io/hls/' + val.target.value + '.m3u8'
    )
  }
  return (
    <>
      <ReactHlsPlayer
        src={data}
        hlsConfig={{
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          lowLatencyMode: true,
        }}
        autoPlay={true}
        controls={true}
        width='800'
        height='auto'
      ></ReactHlsPlayer>
      <div className='data'>
        <label className='name'>Stream ID:</label>
        <input type='text' onChange={Copy} className='box'></input>
      </div>
    </>
  )
}

export default Player
