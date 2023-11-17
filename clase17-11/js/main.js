let numeros = [];

    function agregarNumero() {
      const numeroInput = document.getElementById('numeroInput');
      const numero = parseFloat(numeroInput.value);

      if (!isNaN(numero)) {
        if (numero >= 0 && numero <= 100) {
          numeros.push(numero);
          mostrarNumeros();
          numeroInput.value = '';
        } else {
          alert('Ingrese un número entre 0 y 100.');
        }
      } else {
        alert('Ingrese un número válido.');
      }
    }

    function generarNumeros() {
      for (let i = 0; i < 5; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 101); // Números entre 0 y 100
        numeros.push(numeroAleatorio);
      }
      mostrarNumeros();
    }

    function mostrarNumeros() {
      const numerosBody = document.getElementById('numerosBody');
      numerosBody.innerHTML = '';

      for (let i = 0; i < numeros.length; i++) {
        const fila = document.createElement('tr');
        const asterisco = document.createElement('td');
        asterisco.textContent = '*';
        const numero = document.createElement('td');
        numero.textContent = numeros[i];

        fila.appendChild(asterisco);
        fila.appendChild(numero);

        numerosBody.appendChild(fila);
      }
    }

    function calcularProm() {
      const promedio = numeros.reduce((total, num) => total + num, 0) / numeros.length;
      alert(`El promedio es: ${promedio.toFixed(2)}`);
    }

    function calcularMaxMin() {
      const maximo = Math.max(...numeros);
      const minimo = Math.min(...numeros);
      alert(`El máximo es: ${maximo}\nEl mínimo es: ${minimo}`);
    }