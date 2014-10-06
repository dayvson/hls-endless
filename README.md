HLS Endless
===========
<img src="https://travis-ci.org/dayvson/hls-endless.svg?branch=master"/>

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

* Multi bitrate, variant playlist: http://localhost:6060/master.m3u8
* Single bitrate: http://localhost:6060/bitrate_[0-4].m3u8


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
