const headphoneBtn = document.querySelectorAll(".choose-color__btn");
const colorPageNotActive = document.querySelectorAll(".content__select-color");

const header = document.querySelector("header");

headphoneBtn.forEach((item) => item.addEventListener("click", changeTheme));

function changeTheme(event) {
  const targetButton = event.currentTarget; // кнопка, на которой был клик
  const dataButton = targetButton.dataset.button; // dataset (id) той кнопки, на которой был клик
  const contentActive = document.querySelectorAll(`.${dataButton}`); // возьми все элементы на странице того цвета, на котором был клик

  header.classList.remove(
    "color--red",
    "color--green",
    "color--blue",
    "color--silver",
    "color--black"
  );
  header.classList.add(dataButton);

  headphoneBtn.forEach((headphones) =>
    headphones.classList.remove("selected-color")
  );

  targetButton.classList.add("selected-color");

  colorPageNotActive.forEach((headphones) => {
    headphones.classList.remove("content__active");
  });

  contentActive.forEach((headphones) => {
    headphones.classList.add("content__active");
  });
}
