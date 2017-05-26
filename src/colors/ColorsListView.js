var ColorsListItemView = require('./colorsListItemView')

module.exports =  Mn.CollectionView.extend({

  childView: ColorsListItemView,

  className: 'list-group',

  childViewEvents: {
    'color:selected': 'colorSelected',
    'color:destroyed': 'colorDestroyed',
  },

  colorSelected: function(model){
    this.triggerMethod('color:selected', model)
  },

  colorDestroyed: function(){
    this.triggerMethod('color:destroyed')
  },

  initialize: function(){
    this.collection.on('change', this.render)
  }
});
