// Выбираем все элементы с классом "skeleton"
const allSkeletons = document.querySelectorAll(".skeleton");

// Ждем события загрузки страницы
window.addEventListener("load", () => {
  // Проходимся по всем элементам
  allSkeletons.forEach((element, index) => {
    // Устанавливаем таймер для удаления класса "skeleton" через определенное время
    setTimeout(() => {
      element.classList.remove("skeleton"); // Удаляем класс "skeleton"
    }, 1000 * (index + 1)); // Время задержки увеличивается для каждого последующего элемента
  });
});
