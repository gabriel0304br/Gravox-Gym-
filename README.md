<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Gravox Gym</title>
  <link rel="stylesheet" href="styles.css" />
  <style>
    /* Estilos básicos para o menu hamburger e tabs */  
    #menu-toggle {
      display: none;
      position: fixed;
      top: 15px;
      right: 20px;
      background: #ff0000;
      color: white;
      border: none;
      padding: 10px 15px;
      font-size: 24px;
      cursor: pointer;
      z-index: 1100;
      border-radius: 6px;
    }
    nav ul {
      transition: max-height 0.3s ease;
    }
    nav ul.active {
      max-height: 500px;
    }
    @media (max-width: 768px) {
      nav ul {
        max-height: 0;
        overflow: hidden;
        flex-direction: column;
        background: #000;
        position: fixed;
        top: 60px;
        right: 0;
        width: 200px;
        border-left: 4px solid #ff0000;
        padding: 20px;
        height: auto;
        z-index: 1000;
      }
      nav ul li {
        margin-bottom: 15px;
      }
      #menu-toggle {
        display: block;
      }
    }
    .tab-content {
      display: none;
      padding: 20px 0;
    }
    .tab-content.active {
      display: block;
    }
    .tab-button {
      cursor: pointer;
      background-color: #1a1a1a;
      border: none;
      padding: 10px 20px;
      margin-right: 10px;
      color: #fff;
      border-radius: 6px;
      font-weight: bold;
      transition: background-color 0.3s ease;
    }
    .tab-button.active,
    .tab-button:hover {
      background-color: #ff0000;
      color: white;
    }
  </style>
</head>
<body>
  <header>
    <h1>Gravox Gym</h1>
    <button id="menu-toggle" aria-label="Toggle menu">☰</button>
    <nav>
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#planos">Planos</a></li>
        <li><a href="#galeria">Galeria</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  </header>

  <div class="container">
    <section id="banner" class="card">
      <img src="gravox.png" alt="Gravox Gym" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px;">
      <h2>Transforme seu Corpo Hoje!</h2>
      <p>Entre para a melhor academia da cidade e atinja seus objetivos.</p>
      <a href="#planos" class="button">Conheça Nossos Planos</a>
    </section>
    <section id="sobre" class="card">
      <h2>Sobre Nós</h2>
      <p>Bem-vindo à Gravox Gym, onde ajudamos você a alcançar seus objetivos de saúde e bem-estar com equipamentos de última geração e profissionais qualificados!</p>
    </section>
    <section id="planos" class="card">
      <h2>Nossos Planos</h2>
      <div class="tabs">
        <button class="tab-button active" data-tab="plano-basico">Plano Básico</button>
        <button class="tab-button" data-tab="plano-premium">Plano Premium</button>
      </div>
      <div id="plano-basico" class="tab-content active">
        <h3>Plano Básico</h3>
        <p>Acesso ilimitado à academia</p>
        <p><strong>R$ 99/mês</strong></p>
      </div>
      <div id="plano-premium" class="tab-content">
        <h3>Plano Premium</h3>
        <p>Aulas e personal trainer incluídos</p>
        <p><strong>R$ 199/mês</strong></p>
      </div>
    </section>
    <section id="galeria" class="card">
      <h2>Galeria</h2>
      <div class="imagens">
        <img src="img1.jpg" alt="Academia 1" />
        <img src="img2.jpg" alt="Academia 2" />
        <img src="img3.jpg" alt="Academia 3" />
      </div>
    </section>
    <section id="depoimentos" class="card">
      <h2>O que nossos alunos dizem</h2>
      <div class="card">
        <p>"A melhor academia que já frequentei! Professores excelentes." - João Silva</p>
      </div>
      <div class="card">
        <p>"Estrutura completa e ambiente motivador." - Maria Oliveira</p>
      </div>
    </section>
    <section id="contato" class="card">
      <h2>Contato</h2>
      <form id="formContato">
        <div class="input-group">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div class="input-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="input-group">
          <label for="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea>
        </div>
        <button type="submit" class="button">Enviar</button>
      </form>
    </section>
    <footer style="text-align:center; padding: 20px; color: #aaa;">
      <p>&copy; 2025 Gravox Gym. Todos os direitos reservados.</p>
    </footer>
  </div>

  <button id="voltarTopo" aria-label="Voltar ao topo">↑</button>

  <script>
    const menuToggle = document.querySelector('#menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    let slideIndex = 0;
    const slides = document.querySelectorAll('.imagens img');

    function showSlides() {
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;
      slides[slideIndex - 1].style.display = 'block';
      setTimeout(showSlides, 4000);
    }

    if (slides.length > 0) {
      showSlides();
    }

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });

    const linksInternos = document.querySelectorAll('a[href^="#"]');
    linksInternos.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const alvoId = link.getAttribute('href');
        const alvo = document.querySelector(alvoId);
        if (alvo) {
          alvo.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    const form = document.getElementById('formContato');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      if (!regexEmail.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
      }
      alert('Mensagem enviada com sucesso! Retornaremos em breve.');
      form.reset();
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animar');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.card').forEach(card => observer.observe(card));

    const voltarTopo = document.getElementById('voltarTopo');
    window.addEventListener('scroll', () => {
      voltarTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    voltarTopo.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  </script>
</body>
</html>
