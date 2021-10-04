// Testinomial JS

// vars
("use strict");
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

    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};
// Toggle navebar

let nav_menu = document.getElementById("nav_menu");
let open_menu = document.getElementById("open_menu");
let close_menu = document.getElementById("close_menu");

// open navbar menu
function openNavbar() {
  nav_menu.style.marginTop = "0";
  close_menu.style.display = "block";
  open_menu.style.display = "none";
}
// close navbar menu
function closeNavbar() {
  nav_menu.style.marginTop = "-1200px";
  close_menu.style.display = "none";
  open_menu.style.display = "block";
}

// Change language

const nav_id = document.getElementById("navbar");
const footer = document.getElementById("footer");
const pillsTab = document.getElementById("pills-tab");
const buttonTop = document.getElementById("buttonTop");

const ele = document.querySelectorAll(".dp");
const rotate_arrow = document.querySelectorAll(".rotate");
const gear2 = document.getElementById("g2");
const gear3 = document.getElementById("g3");

const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const n5 = document.getElementById("n5");
const n6 = document.getElementById("n6");
const n7 = document.getElementById("n7");
const d1_1 = document.getElementById("d1-1");
const d1_2 = document.getElementById("d1-2");
const d1_3 = document.getElementById("d1-3");
const d1_4 = document.getElementById("d1-4");

const d2_1 = document.getElementById("d2-1");
const d2_2 = document.getElementById("d2-2");
const d2_3 = document.getElementById("d2-3");
const d2_4 = document.getElementById("d2-4");
const d2_5 = document.getElementById("d2-5");

const d2_p1 = document.getElementById("d2p-1");
const d2_p2 = document.getElementById("d2p-2");
const d2_p3 = document.getElementById("d2p-3");
const d2_p4 = document.getElementById("d2p-4");
const d2_p5 = document.getElementById("d2p-5");
const d2_p6 = document.getElementById("d2p-6");

const d3_1 = document.getElementById("d3-1");
const d3_2 = document.getElementById("d3-2");
const d3_3 = document.getElementById("d3-3");
const d3_4 = document.getElementById("d3-4");

const d3p_1 = document.getElementById("d3p-1");
const d3p_2 = document.getElementById("d3p-2");
const d3p_3 = document.getElementById("d3p-3");
const d3p_4 = document.getElementById("d3p-4");
const d3p_5 = document.getElementById("d3p-5");

const d4_1 = document.getElementById("d4_1");
const d4_2 = document.getElementById("d4_2");
const d4_3 = document.getElementById("d4_3");
const d4_4 = document.getElementById("d4_4");

const d5_1 = document.getElementById("d5_1");
const d5_2 = document.getElementById("d5_2");
const d5_3 = document.getElementById("d5_3");
const d5_4 = document.getElementById("d5_4");
const d5_5 = document.getElementById("d5_5");

const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");

const ft_1 = document.getElementById("ft_1");
const ft_2 = document.getElementById("ft_2");
const ft_3 = document.getElementById("ft_3");
const ft_4 = document.getElementById("ft_4");
const ft_5 = document.getElementById("ft_5");
const ft_6 = document.getElementById("ft_6");

const ft2_1 = document.getElementById("ft2_1");
const ft2_2 = document.getElementById("ft2_2");
const ft2_3 = document.getElementById("ft2_3");
const ft2_4 = document.getElementById("ft2_4");
const ft2_5 = document.getElementById("ft2_5");
const ft2_6 = document.getElementById("ft2_6");
const ft2_7 = document.getElementById("ft2_7");
const ft2_8 = document.getElementById("ft2_8");
const ft2_9 = document.getElementById("ft2_9");

const ft3_1 = document.getElementById("ft3_1");
const ft3_2 = document.getElementById("ft3_2");
const ft3_3 = document.getElementById("ft3_3");
const ft3_4 = document.getElementById("ft3_4");
const ft3_5 = document.getElementById("ft3_5");

const news_letter = document.getElementById("news_letter");
const n_update = document.getElementById("n_update");
const subs = document.getElementById("subs");

const exp1 = document.getElementById("expchallange");
const exp2 = document.getElementById("expinovation");

