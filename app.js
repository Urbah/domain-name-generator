let pronoun = ['el','tu','mi','nuestro','su'];
let adj = ['fantastico', 'gran', 'fabuloso', 'genial', 'asombroso', 'malvado' ];
let noun = ['mundo','arbol','doctor','parque','campamento'];
let extension = ['.com','.net','.us','.io','.cl'];

function domainGenerator(pron, adj, noun, ext){
  for(let i = 0; i < pron.length ; i++){
    for(let o = 0; o < adj.length; o++){
      for(let p = 0; p < noun.length; p++){
        for(let u = 0; u < ext.length; u++){
          console.log(pron[i] + adj[o] + noun[p] + ext[u])
        }
      }
    }
  }
}

