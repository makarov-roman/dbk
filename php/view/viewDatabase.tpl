<script id="viewDatabaseTemplate" type="text/template">
    <table class="table table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {{#rows}}
        <tr data-item-id="{{id}}">
            <td class="select-db" data-item-name="Name" class="">{{name}}</td>
            <td class="button-container"><span class="delete-db btn btn-danger">Delete</span></td>
        </tr>
        {{/rows}}
        <tr>
            <td></td>
            <td style="width: 96px;"><span class="add-db btn btn-primary">Add</span> </td>
        </tr>
</script>


