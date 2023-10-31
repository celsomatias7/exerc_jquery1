$(document).ready(function(){
    
    $('form').on('submit' , function(e){
        e.preventDefault(); /*para impedir que o formulário recarregue */
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);
        
        $(novoItem).appendTo('ul'); /*colocando a nova tarefa na lista */
        $('#nome-tarefa').val(''); /*esvaziando o campo input do formulário */
    })

    $('ul').on('click','li',function(e){
        e.preventDefault();
        $(this).toggleClass('riscarTarefa') /*para o evento de riscar a tarefa após o clique, primeiro temos que mudar a classe do item, isso é feito com o toggleClass*/
    })
})