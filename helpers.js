var fs = require('fs');
module.exports = {
  maxSegmentsInPlaylist:5,
  getSegmentsDuration: function(file){
    var data = fs.readFileSync(file, 'utf-8');
    var re = /EXTINF:([\d\.]+),/gi;
    var segments = [], duration = 0, found;
    while (found = re.exec(data)){
      segments.push(found[1]);
      duration+=parseFloat(found[1]);
    }
    return { totalDuration:duration, segments: segments};
  }
}