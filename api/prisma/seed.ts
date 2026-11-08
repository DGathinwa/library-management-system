import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const scifi = await prisma.genre.create({ data: { name: 'Science Fiction' } });
  const fantasy = await prisma.genre.create({ data: { name: 'Fantasy' } });
  const mystery = await prisma.genre.create({ data: { name: 'Mystery' } });
  const history = await prisma.genre.create({ data: { name: 'History' } });

  const books = [
    { title: 'Dune', author: 'Frank Herbert', genreId: scifi.id },
    { title: 'Foundation', author: 'Isaac Asimov', genreId: scifi.id },
    { title: 'Neuromancer', author: 'William Gibson', genreId: scifi.id },
    { title: 'Snow Crash', author: 'Neal Stephenson', genreId: scifi.id },
    
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genreId: fantasy.id },
    { title: 'Mistborn', author: 'Brandon Sanderson', genreId: fantasy.id },
    { title: 'The Name of the Wind', author: 'Patrick Rothfuss', genreId: fantasy.id },
    { title: 'Eragon', author: 'Christopher Paolini', genreId: fantasy.id },
    
    { title: 'And Then There Were None', author: 'Agatha Christie', genreId: mystery.id },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', genreId: mystery.id },
    { title: 'Gone Girl', author: 'Gillian Flynn', genreId: mystery.id },
    { title: 'The Da Vinci Code', author: 'Dan Brown', genreId: mystery.id },
    
    { title: 'Sapiens', author: 'Yuval Noah Harari', genreId: history.id },
    { title: 'Guns, Germs, and Steel', author: 'Jared Diamond', genreId: history.id },
    { title: '1776', author: 'David McCullough', genreId: history.id },
  ];

  for (const book of books) {
    await prisma.book.create({ data: book });
  }
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });