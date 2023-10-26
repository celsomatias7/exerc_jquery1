$(document).ready(function(){
    
    $('form').on('submit' , function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $('#nome-tarefa').val('');
    })
})