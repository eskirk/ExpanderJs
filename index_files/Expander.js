$.makeExpander = function(root) {   
   $(root).children().each(function(ndx) {
      var tab = $('<div>').addClass('expander').addClass('active')
       .appendTo(root).insertBefore(this).prepend(this.title);
      tab.child = $(this);

      // Click handler
      tab.bind('click', e => { 
         if ($(e.target).attr('class') != 'arrow') 
            tab.toggleClass('inactive').child.toggleClass('hidden');
      });

      // Move up
      tab.prepend($('<img src=\'index_files/up.png\'>').addClass('arrow')
       .bind('click', () => { 
            tab.insertBefore(tab.prevAll('.expander:first'));
            tab.child.insertAfter(tab);
         }));
      // Move down
      tab.prepend($('<img src=\'index_files/down.png\'>').addClass('arrow')
       .bind('click', () => { 
            tab.insertAfter(tab.nextAll('.expander:first').next('div'));
            tab.child.insertAfter(tab);
         }));
   });
}