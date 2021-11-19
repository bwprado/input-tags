const ul = document.querySelector('ul')
const removeAllButton = document.querySelector('button')

input = ul.querySelector('input')

let tags = []

const createTag = () => {
	ul.querySelectorAll('li').forEach(li => li.remove())
	tags
		.slice()
		.reverse()
		.forEach(tag => {
			const liTag = `<li class="content ul li">${tag} <i class="uit uit-multiply" onclick="removeTag(this, '${tag}')"></i></li>`
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
removeAllButton.dispatchEvent(
	new CustomEvent('test', { detail: { x: 'test' } })
)
