//js para calcular imc
function calculaImc(peso, altura, nome){

  var valor_peso = true;
  var valor_altura = true;
  
    
  if (nome.length <2) {
    valor_peso = false;
    imc = "";
    return imc;
  } else if ( (peso <= 5 || peso >= 500)&&(altura <= 1 || altura >= 2.99)){
    valor_peso = false;
    imc = "Peso Invalido: " + peso + " :: Altura Invalida: " + altura;
    return imc;
  } else if ( (peso <= 5 || peso >= 500)&&(altura <= 1 || altura >= 2.99) ){
    valor_peso = false;
    imc = "Peso Invalido: " + peso + " :: Altura Invalida: " + altura;
    return imc;
  } else if ( (peso <= 5 || peso >= 500)){
    valor_peso = false;
    imc = "Peso Invalido: " + peso;
    return imc;
  } else if ( (altura <= 1 || altura >= 2.99)){
    valor_peso = false;
    imc = "Altura Invalida: " + altura;
    return imc;
  } else if (peso <= 5 || peso >= 500){
    valor_peso = false;
    imc = "Peso Invalido: " + peso;

    return imc;
  } else if (altura <= 1 || altura >= 2.99){
    valor_altura = false;
    imc = "Altura Invalida: " + altura;

    return imc;
  }

  if(valor_altura && valor_peso){
    imc = peso / (altura * altura);
    return imc.toFixed(2);
  }


}


// função para obter resultado da classificação
function classe (imc_val){

	if (peso == true){  
	   if (imc_val < 18.5){
	       classificacao="Baixo peso";
	   }else if (imc_val<=24.9){
	       classificacao="Peso normal";
	   }else if (imc_val<=29.9){
	       classificacao="Sobrepeso";
	   }else if (imc_val<=34.9){
	       classificacao="Obesidade 1";
	   }else if (imc_val<=39.9){
	       classificacao="Obesidade 2";
	   }else{
	       classificacao="Obesidade 3";
	   }

   
	}else{
    
    if(imc_val <=0){
      classificacao = "";
     }
	   else if (imc_val<=22){
	       classificacao="Baixo peso";
	   }else if (imc_val<27){
	       classificacao="Adequado ou eutrofico";
	   }
     else{
	       classificacao="Sobrepeso";
	   }
 
 
	}
	return classificacao;
}