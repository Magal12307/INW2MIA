class martelo{
    constructor(id,descriçao,ativo,estoque,preco,tamanho,cor){
    this.id=id
    this.descriçao=descriçao
    this.ativo=ativo
    this.estoque=estoque
    this.preco=preco
    this.tamanho=tamanho
    this.cor=cor
}
ativar(){
    this.ativo=true
}
retirarEstoque(quantidade){
    if (this.ativo){				
    if(quantidade<0){				
    console.log("valor negativo...")				
    }				
    else if(quantidade ==0 ){				
    console.log("valor zerado...")				
    }			
    else {			
    this.estoque-= quantidade		
    }				
    }				
    else {				
    console.log("produto inativo...")				
    }				
    }				
incluirEstoque(quantidade){
    if (this.ativo){				
        if(quantidade<0){				
        console.log("valor negativo")				
        }				
        else if(quantidade==0){				
        console.log("valor zerado...")				
        }				
        else {				
        this.estoque += quantidade			
        }				
        }				
        else {				
        console.log("produto inativo....")				
}                    
}
}

//programa principal

const leia = require("prompt-sync")()
i=1 
while(i=1){
let pedido=(leia("deseja fazer compras?S/N"))
if(pedido=="S"){
    console.log("")
    console.log("cadastro inicial do produto")
    console.log("")
    let descriçao=(leia("digite a descriçao do martelo "))
    console.log("")
    let preco=(leia("qual o preço do martelo? "))
    console.log("")
    let tamamnho=(leia("qual o tamanho do martelo? "))
    console.log("")
    let cor=(leia("qual a cor do martelo "))
    let m1= new martelo(1,descriçao,false,10,preco,tamamnho,cor)
    m1.ativar()
    console.log("")
    console.log("produto cadastrado")   
    for (let x = 1; x <= 5; x++) {
        console.log("")
        console.log("VENDA " + x)
        console.log("martelo." + m1.id)
        console.log("descriçao: " + m1.descriçao)
        console.log("estoque: " + m1.estoque)
        console.log("tamanho: " + m1.tamanho)
        console.log("cor: " + m1.cor )
       
        console.log("")
        quantidade = parseInt(leia("quantos martelos? "))
        m1.retirarEstoque(quantidade)
        let pagar=(m1.preco*quantidade)
        console.log("valor a pagar: " + pagar )
    }

    while(m1.estoque<10){
        console.log("")
        console.log("martelo." + m1.id)
        console.log("descriçao: " + m1.descriçao)
        console.log("estoque: " + m1.estoque)
        console.log("tamanho: " + m1.tamanho)
        console.log("cor: " + m1.cor )
       
        
        console.log("")
        quantidade = parseInt(leia("quantos martelos quer comprar? "))
        m1.incluirEstoque(quantidade)
    }
    console.log("")
    console.log("estoque final: " + m1.estoque)
}
else{
    console.log("")
    console.log("ate breve")
}
}