<script id="viewCollectionTemplate" type="text/template">
    <table class="table table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {{#rows}}
        <tr class="" data-item-id="{{id}}">
            <td data-item-name="Name" class="select-coll">{{name}}</td>
            <td class="button-container"><span class="delete-coll btn btn-danger">Delete</span></td>
        </tr>
        {{/rows}}
        <tr>
            <td></td>
            <td style="width: 96px;"><span class="add-coll btn btn-primary">Add</span> </td>
        </tr>
</script>


