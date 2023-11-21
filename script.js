document.addEventListener('DOMContentLoaded', function() {
    const elementosDuvida = document.querySelectorAll('.duvida');
  
    elementosDuvida.forEach(function(duvida) {
      duvida.addEventListener('click', function () {
        // Remova a classe 'ativa' de todos os elementos com classe 'duvida'
        elementosDuvida.forEach(function (elemento) {
          elemento.classList.remove('ativa');
        });
  
        // Adicione a classe 'ativa' apenas ao elemento atual
        duvida.classList.add('ativa');
      });
    });
  });
  