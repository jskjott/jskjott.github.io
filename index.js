Vue.use(VueMarkdown)

const projects = [
	"git_for_filmmakers",
	"webring",
	"midi_plotter",
	"community_network_project",
	"service_design_research",
	"kiron_alternative",
	"auto_rickshaw",
	"fraktur",
	"trails",
	"my_home",
	"portable_typewriter",
	"historiography",
	"news",
	"daerim_dong",
	"modelling_color_in_film"
]

const sites = Promise.all(pages.map(site => {
	return fetch(`pages/${site.source}`)
        .then(response => response.text())
        .then((data) => data)
	})).then(result => {

	const routes = result.map((page, i) => {
		const fileType = pages[i].source.slice(-2)

		const template = `${fileType === 'md' ? 
			`<vue-markdown>${page}</vue-markdown>` :
			`<div>${page}</div>`
		}`

		return {path: `/${pages[i].title}`, component: { template }}
	})

	const router = new VueRouter({
	  routes: routes,
	  base: '/'
	})

	const vueData = {}
	pages.forEach(page => {
		vueData[page.title] = page
	})

	const vue = new Vue({
		el: '#vue',
	  	router: router,
	  	data: {
	  		pages,
	  		projects,
	  		toc: [],
	  		currentRoute: '',
	  		altText: '',
	  		window: {
		      width: 0,
		      height: 0
		    }
	  	},
	  	created: function(){
         	this.currentRoute = this._router.currentRoute.path.replace('/', '')
         	this.altText = vueData[this._router.currentRoute.path.replace('/', '')].altText
         	const image = document.getElementById("headerImage")  
			image.style.backgroundImage = `url(${vueData[this._router.currentRoute.path.replace('/', '')].img})`

			Vue.nextTick(function () {
			  const toc = Array(...document.querySelectorAll("h1, h2, h3, h4, h5, h6"))
					vue.toc = toc

					toc.forEach((header, index) => {
			  			header.id = `head${index}`
			  		})
			})

		    window.addEventListener('resize', this.handleResize)
		    this.handleResize()
	    },
	    methods: {
		    handleResize() {
		      this.window.width = window.innerWidth
		      this.window.height = window.innerHeight
		    },
		    pushRoute() {
		    	const input = document.getElementById("goto")
				router.push(input.value)
		    }
		  }
	})

	router.afterEach((to, from) => {

		const image = document.getElementById("headerImage")
		image.style.backgroundImage = `url(${vueData[to.path.replace('/','')].img})`
		vue.currentRoute = vueData[to.path.replace('/','')].title
		vue.altText = vueData[to.path.replace('/','')].altText
		window.scrollTo(0, 0)

		Vue.nextTick(function () {
		  	const toc = Array(...document.querySelectorAll("h1, h2, h3, h4, h5, h6"))
	  		toc.forEach((header, index) => {
	  			header.id = `head${index}`
	  		})
			vue.toc = toc
		})
	})

	const input = document.getElementById("goto")

	input.addEventListener("keyup", function(event) {
	  if (event.keyCode === 13) {
	  	router.push(input.value)
	  }
	})
})