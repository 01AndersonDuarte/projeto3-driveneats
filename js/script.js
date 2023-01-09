function selecionarPrato(botaoSelecionado){
    const ultimoSele = document.querySelector(".secao1 .selecionado");

    if(ultimoSele !== null){
        ultimoSele.classList.remove("selecionado");
    }

    botaoSelecionado.classList.add("selecionado");
    AtivarBotaoFinalizar();
}
function selecionarBebida(botaoSelecionado){
    const ultimoSele = document.querySelector(".secao2 .selecionado");

    if(ultimoSele !== null){
        ultimoSele.classList.remove("selecionado");
    }

    botaoSelecionado.classList.add("selecionado");
    AtivarBotaoFinalizar();
}

function selecionarSobremesa(botaoSelecionado){
    const ultimoSele = document.querySelector(".secao3 .selecionado");
    
    if(ultimoSele !== null){
        ultimoSele.classList.remove("selecionado");
    }

    botaoSelecionado.classList.add("selecionado");
    AtivarBotaoFinalizar();
}

function AtivarBotaoFinalizar(){

    const ativarBotao = document.querySelector("footer button");
    const mudarTextoBotao = document.querySelector("footer p");

    let ultimoSele1 = document.querySelector(".secao1 .selecionado");
    let ultimoSele2 = document.querySelector(".secao2 .selecionado");
    let ultimoSele3 = document.querySelector(".secao3 .selecionado");
    
    if(ultimoSele1 !== null && ultimoSele2 !== null && ultimoSele3 !== null){
        ativarBotao.classList.add("selecaoUnica");
        mudarTextoBotao.innerHTML="Fechar Pedido";
        mudarTextoBotao.classList.add("mudarTextoBotão");
        document.querySelector("footer button").removeAttribute("disabled");
    }
    /*Quando os três botões forem !== null o botão inferior deve mudar*/
}
function FecharPedido(){

    let ultimoSele1 = document.querySelector(".secao1 .selecionado .preco");
    let ultimoSele2 = document.querySelector(".secao2 .selecionado .preco");
    let ultimoSele3 = document.querySelector(".secao3 .selecionado .preco");

    const prato = document.querySelector(".secao1 .selecionado .nome").innerHTML;
    const bebida = document.querySelector(".secao2 .selecionado .nome").innerHTML;
    const sobremesa = document.querySelector(".secao3 .selecionado .nome").innerHTML;

    const v1 = parseFloat(ultimoSele1.innerHTML.replace(',','.'));
    const v2 = parseFloat(ultimoSele2.innerHTML.replace(',','.'));
    const v3 = parseFloat(ultimoSele3.innerHTML.replace(',','.'));
    const soma = String((v1+v2+v3).toFixed(2).replace('.', ','));
    /*const somaF = String(soma.replace('.', ','));
    alert(somaF);*/


    let mensagem = `Olá, gostaria de fazer o pedido:${"\n"}- Prato: ${prato}${"\n"}- Bebida: ${bebida}${"\n"}- Sobremesa: ${sobremesa}${"\n"}Total: R$ ${soma}`;
    alert(mensagem);
    mensagem = window.encodeURIComponent(mensagem);
    window.open(`https://wa.me/558894712942?text=${mensagem}`);
    
}