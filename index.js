let vue = new Vue({
  el: "#vue",
  data: {
    mainArea: 'projects',
    items: [
    { 
        title: "Service Design for Participatory Science",
        text: "Prototyping social dynamics in participatory research.",
        image: "img/service_design_research.png",
        class: "card design",
        link: "dclabs.html",
    },{ 
        title: "Auto Rickshaw Documentary Project",
        text: "Rickshaw driver families in Hydarabad",
        image: "img/auto_rickshaw.png",
        class: "card storytelling",
        link: "tuktuk.html",
    },{ 
        title: "Portable Typewriter",
        text: "A first experiment in electronics.",
        image: "img/portable_typewriter.png",
        class: "card design",
        link: "assets/pdfs/Receipt_Printer_Typewriter.pdf",
    },{ 
        title: "Digital Historiography",
        text: "Tools for investigating the past.",
        image: "img/digital_historiogaphy.png",
        class: "card visual",
        link: "history.html",
    },{ 
        title: "Spatially Conscious News",
        text: "An alternative news aggregato",
        image: "img/spatially_concious_news.png",
        class: "card visual",
        link: "spatial_news_interface/index.html",
    },{ 
        title: "Josenjok of Daerim-dong",
        text: "A walking tour about a Chinese Korean community.",
        image: "img/daerim_dong.png",
        class: "card storytelling",
        link: "Joseonjok.html",
    },{ 
        title: "Metro Global",
        text: "The contentious history of metro system.",
        image: "img/metro_global.png",
        class: "card storytelling",
        link: "metro_global.html",
    },{ 
        title: "Becoming an Online Learner",
        text: "MOOC introducing refugees to online learning.",
        image: "img/kiron_mooc.png",
        class: "card design",
        link: "kiron.html",
    },{ 
        title: "Color in Film",
        text: "A model generating color palettes for feature films.",
        image: "img/modelling_color_in_film.png",
        class: "card visual",
        link: "film_colour_simulation/index.html",
    },{ 
        title: "Mother",
        text: "A homage to family and heritage.",
        image: "img/mother_video_art.png",
        class: "card visual",
        link: "mother/index.html",
    },{ 
        title: "Slitscan experiments",
        text: "An exploration of manipulating time in video.",
        image: "img/slitscan_video.png",
        class: "card visual",
        link: "https://vimeo.com/263361334",
    }
    ]
  }
})

let header = new Vue({
    el: '#header',
    computed: {
        renderProjectMenu: function(){
            return document.documentElement.clientWidth > 410 ? true : false
        }
    }
})

if (typeof HTMLCollection.prototype.forEach === "undefined") {
  HTMLCollection.prototype.forEach = Array.prototype.forEach;
}

function filterSelection(c) {
    console.log(c)
    if (c === 'about') {
        vue.mainArea = 'about'
        vue.mainAreaClass = 'about'
        } else {
            vue.mainArea = 'projects'
            let cards = document.getElementsByClassName("card")
            if (c == "all")
                {cards.forEach(ele => ele.style.display = "grid")
            } else{
                cards.forEach(ele => ele.style.display = "none")
                cards.forEach(ele => {
                if (ele.className.split(" ")[1] == c){
                    document.getElementsByClassName(ele.className).forEach(element => {
                    element.style.display = "grid"
                });
              }
            })
        }
    }
}
