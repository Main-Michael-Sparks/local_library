//find, filter and reduce are all used on this page; including ternary operator

function findAccountById(accounts, id) {
  return accounts.find(element => element.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((elementOne,elementTwo) =>
  {
    if (elementOne.name.last < elementTwo.name.last) {
      return -1
    } else if (elementOne.name.last > elementTwo.name.last) {
      return 1
    }
  })
}

function getTotalNumberOfBorrows(account, books) {
const results = books.reduce((accu, val) => {
  for(const element of val.borrows) {
    element.id === account.id ? accu++ : accu += 0
  }
  return accu
},0)
return results
}

function getBooksPossessedByAccount(account, books, authors) {
const filteredBooks = books.filter( books => {
  if (books.borrows.find(element => element.id === account.id && !element.returned)) {
      return books
    }
  })
 const findAuthor = authors.find(element => {
     for(const item of filteredBooks) {
      if (item.authorId === element.id){
        item["author"] = element
        break;
      }
    }
 })
 return filteredBooks
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
