const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

const data = [
  {
    id: 1,
    title: "Web Development",
    Image: "./pic/portfolio-1.jpg",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 2,
    title: "App Development",
    Image: "./pic/portfolio-2.jpg",
    category: "app",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 3,
    title: "Web Design",
    Image: "./pic/portfolio-1.jpg",
    category: "web",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 4,
    title: "App Design",
    Image: "./pic/portfolio-2.jpg",
    category: "app",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 5,
    title: "Graphic Design",
    Image: "./pic/portfolio-3.jpg",
    category: "graphic",
    head: "Maecenas a tempus tortor",
  },
  {
    id: 6,
    title: "Digital Marketing",
    Image: "./pic/portfolio-3.jpg",
    category: "graphic",
    head: "Maecenas a tempus tortor",
  },
];

const ul = document.querySelector(".portfolio-flters");
const li = document.querySelectorAll(".custom-cursor-on-hover");
const menuwrapper = document.querySelector(".menuwrapper");

const displayItems = (items) => {
  const showing = items
    .map((item) => {
      return `
      <div class="col-lg-4 col-sm-12 col-md-12 mb-3 mb-sm-3 mb-md-3 mb-lg-3">
        <div class="portfolio-item">
          <img src="${item.Image}" class="h-auto w-100 img-fluid" alt="${item.title}" />
          <a href="img/portfolio-1.jpg" class="link-pre text-decoration-none"><i class="fa-solid fa-eye"></i></a>
          <div class="content-port">
            <h2>${item.head}</h2>
            <h4>${item.title}</h4>
          </div>
        </div>
      </div>
      `;
    })
    .join("");
  menuwrapper.innerHTML = showing;
};

window.addEventListener("DOMContentLoaded", () => {
  displayItems(data);
});

li.forEach((item) => {
  item.addEventListener("click", (e) => {
    const categories = e.target.dataset.id;
    const newdata = data.filter((item) => item.category === categories);

    if (categories === "all") {
      displayItems(data);
    } else {
      displayItems(newdata);
    }
  });
});
// Porfolio isotope and filter
// var portfolioIsotope = $(".portfolio-container").isotope({
//   itemSelector: ".portfolio-item",
//   layoutMode: "fitRows",
// });

// $("#portfolio-flters li").on("click", function () {
//   $("#portfolio-flters li").removeClass("filter-active");
//   $(this).addClass("filter-active");

//   portfolioIsotope.isotope({ filter: $(this).data("filter") });
// });
let isScrolling;
const $backToTop = $(".back-to-top");
$backToTop.hide();
$(window).scroll(function () {
  clearTimeout(isScrolling);
  $backToTop.fadeIn("slow");
  isScrolling = setTimeout(function () {
    $backToTop.fadeOut("slow");
  }, 1000);
});
$backToTop.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1700, "easeInOutExpo");
});

// window.addEventListener("DOMContentLoaded", () => {
//   const showing = data
//     .map((item) => {
//       return `
//         <div
//               class="col-lg-4 col-sm-12 col-md-12 mb-3 mb-sm-3 mb-md-3 mb-lg-3"
//             >
//       <div class="portfolio-item">
//               <img
//                 src="${item.Image}"
//                 class="h-auto w-100 img-fluid"
//                 alt="${item.title}"
//               />
//               <a
//                 href="img/portfolio-1.jpg"
//                 class="link-pre text-decoration-none"
//                 ><i class="fa-solid fa-eye"></i
//               ></a>
//               <div class="content-port">
//                 <h2>${item.head}</h2>
//                 <h4>${item.title}</h4>
//               </div>
//             </div>
//             </div>
//             `;
//     })
//     .join("");
//   menuwrapper.innerHTML = showing;
// });
// console.log(menuwrapper);
