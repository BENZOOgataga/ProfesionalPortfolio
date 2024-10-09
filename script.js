// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nom = document.getElementById('nom').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!nom || !email || !message) {
            formMessage.innerHTML = '<p class="error">Tous les champs sont requis.</p>';
            return;
        }

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formMessage.innerHTML = `<p class="success">Merci pour votre message ! Je vous répondrai dès que possible.</p>`;
                form.reset();
            } else {
                const data = await response.json();
                if (data.errors) {
                    formMessage.innerHTML = `<p class="error">${data.errors.map(error => error.message).join('<br>')}</p>`;
                } else {
                    formMessage.innerHTML = `<p class="error">Une erreur est survenue. Veuillez réessayer plus tard.</p>`;
                }
            }
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire:', error);
            formMessage.innerHTML = '<p class="error">Une erreur est survenue. Veuillez réessayer plus tard.</p>';
        }
    });
});
