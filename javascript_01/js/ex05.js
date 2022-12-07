var nome, n1, n2, mult;

nome=prompt("Qual é o seu nome?");
n1=parseFloat(prompt(nome+", digite um valor :"));
n2=parseFloat(prompt(nome+", digite outro valor :"));
mult=n1*n2;
alert(nome+" ,o produto é : "+mult+" receba");
document.write("<h2>"+nome+", o resultado é : "+mult+"<h2>")