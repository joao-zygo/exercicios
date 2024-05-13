
function calcularDescontoINSS(salarioBruto) {
    if (salarioBruto <= 1000) {
      return salarioBruto * 0.08;
    } else if (salarioBruto <= 1500) {
      return salarioBruto * 0.085;
    } else {
      return salarioBruto * 0.09;
    }
  }
  const nomeFuncionario = prompt("Digite o nome do funcionário:");
  const salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
  
 
  const valorINSS = calcularDescontoINSS(salarioBruto);
  const salarioLiquido = salarioBruto - valorINSS;

  console.log("Folha de Pagamento Simplificada");
  console.log("Nome do Funcionário:", nomeFuncionario);
  console.log("Salário Bruto:", salarioBruto.toFixed(2));
  console.log("Taxa de Desconto:", (valorINSS / salarioBruto) * 100 + "%");
  console.log("Valor do INSS:", valorINSS.toFixed(2));
  console.log("Salário Líquido:", salarioLiquido.toFixed(2));
  