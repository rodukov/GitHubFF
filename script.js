/*
let highlights = document.getElementsByClassName('list-style-none')[18]

highlights.remove()
let highlight_c = document.createElement("li").classList.add('mt-2');
let highlight = document.createElement("a").classList.add('Link--primary');

highlights.appendChild(highlight_c);
highlight_c.appendChild(highlight);

highlight.value = 'gg'
*/
let highlights = document.getElementsByClassName('list-style-none')[18]

let s = document.createElement("div");
s.classList.add('awesome')
highlights.appendChild(
    s
)
