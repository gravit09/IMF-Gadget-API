/*
  Warnings:

  - You are about to drop the column `decommissionDate` on the `Gadget` table. All the data in the column will be lost.
  - Added the required column `codename` to the `Gadget` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gadget" DROP COLUMN "decommissionDate",
ADD COLUMN     "codename" TEXT NOT NULL;
