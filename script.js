/*
let highlights = document.getElementsByClassName('list-style-none')[18]

let s = document.createElement("div");
s.classList.add('awesome')
highlights.appendChild(s)
*/

const default_colortheme = {
    "--color-calendar-graph-day-L1-bg": "#0e4429",
    "--color-calendar-graph-day-L2-bg": "#006d32",
    "--color-calendar-graph-day-L3-bg": "#26a641",
    "--color-calendar-graph-day-L4-bg": "#39d353"
}

const magenta_colortheme = {
    "--color-calendar-graph-day-L1-bg": "#290e44",
    "--color-calendar-graph-day-L2-bg": "#45006d",
    "--color-calendar-graph-day-L3-bg": "#6226a6",
    "--color-calendar-graph-day-L4-bg": "#8b39d3"
}

const haloween_colortheme = {
    "--color-calendar-graph-day-L1-bg": "#631c03",
    "--color-calendar-graph-day-L2-bg": "#bd561d",
    "--color-calendar-graph-day-L3-bg": "#fa7a18",
    "--color-calendar-graph-day-L4-bg": "#fddf68"
}
const winter_colortheme = {
    "--color-calendar-graph-day-L1-bg": "#0A3069",
    "--color-calendar-graph-day-L2-bg": "#0969DA",
    "--color-calendar-graph-day-L3-bg": "#54AEFF",
    "--color-calendar-graph-day-L4-bg": "#B6E3FF"
}


const default_colortheme_hacked = {
    "--color-calendar-graph-day-bg": "#39d353",
    "--color-calendar-graph-day-L1-bg": "#39d353",
    "--color-calendar-graph-day-L2-bg": "#39d353",
    "--color-calendar-graph-day-L3-bg": "#39d353",
    "--color-calendar-graph-day-L4-bg": "#39d353"
}



let selected_colortheme = winter_colortheme
var r = document.querySelector(':root');

let styleadmin = (key, value) => {
  r.style.setProperty(key, value) /* Set new value to variable with key */
}

for(let theme in selected_colortheme) {
    styleadmin(theme, selected_colortheme[theme])
}

let o = document.getElementsByClassName('Progress-item')
for(let i = 0; i < o.length; i++) {
    o[i].style.backgroundColor = selected_colortheme["--color-calendar-graph-day-L4-bg"]
}

setTimeout(() => {
    document.getElementsByClassName('js-highlight-blob')[0].setAttribute('stroke', selected_colortheme["--color-calendar-graph-day-L4-bg"])
}, 1000)
