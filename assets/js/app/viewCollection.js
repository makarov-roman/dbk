App.models.Collections = Backbone.Model.extend({
    url: '/ViewCollections/item',
    defaults: {
        Name: 'undef'
    }
});
App.collections.Collections = Backbone.Collection.extend({

    url: 'ViewCollections/collection'
});
App.views.Collections = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, 'selectColl', 'deleteColl', 'render', 'saveColl');
    },
    events: {
        'click .select-coll': 'selectColl',
        'click .delete-coll': 'deleteColl',
        'click .add-coll'   : 'addColl',
        'click .save-coll'  : 'saveColl'
    },
    el: '#app-content',

    render: function() {
        var template = $('#viewCollectionTemplate').html(),
            data = {rows: this.collection.toJSON()},
            html = Mustache.to_html(template, data);
        this.$el.html(html);
        return this;
    },
    startListen: function() {
        this.listenTo(this.collection, 'sync', this.render);
    },
    stopListen: function() {
        this.stopListening(this.collection);
    },
    selectColl: function(el) {
        this.deactivateAll();
        var id = $(el.currentTarget).parents('tr').data('itemId'),
            newName = this.collection.get(id).get('name');
        document.cookie = 'collName =' + newName;

        //config set
        window.Config.set('collName', newName);
        App._colls.ViewData.fetch();

        $(el.currentTarget).parents('tr').addClass('active');

    },
    addColl: function(el) {
        var row = $('#viewCollRow').html(),
            buttonRow = $(el.currentTarget).parents('tr'),
            target = $(el.currentTarget).parents('tbody');
        buttonRow = buttonRow.detach();
        target.append(row).append(buttonRow);
    },
    saveColl: function(el) {
        var row = ($(el.currentTarget).parents('tr').children());
        var tds = [];
        //delete unused fields
        for(var i = 0; i<row.length; i++) {
            if ($(row[i]).hasClass('add-new-item') || $(row[i]).hasClass('button-container')) {
                tds.push(row[i]);
            }
        }
        var model = new App.models.Collections(),
            attrs = model.attributes;
        _.mapObject(attrs, function(item, index) {

            if (index != 'id') {
                var data = $(tds).find('input[name = "'+ index +'"]').val();
                if (data === '') { data = 'undef'}
                model.set(index, data);
            }
        });
        model.save({success: this.collection.fetch()});

    },
    deactivateAll: function() {
        $('#app-content').find('tr').removeClass('active');
    },
    deleteColl: function(el) {
        var id = $(el.currentTarget).parents('tr').data('itemId'),
            collToDrop = this.collection.get(id).get('name');
        this.collection.get(id).destroy();
        document.cookie = 'collName=' + collToDrop;
        window.Config.set('collName', 'undefined');
    }
});