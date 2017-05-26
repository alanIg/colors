var template = require('./colorsView.hbs')
var ColorModel = require('../model/Color')
var ColorsCollection = require('../model/Colors')
var ColorsListView = require('./ColorsListView')
var ColorItemView = require('./ColorItemView')
var Loader = require('../behaviors/Loader')
require('./colorsView.less')

module.exports =  Mn.View.extend({
  template: template,

  regions: {
    colorItem: '#colorItem',
    colorsList: '#colorsList',
  },

  childViewEvents: {
    'color:new': 'addColor',
    'color:selected': 'editColor',
    'color:destroyed': 'newColor'
  },

  events: {
    'click #newColor': 'newColor'
  },

  behaviors: [Loader],

  addColor: function(model){
    this.collection.add(model)
    model.save()
  },

  editColor: function(model){
    this.colorItemView.model = model
    this.colorItemView.render()
  },

  newColor: function(){
    this.colorItemView.newColor()
  },

  initialize: function(){
    this.collection = new ColorsCollection()
    this.triggerMethod('loader:collection', this.collection)
  },

  onRender: function(){
    this.collection.fetch()
    this.getRegion('colorsList').show(new ColorsListView({collection: this.collection}))
    this.colorItemView = new ColorItemView()
    this.getRegion('colorItem').show(this.colorItemView)
  }
});
