<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head lang="en">
    <meta charset="UTF-8">
    <title>mongoDB Gui</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="assets/css/main.css"/>
    <link rel="stylesheet" href="assets/css/entrance.css"/>
</head>
<body>
<nav class="navbar navbar-default">
    <div class="container">
    </div>
</nav>
<div class="container main-container">
    <div class="row">
        <div class="col-sm-12 text-center">
            <div class="col-sm-6 db-column">
                <p>Current Database: <?php echo(isset($_COOKIE['dbName'])?$_COOKIE['dbName']:'Not defined') ?></p>
                <div id="show-db">Available Databases</div>
                <ul class="list-unstyled" id="show-db-list"></ul>
            </div>
            <div class="col-sm-6 coll-column">
                <p style="color: white">Current Collection: <?php echo(isset($_COOKIE['collectionName'])?$_COOKIE['collectionName']:'Not defined') ?> </p>
                <div id="show-colls">Available Collections</div>
                <ul class="list-unstyled" id="show-colls-list"></ul>
            </div>
        </div>
    </div>
    <div class="row text-center">
        <span class="btn" disabled id="get-this-button">View</span>
    </div>
</div>
</body>
<script type="text/javascript" src="assets/js/mustache.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="http://underscorejs.org/underscore-min.js"></script>
<script type="text/javascript" src="http://backbonejs.org/backbone.js"></script>
<script type="text/javascript" src="assets/js/entrance.js"></script>


</html>