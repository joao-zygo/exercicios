
function calcularDescontoINSS(salarioBruto) {
    const taxaDesconto = 0.08; 
    return salarioBruto * taxaDesconto;
  }

  const nomeFuncionario = prompt("Digite o nome do funcionário:");
  const salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
  
  const valorINSS = calcularDescontoINSS(salarioBruto);
  const salarioLiquido = salarioBruto - valorINSS;
  
  console.log("Folha de Pagamento Simplificada");
  console.log("Nome do Funcionário:", nomeFuncionario);
  console.log("Salário Bruto:", salarioBruto.toFixed(2));
  console.log("Valor do INSS:", valorINSS.toFixed(2));
  console.log("Salário Líquido:", salarioLiquido.toFixed(2));
  