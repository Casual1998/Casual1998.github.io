document.addEventListener("DOMContentLoaded", () => {

    // Função genérica para animar letras
    function animarLetras(id, indices) {
      const titulo = document.getElementById(id);
      if (!titulo) return;
  
      const texto = titulo.textContent;
      titulo.textContent = "";
  
      // Criar spans
      const letras = texto.split("").map((letra) => {
        const span = document.createElement("span");
        span.textContent = letra;
        titulo.appendChild(span);
        return span;
      });
  
      let toggle = true;
  
      function animar() {
        indices.forEach((i, indexAnim) => {
          setTimeout(() => {
            if (letras[i]) {
              letras[i].style.opacity = toggle ? "0" : "1";
            }
          }, indexAnim * 200);
        });
        toggle = !toggle;
      }
  
      animar();
      setInterval(animar, 2000);
    }
  
    // 🍽️ Entradas → 3 primeiras letras
    animarLetras("entradas", [0, 1, 2]);
  
    // 🍛 Prato Principal → 6 letras do meio
    const principalEl = document.getElementById("principal");
    if (principalEl) {
      const textoPrincipal = principalEl.textContent.trim();
      const len = textoPrincipal.length;
      const meio = Math.floor(len / 2);
  
      const indicesPrincipal = [
        meio - 3, meio - 2, meio - 1,
        meio,
        meio + 1, meio + 2
      ];
  
      animarLetras("principal", indicesPrincipal);
    }
  
    // 🍰 Sobremesa → últimas 4 letras
    const sobremesaEl = document.getElementById("sobremesa");
    if (sobremesaEl) {
      const texto = sobremesaEl.textContent.trim();
      const len = texto.length;
  
      // Últimos 4 índices
      const indicesSobremesa = [
        len - 4,
        len - 3,
        len - 2,
        len - 1
      ];
  
      animarLetras("sobremesa", indicesSobremesa);
    }
  
  });

  
  function animarBebida() {
    const titulo = document.getElementById("bebida");
    if (!titulo) return;
  
    const texto = titulo.textContent.trim();
    titulo.textContent = "";
  
    const letras = texto.split("").map((letra) => {
      const span = document.createElement("span");
      span.textContent = letra;
      titulo.appendChild(span);
      return span;
    });
  
    let toggle = true;
  
    function animar() {
      letras.forEach((span, index) => {
        setTimeout(() => {
          if (toggle) {
            span.classList.add("slide-down");
          } else {
            span.classList.remove("slide-down");
          }
        }, index * 120);
      });
      toggle = !toggle;
    }
  
    animar();
    setInterval(animar, 2000);
  }
  
  animarBebida();

// Botão de copiar
function copiarTexto() {
    const texto = document.getElementById("endereco").innerText;

    navigator.clipboard.writeText(texto).then(() => {
        alert("Endereço copiado!");
    });
}