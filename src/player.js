import React, { useState } from 'react'
import ReactHlsPlayer from 'react-hls-player'

function Player() {
  //const Src = 'http://YOURSERVERIP:PORT/hls/show.m3u8'
  const [data, setData] = useState('http://YOURSERVERIP:PORT/hls/.m3u8')
  //const test = 'abcd'
  const Copy = (val) => {
    //console.log('http://YOURSERVERIP:PORT/hls/' + val.target.value + '.m3u8')
    setData('http://YOURSERVERIP:PORT/hls/' + val.target.value + '.m3u8')
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
        width='100%'
        height='auto'
      ></ReactHlsPlayer>
      <input type='text' onChange={Copy}></input>
    </>
  )
}

export default Player
