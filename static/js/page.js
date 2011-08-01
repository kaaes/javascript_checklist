YUI().use('node', 'json', function(Y){
  var storageKey = 'jsChecklist.list',
      checklist = getChecklistObject(),
      listContainer = Y.one('#list');
      
  Y.on('domready', function(){
    if(supports_html5_storage()) {
      setCheckedItems();    
      Y.on('click', markListItem, 'li');
    }    
    createLinkList();
  });
      
  function createLinkList() {
    var list = Y.Node.create('<ol></ol>'),
        links = listContainer.all('a');
        
    listContainer.append(list);
    links.each(function(el, i){
      var index = i + 1,
          elId = 'list-element-' + index,
          parent = el.get('parentNode'),
          item = Y.Node.create('<li></li>');
          
      listContainer.append(item);
      item.append(el);
      el.set('id', elId);
      parent.append('<a href="#' + elId + '" title="' + el.getContent() + '"><sup>[' + index + ']</sup></a>')
    });
    listContainer.addClass('referenced-list');
  }
      
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
      
  function setCheckedItems() {
    var items = listContainer.all('li');
    items.each(function(item){
      var hash = hashCode(item.getContent());
      if(checklist.indexOf(hash) > -1) {
        item.addClass('checked');
      }
    })
  }
      
  function markListItem(evt) {
    var hash = hashCode(this.getContent());
    this.toggleClass('checked');
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
  
  function hashCode(str){
    var hash = 0, 
        char;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
      char = str.charCodeAt(i);
      hash = ((hash<<5)-hash) + char;
      hash = hash & hash; // Cosnvert to 32bit integer
    }
    return hash;
  }
  
  function supports_html5_storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  }
});