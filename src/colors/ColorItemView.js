var template = require('./colorItemView.hbs')
var ColorModel = require('../model/Color')

module.exports =  Mn.View.extend({
  template: template,

  ui: {
    form: 'form',
    name: '#name',
    code: '#code'
  },

  events: {
    'submit @ui.form': 'formSubmit',
    'keyup form': 'isModelValid',
  },

  removeErrors: function(){
    this.ui.form.find('.has-error').each(function(){
      var el = $(this)
      el.removeClass('has-error')
      el.find('span').remove()
    })
  },

  newColor: function(){
    this.model = null
    this.render()
  },

  isModelValid: function(){
    this.removeErrors()
    var newVals = this.getValues()
    var errors = ColorModel.prototype.validate(newVals)
    if(errors){
      for(var i in errors){
        var el = this.ui.form.find('#' + i).parent()
        el.addClass('has-error')
        el.append($('<span class="help-block">' + errors[i] + '</span>'))

      }
      return false
    }
    return true
  },

  getValues: function(){
    var values = {
      name: this.ui.name.val(),
      code: this.ui.code.val(),
    }
    return values
  },

  formSubmit: function(e){
    e.preventDefault()
    if(this.isModelValid()){
      if(this.model){
        this.model.save(this.getValues())
      }else{
        this.model = new ColorModel(this.getValues())
        this.triggerMethod('color:new', this.model)
        this.newColor()
      }

    }
  }

});
