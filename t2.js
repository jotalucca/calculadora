<script>
    function calcularPlanos() {
      const idade = document.getElementById('idade').value;
      const peso = document.getElementById('peso').value;
      const altura = document.getElementById('altura').value;
      const imc = calcularIMC(peso, altura);

      const operadoraA = calcularOperadoraA(idade, imc);
      const operadoraB = calcularOperadoraB(imc);

      const resultadoHTML = `
        <table>
          <tr>
            <th>Plano</th>
            <th>Operadora A</th>
            <th>Operadora B</th>
          </tr>
          <tr>
            <td>Básico</td>
            <td>${operadoraA.basico.toFixed(2)} R$</td>
            <td>${operadoraB.basico.toFixed(2)} R$</td>
          </tr>
          <tr>
            <td>Standard</td>
            <td>${operadoraA.standard.toFixed(2)} R$</td>
            <td>${operadoraB.standard.toFixed(2)} R$</td>
          </tr>
          <tr>
            <td>Premium</td>
            <td>${operadoraA.premium.toFixed(2)} R$</td>
            <td>${operadoraB.premium.toFixed(2)} R$</td>
          </tr>
        </table>
      `;

      document.getElementById('resultado').innerHTML = resultadoHTML;
    }

    function calcularIMC(peso, altura) {
      return peso / (altura * altura);
    }

    function calcularOperadoraA(idade, imc) {
      return {
        basico: 100 + (idade * 10 * (imc / 10)),
        standard: (150 + (idade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (idade * 20)) * (imc / 10)
      };
    }
    
    function calcularOperadoraB(imc) {
      const fatorComorbidade = obterFatorComorbidade(imc);
      return {
        basico: 100 + (fatorComorbidade * 10 * (imc / 10)),
        standard: (150 + (fatorComorbidade * 15)) * (imc / 10),
        premium: (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10)
      };
    }

    function obterFatorComorbidade(imc) {
      if (imc < 18.5) {
        return 10; // abaixo do peso
      } else if (imc >= 18.5 && imc < 24.9) {
        return 1; // normal
      } else if (imc >= 24.9 && imc < 29.9) {
        return 6; // sobrepeso
      } else if (imc >= 29.9 && imc < 34.9) {
        return 10; // obesidade
      } else if (imc >= 34.9 && imc < 39.9) {
        return 20; // obesidade mórbida grave
      } else {
        return 30; // obesidade mórbida muito grave
      }
    }
  </script>