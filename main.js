import { createEl } from './js/utils.js'
import { likeSvg, deleteSvg } from './js/svg-icons.js'

const renderBookItem = (data) => {
  const container = createEl({ tag: 'div', className: 'book' })
  const bookName = createEl({ tag: 'h2', text: data.name })
  const bookAuthor = createEl({ tag: 'p', text: data.author })
  const detailLink = createEl({ tag: 'a', className: 'detail-link', href: '/book.html', text: 'Подробнее...' })
  const likeBtn = createEl({ tag: 'button', className: 'like-btn icon-btn', innerHTML: likeSvg })
  const deleteBtn = createEl({ tag: 'button', className: 'delete-btn icon-btn', innerHTML: deleteSvg })
  container.append(bookName, bookAuthor, detailLink, likeBtn, deleteBtn)
  return container
}

console.log('a')
const book = renderBookItem({ name: 'aaaa', author: 'fdsfdsf' })
document.querySelector('main').append(book)