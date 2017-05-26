var template = require('./layout.hbs')
var MenuView = require('./menu')

module.exports =  Mn.View.extend({
  template: template,

  regions: {
    menu: '#menu',
    content: '#content',
  },

  onRender: function(){
    this.getRegion('menu').show(new MenuView())
  }
});
