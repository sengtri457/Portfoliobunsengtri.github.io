const btn = document.getElementById("button");
const mode = document.getElementById("nightmode");
const rate = document.querySelectorAll(".rate"); // Use querySelectorAll to select multiple elements

const spancolor = document.querySelectorAll("h5 > span");
console.log(spancolor);
console.log(rate);
console.log(btn.style);

function clickme() {
  mode.classList.toggle("color-ngiht");

  // Toggle between "Night Mode" and "Light Mode"
  if (btn.textContent === "Night Mode") {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Night Mode";
  }

  spancolor.forEach(function (spanc) {
    spanc.classList.toggle("whitec");
  });

  rate.forEach(function (element) {
    element.classList.toggle("whitec");
  });
}

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
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
});
