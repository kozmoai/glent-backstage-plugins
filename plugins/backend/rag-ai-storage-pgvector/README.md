# KozmoPgVectorStore - PostgreSQL RAG AI Vector Storage

A module enabling usage of PostgreSQL as a storage solution for RAG AI Backstage backend plugin.

> Note, you need to have `uuid-ossp` and `vector` PostgreSQL extensions available on your database to be able to use this module.

This module construct a database and needed database tables to support storing embeddings vectors into your PostgreSQL DB. You can control the name of the database with the configured environment name within your Backstage backend application.

## How to initialize

You can use the exported `createKozmoPgVectorStore` function to initialize the KozmoPGVectorStore. This initialization function expects an instance of logger and a Knex DB connection.

Here is a TypeScript example:

```typescript
const config = {
  logger: Logger, // logger instance
  db: Knex, // database connection provided by Knex
  options: {
    chunkSize: number, // (optional) amount of documents to chunk when adding vectors, default is 500
    tableName: string, // (optional) Table naming to use to store embeddings. Default is 'embeddings'
  },
};

const vectorStore = await createKozmoPgVectorStore({
  logger,
  database,
  options: { chunkSize, tableName },
});
```
