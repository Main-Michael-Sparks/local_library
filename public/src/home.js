//reduce, map, for/of loops and object destructuring used on this page

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const currentlyBorrowed = books.reduce(
    (accu, val) => {
      if (!val.borrows[0].returned) {
        accu++
      }
    return accu
    },0)
  return currentlyBorrowed
}

function getMostCommonGenres(books) {
  const genreObj = {};
  books.forEach((book) => {
    if (genreObj[book.genre]) {
      genreObj[book.genre]++;
    }
    else {
      genreObj[book.genre] = 1;
    }
  });
    const genreNames = Object.keys(genreObj);
    const genresArray = [];
    for (let i = 0; i < genreNames.length; i++) {
       genresArray.push({ name: genreNames[i], count: genreObj[genreNames[i]] });
    }
    return genresArray.sort((genreA, genereB) => genereB.count - genreA.count).slice(0,5);
}

function getMostPopularBooks(books) {
  return books.map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
   .sort((borrowsA, borrowsB) => (borrowsA.count < borrowsB.count ? 1 : -1))
   .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
const mostPopularAuthor = []
books.forEach(
  element => {
    for (const index of authors){
      if(index.id === element.authorId){
        const {name:{first,last}} = index
        mostPopularAuthor.push({name: `${first} ${last}`, count: element.borrows.length})
      }
    }
  })
  return mostPopularAuthor
  .sort((borrowsA, borrowsB) => (borrowsA.count < borrowsB.count ? 1 : -1))
  .slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
