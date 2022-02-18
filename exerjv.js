function Usuario (nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome ;
    this.idade = idade;
    
     }
  
  let quantidades = Number.parseInt(prompt('Informe quantos usuários deseja'))
 
     for(let i = 0; i < quantidades; i++) {

    let nome = prompt('Informe seu nome')
 
    let sobrenome = prompt('Informe seu sobrenome')
   
    let idade = Number.parseInt(prompt('Informe a sua idade'))
 
 
  var dados = (new Usuario(nome, sobrenome, idade))

    Array.push(dados)

     }