/**
 * Created by Роман on 12/5/2015.
 */
$(document).ready(function() {
   //получить списки дб/коллекций
    // отправить запрос на куки
    function showDb() {
        return $.ajax({
            url: 'db',
            method: 'GET',
            success: function (data) {
                JSON.parse(data).forEach(function (rowData) {
                    $('#show-db-list').append('<li class="db-list-element">' + rowData + '</li>');
                });
                showColl();
            }
        })
    }
    function showColl() {
        $('.db-list-element').click(function showCollection() {
            $('#show-colls-list').hide().empty();
            $.ajax({
                url: 'collections',
                data: {'dbName' : this.innerHTML},
                method: 'GET',
                context: this,
                success: function (data) {
                    $('.db-list-element').removeClass('active');
                    $(this).addClass('active');
                    checkButton();
                    JSON.parse(data).forEach(function (rowData) {
                        $('#show-colls-list').append('<li class="colls-list-element">' + rowData + '</li>').fadeIn(300);
                    });
                    $('.colls-list-element').click(function(){
                        $('.colls-list-element').removeClass('active');
                        $(this).addClass('active');
                        checkButton()
                    })
                }

            });

        })
    }
    function checkButton() {
        if($('.db-list-element').hasClass('active')&&$('.colls-list-element').hasClass('active')) {
            $('#get-this-button').attr('disabled', false);
        } else $('#get-this-button').attr('disabled', true);
    }
    function getThis() {
        $('#get-this-button').click(function(){
            if(!$('#get-this-button').attr('disabled')){
                var dbName = $('.db-list-element.active').text();
                var collName = $('.colls-list-element.active').text();
                var data = {'dbName': dbName, 'collName': collName};
                JSON.stringify(data);
                $.post('cookie', data, function(){
                   window.location.href = "/app"
                });
            }
        })
    }
    showDb();
    getThis();



});