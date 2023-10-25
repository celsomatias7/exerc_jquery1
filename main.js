$(document).ready(function(){
    
    $('form').on('submit' , function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        $(`"${novaTarefa}"`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})