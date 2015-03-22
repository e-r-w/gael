var ga = require('analytics');

module.exports = function(options){
  document.addEventListener('error', function(event){
    var error = event.error;
    if(error){
      ga.trackEvent({
        action: options.action || 'Javascript error',
        category: error.message || error,
        label: error.stack
      });
    }
  });
};
