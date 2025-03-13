function calcularDiasVencidos(vencimento) {
    const hoje = new Date();
    const dataVencimento = new Date(vencimento);
  
    const diferencaEmDias = Math.floor((hoje - dataVencimento) / (1000 * 60 * 60 * 24));
    return diferencaEmDias > 0 ? diferencaEmDias : 0; 
 }
 // Exemplo de uso
 const vencimento = "2025-02-20"; 
 console.log(calcularDiasVencidos(vencimento));