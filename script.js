/*
let highlights = document.getElementsByClassName('list-style-none')[18]

let s = document.createElement("div");
s.classList.add('awesome')
highlights.appendChild(s)
*/

const default_colortheme = {
    "--color-calendar-graph-day-bg": "#161b22",
    "--color-calendar-graph-day-L1-bg": "#0e4429",
    "--color-calendar-graph-day-L2-bg": "#006d32",
    "--color-calendar-graph-day-L3-bg": "#26a641",
    "--color-calendar-graph-day-L4-bg": "#39d353"
}

const magenta_colortheme = {
    "--color-calendar-graph-day-bg": "#161b22",
    "--color-calendar-graph-day-L1-bg": "#290e44",
    "--color-calendar-graph-day-L2-bg": "#45006d",
    "--color-calendar-graph-day-L3-bg": "#6226a6",
    "--color-calendar-graph-day-L4-bg": "#8b39d3"
}

const default_colortheme_hacked = {
    "--color-calendar-graph-day-bg": "#39d353",
    "--color-calendar-graph-day-L1-bg": "#39d353",
    "--color-calendar-graph-day-L2-bg": "#39d353",
    "--color-calendar-graph-day-L3-bg": "#39d353",
    "--color-calendar-graph-day-L4-bg": "#39d353"
}

var r = document.querySelector(':root');


let styleadmin = (key, value) => {
  r.style.setProperty(key, value) /* Set new value to variable with key */
}

for(let theme in magenta_colortheme) {
    styleadmin(theme, magenta_colortheme[theme])
}


