# Three-question quiz — Milestone 4

## Run the app
1. Extract this folder.
2. Open `index.html` in a modern web browser.
3. Answer each question once and select **Next question**.
4. The final score is displayed after question 3.

No installation or external libraries are required.

## Required checks
- The supplied three-question array is read in `app.js`.
- One question and its answer buttons are displayed at a time.
- Each question is counted only once; correct/incorrect feedback is shown.
- The final score is displayed out of three.

## Test results to verify in your browser
- Correct-answer run: choose `h1`, `CSS`, and `7`. Expected result: **3 out of 3**.
- Mixed-answer run: choose `h1`, `SQL`, and `7`. Expected result: **2 out of 3**.
- Boundary test: click an answer repeatedly. The question must still count only once; answer buttons are disabled after the first selection.
- Navigation test: try Next before answering. It remains disabled until an answer is chosen.

## What changed
Completed the answer-button creation, single-answer scoring, feedback, next-question navigation, and final-score display. Added a restart control as optional stretch work.

## Learning reflection (edit this in your own words)
I learned how to create buttons from an array, respond to click events, update a score, and prevent duplicate answers by tracking whether the current question has already been answered.
