let indexDadosUsuario=1;

let prato, bebida, sobremesa, valorPrimeiroItem, valorSegundoItem, valorTerceiroItem, soma;

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
function confirmarPedido(){
    const endereco = `${document.getElementById("2").value}, ${document.getElementById("3").value}, Nº ${document.getElementById("4").value}`;
    const nome = document.getElementById("1").value;
    const formaPagamento = document.querySelector(".inserirDados .formaPagamentoEscolhida").innerHTML;

    let mensagem = `Olá, gostaria de fazer o pedido:${"\n"}- Prato: ${prato}${"\n"}- Bebida: ${bebida}${"\n"}- Sobremesa: ${sobremesa}${"\n"}Total: R$ ${soma}
    ${"\n"}Informações de contato:${"\n"}- Nome: ${nome}${"\n"}- Endereço: ${endereco}${"\n"}- Forma de pagamento: ${formaPagamento}`;
    
    mensagem = window.encodeURIComponent(mensagem);
    window.open(`https://wa.me/558894712942?text=${mensagem}`);
}
function cancelarPedido(){
    document.querySelector(".overlay").classList.add("escondido");
    document.querySelector(".overlay .resumoDoPedido").classList.add("escondido");
    document.querySelector(".overlay .dadosDoUsuario").classList.remove("escondido");
    indexDadosUsuario=1

    document.querySelector("footer button").removeAttribute("disabled");
    document.querySelector("body").classList.remove("scrolloff");
}
function abrirTelaResumo(){
    document.querySelector(".overlay .dadosDoUsuario").classList.add("escondido");
    document.querySelector(".overlay .resumoDoPedido").classList.remove("escondido");

    const telaResumo = document.querySelector(".resumoDoPedido");
    telaResumo.innerHTML = `<div class="titulo">Resumo do pedido</div>
    <ul>
        <li>
          <div>${prato}</div>
          <div>${valorPrimeiroItem.toFixed(2)}</div>
        </li>
        <li>
          <div>${bebida}</div>
          <div>${valorSegundoItem.toFixed(2)}</div>
        </li>
        <li>
          <div>${sobremesa}</div>
          <div>${valorTerceiroItem.toFixed(2)}</div>
        </li>
        <li class="total">
          <div>Total</div>
          <div>R$ ${soma}</div>
        </li>
    </ul>
    <hr>
    <div class="titulo">Informações pessoais</div>
    <ul>
        <li>
            <div>Nome: ${document.getElementById("1").value}</div>
        </li>
        <li>
            <div>Endereço: ${document.getElementById("2").value}, ${document.getElementById("3").value}, Nº ${document.getElementById("4").value}</div>
        </li>
        <li>
            <div>Forma de pagamento: ${document.querySelector(".inserirDados .formaPagamentoEscolhida").innerHTML}</div>
        </li>
    </ul>
    <div class="botoesResumo">
        <button onclick="confirmarPedido()" class="confirmarPedido">Confirmar pedido</button>
        <button onclick="cancelarPedido()" class="cancelarPedido">Cancelar</button>
    </div>`;
}
function alertaDeCampoVazio(){
    document.getElementById(`${indexDadosUsuario}`).classList.toggle("inputAlerta");
}
function avancar(){
    if(document.getElementById(`${indexDadosUsuario}`).value!==""){
        document.getElementById(`${indexDadosUsuario}`).classList.add("escondido");
        
        if(indexDadosUsuario===4){
            document.getElementById(`${indexDadosUsuario}`).parentNode.classList.add("escondido");
        }

        indexDadosUsuario++;
        document.getElementById(`${indexDadosUsuario}`).classList.remove("escondido");
    }else{
        alertaDeCampoVazio();
        setTimeout(alertaDeCampoVazio, 1000);
    }
}
function escolherPagamento(pagamentoEscolhido){
    const ultimoSele = document.querySelector(".formaPagamentoEscolhida");

    if(ultimoSele !== null){
        ultimoSele.classList.remove("formaPagamentoEscolhida");
    }
    pagamentoEscolhido.classList.add("formaPagamentoEscolhida");
}
function calcularPedido(){
    let ultimoSele1 = document.querySelector(".secao1 .selecionado .preco");
    let ultimoSele2 = document.querySelector(".secao2 .selecionado .preco");
    let ultimoSele3 = document.querySelector(".secao3 .selecionado .preco");

    prato = document.querySelector(".secao1 .selecionado .nome").innerHTML;
    bebida = document.querySelector(".secao2 .selecionado .nome").innerHTML;
    sobremesa = document.querySelector(".secao3 .selecionado .nome").innerHTML;

    valorPrimeiroItem = parseFloat(ultimoSele1.innerHTML.replace(',','.'));
    valorSegundoItem = parseFloat(ultimoSele2.innerHTML.replace(',','.'));
    valorTerceiroItem = parseFloat(ultimoSele3.innerHTML.replace(',','.'));
    soma = String((valorPrimeiroItem+valorSegundoItem+valorTerceiroItem).toFixed(2).replace('.', ','));

    abrirTelaResumo();

}
function abrirTelaInformacoes(){
    document.querySelector(".overlay .dadosDoUsuario").innerHTML=`
    <h1>Insira alguns dados para a entrega:</h1>
    <div class="inserirDados">
        <input id="1" type="text" placeholder="Seu nome: ">
        <input id="2" class="escondido" type="text" placeholder="Bairro: ">
        <input id="3" class="escondido" name="rua" type="text" placeholder="Rua: ">
        <input id="4" class="escondido" name="numero" type="number" placeholder="Número: ">
        <ion-icon onclick="avancar()" name="arrow-forward"></ion-icon>
    </div>
    <div id="5" class="escondido">
        <h1>Forma de Pagamento</h1>
        <div class="inserirDados">
            <button onclick="escolherPagamento(this)">PIX</button>
            <button onclick="escolherPagamento(this)">Cartão</button>
            <button onclick="escolherPagamento(this)">Dinheiro</button>
            <ion-icon onclick="calcularPedido()" name="arrow-forward"></ion-icon>
        </div>
    </div>`;
}
function FecharPedido(){
    document.querySelector("footer button").setAttribute("disabled", "disabled");
    document.querySelector(".overlay").classList.remove("escondido");
    document.querySelector("body").classList.add("scrolloff");
    abrirTelaInformacoes();   
}