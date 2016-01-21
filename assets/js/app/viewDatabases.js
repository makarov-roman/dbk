App.models.Databases = Backbone.Model.extend({
    url: '/ViewDatabases/item',
    defaults: {
        Name: 'undefined',
        CollsAmount: 'undefined'
    }
});
App.collections.Databases = Backbone.Collection.extend({
    url: 'ViewDatabases/collection'
});
App.views.Databases = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, 'render', 'startListen', 'stopListen');
    },
    filter: new Filter(['Name']),
    events: {
        'click .select-db': 'selectDb',
        'click .delete-db': 'deleteDb',
        'click .add-db': 'addDb',
        'click .save-db': 'saveDb'
    },
    el: '#app-content',
    render: function () {
        var template = $('#viewDatabaseTemplate').html(),
            data = {rows: this.filter.applyFilter(this.collection.toJSON(), this.filter.current)},
            html = Mustache.to_html(template, data);
        this.$el.html(html);
        if (window.Config.get('dbName') != 'undefined') {
            //TODO Поставить active на выбранную бд
        }
        return this;
    },
    startListen: function () {
        this.listenTo(this.collection, 'sync', this.render);
        var self = this;
        $('#filter-form-submit').click(function () {
            self.filter.addFilter();
            self.render();
        })
    },
    stopListen: function () {
        this.stopListening();
        $('#filter-form-submit').off('click');
    },
    selectDb: function (el) {
        $('#app-content').find('tr').removeClass('active');
        var id = $(el.currentTarget).parents('tr').data('itemId'),
            newName = this.collection.get(id).get('name');
        document.cookie = 'dbName =' + newName;
        document.cookie = 'collName = undefined';

        App._colls.ViewCollections.fetch();
        App._colls.ViewData.fetch();

        //config set
        window.Config.clear().set(window.Config.defaults);
        window.Config.set('dbName', newName);

        $(el.currentTarget).parents('tr').addClass('active');
    },
    deleteDb: function (el) {
        var self = this;
        var id = $(el.currentTarget).parents('tr').data('itemId'),
            dbToDrop = this.collection.get(id).get('name');
        document.cookie = 'dbName=' + dbToDrop;
        this.collection.get(id).destroy({
            success: function () {
                self.collection.fetch();
            }
        });
        document.cookie = 'dbName = undefined';
        Config.set('dbName', 'undefined');

    },
    addDb: function (el) {
        var row = $('#viewDatabaseRow').html(),
            buttonRow = $(el.currentTarget).parents('tr'),
            target = $(el.currentTarget).parents('tbody');
        buttonRow = buttonRow.detach();
        target.append(row).append(buttonRow);
    },
    saveDb: function (el) {
        var self = this;
        var row = ($(el.currentTarget).parents('tr').children());
        var tds = [];
        //delete unused fields
        for (var i = 0; i < row.length; i++) {
            if ($(row[i]).hasClass('add-new-item') || $(row[i]).hasClass('button-container')) {
                tds.push(row[i]);
            }
        }
        var model = new App.models.Databases(),
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
    }

});