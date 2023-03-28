 
        var nome = prompt('Digite seu nome:');
        alert('Bem vindo '+ nome + "!")

        var altura = prompt('Por favor, digite sua altura em centimetros (Exemplo: 170 para 1 metro e 70 cm)');
        var peso = prompt('Por favor, digite seu peso');
        
        altura = parseFloat(altura);
        peso = parseFloat(peso);
        altura /= 100;
        
        imc = peso / (altura*altura);

        console.log('IMC de: '+ imc);

        if (imc < 16){
            criterio = 'Baixo peso, ou seja, muito grave';
        } else if (imc >= 16 && imc <= 16.99){
            criterio = 'Baixo peso, ou seja, grave';
        } else if (imc >= 17 && imc <= 18.49){
            criterio = 'Baixo peso';
        } else if (imc >= 18.50 && imc <= 24.99){
            criterio = 'Peso ideal! Parabéns';
        } else if (imc >= 25 && imc <= 29.99){
            criterio = 'Sobrepeso';
        } else if (imc >= 30 && 34.99){
            criterio = 'Obesidade grau I';
        } else if (imc >= 35 && imc <= 39.99){
            criterio = 'Obesidade grau II';
        } else if (imc >= 40){
            criterio = 'Obesidade grau III';
        }

        document.write(nome + ' possui índice de massa corporal igual a '+ imc+ ' <br>Sendo classificado com '+ criterio);
