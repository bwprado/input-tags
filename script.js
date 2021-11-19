const ul = document.querySelector('ul')
const removeAllButton = document.querySelector('button')
const p = document.querySelector('p')

input = ul.querySelector('input')

let tags = []

const createTag = () => {
	ul.querySelectorAll('li').forEach(li => li.remove())
	tags
		.slice()
		.reverse()
		.forEach(tag => {
			const liTag = `<li class="content ul li">${tag} <i class="uit uit-multiply" onclick="removeTag(this, '${tag}')" id="test"></i></li>`
			ul.insertAdjacentHTML('afterbegin', liTag)
		})
}

const removeTag = (el, tag) => {
	tags = tags.filter(t => t !== tag)
	el.parentElement.remove()
}

const removeAllTags = () => {
	p.textContent = 'teste'
	tags = []
	ul.querySelectorAll('li').forEach(li => li.remove())
	const element = document.querySelector("#comp-kw2pehbe > input-tags")
	console.log(element)
	element.dispatchEvent(
		new CustomEvent('test', { detail: { x: 'test' } })
	)
	
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
