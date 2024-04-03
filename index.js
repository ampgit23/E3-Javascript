const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pizzaForm");
  const container = document.getElementById("pizzaContainer");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("pizzaId");
    const id = parseInt(input.value);

    const pizza = pizzas.find((pizza) => pizza.id === id);

    if (!isNaN(id) && pizza) {
      renderPizza(pizza);
      localStorage.setItem("lastPizza", JSON.stringify(pizza));
    } else if (isNaN(id)) {
      renderError("Por favor, ingresa un número válido.");
    } else {
      renderError("No existe una pizza con ese ID.");
    }
  });

  function renderPizza(pizza) {
    container.innerHTML = `
      <div class="card">
        <h2>${pizza.nombre}</h2>
        <img src="${pizza.imagen}" alt="${pizza.nombre}">
        <p>Precio: $${pizza.precio}</p>
      </div>
    `;
  }

  function renderError(message) {
    container.innerHTML = `<p class="error">${message}</p>`;
  }

  const lastPizza = JSON.parse(localStorage.getItem("lastPizza"));
  if (lastPizza) {
    renderPizza(lastPizza);
  }
});
