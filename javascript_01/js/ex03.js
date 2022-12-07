var nome, n1, n2, soma;

nome=prompt("Qual é o seu nome?");
n1=parseFloat(prompt(nome+", digite um valor :"));
n2=parseFloat(prompt(nome+", digite outro valor :"));
soma=n1+n2;
alert(nome+" ,a soma é : "+soma+" receba");
document.write("<h2>"+nome+", o resultado é : "+soma+"<h2>")