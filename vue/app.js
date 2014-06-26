"use strict";

var heading = new Vue({

  el: '#heading',

  data: {
    title: 'todos',
  }

});

var addTask = new Vue({

  el: '#addTask',

  methods: {
    addTask: function(e) {
               e.preventDefault();
               console.log(this.$data.inputTask);
             }
  },

  data: {
          inputTask: ""
        }

});

var taskList = new Vue({

  el: '#taskList',

  data: {
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
