'use strict';
var campaign = turbine.getExtensionSettings().campaign;

module.exports = function() {
  if(campaign) {
    new Image().src = "//example.com/home?campaign=" + campaign;
  }
};
