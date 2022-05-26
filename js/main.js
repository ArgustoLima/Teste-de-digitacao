var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();

    var qntPalavras = conteudo.split(/\S+/).length -1;
    $("#contador-palavras").text(qntPalavras);

    var qntCaracteres = conteudo.length;
    $("#contador-caracteres").text(qntCaracteres);

});