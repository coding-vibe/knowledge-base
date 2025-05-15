# DOM manipulation

## Edit of DOM

### Creation of element

```js
document.createElement('button')
```

### Removal of element
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

```js
document.querySelector("ul").remove()
```

### Insertion of element to DOM

```html
<ul id="list"></ul>
```

```js
const ul = document.querySelector("ul")

// Inserts button before ul
const btn = document.createElement("button")
ul.before(btn)

// Inserts span after ul
const span = document.createElement("span")
ul.after(span)

// Inserts li's with text Item 1, Item 2
const item1 = document.createElement("li")
item1.textContent='Item 1'

const item2 = document.createElement("li")
item2.textContent='Item 2'

ul.prepend(item1, item2)

// Inserts li with text Item 3 at the end
const item3 = document.createElement("li")
item3.textContent='Item 3'

ul.append(item3)

// Inserts li with text Item 0 at the start
const item0 = document.createElement("li")
item0.textContent='Item 0'

ul.prepend(item0)
```

## DOM element properties

### Classes

```html
<button>Click me!</button>
```

```js
const btn = document.querySelector("button")

// Adds class dark
btn.classList.add('dark')

// Removes class dark
btn.classList.remove('dark')

// Toggles class disabled
btn.classList.toggle('disabled')
```

### Data-attributes

```html
<div data-theme="dark"></div>
```

```js
// data-theme attribute can be accessed in JS in such way:
const div = document.querySelector("div")
div.dataset.theme
```

```js
const section = document.getElementById('section');

console.log(section.dataset);
/*
 * Prints
 * {
 *   author: 'John Does'
 *   lastModified: '2025-04-23T21:47:07.670Z'
 * }
 */
```

```html
<!-- Section with id in html is represented in this way -->
 <section data-author='John Does' data-last-modified='2025-04-23T21:47:07.670Z'></section>
```

### Styles

```html
<button id="button">Click me!</button>
```

```js
// Makes button with white background, green text, green border 2px and radius of borders 4px
const btn = document.querySelector("button")
btn.style.backgroundColor='white'
btn.style.color='green'
btn.style.border='2px solid currentColor'
btn.style.borderRadius='4px'
```
