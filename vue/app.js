(function() {
  "use strict";

  var demo = new Vue({
  
    el: '#demo',

    data: {
      title: 'todos',

      todos: [
        {
          content: 'hoge',
          done: false
        },
        {
          content: 'foo',
          done: false
        }
      ]
    }

  });


})();
