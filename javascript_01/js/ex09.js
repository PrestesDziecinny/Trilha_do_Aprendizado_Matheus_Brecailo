var d;

d=parseInt(prompt("Insira o dia da semana de 1 a 7 considerando o domingo como o primeiro dia da semana"));

switch(d)
{
    case 1:
        {
            alert("Domingo");
            break
        }
    case 2:
        {
            alert("Segunda-feira");
            break
        }
    case 3:
        {
            alert("Terça-feira");
            break
        }
    case 4:
        {
            alert("Quarta-feira");
            break
        }
    case 5:
        {
            alert("Quinta-feira");
            break
        }
    case 6:
        {
            alert("Sexta-feira");
            break
        }
    case 7:
        {
            alert("Sábado");
            break
        }
    default:
        {
            alert("Opção inválida");
            break
        }
}