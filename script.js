document.addEventListener("DOMContentLoaded", function () {
    var busca;

    function buscar() {
        busca = document.querySelector('.pesquisa').value;

        switch (busca.toLowerCase()) {
            case 'cursos':
            case 'onde fez faculdade':
            case 'fez faculdade':
            case 'onde estudou':
                window.location.href = "https://www.mackenzie.br/ead/quem-somos/superintendencia-de-ead";
                break;

            case 'instagram':
            case 'redes sociais':
            case 'whatsapp':
            case 'contato':
            case 'telefone para contato':
            case 'telefone':
                window.location.href = "https://www.instagram.com/rodrigo_gomes_20.03/";
                break;

            case 'github':
            case 'projetos':
            case 'ideias':
            case 'quais são seus projetos':
                window.location.href = "https://github.com/rodrigo1488/proj-mrkt/tree/main";
                break;

            case 'endereço':
            case 'onde mora':
            case 'qual seu endereço':
            case 'como te encontro':
                window.location.href = "https://maps.app.goo.gl/e6oCXV29AAmZE6RD6";
                break;

            case 'idade':
            case 'quantos anos':
            case 'data de nascimento':
            case 'quando nasceu':
                alert('possuo 23 anos e nasci na seguinte data 20/03/2000');
                break;

            case 'idiomas':
            case 'idioma':
            case 'quais idiomas fala':
            case 'linguagens':
            case 'habilidades linguísticas':
                alert('Portugues e ingles intermediario');
                break;

            default:
                alert('Nada encontrado. Tente entrar em contato com o suporte.');
                break;
        }
    }

    document.querySelector('.pesquisa').addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            buscar();
        }
    });
});

function mostrarDetalhes(idDescricao) {
    var descricaoCurso = document.getElementById(idDescricao);
    var filho = descricaoCurso.previousElementSibling;  // Obtém o elemento filho diretamente anterior à descrição

    if (descricaoCurso.style.display === "none" || descricaoCurso.style.display === "") {
        descricaoCurso.style.display = "block";
        filho.style.display = "none";
    } else {
        descricaoCurso.style.display = "none";
        filho.style.display = "block";
    }
}