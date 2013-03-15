$(function() {

  var components = [
    {
      tpl: '<label>Header</label><section role="region"><header><h1 contenteditable>Header</h1></header></section>'
    },
    {
      tpl: '<label>Toolbar</label><div role="toolbar"><ul></ul><ul></div>'  
    }
  ]
  , toolbox = $('.widget-toolbox ul')
  , appContent = $('.app-content')
  , tempDragged;

  $.each(components, function(i, component) {
    $('<li>')
      .data('tpl', component.tpl)
      .html(component.tpl)
      .appendTo(toolbox)
      .draggable({ helper: 'clone' });
  });

  appContent.droppable({
    over: function(e, ui) {
      tempDragged = $(ui.draggable.data('tpl'))
          .addClass('temp-dragged')
          .appendTo(appContent);
      ui.helper.hide();
    },
    drop: function(e, ui) {
      tempDragged.removeClass('temp-dragged');
    },
    out: function(e, ui) {
      tempDragged.remove();
      ui.helper.show();
    }
  });
});
