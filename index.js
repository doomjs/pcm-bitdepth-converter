var Transform = require('stream').Transform;
var util = require('util');

function From16To32Bit(){
    Transform.call(this);
}

From16To32Bit.prototype._transform = function(chunk, encoding, done){
    var b32 = new Float32Array(chunk.byteLength / 2);
    var dv = new DataView(chunk.buffer);
    for (var i = 0, offset = 0; offset < chunk.byteLength; i++, offset += 2){
        var v = dv.getInt16(offset, true);
        b32[i] = v > 0 ? v / 32767 : v / 32768;
    }
    done(null, new Buffer(b32.buffer));
};

util.inherits(From16To32Bit, Transform);
module.exports.From16To32Bit = From16To32Bit;

function From32To16Bit(){
    Transform.call(this);
}

From32To16Bit.prototype._transform = function(chunk, encoding, done){
    var b16 = new Int16Array(chunk.byteLength / 4);
    var dv = new DataView(chunk.buffer);
    for (var i = 0, offset = 0; offset < chunk.byteLength; i++, offset += 4){
        var v = dv.getFloat32(offset, true);
        b16[i] = v > 0 ? v * 32767 : v * 32768;
    }
    done(null, new Buffer(b16.buffer));
};

util.inherits(From32To16Bit, Transform);
module.exports.From32To16Bit = From32To16Bit;