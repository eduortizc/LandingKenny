document.addEventListener('DOMContentLoaded', () => {
    // Verificar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        // Efecto parallax muy sutil en la imagen de fondo al hacer scroll
        const backgroundBlur = document.querySelector('.background-blur');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            if (backgroundBlur) {
                // Mueve ligeramente el fondo para dar sensación de profundidad
                backgroundBlur.style.transform = `scale(1.1) translateY(${scrollY * 0.05}px)`;
            }
        });

        // Interacción táctil sutil en las tarjetas (para móviles y desktop)
        const cards = document.querySelectorAll('.character-card');
        
        cards.forEach(card => {
            const scaleDown = () => card.style.transform = 'scale(0.97)';
            const scaleUp = () => card.style.transform = 'scale(1)';

            card.addEventListener('mousedown', scaleDown);
            card.addEventListener('touchstart', scaleDown, { passive: true });
            
            card.addEventListener('mouseup', scaleUp);
            card.addEventListener('mouseleave', scaleUp);
            card.addEventListener('touchend', scaleUp);
            card.addEventListener('touchcancel', scaleUp);
        });
    }
});
