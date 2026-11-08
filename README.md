# Library Management System

## Schema Decisions
In this project, the `Book` model references the `Genre` model using a foreign key (`genreId`) rather than embedding the genre directly into the book. Because PostgreSQL is a relational database, data is not nested. Instead, the `Book` table stores the `genreId`, and Prisma's `@relation` attribute maps that physical foreign key to the `Genre` table's primary key (`id`). This ensures data consistency and allows us to easily query all books belonging to a specific genre without data duplication.