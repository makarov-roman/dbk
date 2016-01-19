<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head lang="en">
    <meta charset="UTF-8">
    <title>mongoDB Gui</title>
    <!--Import Google Icon Font-->
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
    <link type="text/css" rel="stylesheet" href="/assets/css/materialize.min.css" media="screen,projection"/>
    <link rel="stylesheet" href="/assets/css/main.css"/>
    <meta name="viewport" content="width=1366, initial-scale=1.0"/>
</head>
<body>
<header class="z-depth-2">
    <div class="white-text">
        <div class="row">
            <div class="col s12">
                <h2 class="col s8">MongoDB GUI SPA</h2>
                <div class="col s4">
                    <span type="button" data-target="modal" class="about-button primary-btn btn right modal-trigger">About</span>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="row">
    <div class="main-container col s9">
        <div class="row">
            <div class="col s3">
                <div id="viewData" class="toolbox menu-element">
                    <a href="#">
                        <button class="btn waves-effect waves-light">
                            Data<br>
                            <span class="current">Length: <span id="current-length">Undefined</span></span>
                        </button>
                    </a>
                </div>
                <div id="collections" class="toolbox menu-element">
                    <a href="#collections">
                        <button class="btn waves-effect waves-light">
                            Collection<br>
                            <span class="current">Current: <span id="current-collection">Undefined</span></span>
                        </button>
                    </a>
                </div>
                <div id="databases" class="toolbox menu-element">
                    <a href="#databases">
                        <button class="btn waves-effect waves-light">
                            Database<br>
                    <span class="current">Current: <span id="current-db">Undefined</span>
                        </button>
                    </a>
                </div>
            </div>
            <div id="app-content" class="col s9">

            </div>
        </div>
    </div>
    <div class="col s3 z-depth-2 right-sidebar">
        <div class="filters-panel">
            <div class="container">
                <form id="filter-form" class="col s12" action="">
                    <div class="row center">
                        <h3 class="white-text col s12">Filters</h3>
                        <div class="input-field white-text col s12">
                            <select id="filter-select">
                                <option value="" disabled selected>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div class="input-field white-text col s12">
                            <label class="white-text" for="filter-value">filter value</label>
                            <input type="text" class="form-control" id="filter-value">
                        </div>
                        <div class="input-field col s12">
                            <button type="submit" id="filter-form-submit" class="btn primary-btn">Add</button>
                        </div>
                    </div>
                </form>
                <div class="row center">
                    <div class="col s12">
                        <div class="input-field current-filters col s12">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<!-- Modal Structure -->
<div id="modal" class="modal">
    <div class="modal-content">
        <h4>About</h4>
        <h5>Instruction:</h5>
        <ol>
            <li>Choose DB</li>
            <li>Choose Collection</li>
            <li>Now you can view data which is inside collection.</li>
        </ol>
        <ol>
            <li>To edit data click on table row</li>
            <li>To choose db or collection please click on table row</li>
            <li>Don't try to save or update more then one row at the same time</li>
            <li>There are defaults values for all inputs. I don't force you to fill every input</li>
        </ol>
        <h5>Known Issues:</h5>
        <ol>
            <li>This app is extremely unsafe and unstable, you can do what you want</li>
            <li>Rest API and MVC still very imperfect</li>
            <li>There is no method to edit db or collection names</li>
            <li>Delete function sometimes lost context</li>
            <li>There is no error handlers</li>
        </ol>


    </div>
    <div class="modal-footer center">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
    </div>
</div>

</body>

<script type="text/javascript" src="/assets/js/mustache.js"></script>
<script type="text/javascript" src="/assets/js/http_code.jquery.com_jquery-2.1.4.js"></script>
<script type="text/javascript" src="/assets/js/materialize.min.js"></script>
<script type="text/javascript" src="/assets/js/http_underscorejs.org_underscore.js"></script>
<script type="text/javascript" src="http://backbonejs.org/backbone.js"></script>
<script type="text/javascript" src="/assets/js/app/app.js"></script>
<script type="text/javascript" src="/assets/js/app/filter.js"></script>
<script type="text/javascript" src="/assets/js/app/viewData.js"></script>
<script type="text/javascript" src="/assets/js/app/viewCollection.js"></script>
<script type="text/javascript" src="/assets/js/app/viewDatabases.js"></script>
<script type="text/javascript" src="/assets/js/app/init.js"></script>



