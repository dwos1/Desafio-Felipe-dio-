let name = "David"
let xpHeroi = 7000
if(xpHeroi == 1000){
 console.log("O herói " + name + " está no Nível de Ferro");
    }else if(xpHeroi >= 1001 && xpHeroi <= 2000){
    console.log("O herói " + name + " está no Nível de Bronze");}
else if(xpHeroi >= 2001 && xpHeroi <=5000){
   console.log("O herói " + name + " está no Nivel Prata")

}else if(xpHeroi >= 5001 && xpHeroi <=7000) {
  console.log("O herói " + name + " está no Nível Ouro");
}else if(xpHeroi >= 7001 && xpHeroi <=8000){
  console.log("O herói " + name + " está no Nível Platina");
        
        }else if(xpHeroi >=8001  && xpHeroi <= 9000 ){
        console.log("O herói " + name + " está no Nível Ascedente");
        
        }else if(xpHeroi >= 9001 && xpHeroi <= 10000){
        console.log("O herói " + name + " está no Nivel Imortal")}
        else{ 
        console.log("O herói " + name + " está no Nível Radiante");}