// ------- Arquivo JavaScript ----------

const inputTexto = document.querySelector(".input-text");
const mensagem = document.querySelector("#mensagem");


// ------- Criptografar----------

function btncriptografar()
{
  const textocriptografar  = criptografar (inputTexto.value)
  mensagem.value = textocriptografar
  mensagem.style.background="none"
}
function criptografar(stringCriptografar)
{
  let matrizCodigo = [ ["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"] ];
  stringCriptografar = stringCriptografar.toLowerCase();

  for (let i=0; i < matrizCodigo.length; i++)
  {
    if(stringCriptografar.includes(matrizCodigo[i][0]))
    {
      stringCriptografar = stringCriptografar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
  }
  return stringCriptografar;
}


// ------- Descriptografar----------
function btndescriptografar()
{
  const textodescriptografar = descriptografar (inputTexto.value)
  mensagem.value = textodescriptografar
  mensagem.style.background="none"
}

function descriptografar(stringDescriptografar) 
{
  let matrizCodigo = [ ["enter", "e"], ["imes", "i", ],["ai", "a"], ["ober", "o"],["ufat", "u"]];

  stringDescriptografar = stringDescriptografar.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) 
  {
      if (stringDescriptografar.includes(matrizCodigo[i][0])) 
      {
        stringDescriptografar = stringDescriptografar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
      }
  }
  return stringDescriptografar;
}


// ------- Copiar ----------
function btncopiar() {
  let contenido = document.querySelector("#mensagem");
  contenido.select();
  document.execCommand('copy');
  //alert("Copiado!");
 
}



