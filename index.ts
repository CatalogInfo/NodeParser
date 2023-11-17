import Splitter from './src/splitter/splitter';
import SpreadFinder from './src/spread_finder';

if(Splitter.exchanges.length === 0) {
  Splitter.init();
}
(async () => {
    const infinity = true;

    let i = 0;
    while(infinity) {
      i ++;
      console.log("loop n " + i);
      await SpreadFinder.findSpreads();
    }
})();
