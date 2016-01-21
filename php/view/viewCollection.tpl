<script id="viewCollectionTemplate" type="text/template">
    <table class="bordered highlight">
        <thead>
        <tr>
            <th>Name</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {{#rows}}
        <tr class="" data-item-id="{{id}}">
            <td data-item-name="Name" class="select-coll">{{Name}}</td>
            <td class="button-container"><span class="delete-coll btn">Delete</span></td>
        </tr>
        {{/rows}}
        <tr>
            <td></td>
            <td style="width: 96px;"><span class="add-coll primary-btn btn">Add</span> </td>
        </tr>
</script>


