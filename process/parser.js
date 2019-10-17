function tillEqualNextAsterisk(tokenList, length) {
  let tokens = []

  let asterisk = false
  let i = 1

  while (tokenList[i] && !asterisk && tokenList[i].token_type !== 'EOF') {
    if (tokenList[i].token_type === 'Asterisk' && tokenList[i].lexeme.length === length) {
      asterisk = true
    } else {
      tokens.push(tokenList[i])
    }

    i++
  }

  return(tokens)
}

const tokenParsers = {
  Title: function(token){
    return { class: 'heading'}
  },
  Author: function(token){
    return { class: 'author'}
  },
  InitiationDate: function(token){
    return { class: 'author'}
  },
  Date: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'date'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Done: function(token) {
    const innerElement = document.createElement('span')

    innerElement.className = 'done'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Link: function(token){
    const innerElement = document.createElement('a')
    
    let regex = new RegExp(/\[\[(?<url>[^\]]+)\]\[(?<text>[^\]]+)\]\]/)

    let match = token.lexeme.match(regex)

    innerElement.setAttribute('href', match.groups.url)
    innerElement.innerHTML = match.groups.text
    innerElement.className = 'link'

    return innerElement
  },
  String: function(token){
    const innerElement = document.createElement('span')

    innerElement.textContent = token.lexeme

    return innerElement
  },
  Todo: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'todo'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Deadline: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'deadline'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Scheduled: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'scheduled'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Timestamp: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'timestamp'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Duration: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'duration'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Underline: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'underline'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Strikethrough: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'strikethrough'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Bold: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'bold'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Italic: function(token){
    const innerElement = document.createElement('span')

    innerElement.className = 'italic'
    innerElement.textContent = token.lexeme

    return innerElement
  },
  Clock: function(token){
    return { class: 'clock'}
  },
  LogBook: function(token){
    return { class: 'clock'}
  },
  End: function(token){
    return { class: 'clock'}
  },
  EOF: function(token){
    return { class: 'end'}
  }
}

export function parseToDomElement(content, indent){

  let element = document.createElement('div')
  let divElements = []

  let active = -1
  let line = 1

  content.forEach((token, i) => {
    if (i > active) {

      if (token.token_type === "Asterisk") {
        //&& token.lexeme.length >= indent

        const innerContent = tillEqualNextAsterisk(content.slice(i), token.lexeme.length)
        const innerIndent = token.lexeme.length

        if (i + innerContent.length > active) {
          active = i + innerContent.length
        }

        const header = document.createElement(`H${token.lexeme.length + 1}`)

        const innerElement = document.createElement(`div`)

        let z = 0

        while (innerContent[z] && innerContent[z].line === token.line) {
          const space = document.createElement('span')
          space.textContent = ' '

          header.appendChild(tokenParsers[innerContent[z].token_type](innerContent[z]))
          header.appendChild(space)
          z++
        }

        innerElement.appendChild(header)
        let children = parseToDomElement(innerContent.slice(z), innerIndent)
        children.className = `indent-${token.lexeme.length}`
        innerElement.appendChild(children)

        divElements.push(innerElement)

      } else {

        const innerElement = document.createElement(`div`)

        while (content[i] && content[i].line === token.line) {
          const space = document.createElement('span')
          space.textContent = ' '
          let parsed = tokenParsers[content[i].token_type](content[i])
          if (parsed.class) {
            innerElement.className = parsed.class
          } else {
            innerElement.appendChild(parsed)
            innerElement.appendChild(space)  
          }
          
          i++
        }

        active = i - 1

        divElements.push(innerElement)
      }
    }
  })

    divElements.forEach(div => element.appendChild(div))

    return element
}