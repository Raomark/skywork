const showMenu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".bx-menu");
const navItem = document.querySelectorAll(".nav-item");
const closeBtn = document.querySelector(".bx-x");
const hide = document.querySelector(".hide");
const headeren = document.querySelector(".header-en");
const lineBtn = document.querySelector(".line");
const fbBtn = document.querySelector(".fb");
const chatCon = document.querySelector(".chat-container");

//================== button open mene and close menu
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    showMenu.classList.toggle("open");
    // menuBtn.classList.toggle("hide");
    // headeren.classList.toggle("hide");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    showMenu.classList.remove("open");
  });
}

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    showMenu.classList.remove("open");
  });
});

//================== button scroll Top

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 700) scrollTop.classList.add("scroll-top");
  else scrollTop.classList.remove("scroll-top");
}
window.addEventListener("scroll", scrollTop);

//======================  show chat when scrollY => 500

function scrollChat() {
  const scrollChat = document.getElementById("chatContainer");
  if (this.scrollY >= 500) {
    scrollChat.classList.add("openchat");
  } else scrollChat.classList.remove("openchat");
}
window.addEventListener("scroll", scrollChat);

//======================  click at the chat fb and line visible

const clickChatFb = () => {
  fbBtn.classList.toggle("openchat-fb");
};
chatCon.addEventListener("click", clickChatFb);

const clickChatLine = () => {
  lineBtn.classList.toggle("openchat-line");
};
chatCon.addEventListener("click", clickChatLine);

//======================  hide chat when scrollY <= 700

const hideChat = () => {
  const scrollHideY = 700;
  if (window.scrollY <= scrollHideY) fbBtn.classList.add("hidechat");
  else fbBtn.classList.remove("hidechat");
};
window.addEventListener("scroll", hideChat);

const hideChat1 = () => {
  const scrollHideY = 700;
  if (window.scrollY <= scrollHideY) lineBtn.classList.add("hidechat");
  else lineBtn.classList.remove("hidechat");
};
window.addEventListener("scroll", hideChat1);

//================== active scroll + scrollY

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const height = current.offsetHeight;
    const top = current.offsetTop - 58;
    const id = current.getAttribute("id");

    if (scrollY > top && scrollY <= top + height) {
      document
        .querySelector(".nav-menu a[href*=" + id + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + id + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//=========================== Animation scroll
ScrollReveal({
  reset: false,
  distance: "100px",
  duration: 2200,
});

ScrollReveal().reveal(
	".a-b,.banner-header,.banner-detail p,.about-r img,.service-card,.service-header-reveal,.b-b,.a-r,.a-l", {
  delay: 100,
  origin: "bottom",
});

ScrollReveal().reveal("", {
  delay: 600,
  origin: "top",
});


// ScrollReveal().reveal(".a-r", { 
// 	delay: 400, origin: "right" 
// });

ScrollReveal().reveal(".about-l,.a-l", { 
	delay: 400, origin: "left" 
});

//========================== Swiper banner scroll

var swiper = new Swiper(".mySwiper-banner", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  gragCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//================== Scroll shadow scroll

// const scrollShadow = () => {
//   const scrollYY = 0;
//   if (window.scrollY > scrollYY) {
//     document.querySelector(".header").classList.add("scrollShadow");
//   } else {
//     document.querySelector(".header").classList.remove("scrollShadow");
//   }
// };

// window.addEventListener("scroll", scrollShadow);
