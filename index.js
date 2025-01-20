document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('carForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Limpa mensagens de erro anteriores
        clearErrors();
        
        // Obtém os valores dos campos
        const brand = document.getElementById('brand').value.trim();
        const model = document.getElementById('model').value.trim();
        const year = document.getElementById('year').value;
        const price = document.getElementById('price').value;
        const color = document.getElementById('color').value.trim();
        const kilometers = document.getElementById('kilometers').value;
        const fuel = document.getElementById('fuel').value;
        const transmission = document.getElementById('transmission').value;
        
        // Validação dos campos
        let isValid = true;
        
        if (!brand) {
            showError('brand', 'Selecione uma marca');
            isValid = false;
        }
        
        if (model.length < 2) {
            showError('model', 'Digite um modelo válido');
            isValid = false;
        }
        
        const currentYear = new Date().getFullYear();
        if (year < 1900 || year > currentYear) {
            showError('year', `O ano deve estar entre 1900 e ${currentYear}`);
            isValid = false;
        }
        
        if (price <= 0) {
            showError('price', 'O preço deve ser maior que zero');
            isValid = false;
        }
        
        if (color.length < 3) {
            showError('color', 'Digite uma cor válida');
            isValid = false;
        }
        
        if (kilometers < 0) {
            showError('kilometers', 'A quilometragem não pode ser negativa');
            isValid = false;
        }
        
        if (!fuel) {
            showError('fuel', 'Selecione o tipo de combustível');
            isValid = false;
        }
        
        if (!transmission) {
            showError('transmission', 'Selecione o tipo de câmbio');
            isValid = false;
        }
        
        if (isValid) {
            // Formata o preço para moeda brasileira
            const formattedPrice = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(price);

            // Se tudo estiver válido, exibe os dados no console
            console.log({
                brand,
                model,
                year,
                price: formattedPrice,
                color,
                kilometers,
                fuel,
                transmission
            });
            
            // Limpa o formulário
            form.reset();
            alert('Veículo cadastrado com sucesso!');
        }
    });
    
    // Função para mostrar erro
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.classList.add('error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }
    
    // Função para limpar erros
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());
        
        const errorFields = document.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));
    }
});
