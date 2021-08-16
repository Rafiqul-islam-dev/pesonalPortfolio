/*----------------About section------------------*/
(() =>{

    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classlist.contains("tab-item") && !event.target.classlist.contains("active")){
            console.log("event.target contains 'tab-items' class and not contains 'active' class");
            console.log(event.target);
        }
    })
    //     if(event.target.classlist.contains("tab-item") && !event.target.classlist.contains("active")){
    //         const target = event.target.getAttribute("data-target");
    //         console.log(target);
    //         // tabsContainer.querySelector(".active").classlist.remove("outer-shadow", "active");
    //         // event.target.classlist.add("active", "outer-shadow");
    //         // aboutSection.querySelector(".tab-content.active").classlist.remove("active");
    //         // aboutSection.querySelector(target).classlist.add("active")
    //     }
    // })
})();