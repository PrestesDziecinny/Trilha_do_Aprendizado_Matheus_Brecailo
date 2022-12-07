var n, cont, result;

n=parseInt(prompt("Digite a tabuada desejada :"));

for(cont=0;cont<11;cont++)
{
    result=n*cont;
    document.write("<h2>"+result+"</h2>")
}