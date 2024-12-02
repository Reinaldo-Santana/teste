document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }

    if (event.key === 'Enter') {
        // Simula o estado :active para o elemento focado
        const activeElement = document.activeElement;
        if (
            activeElement &&
            document.body.classList.contains('keyboard-navigation')
        ) {
            activeElement.classList.add('active-state');

            // Remover o estado ativo após um curto intervalo (simula comportamento do :active)
            setTimeout(() => {
                activeElement.classList.remove('active-state');
            }, 150);
        }
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');

    // Remove o estado ativo de qualquer elemento
    document.querySelectorAll('.active-state').forEach((el) => {
        el.classList.remove('active-state');
    });
});


document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        if (input.checkValidity() === false) {
            // Reinicia a animação
            input.style.animation = 'none';
            // Força a reativação da animação
            setTimeout(() => {
                input.style.animation = '';
            }, 0);
        }
    });
});


// Seleciona todos os inputs do formulário que possuem o atributo 'required'
const inputs = document.querySelectorAll('input[required]');

// Adiciona o evento 'input' para cada input
inputs.forEach(function (input) {
    input.addEventListener('input', function () {
        // Atualiza o título se o campo for válido
        if (this.validity.valid) {
            this.setCustomValidity(''); // Limpa qualquer erro personalizado
            this.setAttribute('title', 'Preencha este campo'); // Mensagem padrão
        }
    });

    // Adiciona o evento 'invalid' para cada input
    input.addEventListener('invalid', function () {
        // Verifica se o campo está vazio
        if (this.validity.valueMissing) {
            this.setCustomValidity(''); // Limpa qualquer erro personalizado
            this.setAttribute('title', 'Preencha este campo');
        }
        // Se o campo for de tipo 'email'
        else if (this.type === 'email') {
            // Validação específica para email
            if (this.validity.typeMismatch) {
                this.setCustomValidity(''); // Limpa qualquer erro anterior
                this.setAttribute('title', 'Preencha com um e-mail válido');
            }
        }
        // Se o valor não corresponder ao padrão (para campos de texto, como nome)
        else if (this.validity.patternMismatch) {
            this.setCustomValidity(''); // Limpa qualquer erro anterior
            this.setAttribute('title', 'Números e símbolos não são permitidos');
        }
    });
});