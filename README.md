# Getting Started Stream App

This project was created with react and nginx, where react is used to serve the outputed nginx's hls stream to a website, the soul purpose of this project is to get the custom stream from nginx(i.e. some video, podcast, live stream from an obs device) and help it view on a website.

## How to use this app?

Clone the project directory, where you want to host it:

### 1.) `npm i`

Use this command to install all the dependencies of the project onto your server.

### 2.) `src/player.js`

In player.js under src type your server's IP and Port number to get your hls stream.

### 3.) `npm run build`

Builds the Production website for your use.

### 4.) `server -g build`

To server the build you just made. Go to the IP:Port of your server, and there would be a player and under that there must be a input tab, type the streamkey in that tab to get stream onto your player.
