var App =
{
    //constructors
    views: {},
    models: {},
    collections: {},
    //viewEntities
    _views: {},
    //collectionsEntities
    _colls: {},

    display: function (item) {
        this.setMenu(item);
        this.prepareContentContainer();
    },
    setMenu: function (item) {
        $('.menu-element').removeClass('active');
        $('#' + item).addClass('active');
    },
    prepareContentContainer: function () {
        $('#app-content').empty();
    }
};
