document.addEventListener('DOMContentLoaded', () => {

    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        let expandTimer; // Variable para guardar el temporizador

        // Evento cuando el cursor entra en la tarjeta
        card.addEventListener('mouseenter', () => {
            // Inicia un temporizador de 1.5 segundos
            expandTimer = setTimeout(() => {
                card.classList.add('expanded'); // Añade la clase que activa la animación
            }, 1500); // 1500 milisegundos = 1.5 segundos
        });

        // Evento cuando el cursor sale de la tarjeta
        card.addEventListener('mouseleave', () => {
            // Cancela el temporizador si todavía no se ha ejecutado
            clearTimeout(expandTimer);
            // Quita la clase para contraer la tarjeta inmediatamente
            card.classList.remove('expanded');
        });
    });

});