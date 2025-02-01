const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };
  
  // Exemplo de uso
  const elemento = document.querySelector("#meuElemento");
  console.log(isInViewport(elemento)); // true ou false
  