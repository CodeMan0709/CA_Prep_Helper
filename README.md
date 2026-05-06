# CA Final Prep Helper

A static GitHub Pages-friendly preparation dashboard and mock test generator for ICAI CA Final.

## What it does

- Opens with a dashboard showing overall progress, Group I/II progress, previous mocks, and recent answer feedback.
- Generates original practice papers from selected CA Final paper topics.
- Supports topic drills, full 100-mark mock papers, and Paper 6 IBS open-book case format.
- Locks answer keys, model answer points, and rubrics until the test is submitted.
- Provides per-subjective-question answer text boxes, photo upload/camera input, OCR extraction, and rubric-based feedback.
- Lets you paste or edit the syllabus/topic list for May 2027 updates.
- Includes a preparation checklist for all subjects and topics, saved in the browser.
- Includes a Past Papers tab for building a chapter-wise actual ICAI question bank across all subjects and chapters.
- Runs fully in the browser with no backend, database, or paid API.

## Mock test patterns

- `Topic Drill`: custom question count from `3` to `40`.
- `Full Paper` for Papers 1 to 5: fixed to the current ICAI-style structure used by recent Final question papers:
  - Part I: 30 marks MCQs, generated as 15 two-mark MCQs.
  - Part II: 70 marks descriptive paper with 6 questions.
  - Question 1 is compulsory.
  - Attempt any 4 out of Questions 2 to 6.
  - Each descriptive question carries 14 marks.
- `Paper 6 IBS`: fixed open-book case-study structure:
  - 5 case studies.
  - Each case study carries 25 marks.
  - Each case has 10 marks MCQs and 15 marks descriptive response.
  - Actual exam pattern requires attempting any 4 case studies.

The custom question count control is enabled only for Topic Drill. Full Paper and Paper 6 use fixed counts so they stay aligned to the exam pattern.

## Past Papers tab

The Past Papers tab is designed for chapter-wise revision from actual ICAI Final papers:

- Covers all 6 CA Final papers and all chapter/topic headings already present in the app.
- Provides attempt options for the last 10 years, including recent New Scheme attempts and older Final attempts.
- Lets you add each actual ICAI question with:
  - paper
  - chapter
  - attempt
  - question number
  - type
  - marks
  - official source link
  - question text
  - answer notes/reference
- Supports filtering by subject, chapter, attempt, and search text.
- Supports JSON export/import so the question bank can be backed up or moved between browsers.

The repository does not ship copied ICAI question text. Add questions manually from official ICAI PDFs or import your own private JSON question bank.

## Deploy free on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and this `README.md`.
3. Open repository `Settings`.
4. Go to `Pages`.
5. Set source to `Deploy from a branch`.
6. Choose `main` branch and `/root`.
7. Save. GitHub will show the public URL after deployment.

## Important May 2027 note

The included default syllabus snapshot follows ICAI Final New Scheme pages available when this app was created. Before the May 2027 attempt, update the topic list using ICAI's official study material, statutory updates, study guidelines, RTPs, MTPs, and applicability announcements.

Official starting points are linked inside the app.
