

document.addEventListener("DOMContentLoaded", () => {
    let swiperBrand;
    let equipmentRepairSwiper;
    let servicePricesSwiper;

   
    function initSwiperBrand() {
        if (!swiperBrand) {
            swiperBrand = new Swiper(".image-slider", {
                direction: "horizontal",
                loop: true,
                slidesPerView: "auto",
                spaceBetween: 16,

                breakpoints: {
                    768: {
                        enabled: false,
                    },
                },

                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    }

    
    function initEquipmentRepairSwiper() {
        if (window.innerWidth < 768 && !equipmentRepairSwiper) {
            equipmentRepairSwiper = new Swiper(".equipment-repair-slider", {
                slidesPerView: 1.27,
                spaceBetween: 16,
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        } else if (window.innerWidth >= 768 && equipmentRepairSwiper) {
            
            equipmentRepairSwiper.destroy();
            equipmentRepairSwiper = null;
        }
    }

    
    function initServicePricesSwiper() {
        if (window.innerWidth < 768 && !servicePricesSwiper) {
            servicePricesSwiper = new Swiper(".service-prices-slider", {
                slidesPerView: 1.15,
                spaceBetween: 16,
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        } else if (window.innerWidth >= 768 && servicePricesSwiper) {
            
            servicePricesSwiper.destroy();
            servicePricesSwiper = null;
        }
    }

   
    window.addEventListener("resize", () => {
        initEquipmentRepairSwiper();
        initServicePricesSwiper();
    });

    
    initSwiperBrand();
    initEquipmentRepairSwiper();
    initServicePricesSwiper();

    
    const equipmentRepairSlider = document.querySelector(".equipment-repair-slider");
    const equipmentRepairMoreInfo = document.querySelector(".equipment-repair__more-info");

    if (equipmentRepairSlider && equipmentRepairMoreInfo) {
        equipmentRepairMoreInfo.addEventListener("click", () => {
            equipmentRepairSlider.classList.toggle("equipment-repair-slider--full");
            equipmentRepairMoreInfo.classList.toggle("more-info--active");

            
            equipmentRepairMoreInfo.textContent =
                equipmentRepairMoreInfo.textContent === "Показать все" ? "Скрыть" : "Показать все";
        });
    } else {
        console.error("Элементы equipmentRepairSlider или equipmentRepairMoreInfo не найдены.");
    }
});