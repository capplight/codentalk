-- AlterTable
ALTER TABLE "lessons" ADD COLUMN     "outcome" TEXT;

-- AlterTable
ALTER TABLE "modules" ADD COLUMN     "outcomes" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "sources" JSONB;

-- CreateTable
CREATE TABLE "confusion_marks" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "lesson_id" UUID NOT NULL,
    "block_id" TEXT NOT NULL,
    "comment" TEXT,
    "resolved_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "confusion_marks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lesson_notes" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "lesson_id" UUID NOT NULL,
    "text" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lesson_notes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "confusion_marks_lesson_id_block_id_idx" ON "confusion_marks"("lesson_id", "block_id");

-- CreateIndex
CREATE UNIQUE INDEX "confusion_marks_user_id_lesson_id_block_id_key" ON "confusion_marks"("user_id", "lesson_id", "block_id");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_notes_user_id_lesson_id_key" ON "lesson_notes"("user_id", "lesson_id");

-- AddForeignKey
ALTER TABLE "confusion_marks" ADD CONSTRAINT "confusion_marks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "confusion_marks" ADD CONSTRAINT "confusion_marks_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_notes" ADD CONSTRAINT "lesson_notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_notes" ADD CONSTRAINT "lesson_notes_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
