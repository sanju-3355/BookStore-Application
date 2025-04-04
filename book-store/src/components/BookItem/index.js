import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'

const BookItem = (props) => {
  const {bookDetails} = props
  const {id, title, subtitle, image, price} = bookDetails
  const navigate = useNavigate();

  const onClickBookItem = (id) => {
    navigate(`/books/${id}`)
  }

  return (
    <Link to = {`/books/${id}`} className='link-item'>
      <li className='book-item'>
        <div className='book-item-btn'>
          <button className='book-item-btn' onClick={onClickBookItem} type='button'>
            <img src={image} className='book-img' alt={title} />
          </button>
        </div>
        <div className='book-item-details-card-container'>
          <h1 className='book-item-title'>{title}</h1>
          <p className='book-item-subtitle'>{subtitle}</p>
          <p className='book-item-price'>{price}</p>
        </div>
      </li>
    </Link>
  )

}

export default BookItem