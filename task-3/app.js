function append_task(list, text) {
    var task_li = $('<li>');
    task_li.append($('<span>'+ text + '</span>'));

    var button = $('<button id="del-button">Удалить</button>');
    button.click(function () {
        $(this).parent().remove()
    });
    task_li.append(button);
    list.append(task_li);
}

$(function() {
    var my_list = $('<ul>');
    append_task(my_list, 'Сделать задание #3 по web-программированию');

    $('#root').append(my_list);

    var add_task_input = $('<input id="add_task_input" type="text" >');
    var add_task_button = $('<button id="add_task">Добавить задание</button>');
    add_task_button.click(function () {
        append_task(my_list, add_task_input.val())
    });
    $('#root').append(add_task_input);
    $('#root').append(add_task_button);
});
