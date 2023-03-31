const quemSomos_btn = document.getElementById("btn_quemSomos");
const servicos_btn = document.getElementById("btn_servicos");
const contato_btn = document.getElementById("btn_contato");
const contato2_btn = document.getElementById("btn_contato2");

function findPos(obj) {
  var curtop = 0;
  if (obj.offsetParent) {
    do {
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return [curtop - 100];
  }
}

quemSomos_btn.addEventListener('click', function () {
  window.scroll(0, findPos(document.getElementById("hero")) + 50);
});

servicos_btn.addEventListener('click', function () {
    window.scroll(0, findPos(document.getElementById("services")));
});

contato_btn.addEventListener('click', function () {
    window.scroll(0, findPos(document.getElementById("contato")));
});

contato2_btn.addEventListener('click', function () {
    window.scroll(0, findPos(document.getElementById("contato")));
});

const heroID = document.getElementById("hero-content");
const cardID = document.getElementById("cards");
const servicosID = document.getElementById("servicos");

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3 // 30% do elemento visível
};

//fadein card
const observer1 = new IntersectionObserver(function (entries, observer1) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cardID.style.opacity = "1";
      cardID.style.animation = "fadein 1s ease";
    }
  });
}, options);
observer1.observe(cardID);

//fadein servicos
const observer2 = new IntersectionObserver(function (entries, observer2) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      servicosID.style.opacity = "1";
      servicosID.style.animation = "fadein 1s ease";
    }
  });
}, options);
observer2.observe(servicosID);

//fadein hero
const observer4 = new IntersectionObserver(function (entries, observer4) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroID.style.opacity = "1";
      heroID.style.animation = "fadein 1s ease";
    }
  });
}, options);
observer4.observe(heroID);