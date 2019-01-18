function comecar() {
  var nome = prompt("Quem vai jogar?");

  document.getElementsByTagName('h3')[0].innerHTML = "Olá, " + nome + " vamos começar!<br> Escolha um tema:";
  document.getElementById("botoes").innerHTML = ["<button onclick=animais()>Animais</button> <button onclick=comidas()>Comidas</button>"]

  if (nome === null || nome === "") {
      alert("É necessário digitar o nome para começar.")
  } else {

  }
}

var score = 0;

function animais() {
  {
      alert("Boa sorte , cada pergunta terá 3 alternativas, digite a alternativa correta entre 1, 2 OU 3.");

      var tituloResult = document.getElementById("tituloResult").innerHTML = "Resultado"

      var resposta1 = prompt("Pergunta 1:\nO melhor amigo do homem é? \n1- Cachorro \n2- Baleia \n3- Tigre");

      if (resposta1 == "1") {
          document.getElementById("p1").innerHTML = "P1 - Acertou ✓ O melhor amigo do homem é o cachorro."
          score = score + 1;
      } else {
          document.getElementById("p1wrong").innerHTML = "P1 - Errou ✘ O melhor amigo do homem é cachorro."
      }

      var resposta2 = prompt("Pergunta 2:\nNo ditado popular, um gato possui quantas vidas? \n1- Cinco \n2- Dez \n3- Sete");

      if (resposta2 == "3") {
          document.getElementById("p2").innerHTML = "P2 - Acertou ✓ No ditado popular, um gato possui sete vidas."
          score = score + 1;
      } else {
          document.getElementById("p2wrong").innerHTML = " P2 - Errou ✘  Nem cinco, nem dez, no ditado popular, um gato possui sete vidas!"
      }

      var resposta3 = prompt("Pergunta 3: \nQual o nome do gatinho da professora Ju? \n1- Mingau \n2- Frajola \n3- Satanás");

      if (resposta3 == "3") {
          document.getElementById("p3").innerHTML = "P3 - Acertou ✓ O nome do gatinho é Satanás!"
          score = score + 1;
      } else {
          document.getElementById("p3wrong").innerHTML = "P3 - Errou ✘ O nome do gatinho da professora Ju é Satanás."
      }

      document.getElementById('botaoReset').innerHTML = ["<button onclick=refresh()>Jogar Novamente</button>"]

      document.getElementById("score").innerHTML = 'Você acertou ' + score + ' de 3 perguntas. <br> <em>*Para trocar de tema é necessário clicar em "Jogar Novamente"</em>'

  }
  return alert("Parabéns você concluiu o teste. Veja o seu resultado.")

}


function comidas() {
  {
      alert("Boa sorte , cada pergunta terá 3 alternativas, digite a alternativa correta entre 1, 2 OU 3.");

      var tituloResult = document.getElementById("tituloResult").innerHTML = "Resultado"

      var resposta1 = prompt("Pergunta 1 \nFeijoada é comida típica de qual país? \n1- Brasil \n2- Portugal \n3- México");
      if (resposta1 == "1") {
          document.getElementById("p1").innerHTML = "P1 - Acertou ✓ Feijoada é um prato típico brasileiro."
          score = score + 1;
      } else {
          document.getElementById("p1wrong").innerHTML = "P1 - Errou ✘ Feijoada é um prato típico brasileiro."
      }

      var resposta2 = prompt("Pergunta 2 \nQual estado do Brasil que é conhecido por produzir queijos? \n1- Rio de Janeiro \n2- Ceará \n3- Minas Gerais");
      if (resposta2 == "3") {
          document.getElementById("p2").innerHTML = "P2 - Acertou ✓ Minas Gerais tem os melhores queijinhos."
          score = score + 1;
      } else {
          document.getElementById("p2wrong").innerHTML = "P2 - Errou ✘ É em Minas Gerais que tem os melhores queijinhos."
      }

      var resposta3 = prompt("Pergunta 3 \nTomate é um(a)? \n1- Vegetal \n2- Fruta \n3- Legume");

      if (resposta3 == 2) {
          document.getElementById("p3").innerHTML = "P3 - Acertou ✓ Sim, é uma fruta."
          score = score + 1;
      } else {
          document.getElementById("p3wrong").innerHTML = "P3 - Errou ✘ Tomate é uma frutinha"
      }

      document.getElementById('botaoReset').innerHTML = ["<button onclick=refresh()>Jogar Novamente</button>"]

      document.getElementById("score").innerHTML = 'Você acertou ' + score + ' de 3 perguntas. <br> <em>*Para trocar de tema é necessário clicar em "Jogar Novamente"</em>'

  }
  return alert("Parabéns você concluiu o teste. Veja o seu resultado.")

}

function refresh() {
  // var resultados = document.getElementById("resultados");
  location.reload();
}