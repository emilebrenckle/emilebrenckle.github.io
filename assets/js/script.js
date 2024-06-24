'use strict';

// Fonction de bascule d'élément
const elementToggleFunc = function (elem) { 
  if (elem) {
    elem.classList.toggle("active");
  }
}

// Variables de la barre latérale
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Fonctionnalité de bascule de la barre latérale pour mobile
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
}

// Variables des témoignages
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Variables de la modal
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Fonction de bascule de la modal
const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// Ajouter un événement de clic à tous les éléments de la modal
if (testimonialsItem) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      if (modalImg && modalTitle && modalText) {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      }
      testimonialsModalFunc();
    });
  });
}

// Ajouter un événement de clic au bouton de fermeture de la modal
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}
if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
}

// Variables de sélection personnalisée
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

if (select) {
  select.addEventListener("click", function () { elementToggleFunc(this); });
}

// Ajouter un événement à tous les éléments de sélection
if (selectItems) {
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) {
        selectValue.innerText = this.innerText;
      }
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

// Variables de filtrage
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  if (filterItems) {
    filterItems.forEach(item => {
      if (selectedValue === "all") {
        item.classList.add("active");
      } else if (selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
}

// Ajouter un événement à tous les boutons de filtre pour les grands écrans
let lastClickedBtn = filterBtn[0];

if (filterBtn) {
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) {
        selectValue.innerText = this.innerText;
      }
      filterFunc(selectedValue);
      if (lastClickedBtn) {
        lastClickedBtn.classList.remove("active");
      }
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
}

// Variables du formulaire de contact
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Ajouter un événement à tous les champs de saisie du formulaire
if (formInputs) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      // Vérifier la validité du formulaire
      if (form && form.checkValidity() && formBtn) {
        formBtn.removeAttribute("disabled");
      } else if (formBtn) {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}

// Variables de navigation de page
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Ajouter un événement à tous les liens de navigation
if (navigationLinks) {
  navigationLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (pages) {
        pages.forEach(page => {
          if (this.innerHTML.toLowerCase() === page.dataset.page) {
            page.classList.add("active");
            navigationLinks.forEach(navLink => navLink.classList.remove("active"));
            this.classList.add("active");
            window.scrollTo(0, 0);
          } else {
            page.classList.remove("active");
          }
        });
      }
    });
  });
}
