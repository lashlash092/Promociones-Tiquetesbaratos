// Obtener los elementos necesarios del DOM
const buyButton = document.getElementById('buyButton');
const loadingModal = document.getElementById('loadingModal');
const countdownElement = document.getElementById('countdown');

// URL de redirección
const redirectUrl = 'https://agencia-latinamerican-tours.online/app';

// Contador para la animación
let countdown = 5;

// Función para mostrar el modal y comenzar la cuenta regresiva
function showLoadingModal() {
  loadingModal.classList.remove('hidden');

  // Iniciar el contador
  countdown = 5;
  countdownElement.textContent = countdown;

  // Actualizar el contador cada segundo
  const timer = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    // Si el contador llega a 0, redirigir y limpiar el intervalo
    if (countdown <= 0) {
      clearInterval(timer);
      window.location.href = redirectUrl;
    }
  }, 1000);
}

// Agregar evento para el clic en el botón "COMPRAR AHORA"
buyButton.addEventListener('click', (e) => {
  e.preventDefault();
  showLoadingModal();
});
