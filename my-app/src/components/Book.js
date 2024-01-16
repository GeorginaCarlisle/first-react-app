import React from 'react'

function Book(prop) {
  return (
    <div>
        <h5>{prop.book.title}</h5>
        <p>{prop.book.author}</p>
        <p>{prop.book.pages}</p>
    </div>
  )
}

export default Book