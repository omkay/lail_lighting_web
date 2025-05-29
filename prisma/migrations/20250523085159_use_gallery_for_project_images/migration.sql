/*
  Warnings:

  - You are about to drop the column `imagePath` on the `projects` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "brief" TEXT NOT NULL,
    "paragraph" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "clientReview" TEXT,
    "status" TEXT NOT NULL DEFAULT 'draft',
    "client" TEXT,
    "startDate" DATETIME,
    "endDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "images" TEXT,
    "tags" TEXT,
    "gallery" TEXT
);
INSERT INTO "new_projects" ("brief", "category", "client", "clientReview", "createdAt", "endDate", "id", "images", "location", "paragraph", "startDate", "status", "tags", "title", "updatedAt") SELECT "brief", "category", "client", "clientReview", "createdAt", "endDate", "id", "images", "location", "paragraph", "startDate", "status", "tags", "title", "updatedAt" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
