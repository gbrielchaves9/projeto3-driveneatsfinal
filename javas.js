function verdinho(seletor){
    const outro = document.querySelector('.borda');
    if ( outro !==null)
    {outro.classList.remove('borda')}
    const botao = document.querySelector(seletor);
    botao.classList.toggle('borda');

   
}

function fechar(){
    const mudar = document.querySelector('.pedido');
    mudar.classList.remove('pedido2')

}

function inferior(){
    const mudar = document.querySelector('.pedido');
    mudar.classList.remove('pedido2')
    

}