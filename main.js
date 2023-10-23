const form = document.getElementById('form-atividade'); /*criação da variável FORM */

/*criação de 2 arrays para armazenar as notas e atividades do usuário */
const atividades = []; 

/*adicionando uma regra para não sobrepor valores na tabela e sim adicionar*/
let linhas = '';

form.addEventListener('submit',function(e) { /*regra de validação do submit do form */
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha() {
    const inputNomeTarefa = document.getElementById('nome-tarefa');
    
    /*para não permitir que o usuário coloque a mesma atividade duas vezes*/
    if (atividades.includes(inputNomeTarefa.value)) {
        alert(`a tarefa ${inputNomeTarefa.value} já foi inserida`);
    } else {
        /*adicionando um push que force a gravação dos dados dos usuários */
    atividades.push(inputNomeTarefa.value);
    
    /*adicionando as informação de Nome e nota no corpo da tabela */
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `</tr>`;

    /*adicionando uma regra para não sobrepor valores na tabela e sim adicionar*/
    linhas += linha;
    }    

    inputNomeContato.value='';
    }

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody'); /*preenchendo a tabela com os dados*/
    corpoTabela.innerHTML = linhas;
}
