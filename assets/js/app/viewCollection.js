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
    initialize: function () {
        _.bindAll(this, 'selectColl', 'deleteColl', 'render', 'saveColl');
    },
    filter: new Filter(['Name'], this),
    events: {
        'click .select-coll': 'selectColl',
        'click .delete-coll': 'deleteColl',
        'click .add-coll': 'addColl',
        'click .save-coll': 'saveColl'
    },
    el: '#app-content',

    render: function () {
        var template = $('#viewCollectionTemplate').html(),
            data = {rows: this.filter.applyFilter(this.collection.toJSON(), this.filter.current)},
            html = Mustache.to_html(template, data);
        this.$el.html(html);
        return this;
    },
    startListen: function () {
        this.listenTo(this.collection, 'sync', this.render);
        //Listen Filter
        var self = this;
        $('#filter-form-submit').click(function () {
            self.filter.addFilter();
            self.render();
        })
    },
    stopListen: function () {
        this.stopListening();
        //Stop Listen Filter
        $('#filter-form-submit').off('click');
    },
    selectColl: function (el) {
        this.deactivateAll();
        var id = $(el.currentTarget).parents('tr').data('itemId'),
            newName = this.collection.get(id).get('Name');
        document.cookie = 'collName =' + newName;

        //config set
        window.Config.set('collName', newName);
        App._colls.ViewData.fetch();

        $(el.currentTarget).parents('tr').addClass('active');

    },
    addColl: function (el) {
        var row = $('#viewCollRow').html(),
            buttonRow = $(el.currentTarget).parents('tr'),
            target = $(el.currentTarget).parents('tbody');
        buttonRow = buttonRow.detach();
        target.append(row).append(buttonRow);
    },
    saveColl: function (el) {
        var self = this;
        var row = ($(el.currentTarget).parents('tr').children());
        var tds = [];
        //delete unused fields
        for (var i = 0; i < row.length; i++) {
            if ($(row[i]).hasClass('add-new-item') || $(row[i]).hasClass('button-container')) {
                tds.push(row[i]);
            }
        }
        var model = new App.models.Collections(),
            attrs = model.attributes;
        _.mapObject(attrs, function (item, index) {

            if (index != 'id') {
                var data = $(tds).find('input[name = "' + index + '"]').val();
                if (data === '') {
                    data = 'undef'
                }
                model.set(index, data);
            }
        });
        model.save(null, {
            success: function () {
                self.collection.fetch();
            }
        });
    },
    deactivateAll: function () {
        $('#app-content').find('tr').removeClass('active');
    },
    deleteColl: function (el) {
        var self = this;
        var id = $(el.currentTarget).parents('tr').data('itemId'),
            collToDrop = self.collection.get(id).get('name');
        self.collection.get(id).destroy({
            success: function () {
                self.collection.fetch();
            }
        });
        document.cookie = 'collName=' + collToDrop;
        window.Config.set('collName', 'undefined');
    }
});