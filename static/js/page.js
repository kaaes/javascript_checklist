YUI().use('node', 'json', function(Y){
  var listContainer = Y.one('#list');
      
  Y.on('domready', createLinkList);
      
  function createLinkList() {
    var linkList = Y.Node.create('<ol id="link-list"></ol>'),
        links = listContainer.all('a');
        
    links.each(function(el, i){
      var index = i + 1,
          elId = 'list-element-' + index,
          parent = el.get('parentNode'),
          item = Y.Node.create('<li></li>');
          
      linkList.append(item);
      item.append(el);
      el.set('id', elId);
      parent.append('<a class="reference" href="#' + elId + '" title="' + el.getContent() + '"><sup>[' + index + ']</sup></a>')
    });
    
    listContainer.addClass('referenced-list');
    listContainer.append(linkList);
    
    Y.on('click', markChosenReference, 'a.reference');
  }
  
  function markChosenReference(evt) {
    var hash = this.get('hash')
        link = Y.one(hash);
        
    evt.stopPropagation();
    
    if(link) {
      Y.all('#link-list a').removeClass('active');
      link.addClass('active');
    }
  }
});