<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Livraria-e</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body style="background-color: rgb(75, 75, 75);">
    <header>
        <nav class="navbar navbar-expand-lg bg-dark text-light">
            <div class="container">
              <a class="navbar-brand text-light" href="index.php">Livraria-e</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active text-light" aria-current="page" href="index.php">Home</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>

    <main>
          
       <section class="d-flex flex-column align-items-center">
        <h1 style="color: aliceblue;">Livros</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 w-50">
            <div class="col">
              <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                <img src="images/whiplash.jpg" class="card-img-top" alt="">
                <div class="card-body">
                  <h5 class="card-title">O Senhor dos Anéis - A Sociedade do Anel</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                    Ver sinopse...
                </button>
                </div>
              </div>
            </div>
            

            <div class="col">
              <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">1984</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                    Ver sinopse...
                </button>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">A Culpa é das Estrelas</h5>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
                    Ver sinopse...
                </button>
                </div>
              </div>
            </div>
        </div>
       </section>
       <!-- MODAL 1 -->
       <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Sinopse - O Senhor dos Anéis - A Sociedade do Anel</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Na Terra-média, o jovem hobbit Frodo Bolseiro herda um anel mágico que tem o poder de corromper e destruir o mundo. Para impedir que o mal se espalhe, Frodo e seus amigos, incluindo Aragorn, Legolas, Gimli e Gandalf, formam uma sociedade com a missão de levar o anel até a Montanha da Perdição, onde ele deve ser destruído. Eles enfrentam perigos inimagináveis, enquanto forças sombrias tentam recuperar o anel.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div> 
      <!-- MODAL 2 -->
      <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Sinopse - 1984</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            O romance se passa em um futuro distópico, onde o mundo é governado por superpotências totalitárias. Winston Smith vive em Oceânia, uma nação controlada pelo Partido, cujo líder, o Grande Irmão, observa constantemente os cidadãos. A história segue Winston, que trabalha para alterar documentos históricos a favor do Partido, mas começa a questionar a opressão e a manipulação de informações. Ele inicia um relacionamento proibido e tenta descobrir uma forma de resistir ao regime.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div> 
      <!-- MODAL 3 -->
      <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Sinopse - A Culpa é das Estrelas</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                DHazel Grace Lancaster, uma adolescente de 16 anos, vive com câncer e faz parte de um grupo de apoio a pacientes com a doença. Lá, ela conhece Augustus Waters, um jovem carismático que também é sobrevivente do câncer. Eles se apaixonam e enfrentam as adversidades da vida e da morte juntos, enquanto exploram questões sobre o sentido da vida, amor e perda. O livro aborda a fragilidade da vida e a beleza das conexões humanas, mesmo diante da dor e da doença.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div> 
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>