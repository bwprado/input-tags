class InputTags extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const head = document.querySelector('head')
		const linkToStyle = document.createElement('link')
		const linkToIcons = document.createElement('link')
		const script = document.createElement('script')
		linkToStyle.type = 'text/css'
		linkToStyle.rel = 'stylesheet'
		linkToStyle.href = 'https://cdn.jsdelivr.net/gh/bwprado/input-tags@latest/style.css'
		linkToIcons.href = 'https://unicons.iconscout.com/release/v4.0.0/css/thinline.css'
		linkToIcons.rel = 'stylesheet'
		script.type = 'text/javascript'
		script.src = 'https://cdn.jsdelivr.net/gh/bwprado/input-tags@latest/script.js'
		head.appendChild(linkToStyle)
		head.appendChild(linkToIcons)
		head.appendChild(script)

		const divWrapper = document.createElement('div')
		divWrapper.id = 'container'
		divWrapper.classList.add('wrapper')
		divWrapper.innerHTML = `
		<div class="wrapper">
		<div class="title">
			<img src="https://cdn.jsdelivr.net/gh/bwprado/input-tags/img-tag.svg" alt="icon">
			<h2>Tags</h2>
		</div>
		<div class="content">
			<p>Press enter or add a comma after each tag</p>
			<ul><input type="text" spellcheck="false"></ul>
		</div>
		<div class="details">
			<button class="details__button">Remove All</button>
		</div>
	</div>
		`

		this.appendChild(divWrapper)
	}
}
customElements.define('input-tags', InputTags)
