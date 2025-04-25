const input = document.getElementById('search-input');
const botao = document.getElementById('search-button');

botao.addEventListener('click', () => {
    input.value = 'Você buscou por: "assunto buscado"';
});