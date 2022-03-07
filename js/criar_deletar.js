// configurando botão de adicionar
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = pacienteForm(form);  
   addTable(paciente);

  var mensagemErro = document.querySelector("#mensagem-erro");
   if (isNaN(paciente.imc)){
      mensagemErro.textContent = "Paciente invalido, não sera incluido uma nova linha na tabela: " + paciente.imc;
      return;
   }else{
      mensagemErro.textContent = " ";
   }
     

   adicionaPacienteNaTabela(paciente);

   // limpar os campos digitados do formulario
   form.reset();

});


//criando adicinação a table
function addTable(paciente){
 
  var pacienteTr = criaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

//funçaõ para pacientes
function pacienteForm(form){

    var paciente = {
      nome: form.nome.value, peso: form.peso.value, altura: form.altura.value, gordura: form.gordura.value, imc: calculaImc(form.peso.value, form.altura.value, form.nome.value),
      classificacao: classe(imc)
    }

    return paciente;

}

//criando tr com valores
function criaTr(paciente){
  
    var criandoTr = document.createElement("tr");


    criandoTr.classList.add("paciente");

    //dando parentesco
    criandoTr.appendChild(criaTd(paciente.nome, "info-nome"));
    criandoTr.appendChild(criaTd(paciente.peso, "info-peso"));
    criandoTr.appendChild(criaTd(paciente.altura, "info-altura"));
    criandoTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    criandoTr.appendChild(criaTd(paciente.imc, "info-imc"));
    criandoTr.appendChild(criaTd(paciente.classificacao, "classificar"));

    return criandoTr;
}

//criando td
function criaTd(dado,classe){
  var criandoTd = document.createElement("td");
  
  criandoTd.textContent =  dado;
  criandoTd.classList.add(classe);

  return criandoTd;
}

//delete usando doble click
var tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function(){

      event.target.parentNode.remove();

  },500);

});


