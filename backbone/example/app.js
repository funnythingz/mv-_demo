$(function() {

    var AppView = Backbone.View.extend({
    
        el: $('#app'),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html('this is AppView');
            return this;
        }

    });


    new AppView();

});
