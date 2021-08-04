var nomeProduto = [];
var valorProduto = [];
var quantidade;

function Cadastrar() {
    let nomedosProdutos = document.getElementById("nomeProduto").value;
    let valordosProdutos = document.getElementById("valorProduto").value;
    
    if (nomedosProdutos && valordosProdutos){
        nomeProduto.push(nomedosProdutos);
        valorProduto.push(valordosProdutos);
        let Tabela = document.getElementById("Tabela").innerHTML = "<tr><th> Nome dos Produtos </th><th> Valor dos Produtos </th></tr>";
        for (quantidade = 0; quantidade <= (nomeProduto.length - 1); quantidade++) {
        Tabela += "<tr><td>" + nomeProduto[quantidade] + "</td><td>" + valorProduto[quantidade] + "</td></tr>";
        document.getElementById ("Tabela").innerHTML = Tabela;
        console.log(nomedosProdutos);
        console.log(valordosProdutos);
    }
} else {
    alert("Preencha os campos!");
}
document.getElementById("nomeProduto").value = "";
document.getElementById("valorProduto").value = "";

}