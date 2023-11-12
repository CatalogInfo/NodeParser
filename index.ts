import Splitter from './src/splitter/splitter';
import SpreadFinder from './src/spread_finder';

if(Splitter.exchanges.length === 0) {
  Splitter.init();
}
(async () => {
    const infinity = true;

    while(infinity) {
      await SpreadFinder.findSpreads();
    }
})();
