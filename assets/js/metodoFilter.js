const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)

    const categoria = elementoBtn.value

    let livrosFiltrados = categoria == 'disponivel' ? FiltarDisponibilidade() : FiltarCategoria(categoria)

    exibirOsLivrosNaTela(livrosFiltrados)   
    
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDisponivel(livrosFiltrados)

        exibirValorTotalTela (valor)
    }
}

function FiltarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function FiltarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalTela (valorTotal) {
 elementoValorDisponivel.innerHTML = 
 `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`

}