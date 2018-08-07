'use strict';

module.exports = function (settings) {
  var campaign = settings.campaign;
  new Image().src = "https://example.com/track?campaign=" + campaign;
};