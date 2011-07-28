(function(){  
  var storageKey = 'jsChecklist.list';
  
  if(supports_html5_storage()) {
    YUI().use('node', 'json', function(Y){
      var checklist = getChecklistObject();
      
      Y.on('domready', checkItems);
      Y.on('click', markListItem, 'li');
      
      function getChecklistObject() {
        var checklistStr = localStorage.getItem(storageKey) || '[]',
            list;
            
        try {
          list = Y.JSON.parse(checklistStr);
        } catch(e) {
          Y.log('Cannot parse checklist object')
        }
        return list || []
      }
      
      function checkItems() {
        var items = Y.all('#list li');
        items.each(function(item){
          var hash = hashCode(item.getContent());
          if(checklist.indexOf(hash) > -1) {
            item.addClass('checked');
          }
        })
      }
      
      function markListItem(evt) {
        this.toggleClass('checked');
        var hash = hashCode(this.getContent());
        toggleValueInStorage(hash)
      }
      
      function toggleValueInStorage(value) {
        var hashIndex = checklist.indexOf(value);
        if(hashIndex === -1) {
          checklist.push(value);
        } else {
          checklist.splice(hashIndex, 1)
        }    
        localStorage.setItem(storageKey, Y.JSON.stringify(checklist))
      }
    });
  }
  
  function supports_html5_storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }
  
  function hashCode(str){
    var hash = 0, char;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash<<5)-hash) + char;
      hash = hash & hash; // Cosnvert to 32bit integer
    }
    return hash;
  }
})()

a();
function a() {
  return 'a'
}
// 'a'

a();
var a = function() {
  return 'a'
}
// TypeError: undefined is not a function

[] == ![] // true

Function.prototype.curry = function() {
  var args1 = Array.prototype.splice.call(arguments, 0);
  _this = this;
  return function() {    
    var args2 = Array.prototype.splice.call(arguments, 0)
    return _this.apply(this, args1.concat(args2))
  }
}