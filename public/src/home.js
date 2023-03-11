function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const checkedOutTotal = books.reduce((accumulator, book)=>{
   const {borrows} = book
   const areAllReturned = borrows.some((borrowed)=>{
     return borrowed.returned === false
   })
     if(areAllReturned === true){
       accumulator ++
     }
   return accumulator
  },0)
   return checkedOutTotal
 }
 

function getMostCommonGenres(books) {
  const mostPopGen = {}
  const {genre} = books
books.forEach((book)=>{
    if(mostPopGen[book.genre] === undefined){
      mostPopGen[book.genre] = 1
    }
    else{
      mostPopGen[book.genre]+=1
    }
  })
  let result = [];
  for(let genreKey in mostPopGen){
    let info = {name: genreKey, count: mostPopGen[genreKey]}
    result.push(info)
  }
result.sort((mostPop, leastPop)=>{
  return leastPop.count - mostPop.count
})
return result.slice(0,5)
}



//returns [] 5 objects or less .slice
//after looping through both arrays push book name and count of borrows to array.
function getMostPopularBooks(books){
  
  //{name: book.title, count: book.borrows.length}
  const popularBooks = books.map(book=> ({name: book.title, count: book.borrows.length}))
  
  //sort from most popular
  const popularBooksSorted = popularBooks.sort((bookA,bookB)=>
    bookA.count < bookB.count ? 1:-1
  ) 
return popularBooksSorted.slice(0,5)
  
}
//[{name:"authors.name.first,authors.name.last", count:book.borrows.length}
//]

function getMostPopularAuthors(books, authors) {
  function getAuthorById(authors, authorId) {
    return authors.find((authId) => authId.id === authorId); }
    const mostPopAuthors = [];
      books.forEach((book) => {
        const foundAuthor = mostPopAuthors.find((authObj) => 
          authObj.id === book.authorId);
          if (foundAuthor) { foundAuthor.count += book.borrows.length; 
         }
      else {
         const writer = getAuthorById(authors, book.authorId);
         const count = book.borrows.length;
         mostPopAuthors.push({ name: `${writer.name.first} ${writer.name.last}`, count: count, });
      }
      });
     let mostPopAuthorsSorted = mostPopAuthors.sort((mostPop, leastPop) => mostPop.count < leastPop.count ? 1 : -1 );
     return mostPopAuthorsSorted.slice(0, 5);

  }
  
 
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
