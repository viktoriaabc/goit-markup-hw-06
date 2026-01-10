const openMenuBtn = document.querySelector ("[data-menu-open]");
const closeMenuBtn = document.querySelector ("[data-menu-close]");
const mobileMenu = document.querySelector("[data-menu");

openMenuBtn.onclick = toggleMenu;
closeMenuBtn.onclick = toggleMenu;
mobileMenu.onclick = navigate;


function toggleMenu() {
mobileMenu.classList.toggle("is-open")
}

function navigate() {
  const currentLink = event.target.closest(".mobile-menu-link")
  
  if (currentLink) {
    toggleMenu();
  }
}


// ✅ Правильне виправлення

// Потрібно прийняти event параметром:
// function navigate(event) {
//   const currentLink = event.target.closest(".mobile-menu-link");
// }
// Або одразу з типом (якщо TypeScript):

// function navigate(event: MouseEvent) {
//   const currentLink = (event.target as HTMLElement)
//     .closest(".mobile-menu-link");
// }
// 1️⃣ Типізувати querySelector

// Щоб не було помилок з null:
// const openMenuBtn = document.querySelector<HTMLButtonElement>("[data-menu-open]");
// const closeMenuBtn = document.querySelector<HTMLButtonElement>("[data-menu-close]");
// const mobileMenu = document.querySelector<HTMLElement>("[data-menu]");
// 2️⃣ Перевірка на null
// openMenuBtn?.addEventListener("click", toggleMenu);
// closeMenuBtn?.addEventListener("click", toggleMenu);
// mobileMenu?.addEventListener("click", navigate);
// function toggleMenu() {
//   mobileMenu?.classList.toggle("is-open");
// }
// 3️⃣ Повний правильний варіант
// function navigate(event: MouseEvent) {
//   const target = event.target as HTMLElement;
//   const currentLink = target.closest(".mobile-menu-link");

//   if (!currentLink) return;

//   mobileMenu?.classList.remove("is-open");
// }

// 4️⃣ Безпечніший варіант (краще, ніж as)
// ✅ Перевірка через instanceof
// function navigate(event: MouseEvent) {
//   if (!(event.target instanceof HTMLElement)) return;

//   const currentLink = event.target.closest(".mobile-menu-link");
// }
// 5️⃣ Ще кращий варіант — event.currentTarget

// Якщо слухач стоїть на mobileMenu:

// function navigate(event: MouseEvent) {
//   const menu = event.currentTarget as HTMLElement;
// }