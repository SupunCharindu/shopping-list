const library = [
  {
  title:"book1",
  author: "Me1",
  status: {
    own: true,
    reading: false,
    read:false,
           }
  },
  {
  title:"book2",
  author: "Me2",
  status: {
    own: true,
    reading: false,
    read:false,
           }
  },
  {
  title:"book3",
  author: "Me3",
  status: {
    own: true,
    reading: false,
    read:false,
           }
  }
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

 const { title: firstBook } = library[0];


console.log(firstBook);

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);