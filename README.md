<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Gravox Gym</title>
  <!-- === CSS interno === -->
  <style>
    /* Estilos básicos para o menu hamburger e tabs */
    #menu-toggle{
      display:none;
      position:fixed;
      top:15px;right:20px;
      background:#ff0000;color:#fff;
      border:none;border-radius:6px;
      padding:10px 15px;font-size:24px;
      cursor:pointer;z-index:1100;
    }
    nav ul{transition:max-height .3s ease;}
    nav ul.active{max-height:500px;}

    /* Responsivo */
    @media (max-width:768px){
      nav ul{
        max-height:0;overflow:hidden;
        flex-direction:column;
        background:#000;position:fixed;
        top:60px;right:0;width:200px;
        border-left:4px solid #ff0000;
        padding:20px;z-index:1000;
      }
      nav ul li{margin-bottom:15px;}
      #menu-toggle{display:block;}
    }

    /* Tabs */
    .tab-content{display:none;padding:20px 0;}
    .tab-content.active{display:block;}
    .tab-button{
      cursor:pointer;background:#1a1a1a;
      border:none;border-radius:6px;
      padding:10px 20px;margin-right:10px;
      color:#fff;font-weight:bold;
      transition:background-color .3s;
    }
    .tab-button.active,.tab-button:hover{
      background:#ff0000;color:#fff;
    }

    /* Layout básico */
    body{font-family:Arial,Helvetica,sans-serif;margin:0;background:#111;color:#eee;}
    header{display:flex;align-items:center;justify-content:space-between;
           padding:20px;background:#000;color:#fff;position:sticky;top:0;z-index:1200;}
    header h1{margin:0;font-size:28px;}
    nav ul{list-style:none;display:flex;gap:20px;margin:0;padding:0;}
    nav a{color:#fff;text-decoration:none;font-weight:bold;}
    .container{max-width:1100px;margin:auto;padding:20px;}
    .card{background:#1a1a1a;border-radius:10px;padding:20px;margin-bottom:40px;box-shadow:0 0 10px #0006;}
    .button{display:inline-block;padding:10px 20px;background:#ff0000;color:#fff;border-radius:6px;text-decoration:none;}

    /* Galeria */
    .imagens{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;}
    .imagens img{width:32%;border-radius:6px;object-fit:cover;}

    /* Botão voltar ao topo */
    #voltarTopo{
      position:fixed;bottom:30px;right:30px;
      padding:10px 14px;font-size:20px;
      border:none;border-radius:50%;
      background:#ff0000;color:#fff;cursor:pointer;
      display:none;z-index:1100;
    }

    /* Animação de entrada simples */
    .animar{animation:fadeUp .7s forwards;}
    @keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
  </style>
</head>

<body>
  <!-- ===== HEADER ===== -->
  <header>
    <h1>Gravox Gym</h1>
    <button id="menu-toggle" aria-label="Abrir menu">☰</button>
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

  <!-- ===== CONTEÚDO ===== -->
  <div class="container">
    <!-- Banner -->
    <section id="banner" class="card">
      <img src="gravox.png" alt="Logo Gravox Gym" style="width:100%;max-height:400px;object-fit:cover;border-radius:10px">
      <h2>Transforme seu Corpo Hoje!</h2>
      <p>Entre para a melhor academia da cidade e atinja seus objetivos.</p>
      <a href="#planos" class="button">Conheça Nossos Planos</a>
    </section>
    <!-- Sobre -->
    <section id="sobre" class="card">
      <h2>Sobre Nós</h2>
      <p>Bem-vindo à Gravox Gym, onde ajudamos você a alcançar seus objetivos de saúde e bem-estar com equipamentos de última geração e profissionais qualificados!</p>
    </section>
    <!-- Planos (com tabs) -->
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
    <!-- Galeria -->
    <section id="galeria" class="card">
      <h2>Galeria</h2>
      <div class="imagens">
        <img src="img1.jpg" alt="Academia 1">
        <img src="img2.jpg" alt="Academia 2">
        <img src="img3.jpg" alt="Academia 3">
      </div>
    </section>
    <!-- Depoimentos -->
    <section id="depoimentos" class="card">
      <h2>O que nossos alunos dizem</h2>
      <div class="card"><p>"A melhor academia que já frequentei! Professores excelentes." – João Silva</p></div>
      <div class="card"><p>"Estrutura completa e ambiente motivador." – Maria Oliveira</p></div>
    </section>
    <!-- Contato -->
    <section id="contato" class="card">
      <h2>Contato</h2>
      <form id="formContato">
        <div class="input-group">
          <label for="nome">Nome:</label><br>
          <input type="text" id="nome" name="nome" required>
        </div><br>
        <div class="input-group">
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" required>
        </div><br>
        <div class="input-group">
          <label for="mensagem">Mensagem:</label><br>
          <textarea id="mensagem" name="mensagem" required></textarea>
        </div><br>
        <button type="submit" class="button">Enviar</button>
      </form>
    </section>
    <footer style="text-align:center;padding:20px;color:#aaa;">
      <p>&copy; 2025 Gravox Gym. Todos os direitos reservados.</p>
    </footer>
  </div>
  <!-- Botão voltar ao topo -->
  <button id="voltarTopo" aria-label="Voltar ao topo">↑</button>
  
  <!-- === JavaScript interno === -->
  <script>
    /* Menu hamburger */
    const menuToggle = document.querySelector('#menu-toggle');
    const navMenu   = document.querySelector('nav ul');
    menuToggle.addEventListener('click',()=>navMenu.classList.toggle('active'));

    /* Slideshow simples da galeria */
    let slideIndex=0;
    const slides=document.querySelectorAll('.imagens img');
    function showSlides(){
      slides.forEach(s=>s.style.display='none');
      slideIndex++; if(slideIndex>slides.length) slideIndex=1;
      slides[slideIndex-1].style.display='block';
      setTimeout(showSlides,4000);
    }
    if(slides.length) showSlides();

    /* Tabs dos planos */
    const tabButtons=document.querySelectorAll('.tab-button');
    const tabContents=document.querySelectorAll('.tab-content');
    tabButtons.forEach(btn=>{
      btn.addEventListener('click',()=>{
        const id=btn.dataset.tab;
        tabButtons.forEach(b=>b.classList.remove('active'));
        tabContents.forEach(c=>c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(id).classList.add('active');
      });
    });

    /* Scroll suave */
    document.querySelectorAll('a[href^="#"]').forEach(link=>{
      link.addEventListener('click',e=>{
        e.preventDefault();
        const alvo=document.querySelector(link.getAttribute('href'));
        if(alvo) alvo.scrollIntoView({behavior:'smooth'});
      });
    });

    /* Validação de formulário */
    document.getElementById('formContato').addEventListener('submit',e=>{
      e.preventDefault();
      const {nome,email,mensagem}=e.target;
      const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!nome.value||!email.value||!mensagem.value){
        alert('Por favor, preencha todos os campos.'); return;
      }
      if(!regex.test(email.value)){
        alert('Por favor, insira um email válido.'); return;
      }
      alert('Mensagem enviada com sucesso! Retornaremos em breve.');
      e.target.reset();
    });

    /* Animação de entrada */
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('animar');
      });
    },{threshold:0.2});
    document.querySelectorAll('.card').forEach(card=>observer.observe(card));

    /* Botão voltar ao topo */
    const voltarTopo=document.getElementById('voltarTopo');
    window.addEventListener('scroll',()=>{
      voltarTopo.style.display=window.scrollY>300?'block':'none';
    });
    voltarTopo.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  </script>
</body>
</html>


