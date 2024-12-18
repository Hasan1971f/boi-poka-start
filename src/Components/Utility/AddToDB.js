import { toast } from "react-toastify"

const  getStoredReadList =()=>{
    //   read-list 
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr ){
       const storedList = JSON.parse(storedListStr)
       return  storedList
    }
    else{
        return []
    }
}

const getStoredWishList =()=>{
    const storedWishStr = localStorage.getItem('wish-list')
    if(storedWishStr){
        const wishList =JSON.parse(storedWishStr)
        return wishList
    }
    else{
        return []
    }

}


const addToStoredReadList =(id)=>{  
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        // allreadt exist . do not add it.
        console.log(id, 'already exist in the readList')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list',  storedListStr)
        //  ideally trigger  toast from the component
        toast('This book is added to your read list')
        
    }
}

const addToWishList=(id)=>{
    const wishList = getStoredWishList()
    if(wishList.includes(id)){
        // all ready exist. do not add it.
        console.log(id,'all ready exist in the wishList')
    }
    else{
        wishList.push(id) 
        const storedWishStr = JSON.stringify(wishList)
        localStorage.setItem('wish-list', storedWishStr)
    }
} 



export {addToStoredReadList, addToWishList, getStoredReadList}