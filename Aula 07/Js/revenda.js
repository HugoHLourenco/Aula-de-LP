var carros = []

function adicionar() {
    var inModelo = Number(document.getElementById("inModelo")).value
    var inPreco = Number(document.getElementById("inPreco")).value

    //  VALIDAR CAMPOS
    if (inModelo = "" || inPreco == 0 || isNaN(inPreco)) {
        alert("INFORME CORRETAMENTE OS DADOS!!!")
        document.getElementById("inModelo").focus()
    }

    //  ADICIONAR DADOS AO VETOR
    carros.push({ inModelo: inModelo, inPreco: inPreco })

    //  LIMPA CAMPOS
    document.getElementById("inModelo").value = ""
    document.getElementById("inPreco").value = ""

    listar()    //  CHAMAR A FUNÇÃO QUE LISTA OS CARROS
}

function listar() {

}