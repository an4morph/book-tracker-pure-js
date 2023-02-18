import { createEl } from './utils.js'
import { likeSvg, deleteSvg } from './svg-icons.js'
import { getBooks } from './api.js'

const renderBookItem = (data) => {
  const container = createEl({ tag: 'div', className: 'book' })
  const bookName = createEl({ tag: 'h2', text: data.name })
  const bookAuthor = createEl({ tag: 'p', text: data.author })
  const detailLink = createEl({ tag: 'a', className: 'detail-link', href: '/detail.html', text: 'Подробнее...' })
  const likeBtn = createEl({ tag: 'button', className: 'like-btn icon-btn', innerHTML: likeSvg })
  const deleteBtn = createEl({ tag: 'button', className: 'delete-btn icon-btn', innerHTML: deleteSvg })
  container.append(bookName, bookAuthor, detailLink, likeBtn, deleteBtn)
  return container
}

const renderLoader = (parent) => {
  const loader = createEl({
    tag: 'div',
    className: 'loader',
    text: 'Загрузка...'
  })
  parent.append(loader)
}

const renderError = (parent) => {
  const error = createEl({ 
    tag: 'div',
    className: 'error',
    text: 'Произошла ошибка'
  })
  parent.append(error)
}

const removeLoader = () => {
  document.querySelector('.loader').remove()
}

const renderBooks = async () => {
  const container = document.querySelector('.catalog')
  renderLoader(container)

  try {
    const books = await getBooks()
    books.forEach((book) => {
      const bookElement = renderBookItem(book)
      container.append(bookElement)
    })
  }
  catch {
    renderError(container)
  }
  finally {
    removeLoader()
  }
}

renderBooks()