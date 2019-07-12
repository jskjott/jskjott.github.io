Vue.use(VueMarkdown)

let vue = new Vue({
	el: '#vue',
	data: {
		postLinks: [],
		posts: [],
	},
	methods: {
		getPostLinks: async function(){
			let posts = await fetch(`posts.txt`)
				.then(response => response.text())
				.then((data) => data)
				posts = posts.split('\n')
				posts.splice(-1,1)
			this.postLinks = posts.reverse()
		},
	},
	created: function () {
		this.getPostLinks()
	},
	watch: {
	    postLinks: async function () {
			let posts = await Promise.all(
				this.postLinks.map(postLink => {
					console.log(postLink)
					return fetch(`posts/${postLink}`)
						.then(response => response.text())
						.then((data) => {
							return {
								title: postLink.split(' | ')[1].match(/[^.]*/)[0],
								date: new Date(...postLink.split(' | ')[0].split('-')).toDateString(),
								post: data,
							}
						})
				})
			)
			this.posts = posts
		},
	}
})
