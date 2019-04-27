const sentences = [
	'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz',
	'Hey Jude, dont make it bad. Take a sad song and make it better. Remember to let her into your heart. Then you can start to make it better',
	'Fraktur is a typeface which was used for German books from the 15th century till the late 19th century.',
]

let currentSentence = 0

const vueMain = new Vue({
	el:'#vueMain',
	data: {
		sentence: '',
		sentenceList: [],
		current: 0,
	},
	methods: {
		setSentenceList: function () {
			this.sentence.split('').forEach((letter,i) => {
				let element = {
					letter: letter,
					status: undefined,
				}
				i === 0 ? element['status'] = 'current' : element['status'] = undefined
				this.sentenceList.push(element)
			})
		},
		keymonitor: function(event) {
			if (event.key === 'Shift') {
				return
			}
			if (event.key === this.sentenceList[this.current].letter ) {
				this.sentenceList[this.current].status = 'correct' 
			} else {
				this.sentenceList[this.current].status = 'incorrect'

			}
			this.current += 1
			this.sentenceList[this.current].status = 'current'
		},
		incorrect: function(letter) {
			return letter.status === 'incorrect' ? true : false
		},
		setSentence: function(input) {
			//document.getElementById('vueMain').innerHTML = ''
			this.sentenceList = []
			this.current = 0
			this.sentence = input
			this.setSentenceList()
		},
	},
})

const vueHeader = new Vue({
	el: '#vueHeader',
	data: {
		selected: 'printed fraktur',
	},
	methods: {
		changeFont: function(){
			document.getElementById('vueMain').style.fontFamily = this.selected
		},
	},
})

let changeContent = input => {
	currentSentence = currentSentence + input
	vueMain.setSentence(sentences[currentSentence])
}

vueMain.sentence = sentences[currentSentence]
vueMain.setSentenceList()

document.addEventListener('keydown', (event) => {
	if (event.metaKey || event.altKey || event.ctrlKey) {
		return
	}
	vueMain.keymonitor(event)
})

document.documentElement.addEventListener('keydown', function (e) {
	if ( ( e.keycode || e.which ) == 32) {
		e.preventDefault()
	}
}, false)
