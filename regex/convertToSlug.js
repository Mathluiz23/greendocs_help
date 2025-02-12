const toSlug = (str) => 
    str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
       .replace(/\s+/g, "-").replace(/[^\w-]/g, "");
  
  console.log(toSlug("Título de Exemplo!")); // "titulo-de-exemplo"
  