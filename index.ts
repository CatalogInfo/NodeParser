import Splitter from './src/splitter/splitter';
import SpreadFinder from './src/spread_finder';

if(Splitter.exchanges.length === 0) {
  Splitter.init();
}
(async () => {
    await SpreadFinder.findSpreads();
})();
