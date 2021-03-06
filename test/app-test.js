var fs = require('fs');
var should = require('chai').should();
var sinon = require('sinon');
var request = require('supertest');
var helpers = require('../helpers');
helpers.maxSegmentsInPlaylist = 2;
var clock = sinon.useFakeTimers(1000);
var app = require('../app');

describe("HLS Live infinite loop routes", function(){
  it('should load the bitrate 1 and reduce the max segments in the player by 2', function(done){

    request(app)
    .get('/bitrate_1.m3u8')
    .expect(200)
    .end(function(err, res){
      res.type.should.equal('application/vnd.apple.mpegurl');
      res.text.indexOf('/bipbop_4x3/gear1/segment_0.ts').should.greaterThan(-1);
      res.text.indexOf('/bipbop_4x3/gear1/segment_1.ts').should.greaterThan(-1);
      res.text.indexOf('/bipbop_4x3/gear1/segment_2.ts').should.equal(-1);
      done();
    });
  });

  it('should load the bitrate 0 the audio only', function(done){
    request(app)
    .get('/bitrate_0.m3u8')
    .expect(200)
    .end(function(err, res){
      res.type.should.equal('application/vnd.apple.mpegurl');
      res.text.indexOf('/bipbop_4x3/gear0/segment_0.aac').should.greaterThan(-1);
      done();
    });
  });

  it('should load the bitrate after 209 seconds to test the loop', function(done){
    clock = sinon.useFakeTimers(1000 * 209);
    request(app)
      .get('/bitrate_1.m3u8')
      .expect(200)
      .end(function(err, res){
        res.type.should.equal('application/vnd.apple.mpegurl');
        res.text.indexOf('/bipbop_4x3/gear1/segment_20.ts').should.greaterThan(-1);
        done();
      });
    clock.restore();
  });
  it('should change the m3u8 from live to vod', function(done){
    process.kill(process.pid,"SIGUSR1");
    clock = sinon.useFakeTimers(1000 * 209);
    request(app)
      .get('/bitrate_1.m3u8')
      .expect(200)
      .end(function(err, res){
        res.type.should.equal('application/vnd.apple.mpegurl');
        res.text.indexOf('#EXT-X-PLAYLIST-TYPE:VOD').should.greaterThan(-1);
        done();
      });
    clock.restore();
  });

  it('shoud obtain all segments duration and total duration', function(){
      var result = helpers.getSegmentsDuration(__dirname+"/fixtures/test.m3u8");
      result.segments.length.should.equal(5);
      result.totalDuration.should.equal(6);
  });

  it('shoud return a 404 if a bitrate higher the 4 is passed', function(done){
    request(app)
    .get('/bitrate_5.m3u8')
    .expect(404)
    .end(function(err, res){
      done();
    });
  });
});