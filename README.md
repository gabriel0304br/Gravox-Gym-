<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gravox Gym</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>Gravox Gym</h1>
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
      <div class="card">
        <h3>Plano Básico</h3>
        <p>Acesso ilimitado à academia</p>
        <p><strong>R$ 99/mês</strong></p>
      </div>
      <div class="card">
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

  <!-- Script embutido -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("formContato");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Mensagem enviada com sucesso!");
        form.reset();
      });
    });
  </script>
</body>
</html>
