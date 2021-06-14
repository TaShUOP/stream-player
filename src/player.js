import React from 'react'
import ReactHlsPlayer from 'react-hls-player'

function player() {
  return (
    <ReactHlsPlayer
      src='http://15.206.121.123:8080/hls/show.m3u8'
      hlsConfig={{
        maxLoadingDelay: 4,
        minAutoBitrate: 0,
        lowLatencyMode: true,
      }}
      autoPlay={true}
      controls={true}
      width='100%'
      height='auto'
    />
  )
}

export default player
