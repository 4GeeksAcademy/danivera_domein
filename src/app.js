let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

// Recorrer cada lista con bucles anidados
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      // Concatenar los valores y añadir el dominio .com
      let domainName = pronoun[i] + adj[j] + noun[k] + '.com';
      console.log(domainName); // Mostrar el resultado en la consola
    }
  }
}