// ===== MENU HAMBURGER =====
const menuToggle = document.querySelector('#menu-toggle'); // botão menu hamburger
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // ativa/desativa menu no mobile
  });
}

// ===== SLIDESHOW AUTOMÁTICO =====
let slideIndex = 0;
const slides = document.querySelectorAll('.imagens img');

function showSlides() {
  slides.forEach((slide, i) => {
    slide.style.display = 'none';
  });
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 4000); // troca a cada 4 segundos
}

// Só inicia slideshow se houver imagens
if (slides.length > 0) {
  showSlides();
}

// ===== TABS =====
// Supondo que você tenha abas com botões e conteúdo correspondentes
// Exemplo de estrutura HTML esperada:
// <div class="tabs">
//   <button class="tab-button" data-tab="tab1">Tab 1</button>
//   <button class="tab-button" data-tab="tab2">Tab 2</button>
// </div>
// <div id="tab1" class="tab-content">Conteúdo 1</div>
// <div id="tab2" class="tab-content">Conteúdo 2</div>

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    // Remove ativo de todos os botões e conteúdos
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');
    // Ativa o selecionado
    button.classList.add('active');
    const activeContent = document.getElementById(tabId);
    if (activeContent) activeContent.style.display = 'block';
  });
});
