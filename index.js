Vue.use(VueMarkdown)

let vue = new Vue({
  el: "#vue",
  data: {
    mainArea: 'projects',
    pageContent: '',
    isProcessing: true,
    activePage: null,
    function() {
        return {
            route: window.location.hash,
        }
    },
    wiki: [
        {
            title: "quotes",
            text: "condensed powerful ideas",
            contentLink: "quotes.md",
        },{
            title: "library",
            text: "longform.",
            contentLink: "library.md",
        },{
            title: "space",
            text: "creating space for myself",
            contentLink: "space.md",
        },{
            title: "targets",
            text: "reflections on values",
            contentLink: "targets.md",
        },
    ],
    items: [
        { 
            title: "Git for Filmmakers",
            text: "A version control tool.",
            image: "img/git_for_filmmakers.png",
            class: "card programming",
            contentLink: "git_for_filmmakers.md",
        },{ 
            title: "Printing Process as Time-based Media",
            text: "A media study",
            image: "img/midi_plotter.png",
            class: "card programming design",
            contentLink: "The_Printing_Process_as_Time-based_Media.md",
        },{ 
            title: "Visualise Communities",
            text: "An explorable network visualisation",
            image: "img/community_network_project.png",
            class: "card programming design",
            contentLink: "community_network_project.md",
        },{ 
            title: "Make Citizen Science more Participatory",
            text: "A service design research project.",
            image: "img/service_design_research.png",
            class: "card design",
            contentLink: "service_design.md",
        },{ 
            title: "Introduce Refugees to Online Learning",
            text: "An interactive learning experience.",
            image: "img/kiron_alternative.png",
            class: "card design",
            contentLink: "kironMOOC.md",
        },{ 
            title: "Tell The Story Of Rickshaw Drivers",
            text: "A documentary.",
            image: "img/auto_rickshaw.png",
            class: "card storytelling",
            contentLink: "auto_rickshaw.md",
        },{ 
            title: "Teach How To Read Old Typefaces",
            text: "A learning experience prototype.",
            image: "img/fraktur.png",
            class: "card programming design",
            contentLink: "fraktur.md",
        },{ 
            title: "Forge A More Communal Internet",
            text: "A chrome extension.",
            image: "img/trails.png",
            class: "card programming",
            contentLink: "trails.md",
        },{ 
            title: "My Online Home",
            text: "A single-page portfolio site.",
            image: "img/my_home.png",
            class: "card programming",
            contentLink: "portfolio_site.md",
        },{ 
            title: "Lower The Barrier Of Print Publishing",
            text: "A first experiment in electronics.",
            image: "img/portable_typewriter.png",
            class: "card design programming",
            contentLink: "portable_typewriter.md",
        },{ 
            title: "Digital Historiography",
            text: "A digital humanities research project.",
            image: "img/digital_historiogaphy.png",
            class: "card storytelling",
            contentLink: "digital_historiogaphy.md",
        },{ 
            title: "Providing Spatially Conscious News",
            text: "An alternative news aggregator.",
            image: "img/spatially_concious_news.png",
            class: "card programming design",
            contentLink: "spatially_concious_news.md",
        }
        //,{ 
            //title: "Josenjok of Daerim-dong",
            //text: "A walking tour on Chinese Korean community.",
            //image: "img/daerim_dong.png",
            //class: "card storytelling",
            //contentLink: "joseonjok.md",
        //},{ 
            //title: "Metro Global",
            //text: "A exploration of what is behind metro systems.",
            //image: "img/metro_global.png",
            //class: "card storytelling",
            //contentLink: "metro_global.md",
        //}
        ,{ 
            title: "Color in Film",
            text: "A model generating color palettes for films.",
            image: "img/modelling_color_in_film.png",
            class: "card programming",
            contentLink: "color_in_film.md",
        },
        //,{ 
            //title: "Mother",
            //text: "A homage to family and heritage.",
            //image: "img/mother_video_art.png",
            //class: "card programming",
            //contentLink: "mother.md",
        //},{ 
            //title: "Slitscan experiments",
            //text: "An exploration of manipulating time in video.",
            //image: "img/slitscan_video.png",
            //class: "card programming",
            //contentLink: "slitscan_experiments.md",
        //},
        { 
            title: "Where I Have Spent my Time",
            text: "A visulisation.",
            image: "img/where.png",
            class: "card storytelling",
            contentLink: "where_I_have_been.md",
        },
    ],
  },
  methods: {
    hashChange: function(contentLink){
        window.location.hash = contentLink
    },
    setActivePage: function(contentLink){
        this.activePage = contentLink
    },
    getPageContent: async function(contentLink){
        this.mainArea = 'page'
        const pageContent = await fetch(`pages/${contentLink}`)
                            .then(response => response.text())
                            .then((data) => data)
        this.pageContent = pageContent
        this.isProcessing = false
    },
  },
  watch: {
    mainArea: function(){
        if (this.mainArea === 'projects') {
            this.isProcessing = true
        }
    },
    activePage: function(){
        if (this.mainArea === 'page') {
            this.getPageContent(this.activePage)
            this.isProcessing = true
        }
    },
    route: function(){
        this.getPageContent(window.location.hash.split("#/")[1])
    }
  },
  created: function(){
    if (window.location.hash) {
        if (window.location.hash === '#about' || window.location.hash === '#wiki') {
            const area = window.location.hash.substring(1)
            console.log(area)
            this.mainArea = area
            this.mainAreaClass = area
        } else {
            this.getPageContent(window.location.hash.replace('#',''))    
        }
    }
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
    if (c === 'about' || c === 'wiki') {
        vue.mainArea = c
        vue.mainAreaClass = c
        window.location.hash = c
        }
    else {
        vue.mainArea = 'projects'
        history.pushState("", document.title, window.location.pathname)
        let cards = document.getElementsByClassName("card")
        if (c == "all")
            {cards.forEach(ele => ele.style.display = "grid")
        } else {
            Vue.nextTick(function () {
                cards.forEach(ele => ele.style.display = "none")
                cards.forEach(ele => {
                    if (ele.className.split(" ").includes(c)){
                        document.getElementsByClassName(ele.className).forEach(element => {
                        element.style.display = "grid"
                        });
                    }
                })
            })
        }
    }
}

window.addEventListener('hashchange', function() {
    if (window.location.hash === '#about' || window.location.hash === '#wiki') {
        const area = window.location.hash.substring(1)
        vue.mainArea = area
        vue.mainAreaClass = area
    } else if (window.location.hash) {
        if (vue.mainArea === 'projects' || 
            vue.mainArea === 'about' ||
            vue.mainArea === 'wiki') {
            vue.mainArea = 'page'
        }
        vue.setActivePage(window.location.hash.replace('#',''))
    } else {
        vue.mainArea = 'projects'
        vue.activePage = null
    }
}, false);

