;(function (window, document) {
  "use strict";

  window.titleticker = window.titleticker || {};

  // Helpers
  var
      // Returns a list consisting of the characters in the passed string
      strToList = function (str) {
        var chars = [],
            i, l;

        for (i = 0, l = str.length; i < l; i++) {
          chars.push(str[i]);
        }
        return chars;
      },

      // Construct a string from the given list
      listToStr = function (chars) {
        return chars.join('');
      },

      // Replicates a ticker by moving a character
      // from the front of the list to the back
      cycleList = function (chars) {
        if (! (chars instanceof Array)) throw new Error('expected an array of chars');

        // Grab the frontmost char
        var front = chars.shift();

        // Add it to the back of the list
        chars.push(front);
      };


  // Tick the page title
  window.titleticker.tick = function () {
    // Add a space so ending char isn't next to
    // the leading character on wrap
    var title = document.title + " ",
        chars = strToList(title),
        ticker;

    setInterval(function () {
      cycleList(chars);
      ticker = listToStr(chars);
      document.title = ticker;
    }, 500);
  };

})(window, document);