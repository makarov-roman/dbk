<script id="viewDataTemplate" type="text/template">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Price, $</th>
                <th>id</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {{#rows}}
        <tr data-item-id="{{id}}">
            <td data-item-name="Name" class="edit-item">{{Name}}</td>
            <td data-item-name="Company" class="edit-item">{{Company}}</td>
            <td data-item-name="Price, $" class="edit-item">{{Price, $}}</td>
            <td>{{id}}</td>
            <td class="button-container"><span class="delete-item btn btn-danger">Delete</span></td>
        </tr>
        {{/rows}}
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style="width: 96px;"><span class="add-item btn btn-primary">Add</span> </td>
        </tr>
</script>


