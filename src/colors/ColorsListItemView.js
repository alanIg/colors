var template = require('./colorsListItemView.hbs')

module.exports =  Mn.View.extend({
  template: template,

  tagName: 'button',

  className: 'list-group-item',

  attributes: function(){
    return {
      style: 'background: ' + this.model.get('code')
    }
  },

  events: {
    'click': 'clicked',
    'click .btn-danger': 'remove'
  },

  clicked: function(){
    this.triggerMethod('color:selected', this.model)
  },

  remove: function(){
    this.triggerMethod('color:destroyed')
    this.model.destroy()

  }
});
