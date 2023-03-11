function findAuthorById(authors, id) {
  const certainAuthor= authors.find((author)=>{
    if(author.id === id){
      return author
    }
  })
return certainAuthor
}

function findBookById(books, id) {
  const certainBook= books.find((book)=>{
    if(book.id === id){
      return book
    }
  })
return certainBook
}
//[[][]] TWO ARRAYS IN AN ARRAY
function partitionBooksByBorrowedStatus(books) {
  const filteredReturned = books.filter((book)=>{
    const everyoneReturned = book.borrows.every((eachBook)=>{
      return eachBook.returned === true
    })
  return everyoneReturned
    
  })
  const filteredNotReturned = books.filter((book)=>{
    const stillCheckedOut = book.borrows.some((eachBook)=>{
      return eachBook.returned === false
    })
  return stillCheckedOut
   })
return[filteredNotReturned, filteredReturned]
}


function getBorrowersForBook(book, accounts) {
    const {borrows} = book
    const matchingAccounts = borrows.map((bookObj)=>{
      const matchingBook= accounts.find((accountObj)=>{
        return accountObj.id === bookObj.id
        
      })
    matchingBook.returned = bookObj.returned
      return matchingBook
    })
    
return matchingAccounts.slice(0,10)
      
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
