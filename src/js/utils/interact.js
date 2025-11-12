/* eslint-disable no-undef */
export function toggleDropdown() {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".__navbar--dropdown_button");
    const dropdownMenu = document.querySelector(".__navbar--dropdown_menu");

    if (!dropdownButton || !dropdownMenu) {
      // Required elements not found in the DOM; nothing to attach.
      return;
    }

    dropdownButton.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show");
      dropdownButton.classList.toggle("open");
    });
  });

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".__navbar--dropdown_button")) {
      const dropdowns = document.getElementsByClassName(
        "__navbar--dropdown_menu"
      );
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
      const dropdownButton = document.querySelector(
        ".__navbar--dropdown_button"
      );
      if (dropdownButton && dropdownButton.classList.contains("open")) {
        dropdownButton.classList.remove("open");
      }
    }
  };
}

export function highlightActiveLink() {
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(
      ".__navbar--links a, .__navbar--dropdown_menu a"
    );
    const sections = document.querySelectorAll("main section[id]");

    function removeActiveLinks() {
      navLinks.forEach((link) => link.classList.remove("active_link"));
    }

    function removeActiveTitles() {
      sections.forEach((section) => {
        const title = section.querySelector("h1");
        if (title) {
          title.classList.remove("active_link");
        }
      });
    }

    function setActiveLinkByHash(hash) {
      removeActiveLinks();
      removeActiveTitles();

      // Seleciona apenas links dentro da navegação (excluindo a logo)
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === hash) {
          link.classList.add("active_link");
        }
      });

      // Adiciona classe ao título da seção correspondente
      const sectionId = hash.startsWith("#") ? hash.substring(1) : hash;
      const activeSection = document.getElementById(sectionId);
      if (activeSection) {
        const title = activeSection.querySelector("h1");
        if (title) {
          title.classList.add("active_link");
          console.log(
            `Título ativado: ${title.textContent} para seção ${sectionId}`
          );
        } else {
          console.log(`Nenhum H1 encontrado na seção ${sectionId}`);
        }
      } else {
        console.log(`Seção não encontrada: ${sectionId}`);
      }
    }

    // Variável para controlar a seção ativa atual
    let currentActiveSection = null;

    // Calcula o rootMargin baseado no tamanho da viewport
    const calculateRootMargin = () => {
      const viewportHeight = window.innerHeight;
      const topMargin = Math.min(250, viewportHeight * 0.25); // 25% da altura ou 250px, o que for menor
      const bottomMargin = Math.min(250, viewportHeight * 0.25);
      return `-${topMargin}px 0px -${bottomMargin}px 0px`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        // Filtra apenas as entradas que estão intersectando
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Pega a seção mais próxima do topo da viewport
          const topMostSection = visibleEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current;
          });

          const sectionId = topMostSection.target.id;

          // Só atualiza se for uma seção diferente
          if (currentActiveSection !== sectionId) {
            currentActiveSection = sectionId;

            // Atualiza a URL
            history.pushState(null, null, `#${sectionId}`);

            // Remove classes ativas
            removeActiveLinks();
            removeActiveTitles();

            // Adiciona classe aos links
            navLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${sectionId}`) {
                link.classList.add("active_link");
              }
            });

            // Adiciona classe ao título da seção
            const title = topMostSection.target.querySelector("h1");
            if (title) {
              title.classList.add("active_link");
            }
          }
        }
      },
      {
        threshold: [0, 0.3, 0.5, 0.7],
        rootMargin: calculateRootMargin(),
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Define o link ativo inicial
    const initialHash = window.location.hash || "#home";
    setActiveLinkByHash(initialHash);

    // Observa as mudanças de hash (cliques nos links)
    window.addEventListener("hashchange", () => {
      setActiveLinkByHash(window.location.hash);
    });
  });
}

// Viewport observar sessão via scroll
