var dataArray = [];
_.mapObject(this.model.toJSON(), function(val, key){
var tempArr = [];
_.mapObject(val, function(val, key){
tempArr.push(val);
});
dataArray.push(tempArr);
});
var data = {keys: Object.keys(this.model.toJSON()[0]) ,rows: dataArray};

<script id="viewDataTemplate" type="text/template">
    <table class="bordered highlight">
        <thead>
        <tr>
            {{#keys}}<th>{{.}}</th>{{/keys}}
            <th></th>
        </tr>
        </thead>
        <tbody>
        {{#rows}}
        <tr data-item-id="">
            {{#.}}
            <td>{{.}}</td>
            {{/.}}
            <td><span class="delete-row glyphicon glyphicon-remove"></span></td>
        </tr>
        {{/rows}}
        </tbody>
    </table>
</script>
</html>