class ThemeCustomizer{theme="light";init(){this.html=document.getElementsByTagName("html")[0];var e=localStorage.getItem("__AEROPAGE_CONFIG__");e&&(e=JSON.parse(e),this.theme=e.theme),"dark"===this.theme&&this.html.classList.add("dark"),this.onThemeChange(),window.addEventListener("DOMContentLoaded",()=>{this.after()})}onThemeChange=()=>{"dark"===this.theme?this.html.classList.add("dark"):this.html.classList.remove("dark"),this.lightTheme&&this.darkTheme&&("light"===this.theme?(this.lightTheme.classList.remove("hidden"),this.darkTheme):(this.darkTheme.classList.remove("hidden"),this.lightTheme)).classList.add("hidden"),localStorage.setItem("__AEROPAGE_CONFIG__",JSON.stringify({theme:this.theme}))};after(){this.lightTheme=document.getElementById("light-theme"),this.darkTheme=document.getElementById("dark-theme"),this.lightTheme&&this.darkTheme&&(this.lightTheme.addEventListener("click",e=>{this.theme="dark",this.onThemeChange()}),this.darkTheme.addEventListener("click",e=>{this.theme="light",this.onThemeChange()})),this.onThemeChange()}}(new ThemeCustomizer).init();