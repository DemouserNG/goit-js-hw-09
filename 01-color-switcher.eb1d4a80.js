const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r=null;t.addEventListener("click",(function(){r=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.eb1d4a80.js.map