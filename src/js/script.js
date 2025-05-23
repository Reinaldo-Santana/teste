// Adiciona a classe quando o usuário navega com o teclado
function handleKeydown(event) {
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    } else if (event.key === 'Enter') {
        simulateActiveState();
    }
}

// Remove a classe quando o usuário usa o mouse
function handleMouseDown() {
    document.body.classList.remove('keyboard-navigation');
}

// Simula o comportamento do :active
function simulateActiveState() {
    const activeElement = document.activeElement;

    if (activeElement) {
        activeElement.classList.add('active-state');

        setTimeout(() => {
            activeElement.classList.remove('active-state');
        }, 150);
    }
}

// Adiciona os event listeners
document.addEventListener('keydown', handleKeydown);
document.addEventListener('mousedown', handleMouseDown);




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



// Função para capitalizar palavras
function capitalizeWords(input) {
    input.value = input.value.replace(/\b(\p{L})(\p{L}*)/gu, (match, firstLetter, restOfWord) => {
        return firstLetter.toUpperCase() + restOfWord.toLowerCase();
    });
}

// Seleciona os campos
const nomeInput = document.getElementById('nome');

// Aplica a capitalização e força a validação durante a digitação
[nomeInput].forEach(input => {
    input.addEventListener('input', () => {
        capitalizeWords(input);
        forceValidation(input);
    });
});

// Função para forçar a revalidação
function forceValidation(input) {
    const regex = /^[A-Za-zÀ-ÿ\s'-]*$/; // Mesmo pattern do HTML
    if (!regex.test(input.value)) {
        input.setCustomValidity("Insira apenas letras, espaços, apóstrofos ou hifens.");
    } else {
        input.setCustomValidity(""); // Campo válido
    }
    input.reportValidity(); // Exibe a mensagem de erro personalizada (se houver)
}



const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (!input.validity.valid) {
            if (input.type === 'text') {
                input.title = 'Digite um nome válido!';
            } else if (input.type === 'email') {
                input.title = 'Digite um e-mail válido!';
            }
        } else {
            if (input.type === 'text') {
                input.title = 'Digite o seu nome completo';
            } else if (input.type === 'email') {
                input.title = 'Digite o seu e-mail';
            }
        }
    });
})



document.getElementById('formulario').addEventListener('submit', function (event) {
    const nomeInput = document.getElementById('nome');
    const erroDiv = document.getElementById('erro-nome');
    if (nomeInput.value.length < 5) {
        event.preventDefault(); // Impede o envio do formulário
        erroDiv.textContent = 'O nome completo deve ter pelo menos 5 caracteres.';
    } else {
        erroDiv.textContent = ''; // Limpa a mensagem de erro
    }
});

document.getElementById('nome').addEventListener('input', function () {
    const nomeInput = document.getElementById('nome');
    const erroDiv = document.getElementById('erro-nome');
    if (nomeInput.value.length >= 5) {
        erroDiv.textContent = ''; // Remove a mensagem de erro quando válido
    }
});