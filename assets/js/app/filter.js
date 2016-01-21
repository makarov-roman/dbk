var Filter = function (attrs, parent) {
    this.select = $('#filter-select');
    this.value = $('#filter-value');
    this.container = $('.current-filters');
    this.current = [];
    this.attrs = attrs;
    this.parent = parent;
};
Filter.prototype = {
    updateSelect: function () {
        this.select.empty();
        this.attrs.forEach(function (val) {
            this.select.append('<option value="' + val + '">' + val + '</option>');
        }, this);
        this.value.val('');
        //Если уже установлены фильты на этой вью, то отобразить
        this.showFilterChips();
        return this.select.material_select();
    },
    addFilter: function () {
        //Может существовать не более 1 фильтра на каждое поле
        var isNew = true;
        this.current.forEach(function (item) {
            if (item.Name === this.select.val()) {
                isNew = false;
            }
        }, this);
        if (isNew) {
            this.current.push({
                'Name': this.select.val(),
                'Value': this.value.val()
            });
            this.showFilterChips();
            this.value.val('');
        }
    },
    showFilterChips: function () {
        var self = this;
        this.container.empty();
        this.current.forEach(function (item) {
            this.container.append(Mustache.to_html($('#filterChips').html(), item)).find('i').click(function () {
                self.deleteFilter(item.Name);
            });
        }, this)
    },
    deleteFilter: function (Name) {
        var self = this;
        this.current.map(function (item, key) {
            if (item.Name === Name) {
                self.current.splice(key, 1);
            }
        });

        self.parent.render();
    },
    applyFilter: function (rows, filters) {
        filters.forEach(function (filterObj) {
            rows = rows.filter(function (rowVal) {
                return rowVal[filterObj.Name] === filterObj.Value
            });
        });
        return rows;
    }
};