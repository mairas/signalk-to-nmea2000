const Concentrate2 = require("concentrate2");

module.exports = (app, plugin) => {
  return {
    title: 'Temperature (130312)',
    type: 'toN2K',
    interval: 1000,
    optionKey: 'TEMPERATURE',
    keys: ["environment.inside.temperature"],
    callback: (temp) => {
      var tempInstance = 0;
      var tempSource = 2;
      var actTemp = temp * 100;
      var setTemp = 0xffff;
      
      try {
        return [
          {
            pgn: 130312,
            buffer: Concentrate2()
              .uint8(0xff)
              .uint8(tempInstance)
              .uint8(tempSource)
              .uint16(actTemp)
              .uint16(setTemp)
              .uint8(0xff)
              .result()
          }
        ]
      } catch ( err ) {
        console.error(err)
      }
    }
  }
}