const ge1 = document.getElementById("ge1");
const ge2 = document.getElementById("ge2");
const ge3 = document.getElementById("ge3");
const ge4 = document.getElementById("ge4");
const ge5 = document.getElementById("ge5");

const l_ino = document.getElementById("l_ino");
const lc = document.getElementById("lc");

const ei = document.getElementById("ei");
const ec = document.getElementById("ec");

const getLang = localStorage.getItem("lang");
const engLng = document.getElementById("engLng");
const arabicLng = document.getElementById("arabicLng");

const h_arrow = document.querySelectorAll(".h_arrow");
const nav_item = document.querySelectorAll(".nav-item");

function HandleLanguage(e) {
  const language = e ? e : "english";
  localStorage.setItem("lang", language);
  const getLang = localStorage.getItem("lang");

  if (getLang === "urdu") {
    engLng.classList.remove("d-none");
    arabicLng.classList.add("d-none");

    for (let i = 0; i < ele.length; i++) {
      ele[i].classList.add("test2");
    }

    pillsTab.style.direction = "rtl";

    gear2.style.marginRight = "63px";
    gear3.style.marginRight = "95px";

    buttonTop.style.left = "30px";
    buttonTop.style.right = "inherit";

    nav_id.style.direction = "rtl";
    nav_id.style.fontFamily = "DroidArabicKufiRegular";
    footer.style.direction = "rtl";
    footer.style.fontFamily = "DroidArabicKufiRegular";
    exp1.style.justifyContent = "flex-end";
    exp1.style.flexDirection = "row-reverse";
    exp2.style.justifyContent = "flex-end";
    exp2.style.flexDirection = "row-reverse";

    n1.style.textAlign = "right";
    n1.innerHTML = "القائمة الرئيسية";
    n1.style.fontSize = "0.8rem";
    n2.style.textAlign = "right";
    n2.innerHTML = "واحة التحديات ";
    n3.style.textAlign = "right";
    n3.innerHTML = "واحة الإبتكارات";
    n4.style.textAlign = "right";
    n4.innerHTML = "واحة الاستثمارات ";
    n5.style.textAlign = "right";
    n5.innerHTML = "كوِّن فريقك";
    n6.style.textAlign = "right";
    n6.innerHTML = "الفعاليات";
    n7.style.textAlign = "right";
    n7.innerHTML = "إنشاء حساب  / تسجيل دخول";

    ge1.innerHTML = "الحكومة";
    ge2.innerHTML = "المستثمرين";
    ge3.innerHTML = "الشركات الناشئة";
    ge4.innerHTML = "المبتكرين";
    ge5.innerHTML = "القطاعات <br>األكاديمية";

    ge1.style.fontFamily = "DroidArabicKufiRegular";
    ge2.style.fontFamily = "DroidArabicKufiRegular";
    ge3.style.fontFamily = "DroidArabicKufiRegular";
    ge4.style.fontFamily = "DroidArabicKufiRegular";
    ge5.style.fontFamily = "DroidArabicKufiRegular";

    d1_1.style.textAlign = "right";
    d1_1.innerHTML = "سجل التحدي";
    d1_2.style.textAlign = "right";
    d1_2.innerHTML = "سجل حلول للتحديات";
    d1_3.style.textAlign = "right";
    d1_3.innerHTML = "سجل في هاكثون";
    d1_4.style.textAlign = "right";
    d1_4.innerHTML = "قصص نجاح";

    d2_1.style.textAlign = "right";
    d2_1.innerHTML = "المسرعات";
    d2_2.style.textAlign = "right";
    d2_2.innerHTML = "حاضنات";
    d2_3.style.textAlign = "right";
    d2_3.innerHTML = "الموجهين";
    d2_4.style.textAlign = "right";
    d2_4.innerHTML = "الدورات";
    d2_5.style.textAlign = "right";
    d2_5.innerHTML = "التعلم الإلكتروني";

    d2_p1.style.textAlign = "right";
    d2_p1.innerHTML = "سجل في برامج التسريع";
    d2_p2.style.textAlign = "right";
    d2_p2.innerHTML = "سجل في الحاضنات";
    d2_p3.style.textAlign = "right";
    d2_p3.innerHTML = "إبحث عن الموجه";
    d2_p4.style.textAlign = "right";
    d2_p4.innerHTML = "سجل كموجه";
    d2_p5.style.textAlign = "right";
    d2_p5.innerHTML = "البحث عن البرامج التدريبية المناسبة لأهدافك";
    d2_p6.style.textAlign = "right";
    d2_p6.innerHTML = "البحث عن الدورات";

    d3_1.style.textAlign = "right";
    d3_2.style.textAlign = "right";
    d3_3.style.textAlign = "right";
    d3_4.style.textAlign = "right";

    d3_1.innerHTML = "المستثمرون";
    d3_2.innerHTML = "الاستثمارات";
    d3_3.innerHTML = "الشركات الناشئة";
    d3_4.innerHTML = "التمويل";

    d3p_1.style.textAlign = "right";
    d3p_2.style.textAlign = "right";
    d3p_3.style.textAlign = "right";
    d3p_4.style.textAlign = "right";
    d3p_5.style.textAlign = "right";

    d3p_1.innerHTML = "سجل كمستثمر";
    d3p_2.innerHTML = "البحث عن فرص الاستثمار";
    d3p_3.innerHTML = "ابحث عن أفضل الشركات الناشئة واستثمر فيها";
    d3p_4.innerHTML = "تسجيل الشركات الناشئة الخاصة بك";
    d3p_5.innerHTML = "تمويل المشاريع الإبتكارية";

    d4_1.style.textAlign = "right";
    d4_2.style.textAlign = "right";
    d4_3.style.textAlign = "right";
    d4_4.style.textAlign = "right";

    d4_1.innerHTML = "سجل مهاراتك";
    d4_2.innerHTML = "ابحث عن أفضل المواهب";
    d4_3.innerHTML = "البحث عن أفضل الشركات الناشئة";
    d4_4.innerHTML = "طلب مهارة";

    d5_1.style.textAlign = "right";
    d5_2.style.textAlign = "right";
    d5_3.style.textAlign = "right";
    d5_4.style.textAlign = "right";
    d5_5.style.textAlign = "right";

    d5_1.innerHTML = "أخبار";
    d5_2.innerHTML = "الفعاليات القادمة ";
    d5_3.innerHTML = "الفعاليات السابقة";
    d5_4.innerHTML = "تواصل معنا مباشرة لعمل فعاليات خاصة ";
    d5_5.innerHTML = "تواصل معنا مباشرة لحجز إجتماعات خاصة";

    l_ino.innerHTML = "أحدث الإبتكارات";
    lc.innerHTML = "أحدث التحديات";

    ei.innerHTML = "إستعرض الإبتكارات";
    ec.innerHTML = "إستعرض التحديات";

    h1.innerHTML = "التعاون هو المفتاح لتسريع الابتكار";
    h1.style.fontFamily = "DroidArabicKufiRegular";

    h2.innerHTML =
      "واحات الابتكار الرقمية تربط الشركات الناشئة بالقطاع الحكومي والخاص لتحويل الأفكار إلى منتجات أو خدمات";
    h2.style.fontFamily = "DroidArabicKufiRegular";
    ft_1.innerHTML = "نبذة عنا";
    ft_2.innerHTML = "نبدة عن واحات اإلبتكار";
    ft_3.innerHTML = "خدماتنا";
    ft_4.innerHTML = "فريق العمل";
    ft_5.innerHTML = "شركائنا";
    ft_6.innerHTML = "الأسئلة الشائعة";

    ft2_1.innerHTML = "روابط سريعة";

    ft2_2.innerHTML = "تحديات";
    ft2_3.innerHTML = "الابتكارات";
    ft2_4.innerHTML = "التمويل";
    ft2_5.innerHTML = "التدريب";
    ft2_6.innerHTML = "التوجيه";
    ft2_7.innerHTML = "برامج تسريع";
    ft2_8.innerHTML = "المهارات";
    ft2_9.innerHTML = "أدوات اإلبتكار";
    ft3_1.innerHTML = "الفعاليات";
    ft3_2.innerHTML = "القادمة";
    ft3_3.innerHTML = "السابقة";
    ft3_4.innerHTML = "هاكثون";
    ft3_5.innerHTML = "المسابقات";

    news_letter.innerHTML = "اشترك في نشرتنا اإلخبارية";
    n_update.innerHTML = "ابق على اطالع بأحدث األخبار والفعاليات والمزيد";
    subs.innerHTML = "اإلشتراك";

    for (let i = 0; i < h_arrow.length; i++) {
      h_arrow[i].style.marginRight = "-6px";
    }

    for (let i = 0; i < nav_item.length; i++) {
      nav_item[i].style.margin = "0 10px";
    }

    for (let i = 0; i < rotate_arrow.length; i++) {
      rotate_arrow[i].style.transform = "rotate(-180deg)";
    }
  } else {
    engLng.classList.add("d-none");
    arabicLng.classList.remove("d-none");

    for (let i = 0; i < h_arrow.length; i++) {
      h_arrow[i].style.marginLeft = "-17px";
    }

    for (let i = 0; i < nav_item.length; i++) {
      nav_item[i].style.margin = "0 6px";
    }

    for (let i = 0; i < rotate_arrow.length; i++) {
      rotate_arrow[i].style.transform = "rotate(0deg)";
    }

    n1.style.textAlign = "left";
    n2.style.textAlign = "left";
    n3.style.textAlign = "left";
    n4.style.textAlign = "left";
    n5.style.textAlign = "left";
    n6.style.textAlign = "left";
    n7.style.textAlign = "left";

    nav_id.style.direction = "ltr";
    nav_id.style.fontFamily = "sans-serif";
    footer.style.direction = "ltr";
    footer.style.fontFamily = "sans-serif";

    exp1.style.justifyContent = "flex-end";
    exp1.style.flexDirection = "row";
    exp2.style.justifyContent = "flex-end";
    exp2.style.flexDirection = "row";

    pillsTab.style.direction = "ltr";
    gear2.style.marginRight = "0px";
    gear3.style.marginRight = "0px";
    buttonTop.style.right = "30px";
    buttonTop.style.left = "inherit";

    n1.innerHTML = "Home";
    n2.innerHTML = "Challenges Oasis";
    n3.innerHTML = "Innovations Oasis";
    n4.innerHTML = "Investments Oasis";
    n5.innerHTML = "Build your team";
    n6.innerHTML = "Events";
    n7.innerHTML = "Register / Login";

    ge1.innerHTML = "Government";
    ge2.innerHTML = "Investors";
    ge3.innerHTML = "Startups";
    ge4.innerHTML = "Innovators";
    ge5.innerHTML = "Academic <br> sectors";

    d1_1.style.textAlign = "left";
    d1_2.style.textAlign = "left";
    d1_3.style.textAlign = "left";
    d1_4.style.textAlign = "left";

    d1_1.innerHTML = "Post challenges";
    d1_2.innerHTML = "Solve challenges";
    d1_3.innerHTML = "Join Hackathon";
    d1_4.innerHTML = "Success story";

    d2_1.style.textAlign = "left";
    d2_2.style.textAlign = "left";
    d2_3.style.textAlign = "left";
    d2_4.style.textAlign = "left";
    d2_5.style.textAlign = "left";

    d2_1.innerHTML = "Accelerators";
    d2_2.innerHTML = "Incubators";
    d2_3.innerHTML = "Mentors";
    d2_4.innerHTML = "Training";
    d2_5.innerHTML = "E-learning";

    d2_p1.style.textAlign = "left";
    d2_p2.style.textAlign = "left";
    d2_p3.style.textAlign = "left";
    d2_p4.style.textAlign = "left";
    d2_p5.style.textAlign = "left";
    d2_p6.style.textAlign = "left";

    d2_p1.innerHTML = "Register for Acceleration Programs";
    d2_p2.innerHTML = "Register for incubators";
    d2_p3.innerHTML = "Find Mentors";
    d2_p4.innerHTML = "Register as a mentor";
    d2_p5.innerHTML = "Find training Programs";
    d2_p6.innerHTML = "Find courses";

    d3_1.style.textAlign = "left";
    d3_2.style.textAlign = "left";
    d3_3.style.textAlign = "left";
    d3_4.style.textAlign = "left";

    d3_1.innerHTML = "Investors";
    d3_2.innerHTML = "Investments";
    d3_3.innerHTML = "Start-ups";
    d3_4.innerHTML = "Funding";

    d3p_1.style.textAlign = "left";
    d3p_2.style.textAlign = "left";
    d3p_3.style.textAlign = "left";
    d3p_4.style.textAlign = "left";
    d3p_5.style.textAlign = "left";

    d3p_1.innerHTML = "Register as investors";
    d3p_2.innerHTML = "Search for investment opportunities";
    d3p_3.innerHTML = "Find & Invest on the best start-ups";
    d3p_4.innerHTML = "Register your start-ups";
    d3p_5.innerHTML = "Funding to bring creative project to life";

    d4_1.style.textAlign = "left";
    d4_2.style.textAlign = "left";
    d4_3.style.textAlign = "left";
    d4_4.style.textAlign = "left";

    d4_1.innerHTML = "Talent register";
    d4_2.innerHTML = "Find top talent";
    d4_3.innerHTML = "Find top startups";
    d4_4.innerHTML = "Request talents";

    d5_1.style.textAlign = "left";
    d5_2.style.textAlign = "left";
    d5_3.style.textAlign = "left";
    d5_4.style.textAlign = "left";
    d5_5.style.textAlign = "left";

    d5_1.innerHTML = "News";
    d5_2.innerHTML = "Upcoming event";
    d5_3.innerHTML = "Past event";
    d5_4.innerHTML = "Customized Events Contact Us Directly";
    d5_5.innerHTML = "Customized Meetings Contact Us Directly";

    h1.innerHTML = "Collaboration is the key to speeding up innovation";
    h2.innerHTML =
      "The Digital Innovation Oases connects startups with public and private sectors to transform ideas to products or services";

    lc.innerHTML = "Latest challenges";
    l_ino.innerHTML = "Latest Innovations";

    ei.innerHTML = "Explore Innovation";
    ec.innerHTML = "Explore Challenges";

    ft_1.innerHTML = "About us";
    ft_2.innerHTML = "About IOs";
    ft_3.innerHTML = "Our services";
    ft_4.innerHTML = "Teams";
    ft_5.innerHTML = "Partners";
    ft_6.innerHTML = "FAQ";

    ft2_1.innerHTML = "Quick Links";
    ft2_2.innerHTML = "Challenges";
    ft2_3.innerHTML = "Innovations";
    ft2_4.innerHTML = "Funding";
    ft2_5.innerHTML = "Training";
    ft2_6.innerHTML = "Mentors";
    ft2_7.innerHTML = "Accelerator";
    ft2_8.innerHTML = "Talents";
    ft2_9.innerHTML = "Innovation Tools";

    ft3_1.innerHTML = "Events";
    ft3_2.innerHTML = "Coming";
    ft3_3.innerHTML = "Past";
    ft3_4.innerHTML = "Hackathons";
    ft3_5.innerHTML = "Awards";

    news_letter.innerHTML = "Subscribe to our NewsLetter";
    n_update.innerHTML = "Stay updated with our latest news, events and more.";
    subs.innerHTML = "Subscribe";
    ge1.style.fontFamily = 'Roboto,"sans-serif"';
    ge2.style.fontFamily = 'Roboto,"sans-serif"';
    ge3.style.fontFamily = 'Roboto,"sans-serif"';
    ge4.style.fontFamily = 'Roboto,"sans-serif"';
    ge5.style.fontFamily = 'Roboto,"sans-serif"';
  }
}
HandleLanguage(getLang);

// Top Button JS
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
let navItemToggle = document.querySelectorAll(".nav-item");
let nav_link = document.querySelectorAll(".dropdown-menu");

navItemToggle.forEach((item, i) => {
  let yes;
  item.addEventListener("click", () => {
    if (nav_link[i].classList.contains("d-block")) {
      yes = true;
    } else {
      yes = false;
    }
    nav_link.forEach((val) => {
      val.classList.remove("d-block");
    });

    if (yes) {
      //   console.log(nav_link[i].parentNode.classList);
      nav_link[i].classList.remove("d-block");
      h_arrow[i].style.transform = "rotate(0deg)";
    } else {
      nav_link[i].classList.add("d-block");
      h_arrow[i].style.transform = "rotate(-180deg)";
    }
  });
});
