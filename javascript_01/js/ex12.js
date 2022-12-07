var v=[81,100,88,40];

//alert(v);
v=[150];
//alert(v);

list=["Zeca", 80, "Rua A", "Irati", "PR", 1900, true];
alert(list);
for(var i=0; i<list.length; i++)
{
    document.write("<h2>"+list[i]+" </h2>");
}

list.push("845000-000"); //Adiciona elemento na última posição
alert(list)

list.pop(); //Exclui o elemento da última posição