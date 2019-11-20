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
    media: [
        {
            title: "Text",
            pages: [
                {
                    title: "The Power of Text",
                    contentLink: "text.md"
                }
            ]
        },
        { 
            title: "Video",
            pages: [
                {
                    title: "Static Representions of Time-based Media",
                    contentLink: "slitscan_experiments.md",
                }
            ],
        },{ 
            title: "Printing",
            pages: [
                {
                    title: "Printing Process as Time-based Media",
                    contentLink: "The_Printing_Process_as_Time_based_Media.md"
                },{
                    title: "Portable Print Publishing",
                    contentLink: "portable_typewriter.md"
                },
            ],
        }, { 
            title: "Annotation",
            pages: [
                {
                    title: "Annotation Design",
                    contentLink: "annotation_design.md"
                },
            ],
        }
    ],
    manifestations: [
        {
            title: "quotes",
            text: "snippets containing powerful ideas",
            contentLink: "quotes.md",
        },{
            title: "library",
            text: "longform",
            contentLink: "library.md",
        },{
            title: "space",
            text: "creating space of various kinds",
            contentLink: "space.md",
        },{
            title: "targets",
            text: "trying to define my values",
            contentLink: "targets.md",
        },{
            title: "biking",
            text: "freedom",
            contentLink: "biking.md",
        },{
            title: "chasmic",
            text: "deep work",
            contentLink: "chasmic.md",
        },{
            title: "urgency",
            text: "developing a praxis",
            contentLink: "urgency.md",
        },
    ],
    items: [
        { 
            title: "Git for Filmmakers",
            text: "A version control tool.",
            image: "img/git_for_filmmakers.png",
            altText: "screenshot of project GUI",
            class: "card programming",
            contentLink: "git_for_filmmakers.md",
        },{ 
            title: "Building Community Online",
            text: "A webring for the Recurse Center.",
            image: "img/webring.png",
            altText: "screenshot of the webring site",
            class: "card programming design",
            contentLink: "webring.md",
        },{ 
            title: "Midi Plotter",
            text: "A program drawing real-time visualisations.",
            image: "img/midi_plotter.png",
            altText: "a photo of the produced data visualisation",
            class: "card programming design",
            contentLink: "midi_plotter.md"
        },{ 
            title: "Visualise Communities",
            text: "An explorable network visualisation.",
            image: "img/community_network_project.png",
            altText: "a screenshot of the produced interactive data visualisation",
            class: "card programming design",
            contentLink: "community_network_project.md",
        },{ 
            title: "Make Citizen Science more Participatory",
            text: "A service design research project.",
            image: "img/service_design_research.png",
            altText: "a visualisation showing how we spent our time",
            class: "card design",
            contentLink: "service_design.md",
        },{ 
            title: "Introduce Refugees to Online Learning",
            text: "An interactive learning experience.",
            image: "img/kiron_alternative.png",
            altText: "a photo of the Kiron course leaders",
            class: "card design",
            contentLink: "kironMOOC.md",
        },{ 
            title: "Tell The Story Of Rickshaw Drivers",
            text: "A documentary.",
            image: "img/auto_rickshaw.png",
            altText: "a photo of an auto rickshaw with a driver and a passenger",
            class: "card storytelling",
            contentLink: "auto_rickshaw.md",
        },{ 
            title: "Teach How To Read Old Typefaces",
            text: "A learning experience prototype.",
            image: "img/fraktur.png",
            altText: "a screenshot of the project GUI",
            class: "card programming design",
            contentLink: "fraktur.md",
        },{ 
            title: "Forge A More Communal Internet",
            text: "A chrome extension.",
            image: "img/trails.png",
            altText: "a screenshot of a notification from the extension",
            class: "card programming",
            contentLink: "trails.md",
        },{ 
            title: "My Online Home",
            text: "A single-page portfolio site.",
            image: "img/my_home.png",
            altText: "a graphic in the shape of a house",
            class: "card programming",
            contentLink: "portfolio_site.md",
        },{ 
            title: "Portable Print Publishing",
            text: "A first experiment in electronics.",
            image: "img/portable_typewriter.png",
            altText: "a collage of prontouts from the portable printer I made",
            class: "card design programming",
            contentLink: "portable_typewriter.md",
        },{ 
            title: "Digital Historiography",
            text: "A digital humanities research project.",
            image: "img/digital_historiogaphy.png",
            altText: "a visualisation of places which where mentioned in my analysis for this project",
            class: "card storytelling",
            contentLink: "digital_historiogaphy.md",
        },{ 
            title: "Providing Spatially Conscious News",
            text: "An alternative news aggregator.",
            image: "img/spatially_concious_news.png",
            altText: "a screenshot of the visualisation used in the GUI",
            class: "card programming design",
            contentLink: "spatially_concious_news.md",
        }
        ,{ 
            title: "Joseonjok of Daerim-dong, Seoul",
            text: "The making of a historical audio-tour.",
            image: "img/daerim_dong.png",
            altText: "A photo of the street in Daerim-dong",
            class: "card storytelling",
            contentLink: "joseonjok.md",
        }
        //,{ 
            //title: "Metro Global",
            //text: "A exploration of what is behind metro systems.",
            //image: "img/metro_global.png",
            //altText: "",
            //class: "card storytelling",
            //contentLink: "metro_global.md",
        //}
        ,{ 
            title: "Color in Film",
            text: "A model generating color palettes for films.",
            image: "img/modelling_color_in_film.png",
            altText: "a visualisation showing the average color in feature films",
            class: "card programming",
            contentLink: "color_in_film.md",
        },
        //,{ 
            //title: "Mother",
            //text: "A homage to family and heritage.",
            //image: "img/mother_video_art.png",
            //altText: "",
            //class: "card programming",
            //contentLink: "mother.md",
        //},{ 
            //title: "Slitscan experiments",
            //text: "An exploration of manipulating time in video.",
            //image: "img/slitscan_video.png",
            //altText: "",
            //class: "card programming",
            //contentLink: "slitscan_experiments.md",
        //},
        { 
            title: "Where I Have Spent my Time",
            text: "A visulisation.",
            image: "img/where.png",
            altText: "a visualisation of where I have spent my time since 2010",
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
        this.activePage = null
        this.activePage = contentLink
        if (contentLink === 'about') {
            this.getPageContent(this.activePage)
            this.isProcessing = true
        }
    },
    getPageContent: async function(contentLink){
        if (this.mainArea !== 'manifestations' || this.mainArea !== 'about') {
            this.mainArea = 'page'
        }

        if (contentLink === 'about') {
            contentLink = 'about.md'
        }

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
        if (this.mainArea === 'page' || this.mainArea === 'manifestations' 
            || this.mainArea === 'process') {
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
        if (window.location.hash.match('-')) {

            const page = window.location.hash.split('-')[1]
            this.setActivePage(page)

            this.mainArea = 'manifestations'
            this.mainAreaClass = 'manifestations'

        } else if (window.location.hash === '#manifestations' 
            || window.location.hash === '#media' || window.location.hash === '#process') {
            const area = window.location.hash.substring(1)
            this.mainArea = area
            this.mainAreaClass = area
        } else if (window.location.hash === '#about') {
            this.getPageContent('about.md')
        } else {
            this.getPageContent(window.location.hash.replace('#',''))
        }
    }
  },
  updated: function () {
    document.getElementById("content").scrollIntoView()    
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
    const space = document.querySelector(".tree")
    if (space) {
        space.style.display = "none"
    }
    if (c === 'about' || c === 'manifestations' || c === 'media' || c === 'process') {
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
    const hash = window.location.hash
    vue.pageContent = null

    if (window.location.hash.match('-')) {

        const [newBaseHash, contentLink] = hash.split('-')
        window.location.hash = `${newBaseHash}-${contentLink}`

        vue.setActivePage(contentLink)
    } else {
        if (hash === '#manifestations' 
            || hash === '#media' || hash === '#process') {
            const area = hash.substring(1)
            vue.mainArea = area
            vue.mainAreaClass = area
        } else if (hash) {
            if (vue.mainArea === 'projects' || 
                vue.mainArea === 'about' ||
                vue.mainArea === 'manifestations' ||
                vue.mainArea === 'process' ||
                vue.mainArea === 'media') {
                vue.mainArea = 'page'
            }
            vue.setActivePage(hash.replace('#',''))
        } else {
            vue.mainArea = 'projects'
            vue.activePage = null
        }
    }
}, false);

