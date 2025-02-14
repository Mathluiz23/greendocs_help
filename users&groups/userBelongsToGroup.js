function verificarUsuarioNoGrupo(usuario, grupo) {
    return grupo.includes(usuario);
  }
  const grupo = ['Maria', 'João', 'Carlos'];
  const usuario = 'João';
  
  const resultado = verificarUsuarioNoGrupo(usuario, grupo);
  console.log(resultado); // true (pois João está no grupo)
  