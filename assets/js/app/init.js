/**
 * Created by Роман on 12/22/2015.
 */
(function ($) {

    $(document).ready(function () {
        var Router = Backbone.Router.extend({

            initialize: function () {
                //init all main app entities
                if (!App._views.ViewData) {
                    var model = new App.models.ViewData();
                    App._colls.ViewData = new App.collections.ViewData({
                        model: model
                    });
                    App._views.ViewData = new App.views.ViewData({
                        collection: App._colls.ViewData,
                        model: model
                    });
                }
                if (!App._views.ViewCollections) {
                    var model = new App.models.Collections();
                    App._colls.ViewCollections = new App.collections.Collections({
                        model: model
                    });
                    App._views.ViewCollections = new App.views.Collections({
                        collection: App._colls.ViewCollections,
                        model: model
                    });
                }
                if (!App._views.ViewDatabases) {
                    var model = new App.models.Databases();
                    App._colls.ViewDatabases = new App.collections.Databases({
                        model: model
                    });
                    App._views.ViewDatabases = new App.views.Databases({
                        collection: App._colls.ViewDatabases,
                        model: model
                    })
                }

            },
            routes: {
                '': 'viewData',
                'collections': 'viewCollections',
                'databases': 'databases'
            },
            viewData: function () {
                this.stopListenAll();
                App.display('viewData');
                App._views.ViewData.startListen();
                App._views.ViewData.collection.fetch();

            },
            viewCollections: function () {
                this.stopListenAll();
                App.display('collections');
                App._views.ViewCollections.startListen();
                App._views.ViewCollections.collection.fetch();
            },
            databases: function () {
                this.stopListenAll();
                App.display('databases');
                App._views.ViewDatabases.startListen();
                App._views.ViewDatabases.collection.fetch();
            },
            stopListenAll: function () {
                _.each(App._views, function (item) {
                    item.stopListen();
                });
            }

        });

        var Config = Backbone.Model.extend({
            initialize: function () {
                this.fetch();
                this.on('change', function () {
                    $('#current-collection').text(this.get('collName'));
                    $('#current-db').text(this.get('dbName'));
                    $('#current-length').text(this.get('length'));
                })
            },
            url: 'Config',
            defaults: {
                'dbName': 'undefined',
                'collName': 'undefined',
                'length': 'undefined'
            }
        });

        function init() {
            window.Config = new Config();
            window.Router = new Router();
            window.App = App;
            Backbone.history.start();
        }

        init();


        $(document).on('click', 'a[href^="#"]', function (e) {
            e.preventDefault();
            var link = this.hash.substr(1);
            window.Router.navigate(link, {trigger: true});
        });
        $(document).ready(function() {
            $('select').material_select();
        });

        $(document).ready(function(){
            $('.modal-trigger').leanModal();
        });

    })


})(jQuery);