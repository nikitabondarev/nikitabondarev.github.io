function append_task(list, text) {
    var task_list = $('<li>');
    task_list.append($('<span>' + text + '</span>'));

    var button = $('<button id="delete_button">Удалить</button>');
    button.click(function () {
        $(this).parent().remove()
    });
    task_list.append(button);
    list.append(task_list);
}

$(function() {
    var my_list = $('<ul>');
    append_task(my_list, 'Сделать задание #3 по web-программированию');

    $('#root').append(my_list);

    var task_input = $('<input id="task_input" type="text" >');
    var task_button = $('<button id="add_task">Добавить задание</button>');
    task_button.click(function () {
        append_task(my_list, task_input.val())
    });

    $('#root').append(task_input);
    $('#root').append(task_button);
});
