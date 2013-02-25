$(function() {

  var components = [
    {
      tpl: '<button>Button</button>',
    },
    {
      tpl: '<section role="region"><header><h1>Header</h1></header></section>'
    },
    {
      tpl: '<div role="toolbar"><ul><li><button class="pack-icon-delete">Delete</button></li></ul></div>'
    }
  ]
  , toolbox = $('.widget-toolbox')
  , appContent = $('.app-content')
  , tempDragged;

  $.each(components, function(i, component) {
    $('<div>')
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
