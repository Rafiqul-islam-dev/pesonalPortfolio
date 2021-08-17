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
      tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
      //active new 'tab-item'
      event.target.classList.add("active", "outer-shadow");
      //deactive existing active
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      //active new 'tab-content'
      aboutSection.querySelector(target).classList.add("active");
      //console.log(target);
    }
  });
  
})();
/*-----------------portfolio filter and popp----------------*/
(()=>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portFolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn =popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");

    let intemIndex, slideIndex, screenshort;

    /* filter portfolio items*/
    filterContainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") && !event.target.classList.contains("active")){
            //deactive active filter-item
            filterContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            //active new filter-item
            event.target.classList.add("active", "outer-shadow");
            const target = event.target.getAttribute("data-target");
            portFolioItems.forEach((item) =>{
                if(target === item.getAttribute("data-catagory") || target === 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })
        }
    })
    portfolioItemsContainer.addEventListener("click", (event)=>{
        if(event.target.closest(".portfolio-item-inner")){
            const portFolioItems = event.target.closest(".portfolio-item-inner").parentElement;
            
            //get the portfolioitem index

            intemIndex = Array.from(portFolioItems.parentElement.children).indexOf(portFolioItems);
            //screenshort = portFolioItems[intemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshort");
           screenshort = portFolioItems[intemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshorts");
            console.log(screenshort);
        }
    })
})()