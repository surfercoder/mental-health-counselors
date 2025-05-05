-- CreateTable
CREATE TABLE "CounselingTranscript" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "patientText" TEXT NOT NULL,
    "counselorText" TEXT NOT NULL,
    "patientAge" INTEGER,
    "patientGender" TEXT,
    "sessionType" TEXT,
    "mainIssue" TEXT,
    "sentimentScore" DOUBLE PRECISION,
    "responseType" TEXT,
    "searchVector" tsvector,

    CONSTRAINT "CounselingTranscript_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CounselingTranscript_mainIssue_idx" ON "CounselingTranscript"("mainIssue");

-- CreateIndex
CREATE INDEX "CounselingTranscript_sessionType_idx" ON "CounselingTranscript"("sessionType");
