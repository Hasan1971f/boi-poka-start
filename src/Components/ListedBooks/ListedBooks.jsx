import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../Utility/AddToDB';
import Book from '../Book/Book';

const ListedBooks = () => {
    const[readList, setReasList]  = useState([])
     const allBooks = useLoaderData()

     useEffect(()=>{
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))

       console.log(storedReadList, allBooks, storedReadListInt )
       const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId) )
       setReasList(readBookList)
     },[])
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab >Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl text-green-500'>Books I read:{readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl text-red-500'>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;