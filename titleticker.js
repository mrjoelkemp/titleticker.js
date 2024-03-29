;(function (window, document) {
  "use strict";

  window.titleticker = window.titleticker || {};

  // Helpers
  var
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
      },

      // Resets the title to the original
      reset = function () {
        document.title = title;
      };

  // Common

  // Add a space so ending char isn't next to
  // the leading character on wrap
  var title = document.title + " ",
      chars = title.split(""),
      ticker,
      tickIntervalId;

  // Public Methods

  // Ticks the page title
  window.titleticker.tick = function () {
    if (tickIntervalId) return;

    tickIntervalId = setInterval(function () {
      cycleList(chars);
      ticker = listToStr(chars);
      document.title = ticker;
    }, 500);
  };

  // Terminates the ticking and restores it to the original
  window.titleticker.stop = function () {
    clearInterval(tickIntervalId);
    reset();
  };
})(window, document);