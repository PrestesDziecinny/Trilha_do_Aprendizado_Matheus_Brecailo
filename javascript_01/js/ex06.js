var nome, n1, n2, div;

nome=prompt("Qual é o seu nome?");
n1=parseFloat(prompt(nome+", digite um valor :"));
n2=parseFloat(prompt(nome+", digite outro valor :"));
    if(n2==0)
    {
        n2=parseFloat(prompt(nome+", digite um valor diferente de 0 :"));
    }
div=n1/n2;
alert(nome+" ,a divisão é : "+div+" receba");
document.write("<h2>"+nome+", o resultado é : "+div+"<h2>")



