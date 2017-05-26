module.exports = Bb.Model.extend({
  defaults: {
    code: '',
    starred: false
  },

  validate: function(attributes, options){
    var errors = {}

    if(!attributes.code || attributes.code.length < 3){
      errors.code = 'Code must have at least 3 chars';
    }

    if(Object.keys(errors).length > 0){
      return errors
    }
  }
})
