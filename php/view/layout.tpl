<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head lang="en">
    <meta charset="UTF-8">
    <title>mongoDB Gui</title>
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/assets/css/main.css"/>
</head>
<body>
<nav class="navbar navbar-default">
    <div class="container">
        <div class="row filters">
            <div class="col-sm-4">
                <label class="sr-only" for="filter-name">Filter Name</label>
                <select class="form-control filter-name" name="filter-name" title="filter-name">
                    <!-- TODO сделать фильтры-->
                    <option>Name</option>
                    <option>Company</option>
                    <option>Price</option>
                </select>
            </div>
            <div class="col-sm-6">
                <div class="input-group filter-value">
                    <input type="text" class="form-control" placeholder="Filter value">
                    <span class="input-group-btn">
                    <button class="btn search-button" type="button">Add</button>
                </span>
                </div>
            </div>
            <div class="col-sm-2">
                <button type="button" class="about-button btn btn-primary">About</button>
            </div>
        </div>
    </div>
</nav>
<div class="container main-container">
    <div class="row">
        <div class="col-sm-3">
            <div id="viewData" class="toolbox menu-element">
                <a href="#">
                    <button class="btn">
                        Data<br>
                        <span class="current">Length: <span id="current-length">Undefined</span></span>
                    </button>
                </a>
            </div>
            <div id="collections" class="toolbox menu-element">
                <a href="#collections">
                    <button class="btn">
                        Collection<br>
                        <span class="current">Current: <span id="current-collection">Undefined</span></span>
                    </button>
                </a>
            </div>
            <div id="databases" class="toolbox menu-element">
                <a href="#databases">
                    <button class="btn">
                        Database<br>
                    <span class="current">Current: <span id="current-db">Undefined</span>
                    </button>
                </a>
            </div>
        </div>
        <div id="app-content" class="col-sm-9">

        </div>
    </div>
</div>
</body>

<script type="text/javascript" src="/assets/js/mustache.js"></script>
<script type="text/javascript" src="/assets/js/http_code.jquery.com_jquery-2.1.4.js"></script>
<script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/assets/js/http_underscorejs.org_underscore.js"></script>
<script type="text/javascript" src="http://backbonejs.org/backbone.js"></script>
<script type="text/javascript" src="/assets/js/app/app.js"></script>
<script type="text/javascript" src="/assets/js/app/viewData.js"></script>
<script type="text/javascript" src="/assets/js/app/viewCollection.js"></script>
<script type="text/javascript" src="/assets/js/app/viewDatabases.js"></script>
<script type="text/javascript" src="/assets/js/app/init.js"></script>



