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
let botaoAtivo = undefined;
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

        botaoAtivo = 1;
    }
    /*Quando os três botões forem !== null o botão inferior deve mudar*/
}
function FecharPedido(){
    if(botaoAtivo===1){
        const fecharPedido = document.querySelector("footer button");
        alert("Botao clicável");
    }
}
