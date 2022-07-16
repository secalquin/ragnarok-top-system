/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Panel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "PanelFeedback" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visible" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "panelId" INTEGER NOT NULL,

    CONSTRAINT "PanelFeedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PanelFeedback_userId_panelId_key" ON "PanelFeedback"("userId", "panelId");

-- CreateIndex
CREATE UNIQUE INDEX "Panel_authorId_key" ON "Panel"("authorId");

-- AddForeignKey
ALTER TABLE "PanelFeedback" ADD CONSTRAINT "PanelFeedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PanelFeedback" ADD CONSTRAINT "PanelFeedback_panelId_fkey" FOREIGN KEY ("panelId") REFERENCES "Panel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
