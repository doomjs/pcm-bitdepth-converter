# PCM audio data bit depth converter

node.js Stream utility to convert PCM audio data bit depth from 16-bit to 32-bit or 32-bit to 16-bit.

## Usage

```javascript
var fs = require('fs');
var Converter = require('pcm-bitdepth-converter').From16To32Bit;

var reader = fs.createReadStream('./source.pcm');
var writer = fs.createWriteStream('./destination.pcm');
var converter = new Converter();

reader.pipe(converter);
converter.pipe(writer);
```

## Class: From16To32Bit

```From16To32Bit``` is a Transformer stream.

#### new From16To32Bit()

Create a new instance of a converter stream handler to convert 16-bit PCM audio data to 32-bit.

## Class: From32To16Bit

```From32To16Bit``` is a Transformer stream.

#### new From32To16Bit()

Create a new instance of a converter stream handler to convert 32-bit PCM audio data to 16-bit.