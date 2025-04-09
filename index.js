/*Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
  */


//Classe
class hero{
  constructor(name, age, type){ // função dentro da classe
    this.name = name // variavel
    this.age = age
    this.type = type
  }
  //methodo
  attack (){
    let strike;

            if (this.type === "mago"){
              strike = "magia"
            }
            else if (this.type === "guerreiro"){
              strike = "espada"
            }
            else if (this.type === "monge"){
              strike = "artes marciais"
            }
            else if (this.type === "ninja"){
              strike = "shuriken"
            }
            else {
              strike = "não houve ataque"
            }
        switch(this.type){
          case "mago":
              console.log(`O ${this.name}, atacou usando ${strike}`)
          break;
          case "guerreiro":
            console.log(`O ${this.name}, atacou usando ${strike}`)
          break;
          case "monge":
            console.log(`O ${this.name}, atacou usando ${strike}`)
          break;
          case "ninja":
            console.log(`O ${this.name}, atacou usando ${strike}`)
          break;
        }
  }  
}
const fighter = new hero('Aragorn', 32, "guerreiro")
fighter.attack()

