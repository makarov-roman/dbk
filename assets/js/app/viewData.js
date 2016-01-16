App.models.ViewData = Backbone.Model.extend ({
    defaults: {
        Name: 'undefined',
        Company: 'undefined',
        "Price, $": 'undefined'
    },
    url: function () {
        if (this.id) {
            return '/ViewData/id';
        } else return '/ViewData/item';
    }
});
App.collections.ViewData = Backbone.Collection.extend ({
    initialize: function() {
        this.listenTo(this, 'sync', function() {
            window.Config.set('length', this.length);
        })
    },
    url: 'viewData/collection'
});
App.views.ViewData = Backbone.View.extend ({
    initialize: function() {
        _.bindAll(this, 'deleteItem', 'showEditForm', 'submitUpdate', 'addItemForm', 'saveItem');
    },
    events: {
        'click .delete-item'   : 'deleteItem',
        'click .edit-item'     : 'showEditForm',
        'click .submit-update' : 'submitUpdate',
        'click .add-item'      : 'addItemForm',
        'click .save-item'     : 'saveItem'
    },
    el: '#app-content',
    render: function() {
        var template = $('#viewDataTemplate').html();
        var data = {rows: this.collection.toJSON()};
        var html = Mustache.to_html(template, data);
        this.$el.html(html);
        return this;
    },
    startListen: function() {
        this.listenTo(this.collection, 'sync', this.render);
    },
    stopListen: function() {
        this.stopListening(this.collection);
    },
    deleteItem: function(el) {
        this.collection.get(($(el.currentTarget).parent().parent().data('item-id'))).destroy();
    },
    showEditForm: function(el) {
        //извлечь значения
        //вставить инпуты
        //вставить кнопку Update
        var row = ($(el.currentTarget).parent().children());
        var tds = [];
        //delete unused fields
        for(var i = 0; i<row.length; i++) {
            if ($(row[i]).hasClass('edit-item') || $(row[i]).hasClass('button-container')) {
                tds.push(row[i]);
            }
        }
        _.map(tds, function(item) {
            if ($(item).hasClass('edit-item')) {
                var key = $(item).data('itemName');
                var value = $(item).html();
                $(item).html('<input type="text" name="' + key + '" value="' + value + '">');
                $(item).removeClass('edit-item');
                $(item).addClass('update-item');
            } else if ($(item).hasClass('button-container')) {
                $(item).empty();
                $(item).append('<span class="submit-update btn btn-success">Update</span>');
            }
        });
        $(el.currentTarget).focus();
    },
    submitUpdate: function(el) {

        var row = ($(el.currentTarget).parents('tr').children());
        var tds = [];
        //delete unused fields
        for(var i = 0; i<row.length; i++) {
            if ($(row[i]).hasClass('update-item') || $(row[i]).hasClass('button-container')) {
                tds.push(row[i]);
            }
        }

        var id = $(tds[0]).parent().data('itemId');
        var model = this.collection.get(id);
        var attrs = model.attributes;

        _.mapObject(attrs, function(item, index) {
            if (index != 'id') {
                var data = $(tds).find('input[name = "'+ index +'"]').val();
                if (data === '') { data = 'undef'}
                model.set(index, data);
            }
        });
        model.save({success: this.collection.fetch()});
    },
    addItemForm: function(el) {
        var row = $('#viewDataRow').html(),
            buttonRow = $(el.currentTarget).parents('tr'),
            target = $(el.currentTarget).parents('tbody');
        buttonRow = buttonRow.detach();
        target.append(row).append(buttonRow);
    },
    saveItem: function(el) {

        var row = ($(el.currentTarget).parents('tr').children());
        var tds = [];
        //delete unused fields
        for(var i = 0; i<row.length; i++) {
            if ($(row[i]).hasClass('add-new-item') || $(row[i]).hasClass('button-container')) {
                tds.push(row[i]);
            }
        }

        var model = new App.models.ViewData(),
            attrs = model.attributes;

        _.mapObject(attrs, function(item, index) {
            if (index != 'id') {
                var data = $(tds).find('input[name = "'+ index +'"]').val();
                if (data === '') { data = 'undef'}
                model.set(index, data);
            }
        });
        model.save({success: this.collection.fetch()});
    }
});