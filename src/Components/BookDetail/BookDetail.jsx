import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)
   
    // console.log(typeof bookId, typeof id,  typeof data[0].bookId)

    const book = data.find(book => book.bookId === id)
    // console.log(book)
    
   const{bookId: currentBookId, image, review, totalPages, rating}= book
  
    return (
        <div className='my-2'>
            <h2>Book detail: {bookId}</h2>
            <img className='w-36' src={image}alt="" />

            <p className="text-red-500">{review}</p>
            <span className='text-2xl  text-green-500 p-4'>{totalPages}</span>
            <p className='text-red-600'>{rating}</p>
            <br/>
            <button className="btn btn-outline btn-accent mr-4">Read</button>
            <button className="btn btn-accent">Wishlist</button>
        </div>
    );
};

export default BookDetail;