/*
  Warnings:

  - Added the required column `category` to the `articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tldr_desc` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_articles" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tldr_desc" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tags" TEXT,
    "image" TEXT
);
INSERT INTO "new_articles" ("author", "content", "createdAt", "id", "image", "publishedAt", "status", "tags", "title", "updatedAt") SELECT "author", "content", "createdAt", "id", "image", "publishedAt", "status", "tags", "title", "updatedAt" FROM "articles";
DROP TABLE "articles";
ALTER TABLE "new_articles" RENAME TO "articles";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
