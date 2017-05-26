var ColorsRouter = require('./colors/Router')

module.exports =  Mn.Application.extend({
  region: '#app',
  onStart: function() {
    new ColorsRouter({app: this})
    Bb.history.start()
    Bb.history.navigate('colors', {trigger: true})
  }
});
