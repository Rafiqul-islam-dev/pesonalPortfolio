/*----------------About section------------------*/
(() => {
  const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab-item") &&
      !event.target.classList.contains("active")
    ) {
      const target = event.target.getAttribute("data-target");
      tabsContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      //active new 'tab-item'
      event.target.classList.add("active", "outer-shadow");
      //deactive existing active
      aboutSection
        .querySelector(".tab-content.active")
        .classList.remove("active");
      //active new 'tab-content'
      aboutSection.querySelector(target).classList.add("active");
      //console.log(target);
    }
  });
})();

function bodyScrollingToggle(){
  document.body.classList.toggle("stop-scrolling");
}
/*-----------------portfolio filter and popp----------------*/
(() => {
  const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portFolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

  let intemIndex, slideIndex, screenshort;

  /* filter portfolio items*/
  filterContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")
    ) {
      //deactive active filter-item
      filterContainer
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");

      //active new filter-item
      event.target.classList.add("active", "outer-shadow");
      const target = event.target.getAttribute("data-target");
      portFolioItems.forEach((item) => {
        if (target === item.getAttribute("data-catagory") || target === "all") {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    }
  });
  portfolioItemsContainer.addEventListener("click", (event) => {
    if (event.target.closest(".portfolio-item-inner")) {
      const portFolioItems = event.target.closest(
        ".portfolio-item-inner"
      ).parentElement;

      //get the portfolioitem index
      intemIndex = Array.from(portFolioItems.parentElement.children).indexOf(
        portFolioItems
      );
      //screenshort = portFolioItems[intemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshort");
      screenshort = portFolioItems
        .querySelector(".portfolio-item-img img")
        .getAttribute("data-screenshorts");
      //convar screenshort into arry
      screenshort = screenshort.split(",");
      if (screenshort.length === 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
      } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
      }
      slideIndex = 0;
      popupToggle();
      popupSlideshow();
      popupDetails()
    }
  });

  closeBtn.addEventListener("click", () => {
    popupToggle();
    if(projectDetailsContainer.classList.contains("active")){
      popupDetailsToggle()
    }
  });

  function popupToggle() {
    popup.classList.toggle("open");
    bodyScrollingToggle();
  }

  function popupSlideshow() {
    const imgsrc = screenshort[slideIndex];
    const popupImg = popup.querySelector(".pp-img");
    popup.querySelector(".pp-loader").classList.add("active");
    popupImg.src = imgsrc;
    popupImg.onload = () => {
      popup.querySelector(".pp-loader").classList.remove("active");
    };
    popup.querySelector(".pp-counter").innerHTML =
      slideIndex + 1 + " of " + screenshort.length;
  }

  //next slider
  nextBtn.addEventListener("click", () => {
    if (slideIndex === screenshort.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    popupSlideshow();
  });

  //pre slider
  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      slideIndex = screenshort.length-1;
    } else {
      slideIndex--;
    }
    popupSlideshow();
  });

  //popup details
  function popupDetails(){
    if(!portFolioItems[intemIndex].querySelector(
      ".portfolio-items-details")){
        projectDetailsBtn.style.display="none";
        return;
      }
      projectDetailsBtn.style.display = "block";
      //get the project details
    const details = portFolioItems[intemIndex].querySelector(
      ".portfolio-items-details").innerHTML;
     //set the project details
      popup.querySelector(".pp-project-details").innerHTML = details;
      //get the project title
      const title = portFolioItems[intemIndex].querySelector(".portfolio-item-title").innerHTML;
      //set the project title
      popup.querySelector(".pp-title h2").innerHTML = title;
      //get the project catagery
      const catagory = portFolioItems[intemIndex].getAttribute("data-catagory");
      //set the project catagory
      popup.querySelector(".pp-project-category").innerHTML = catagory;
  }





  projectDetailsBtn.addEventListener("click", ()=>{
    popupDetailsToggle()
  })

  function popupDetailsToggle(){
    if(projectDetailsContainer.classList.contains("active")){
      projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
      projectDetailsBtn.querySelector("i").classList.add("fa-plus");
      projectDetailsContainer.classList.remove("active");
      projectDetailsContainer.style.maxHeight = 0 + "px"
    }
    else{
      projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
      projectDetailsBtn.querySelector("i").classList.add("fa-minus");
      projectDetailsContainer.classList.add("active");
      projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
    }
  }

})();


//testmonial

(()=>{
  const sliderContainer = document.querySelector(".testi-slider-content"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    sliderWidth = sliderContainer.offsetWidth;
    preBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next");
  let slideIndex = 0;

  slides.forEach((slide) => {
    slide.style.width = slideWidth + "px";
  });
  //sliderContainer.style.width = slideWidth * slides.length + "px";

  // //next slider
  // nextBtn.addEventListener("click", () => {
  //   if (slideIndex === slides.length - 1) {
  //     slideIndex = 0;
  //   } else {
  //     slideIndex++;
  //   }
  //   sliderContainer.style.marginleft = -(sliderWidth * slideIndex) + "px";
  // })

})()