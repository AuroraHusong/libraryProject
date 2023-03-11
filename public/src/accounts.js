function findAccountById(accounts, id) {
  const certainAccount= accounts.find((account)=>{
  if(account.id === id){
    return account
  }
  })
return certainAccount
}

function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB)=>{
    return lastNameA.name.last < lastNameB.name.last ? -1:1
  })
return accounts
}


function borrowsById (book, {id}) {
return book.borrows.filter(borrow => borrow.id === id);
}



function getTotalNumberOfBorrows(account, books) {
let count = 0;
books.forEach(book => {
  const borrowedById = borrowsById(book, account);
  count += borrowedById.length;
});
return count;
}

function helper(books)
{
   const intr= books.filter(
      (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
    )
return intr;
}

function getBooksPossessedByAccount(account, books, authors) {
 const intr= books.filter(
    (book) => book.borrows[0].id === account.id && !book.borrows[0].returned
  )
 
 const result = (intr.map((book) => {
      book["author"] = authors.find((author) => author.id === book.authorId);
        return book;
})
);
return result;
}

module.exports = {
findAccountById,
sortAccountsByLastName,
getTotalNumberOfBorrows,
getBooksPossessedByAccount,
};
