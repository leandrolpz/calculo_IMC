// mudando o titulo para o nome da dupla
const titulo = document.querySelector('.titulo')
titulo.innerHTML = "Davi Sandro & Leandro Penha"



var pacientes = document.querySelectorAll(".paciente");
//estrutura de repetição para valores de paciente
for(var i = 0; i < pacientes.length ; i++){

  var paciente = pacientes[i];

  var nome_paciente = paciente.querySelector(".info-nome");
  var peso_paciente = paciente.querySelector(".info-peso");
  var altura_paciente = paciente.querySelector(".info-altura");
  var nome = nome_paciente.textContent;
  var peso = peso_paciente.textContent;
  var altura = altura_paciente.textContent;

  var imc_paciente = paciente.querySelector(".info-imc");

  imc_paciente.textContent = calculaImc(peso,altura,nome);
  
  var classificacaoPaciente = paciente.querySelector(".classificar");
  
  classificacaoPaciente.textContent = classe(imc);

  if (isNaN(imc)){
    paciente.classList.add("paciente-invalido");
  }

}

