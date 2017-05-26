var Controller = require('./Controller')

module.exports =  Mn.AppRouter.extend({
  initialize: function(options){
    this.controller = new Controller(options)
  },

  appRoutes: {
    'colors': 'default'
  }
});
