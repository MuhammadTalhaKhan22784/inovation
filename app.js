// Testinomial JS

// vars

var testim = document.getElementById("testim"),
  testimDots = Array.prototype.slice.call(
    document.getElementById("testim-dots").children
  ),
  testimContent = Array.prototype.slice.call(
    document.getElementById("testim-content").children
  ),
  testimLeftArrow = document.getElementById("left-arrow"),
  testimRightArrow = document.getElementById("right-arrow"),
  testimSpeed = 4500,
  currentSlide = 0,
  currentActive = 0,
  testimTimer,
  touchStartPos,
  touchEndPos,
  touchPosDiff,
  ignoreTouch = 30;
window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide((currentSlide -= 1));
  });

  testimRightArrow.addEventListener("click", function () {
    playSlide((currentSlide += 1));
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide((currentSlide = testimDots.indexOf(this)));
    });
  }

  playSlide(currentSlide);

  // keyboard shortcuts
  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });

  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;

    touchPosDiff = touchStartPos - touchEndPos;

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};

// Top Button JS

const buttonTop = document.getElementById("buttonTop");
var btn = $("#buttonTop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Toggle Dropdown JS

let navItemToggle = document.querySelectorAll(".n_menu");
let nav_link = document.querySelectorAll(".dropdown-menu");
let nav_s = document.querySelectorAll(".toggle_c");

navItemToggle.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (nav_link[i].classList.contains("d-show-")) {
      nav_link[i].classList.remove("d-show-");
      nav_link.forEach((val) => {
        val.classList.remove("d-show-");
      });
    } else {
      nav_link.forEach((val) => {
        val.classList.remove("d-show-");
      });
      nav_link[i].classList.add("d-show-");
    }
  });
});

nav_s.forEach((item) => {
  item.addEventListener("click", () => {
    nav_link.forEach((val) => {
      val.classList.remove("d-show-");
    });
  });
});

nav_s.forEach((item) => {
  item.addEventListener("mouseover", () => {
    nav_link.forEach((val) => {
      val.classList.remove("d-show-");
    });
  });
});

// Toggle navebar

let nav_menu = document.getElementById("nav_menu");
let open_menu = document.getElementById("open_menu");
let close_menu = document.getElementById("close_menu");
let collapse = document.querySelector(".navbar-collapse");

// open navbar menu

function openNavbar() {
  nav_menu.classList.add("mt_0");
  close_menu.classList.add("d_block");
  open_menu.classList.add("d_none");
  collapse.classList.add("h_83");
}

// close navbar menu
function closeNavbar() {
  nav_menu.classList.remove("mt_0");
  close_menu.classList.remove("d_block");
  open_menu.classList.remove("d_none");
  collapse.classList.remove("h_83");
}
