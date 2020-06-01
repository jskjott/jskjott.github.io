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
	"modelling_color_in_film",
	"writing_drawings"
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

		pages[i].component = template

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
			deleted: false,
			pages,
			tree,
			projects,
			toc: [],
			currentRoute: '',
			altText: '',
			mentionedIn: [],
			linkedPages: [],
			mentionedPages: [],
			connectedPages: [],
			window: {
				isTouch: false,
				width: 0,
				height: 0
			}
		},
		created: function(){
		 	this.currentRoute = this._router.currentRoute.path.replace('/', '')

		 	const currentPage = vueData[this._router.currentRoute.path.replace('/', '')]

		 	this.altText = currentPage.altText
		 	this.mentionedIn = currentPage.mentionedIn

		 	this.linkedPages = currentPage.mentionedPages.map(page => {
		 		return {
		 			title: vueData[page].title,
		 			component: vueData[page].component
		 		}
		 	})

		 	const image = document.getElementById("headerImage")  
			image.src = vueData[this._router.currentRoute.path.replace('/', '')].img



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
			},
			is_touch_device() {
				var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
				var mq = function(query) {
					return window.matchMedia(query).matches;
				}
				if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
					return true;
				}
				var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
				return mq(query);
			}
		},
		computed: {
			routes: function() {
				const terms = this.currentRoute.split('/')
				const pathElements = terms.map((ele, i) => {
					return({
						term: ele,
						path: terms.filter((term, index) => index < i).join('/')
					})
				})

				return(pathElements)
			}
		}
	})

	router.afterEach((to, from) => {

		const image = document.getElementById("headerImage")
		image.src = vueData[to.path.replace('/','')].img
		vue.currentRoute = vueData[to.path.replace('/','')].title
		vue.altText = vueData[to.path.replace('/','')].altText
		vue.mentionedIn = vueData[to.path.replace('/','')].mentionedIn

		vue.linkedPages = vueData[to.path.replace('/','')].mentionedPages.map(page => {
	 		return vueData[page]
	 	})

		vue.deleted = false
		window.scrollTo(0, 0)

		Vue.nextTick(function () {
			const toc = Array(...document.querySelectorAll("h1, h2, h3, h4, h5, h6"))
			toc.forEach((header, index) => {
				header.id = `head${index}`
			})
			vue.toc = toc
		})

		window.scrollTo(0,0)
		document.getElementById('content').scrollTo(0,0)
	})

	const input = document.getElementById("navigatorInput")

	input.addEventListener("input", function(event) {
		const titles = new Set(pages.map(ele => ele.title))
		if (titles.has(input.value)) {
			router.push(input.value)
			input.value = ''
		}
	})

	input.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			if (input.value === '') {
				router.push('/')	
			} else {
				router.push(input.value)
			}
			input.value = ''
		} else if (input.value === '' && event.keyCode === 8) {
			vue.deleted = true
		}
	})

	window.addEventListener("hashchange", () => {
		console.log(location.hash.slice(2))
		vue.$router.push(location.hash.slice(2))
	}, false)
})