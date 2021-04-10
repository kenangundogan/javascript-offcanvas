/*!
 * Javascript Offcanvas 1.0.0
 * Copyright 2021 Kenan Gündoğan
 * Released under the MIT License
 */

const Offcanvas = function () {
    const offcanvasButtons = document.querySelectorAll(".offcanvasBtn");
    offcanvasButtons.forEach(offcanvasButton => {
        const dataTarget = offcanvasButton.getAttribute("data-target");
        const offcanvasContainer = document.querySelector(dataTarget);
        const selector = {
            offcanvasButton,
            offcanvasContainer
        }
        offcanvasGetAttr(selector);
    });

    function offcanvasGetAttr(selector) {
        if (selector.offcanvasContainer) {
            const offcanvasClose = selector.offcanvasContainer.querySelector(".offcanvas-close");
            const offcanvasWrapper = selector.offcanvasContainer.querySelector(".offcanvas-wrapper");
            let dataPostion = selector.offcanvasContainer.getAttribute("data-position");
            let dataSize = selector.offcanvasContainer.getAttribute("data-size");
            let dataTransition = selector.offcanvasContainer.getAttribute("data-transition");
            if (dataPostion == "" || dataPostion == null) { dataPostion = "center"; }
            if (dataSize == "" || dataSize == null) { dataSize = "small"; }
            if (dataTransition == "" || dataTransition == null) { dataTransition = "300"; }
            options = {
                offcanvasClose,
                offcanvasWrapper,
                dataPostion,
                dataSize,
                dataTransition
            }
            modalEventFunc(selector, options);
        }
    }

    function modalEventFunc(selector, options) {
        selector.offcanvasButton.addEventListener("click", () => {
            selector.offcanvasContainer.classList.add("show", options.dataPostion, options.dataSize);
            setTimeout(() => {
                options.offcanvasWrapper.style.transition = `${options.dataTransition}ms`;
                selector.offcanvasContainer.classList.add("visible");
                selector.offcanvasContainer.classList.add("transform");
            }, 0);
            offcanvasCloseFunc(selector, options);
        });
    }

    function offcanvasCloseFunc(selector, options) {
        if (options.offcanvasClose) {
            options.offcanvasClose.addEventListener("click", () => {
                selector.offcanvasContainer.classList.remove("visible", "transform");
                setTimeout(() => {
                    selector.offcanvasContainer.classList.remove(options.dataPostion, options.dataSize, "show");
                    options.offcanvasWrapper.style = "";
                }, options.dataTransition);
            });
        }
    }
}

window.Offcanvas = Offcanvas;