import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToWishList } from '../Utility/AddToDB';

const BookDetail = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)
   
    // console.log(typeof bookId, typeof id,  typeof data[0].bookId)

    const book = data.find(book => book.bookId === id)
    // console.log(book)
    
   const{bookId: currentBookId, image, review, totalPages, rating}= book

   const handleMarkAsRead = (id) =>{
    
    addToStoredReadList(id)

   }

   const handleWishList=(id)=>{
       addToWishList(id)
   }
  
    return (
        <div className='my-2'>
            <h2>Book detail: {bookId}</h2>
            <img className='w-36' src={image}alt="" />

            <p className="text-red-500">{review}</p>
            <span className='text-2xl  text-green-500 p-4'>{totalPages}</span>
            <p className='text-red-600'>{rating}</p>
            <br/>
            <button onClick={()=>handleMarkAsRead (bookId)} className="btn btn-outline btn-accent mr-4">Mark as Read</button>
            <button onClick={ ()=>handleWishList(bookId)} className="btn btn-accent">Add to Wishlist</button>
        </div>
    );
};

export default BookDetail;