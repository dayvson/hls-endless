hls-endless
===========

It is a HLS server that deliver a live streams in loop, it has four audio/video bitrates and one audio-only.


##The resources are avaiable:

* Multi bitrate, variant playlist: http://localhost:6060/master.m3u8
* Single bitrate: http://localhost:6060/bitrate_[0-4].m3u8


##Video provided by Apple
The video used here is a 4x3 Apple's basic stream video with 4 bitrates, Apple's entire video has around 30 minutes but because I don't want to blowup this repo I only left 3:30 minutes of video and since it will loop forever it should be fine. 
If you want to check the stream is available on: https://developer.apple.com/resources/http-streaming/examples/


## How I Set It Up To Run Locally?
Requirements: *Confirm you have Node v0.10 installed.*

####Step 1: install all required npm modules

Within the project directory:

```Bash
npm install .
```

####Step 2: Run the tests
```Bash
npm test
```

####Step 3: Start the application

```Bash
npm start
```

####Step 4: Stop the application

```Bash
npm stop
```
