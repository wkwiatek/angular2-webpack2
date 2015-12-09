import {bootstrap} from 'angular2/angular2';
import {App} from './app';

 (function() {
      var lastTime = 0;

      if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback) {
          var currTime = Date.now();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };

      if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
    }());
    
bootstrap(App);