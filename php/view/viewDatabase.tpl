<script id="viewDatabaseTemplate" type="text/template">
    <table class="bordered highlight">
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
            <td class="button-container"><span class="delete-db btn primary-btn">Delete</span></td>
        </tr>
        {{/rows}}
        <tr>
            <td></td>
            <td style="width: 96px;"><span class="add-db btn primary-btn">Add</span> </td>
        </tr>
</script>


