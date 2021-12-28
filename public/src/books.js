//find, filter and helper function are used on this page

//helper function
function _findById(array, id) {
  const results = array.find(element => {
    if(element.id === id) {
      return element
    }
  })
  return results
}

function findAuthorById(authors, id) {
  //returning result of helper
  return _findById(authors, id);
}

function findBookById(books, id) {
  //returning result of helper
  return _findById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  const results =[]
  results.push(
    books.filter(element => !element.borrows[0].returned),
    books.filter(element => element.borrows[0].returned)
  )
  return results
}

function getBorrowersForBook(book, accounts) {
 const results = []
 const whoBorrowedThisBook = book.borrows.forEach(element => {
   const matches = accounts.find(who =>{
     if (who.id === element.id ) {
       if(results.length <= 9) {
       who["returned"] = element.returned
       results.push(who)
       }
     }
   })
   return matches
 })
 return results
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
