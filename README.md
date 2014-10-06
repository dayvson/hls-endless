HLS Endless
===========
[![Travis CI](https://travis-ci.org/dayvson/hls-endless.svg?branch=master)](https://travis-ci.org/dayvson/hls-endless.svg?branch=master)
 [![Code Climate](https://codeclimate.com/github/dayvson/hls-endless/badges/gpa.svg)](https://codeclimate.com/github/dayvson/hls-endless)

HLS server that delivers live streams in a loop. It has four audio/video bitrates and one audio-only.

##Install HLS-Endless
```Bash
npm install hls-endless -g
```

##Starting the application
```Bash
hls-endless start
```

##Stop the application
```Bash
hls-endless stop
```

##The resources are avaiable:

* Multi bitrate, variant playlist: [http://localhost:6060/master.m3u8](http://localhost:6060/master.m3u8)
* [Audio only](http://localhost:6060/bitrate_1.m3u8) - 22.050Hz stereo @ 40 kbps
* [Bitrate 1](http://localhost:6060/bitrate_1.m3u8)  - 400x300 @ 232 kbps
* [Bitrate 2](http://localhost:6060/bitrate_2.m3u8)  - 640x480 @ 650 kbps
* [Bitrate 3](http://localhost:6060/bitrate_3.m3u8)  - 640x480 @ 1 Mbps
* [Bitrate 4](http://localhost:6060/bitrate_4.m3u8)  - 960x720 @ 2 Mbps


##Video provided by Apple
The video used is [Apple’s 4x3 basic stream](https://developer.apple.com/resources/http-streaming/examples/) example with 4 bitrates. The full video is around 30 minutes long but since I didn’t want the repo to be huge, I only used 3 minutes and 30 seconds of it. This should be fine since the video will loop forever.


## How I Set It Up To Run Locally?
Requirements: *Confirm you have Node v0.10 or superior installed.*

####Step 1: install all required npm modules

Within the project directory:

```Bash
npm install .
```

####Step 2: Run the tests
```Bash
npm test
```
