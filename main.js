//T,R,W,A,G,M,Y,F,P,D,X,B,N,J,Z,S,Q,V,H,L,C,K,E,
var calculaDNI= function(numeroDNI){
var letra="";
var indice = numeroDNI%23
var tablaLetras= ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]
letra = tablaLetras[indice];
return letra;
}

console.log(calculaDNI(12312312));