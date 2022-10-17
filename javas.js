function verdinho(seletor){
    const outro = document.querySelector('.borda');
    if ( outro !==null)
    {outro.classList.remove('borda')}
    const botao = document.querySelector(seletor);
    botao.classList.toggle('borda');

   
}
function verdinho2(seletor2){
    const outro = document.querySelector('.borda2');
    if ( outro !==null)
    {outro.classList.remove('borda2')}
    const botao = document.querySelector(seletor2);
    botao.classList.toggle('borda2');

   
}
function verdinho3(seletor3){
    const outro = document.querySelector('.borda3');
    if ( outro !==null)
    {outro.classList.remove('borda3')}
    const botao = document.querySelector(seletor3);
    botao.classList.toggle('borda3');

   
}

function fechar(){
    const mudar = document.querySelector('.pedido');
    mudar.classList.remove('pedido2')

}

function inferior(){
    const mudar = document.querySelector('.pedido');
    mudar.classList.remove('pedido2')
    

}