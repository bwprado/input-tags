const ul = document.querySelector('ul')
const removeAllButton = document.querySelector('button')
const head = document.querySelector('head')
const link = document.createElement('link')
link.type = 'text/css'
link.rel = 'stylesheet'
link.href = 'https://cdn.jsdelivr.net/gh/bwprado/input-tag/input-tag.css'
head.appendChild(link)

input = ul.querySelector('input')

let tags = []

const createTag = () => {
	ul.querySelectorAll('li').forEach(li => li.remove())
	tags
		.slice()
		.reverse()
		.forEach(tag => {
			const liTag = `<li class="ul__li">${tag} <i class="uit uit-multiply" onclick="removeTag(this, '${tag}')"></i></li>`
			ul.insertAdjacentHTML('afterbegin', liTag)
		})
}

const removeTag = (el, tag) => {
	tags = tags.filter(t => t !== tag)
	el.parentElement.remove()
}

const removeAllTags = () => {
  tags = []
  ul.querySelectorAll('li').forEach(li => li.remove())
}

const addTag = e => {
	const {
		key,
		target: { value },
	} = e
	if (key === 'Enter' || key === 'Tab') {
		let tag = value.replace(/\s+/g, ' ')
		if (tag.length > 1 && !tags.includes(tag)) {
			tag.split(',').forEach(t => {
				tags.push(t)
				createTag()
			})
		}
		e.target.value = ''
		e.target.focus()
	}
}

input.addEventListener('keydown', addTag)
removeAllButton.addEventListener('click', removeAllTags)
