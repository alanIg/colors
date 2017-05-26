require('./loader.less')

module.exports = Mn.Behavior.extend({
  showLoader: function(){
    var menu = $('#menu')
    menu.after($('<div id="loader" class="progress"><div class="progress-bar progress-bar-striped active" role="progressbar" style="width: 100%"><span class="sr-only">100% Complete</span></div></div>'))
  },

  hideLoader: function(){
    $('#loader').remove()
  },

  onLoaderCollection: function(collection){
    var self = this
    collection.on('request', function(collection, xhr){
      self.showLoader()
      $.when(xhr).then(function(){
        self.hideLoader()
      }, function(res){
        alert('Problems with syncing: ' + res.statusText)
        self.hideLoader()
      })
    })
  }
});
