$(function() {

    var AppView = Backbone.View.extend({

        el: $('#app'),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html('backbone app');
            return this;
        }

    });

    new AppView();

});
