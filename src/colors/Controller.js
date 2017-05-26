var LayoutView = require('../layout/Layout')
var ColorsView = require('./ColorsView')

module.exports = Mn.Object.extend({

  default: function(){
    var layout = new LayoutView();
    this.options.app.showView(layout)
    layout.getRegion('content').show(new ColorsView())
  }
})
