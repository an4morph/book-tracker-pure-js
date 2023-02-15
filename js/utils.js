export const createEl = ({ tag, className, text, checked, innerHTML, ...attrs }) => {
  const element = document.createElement(tag)

  if (className) element.className = className
  if (text) element.textContent = text
  if (checked) element.checked = checked
  if (tag === 'input' && !attrs.type) element.setAttribute('type', 'text')
  if (innerHTML) element.innerHTML = innerHTML

  Object.keys(attrs).forEach((attrName) => {
    element.setAttribute(attrName, attrs[attrName])
  })

  return element
}