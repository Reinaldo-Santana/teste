document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement) {
            activeElement.classList.add('active-state');

            // Remove o estado ativo após um curto intervalo
            setTimeout(() => {
                activeElement.classList.remove('active-state');
            }, 150);
        }
    }
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



// Função para capitalizar palavras
function capitalizeWords(input) {
    input.value = input.value.replace(/\b(\p{L})(\p{L}*)/gu, (match, firstLetter, restOfWord) => {
        return firstLetter.toUpperCase() + restOfWord.toLowerCase();
    });
}

// Função para forçar a revalidação
function forceValidation(input) {
    const regex = /^[A-Za-zÀ-ÿ\s'-]*$/; // Mesmo pattern do HTML
    if (!regex.test(input.value)) {
        input.setCustomValidity("Insira apenas letras, espaços, apóstrofos ou hifens.");
    } else {
        input.setCustomValidity(""); // Campo válido
    }
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



const form = document.getElementById('formulario');
form.addEventListener('submit', function (event) {
    const nomeInput = document.getElementById('nome');
    if (nomeInput.value.length < 5) {
        event.preventDefault(); // Impede o envio do formulário
        alert('O nome completo deve ter pelo menos 5 caracteres.');
    }
});