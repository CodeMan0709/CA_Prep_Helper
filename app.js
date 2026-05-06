const officialPattern = {
  papers15: {
    duration: "3 hours",
    marks: 100,
    mcq: 30,
    descriptive: 70,
    note: "Division A: 30 marks case-scenario/case-study based MCQs. Division B: 70 marks descriptive questions."
  },
  paper6: {
    duration: "4 hours",
    marks: 100,
    mcq: 40,
    descriptive: 60,
    note: "Open book. Five case studies of 25 marks each; attempt any four. Each case study carries 40% MCQ and 60% descriptive marks."
  }
};

const papers = [
  {
    id: "p1",
    group: "Group I",
    number: 1,
    title: "Financial Reporting",
    source: "ICAI Final Course Paper 1 study material, New Scheme",
    topics: [
      "Introduction to Indian Accounting Standards",
      "Conceptual Framework for Financial Reporting under Ind AS",
      "Ind AS on Presentation of General Purpose Financial Statements",
      "Ind AS on Measurement based on Accounting Policies",
      "Ind AS 115 Revenue from Contracts with Customers",
      "Ind AS on Assets of the Financial Statements",
      "Other Indian Accounting Standards",
      "Ind AS on Liabilities of the Financial Statements",
      "Ind AS on Items impacting the Financial Statements",
      "Ind AS on Disclosures in the Financial Statements",
      "Accounting and Reporting of Financial Instruments",
      "Ind AS 103 Business Combinations",
      "Consolidated and Separate Financial Statements",
      "Ind AS 101 First-time Adoption of Ind AS",
      "Analysis of Financial Statements",
      "Professional and Ethical Duty of a Chartered Accountant",
      "Accounting and Technology"
    ]
  },
  {
    id: "p2",
    group: "Group I",
    number: 2,
    title: "Advanced Financial Management",
    source: "ICAI Final Course Paper 2 study material, New Scheme",
    topics: [
      "Financial Policy and Corporate Strategy",
      "Risk Management",
      "Advanced Capital Budgeting Decisions",
      "Security Analysis",
      "Security Valuation",
      "Portfolio Management",
      "Securitization",
      "Mutual Funds",
      "Derivatives Analysis and Valuation",
      "Foreign Exchange Exposure and Risk Management",
      "International Financial Management",
      "Interest Rate Risk Management",
      "Business Valuation",
      "Mergers, Acquisitions and Corporate Restructuring",
      "Startup Finance"
    ]
  },
  {
    id: "p3",
    group: "Group I",
    number: 3,
    title: "Advanced Auditing, Assurance and Professional Ethics",
    source: "ICAI Final Course Paper 3 study material, New Scheme",
    topics: [
      "Quality Control",
      "General Auditing Principles and Auditors Responsibilities",
      "Audit Planning, Strategy and Execution",
      "Materiality, Risk Assessment and Internal Control",
      "Audit Evidence",
      "Completion and Review",
      "Reporting",
      "Specialised Areas",
      "Related Services",
      "Review of Financial Information",
      "Prospective Financial Information and Other Assurance Services",
      "Digital Auditing and Assurance",
      "Group Audits",
      "Special Features of Audit of Banks and NBFCs",
      "Audit of Public Sector Undertakings",
      "Internal Audit",
      "Due Diligence, Investigation and Forensic Accounting",
      "SDG and ESG Assurance",
      "Professional Ethics and Liabilities of Auditors"
    ]
  },
  {
    id: "p4",
    group: "Group II",
    number: 4,
    title: "Direct Tax Laws and International Taxation",
    source: "ICAI Final Course Paper 4 study material, New Scheme",
    topics: [
      "Basic Concepts",
      "Incomes which do not form part of Total Income",
      "Profits and Gains of Business or Profession",
      "Capital Gains",
      "Income from Other Sources",
      "Income of Other Persons included in Assessee's Total Income",
      "Aggregation of Income, Set Off and Carry Forward of Losses",
      "Deductions from Gross Total Income",
      "Assessment of Various Entities",
      "Assessment of Trusts, Institutions, Political Parties and Special Entities",
      "Tax Planning, Tax Avoidance and Tax Evasion",
      "Taxation of Digital Transactions",
      "Deduction, Collection and Recovery of Tax",
      "Income Tax Authorities",
      "Assessment Procedure",
      "Appeals and Revision",
      "Dispute Resolution",
      "Provisions to Counteract Unethical Tax Practices",
      "Tax Audit and Ethical Compliances",
      "Non Resident Taxation",
      "Double Taxation Relief",
      "Advance Rulings",
      "Transfer Pricing",
      "Fundamentals of BEPS",
      "Application and Interpretation of Tax Treaties",
      "Model Tax Conventions",
      "Latest Developments in International Taxation"
    ]
  },
  {
    id: "p5",
    group: "Group II",
    number: 5,
    title: "Indirect Tax Laws",
    source: "ICAI Final Course Paper 5 study material, New Scheme",
    topics: [
      "Supply under GST",
      "Charge of GST",
      "Place of Supply",
      "Exemptions from GST",
      "Time of Supply",
      "Value of Supply",
      "Input Tax Credit",
      "Registration",
      "Tax Invoice, Credit and Debit Notes",
      "Accounts and Records and E-way Bill",
      "Payment of Tax",
      "Electronic Commerce Transactions",
      "Returns",
      "Import and Export under GST",
      "Refunds",
      "Job Work",
      "Assessment and Audit",
      "Inspection, Search, Seizure and Arrest",
      "Demands and Recovery",
      "Liability to Pay in Certain Cases",
      "Offences and Penalties and Ethical Aspects under GST",
      "Appeals and Revision",
      "Advance Ruling",
      "Miscellaneous Provisions"
    ]
  },
  {
    id: "p6",
    group: "Group II",
    number: 6,
    title: "Integrated Business Solutions",
    source: "ICAI Final Course Paper 6 and SPOM Set A/B study material, New Scheme",
    topics: [
      "Financial Reporting integration",
      "Advanced Financial Management integration",
      "Advanced Auditing and Professional Ethics integration",
      "Direct Tax Laws and International Taxation integration",
      "Indirect Tax Laws integration",
      "Corporate and Economic Laws",
      "Strategic Cost and Performance Management",
      "Strategic Management",
      "Multidisciplinary case study analysis",
      "Ethical decision-making in business cases"
    ]
  }
];

const questionStems = {
  mcq: [
    "In the given scenario, which treatment is most appropriate for {topic}?",
    "Which conclusion is best supported by the facts relating to {topic}?",
    "What is the primary professional risk in applying {topic} to this case?",
    "Which adjustment should be considered first while dealing with {topic}?"
  ],
  descriptive: [
    "Examine the issue relating to {topic} and advise the management with reasons.",
    "Discuss the accounting, tax, audit, or strategic implications of {topic} in the facts given.",
    "Evaluate the alternatives available for {topic} and recommend a compliant course of action.",
    "Draft a reasoned answer on {topic}, including assumptions, computations if any, and conclusion."
  ],
  ibs: [
    "Analyse the multidisciplinary implications of {topic} for the board.",
    "Identify the reporting, finance, tax, audit, law, cost, and strategic issues arising from {topic}.",
    "Recommend an integrated action plan for {topic}, clearly separating facts, assumptions, and conclusions."
  ]
};

let state = {
  mode: "topic",
  selectedQuestionId: null,
  generated: [],
  view: "home",
  submitted: false,
  currentPaper: null,
  currentPattern: null,
  currentGenerated: null,
  answerDrafts: {},
  topicQuestionCount: 12
};

const els = {
  paperSelect: document.querySelector("#paperSelect"),
  topicInput: document.querySelector("#topicInput"),
  topicChips: document.querySelector("#topicChips"),
  questionCount: document.querySelector("#questionCount"),
  questionCountHint: document.querySelector("#questionCountHint"),
  difficulty: document.querySelector("#difficulty"),
  generateBtn: document.querySelector("#generateBtn"),
  paperOutput: document.querySelector("#paperOutput"),
  paperTitle: document.querySelector("#paperTitle"),
  resetSyllabus: document.querySelector("#resetSyllabus"),
  saveBtn: document.querySelector("#saveBtn"),
  printBtn: document.querySelector("#printBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  submitTestBtn: document.querySelector("#submitTestBtn"),
  homeView: document.querySelector("#homeView"),
  mockView: document.querySelector("#mockView"),
  checklistView: document.querySelector("#checklistView"),
  homeProgress: document.querySelector("#homeProgress"),
  homeProgressBars: document.querySelector("#homeProgressBars"),
  mockHistory: document.querySelector("#mockHistory"),
  answerHistory: document.querySelector("#answerHistory"),
  checklistOutput: document.querySelector("#checklistOutput"),
  checklistSearch: document.querySelector("#checklistSearch"),
  overallProgress: document.querySelector("#overallProgress"),
  topicsDone: document.querySelector("#topicsDone"),
  groupOneProgress: document.querySelector("#groupOneProgress"),
  groupTwoProgress: document.querySelector("#groupTwoProgress"),
  markVisibleBtn: document.querySelector("#markVisibleBtn"),
  clearChecklistBtn: document.querySelector("#clearChecklistBtn")
};

function init() {
  papers.forEach((paper) => {
    const option = document.createElement("option");
    option.value = paper.id;
    option.textContent = `Paper ${paper.number}: ${paper.title}`;
    els.paperSelect.appendChild(option);
  });

  const saved = loadSavedState();
  if (saved) {
    els.paperSelect.value = saved.paperId || "p1";
    state.mode = saved.mode || "topic";
    state.topicQuestionCount = saved.topicQuestionCount || saved.count || 12;
    els.topicInput.value = saved.topics || getPaper().topics.join("\n");
    els.questionCount.value = state.topicQuestionCount;
    els.difficulty.value = saved.difficulty || "Exam Standard";
  } else {
    els.topicInput.value = getPaper().topics.join("\n");
  }

  updateModeButtons();
  updateQuestionCountControl();
  renderTopicChips();
  renderChecklist();
  renderDashboard();
  renderStreak();
  setView("home");
  bindEvents();
}

function bindEvents() {
  els.paperSelect.addEventListener("change", () => {
    els.topicInput.value = getPaper().topics.join("\n");
    if (getPaper().id === "p6") {
      setMode("ibs");
    }
    updateQuestionCountControl();
    renderTopicChips();
  });

  els.topicInput.addEventListener("input", renderTopicChips);
  els.questionCount.addEventListener("input", () => {
    if (!els.questionCount.disabled) {
      state.topicQuestionCount = clamp(Number(els.questionCount.value) || 12, 3, 40);
    }
  });
  els.generateBtn.addEventListener("click", generatePaper);
  els.resetSyllabus.addEventListener("click", () => {
    els.topicInput.value = getPaper().topics.join("\n");
    renderTopicChips();
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  els.saveBtn.addEventListener("click", saveState);
  els.printBtn.addEventListener("click", () => window.print());
  els.exportBtn.addEventListener("click", exportHtml);
  els.submitTestBtn.addEventListener("click", submitCurrentTest);
  els.checklistSearch.addEventListener("input", renderChecklist);
  els.markVisibleBtn.addEventListener("click", markVisibleDone);
  els.clearChecklistBtn.addEventListener("click", clearChecklist);
  document.querySelectorAll(".view-toggle").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
  document.querySelectorAll(".feature-card").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });
}

function getPaper() {
  return papers.find((paper) => paper.id === els.paperSelect.value) || papers[0];
}

function getTopics() {
  return els.topicInput.value
    .split(/\n+/)
    .map((topic) => topic.trim().replace(/^[-*\d.)\s]+/, ""))
    .filter(Boolean);
}

function setMode(mode) {
  state.mode = mode;
  if (mode === "ibs") {
    els.paperSelect.value = "p6";
    els.topicInput.value = getPaper().topics.join("\n");
  }
  updateModeButtons();
  updateQuestionCountControl();
  renderTopicChips();
}

function updateModeButtons() {
  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
}

function updateQuestionCountControl() {
  if (state.mode === "topic") {
    els.questionCount.disabled = false;
    els.questionCount.value = state.topicQuestionCount;
    els.questionCountHint.textContent = "Topic Drill uses your selected question count.";
    return;
  }

  if (!els.questionCount.disabled) {
    state.topicQuestionCount = clamp(Number(els.questionCount.value) || 12, 3, 40);
  }
  const fixedCount = state.mode === "ibs" || getPaper().id === "p6" ? 30 : 21;
  els.questionCount.disabled = true;
  els.questionCount.value = fixedCount;
  els.questionCountHint.textContent = state.mode === "ibs" || getPaper().id === "p6"
    ? "Paper 6 is fixed: 5 case studies, each with 5 MCQs and 1 descriptive response."
    : "Full Paper is fixed: Part I MCQs for 30 marks and Part II has 6 descriptive questions for 70 marks.";
}

function renderTopicChips() {
  const topics = getTopics();
  els.topicChips.innerHTML = "";
  topics.slice(0, 18).forEach((topic) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = topic;
    els.topicChips.appendChild(chip);
  });
  if (topics.length > 18) {
    const more = document.createElement("span");
    more.className = "chip";
    more.textContent = `+${topics.length - 18} more`;
    els.topicChips.appendChild(more);
  }
}

function setView(view) {
  state.view = view;
  els.homeView.hidden = view !== "home";
  els.mockView.hidden = view !== "mock";
  els.checklistView.hidden = view !== "checklist";
  document.querySelectorAll(".view-toggle").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  if (view === "checklist") renderChecklist();
  if (view === "home") renderDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getChecklist() {
  try {
    return JSON.parse(localStorage.getItem("ca-final-prep-checklist")) || {};
  } catch {
    return {};
  }
}

function saveChecklist(checklist) {
  localStorage.setItem("ca-final-prep-checklist", JSON.stringify(checklist));
}

function checklistKey(paper, topic) {
  return `${paper.id}:${topic}`;
}

function renderChecklist() {
  const checklist = getChecklist();
  const query = (els.checklistSearch?.value || "").trim().toLowerCase();
  const allRows = papers.flatMap((paper) => paper.topics.map((topic) => ({ paper, topic, key: checklistKey(paper, topic) })));
  const visiblePapers = papers.map((paper) => ({
    paper,
    topics: paper.topics.filter((topic) => {
      const haystack = `${paper.title} ${paper.group} Paper ${paper.number} ${topic}`.toLowerCase();
      return !query || haystack.includes(query);
    })
  })).filter((item) => item.topics.length);

  const doneCount = allRows.filter((row) => checklist[row.key]).length;
  const groupOneRows = allRows.filter((row) => row.paper.group === "Group I");
  const groupTwoRows = allRows.filter((row) => row.paper.group === "Group II");

  els.overallProgress.textContent = `${percent(doneCount, allRows.length)}%`;
  els.topicsDone.textContent = `${doneCount}/${allRows.length}`;
  els.groupOneProgress.textContent = `${percent(groupOneRows.filter((row) => checklist[row.key]).length, groupOneRows.length)}%`;
  els.groupTwoProgress.textContent = `${percent(groupTwoRows.filter((row) => checklist[row.key]).length, groupTwoRows.length)}%`;

  els.checklistOutput.innerHTML = visiblePapers.map(({ paper, topics }) => renderSubjectChecklist(paper, topics, checklist)).join("") || `
    <div class="empty-state">
      <h3>No topics found.</h3>
      <p>Try a different search term.</p>
    </div>
  `;

  els.checklistOutput.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.addEventListener("change", () => {
      const next = getChecklist();
      next[input.dataset.key] = input.checked;
      saveChecklist(next);
      if (input.checked) updateStreak();
      renderChecklist();
      renderDashboard();
    });
  });
}

function renderSubjectChecklist(paper, topics, checklist) {
  const done = topics.filter((topic) => checklist[checklistKey(paper, topic)]).length;
  return `
    <article class="subject-checklist">
      <header>
        <div>
          <h3>Paper ${paper.number}: ${escapeHtml(paper.title)}</h3>
          <p>${escapeHtml(paper.group)} | ${topics.length} topic(s) shown</p>
        </div>
        <span class="progress-pill">${percent(done, topics.length)}%</span>
      </header>
      <ul class="topic-list">
        ${topics.map((topic) => {
          const key = checklistKey(paper, topic);
          const checked = Boolean(checklist[key]);
          return `
            <li class="topic-item ${checked ? "done" : ""}">
              <label>
                <input type="checkbox" data-key="${escapeHtml(key)}" ${checked ? "checked" : ""}>
                <span>${escapeHtml(topic)}</span>
              </label>
            </li>
          `;
        }).join("")}
      </ul>
    </article>
  `;
}

function markVisibleDone() {
  const checklist = getChecklist();
  els.checklistOutput.querySelectorAll("input[type='checkbox']").forEach((input) => {
    checklist[input.dataset.key] = true;
  });
  saveChecklist(checklist);
  renderChecklist();
  renderDashboard();
}

function clearChecklist() {
  saveChecklist({});
  renderChecklist();
  renderDashboard();
}

function renderSubjectiveAnswerBox(question) {
  return `
    <div class="subjective-response" data-response-for="${question.id}">
      <label for="answer-${question.id}">Your answer</label>
      <textarea id="answer-${question.id}" class="answer-box question-answer" data-answer-for="${question.id}" placeholder="Type this answer here, or upload a photo and extract text.">${escapeHtml(state.answerDrafts[question.id] || "")}</textarea>
      <div class="photo-answer">
        <label for="image-${question.id}">Photo answer</label>
        <input id="image-${question.id}" type="file" accept="image/*" capture="environment" data-image-for="${question.id}">
        <div class="image-preview" data-preview-for="${question.id}" hidden></div>
        <button class="secondary" type="button" data-ocr-for="${question.id}">Extract Text From Photo</button>
        <p class="hint" data-status-for="${question.id}">On mobile, this opens the camera. Review OCR text before evaluation.</p>
      </div>
      <button class="secondary" type="button" data-grade-for="${question.id}">Evaluate This Answer</button>
      <div class="inline-feedback" data-feedback-for="${question.id}" hidden></div>
    </div>
  `;
}

function bindQuestionAnswerControls() {
  els.paperOutput.querySelectorAll("[data-image-for]").forEach((input) => {
    input.addEventListener("change", () => handleQuestionImage(input.dataset.imageFor));
  });
  els.paperOutput.querySelectorAll("[data-answer-for]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      state.answerDrafts[textarea.dataset.answerFor] = textarea.value;
    });
  });
  els.paperOutput.querySelectorAll("[data-ocr-for]").forEach((button) => {
    button.addEventListener("click", () => extractQuestionAnswerText(button.dataset.ocrFor));
  });
  els.paperOutput.querySelectorAll("[data-grade-for]").forEach((button) => {
    button.addEventListener("click", () => gradeQuestionAnswer(button.dataset.gradeFor));
  });
}

function handleQuestionImage(questionId) {
  const input = els.paperOutput.querySelector(`[data-image-for="${cssEscape(questionId)}"]`);
  const preview = els.paperOutput.querySelector(`[data-preview-for="${cssEscape(questionId)}"]`);
  const status = els.paperOutput.querySelector(`[data-status-for="${cssEscape(questionId)}"]`);
  const file = input?.files?.[0];
  if (!file) {
    if (preview) {
      preview.hidden = true;
      preview.innerHTML = "";
    }
    return;
  }

  const url = URL.createObjectURL(file);
  preview.innerHTML = `<img src="${url}" alt="Selected answer photo preview">`;
  preview.hidden = false;
  status.textContent = "Photo added. Press Extract Text From Photo to copy text into this answer box.";
}

async function extractQuestionAnswerText(questionId) {
  const input = els.paperOutput.querySelector(`[data-image-for="${cssEscape(questionId)}"]`);
  const textarea = els.paperOutput.querySelector(`[data-answer-for="${cssEscape(questionId)}"]`);
  const status = els.paperOutput.querySelector(`[data-status-for="${cssEscape(questionId)}"]`);
  const button = els.paperOutput.querySelector(`[data-ocr-for="${cssEscape(questionId)}"]`);
  const file = input?.files?.[0];
  if (!file) {
    status.textContent = "Please take or upload an answer photo first.";
    return;
  }

  if (!window.Tesseract) {
    status.textContent = "OCR library could not load. You can still view the photo and type the answer manually.";
    return;
  }

  button.disabled = true;
  status.textContent = "Reading the photo. Clear, straight images work best.";

  try {
    const result = await Tesseract.recognize(file, "eng", {
      logger: (event) => {
        if (event.status === "recognizing text") {
          status.textContent = `Reading text: ${Math.round((event.progress || 0) * 100)}%`;
        }
      }
    });
    const text = result?.data?.text?.trim() || "";
    if (!text) {
      status.textContent = "I could not detect text clearly. Try a brighter, flatter photo or type the answer manually.";
      return;
    }
    textarea.value = textarea.value.trim()
      ? `${textarea.value.trim()}\n\n${text}`
      : text;
    state.answerDrafts[questionId] = textarea.value;
    status.textContent = "Text extracted into this answer box. Review it once before evaluating.";
  } catch (error) {
    status.textContent = "OCR failed in this browser. The photo is still attached for reference; type or paste the answer text to evaluate.";
  } finally {
    button.disabled = false;
  }
}

function generatePaper() {
  const paper = getPaper();
  const topics = getTopics();
  const count = clamp(Number(els.questionCount.value) || 12, 3, 40);
  const pattern = state.mode === "ibs" || paper.id === "p6" ? officialPattern.paper6 : officialPattern.papers15;
  const generated = state.mode === "full" ? buildFullPaper(paper, topics, pattern) : state.mode === "ibs" ? buildIbsPaper(paper, topics) : buildTopicDrill(paper, topics, count, pattern);

  updateStreak();
  state.submitted = false;
  state.answerDrafts = {};
  state.generated = generated.questions;
  state.selectedQuestionId = generated.questions.find((q) => q.type !== "mcq")?.id || null;
  state.currentPaper = paper;
  state.currentPattern = pattern;
  state.currentGenerated = generated;
  els.paperTitle.textContent = generated.title;
  renderPaper(generated, paper, pattern);
  recordMockAttempt(generated, paper);
  renderDashboard();
}

function submitCurrentTest() {
  if (!state.currentGenerated || !state.generated.length) {
    els.paperOutput.innerHTML = `
      <div class="empty-state">
        <h3>No test to submit yet.</h3>
        <p>Generate a mock test first, then submit it to unlock answers and model points.</p>
      </div>
    `;
    return;
  }
  state.submitted = true;
  renderPaper(state.currentGenerated, state.currentPaper, state.currentPattern);
}

function buildTopicDrill(paper, topics, count, pattern) {
  const mcqCount = Math.max(2, Math.round(count * 0.45));
  const descriptiveCount = count - mcqCount;
  const questions = [
    ...Array.from({ length: mcqCount }, (_, i) => makeMcq(paper, pick(topics, i), i + 1, i % 2 === 0 ? 1 : 2)),
    ...Array.from({ length: descriptiveCount }, (_, i) => makeDescriptive(paper, pick(topics, i + mcqCount), i + 1, 6 + (i % 3) * 2))
  ];

  return {
    title: `Topic Drill - Paper ${paper.number}: ${paper.title}`,
    modeLabel: "Topic Drill",
    instructions: pattern.note,
    questions
  };
}

function buildFullPaper(paper, topics, pattern) {
  if (paper.id === "p6") return buildIbsPaper(paper, topics);

  const mcqs = Array.from({ length: 15 }, (_, i) => makeMcq(paper, pick(topics, i), i + 1, 2));
  const descriptiveMarks = [14, 14, 14, 14, 14, 14];
  const descriptive = descriptiveMarks.map((marks, i) => makeDescriptive(paper, pick(topics, i + 15), i + 1, marks));
  return {
    title: `Full Mock Paper - Paper ${paper.number}: ${paper.title}`,
    modeLabel: "Full Paper",
    instructions: "Part I carries 30 marks of MCQs. Part II carries 70 marks: answer Question 1, which is compulsory, and any 4 out of the remaining 5 questions.",
    questions: [...mcqs, ...descriptive],
    divisions: [
      { title: "Part I - MCQs", note: "30 marks. Generated as 15 two-mark MCQs. No negative marking.", ids: mcqs.map((q) => q.id) },
      { title: "Part II - Descriptive Questions", note: "70 marks. Question 1 is compulsory; attempt any 4 out of Questions 2 to 6. Each question carries 14 marks.", ids: descriptive.map((q) => q.id) }
    ]
  };
}

function buildIbsPaper(paper, topics) {
  const cases = Array.from({ length: 5 }, (_, caseIndex) => makeIbsCase(paper, pick(topics, caseIndex), caseIndex + 1));
  return {
    title: "Paper 6 Open Book Mock - Integrated Business Solutions",
    modeLabel: "Paper 6 IBS",
    instructions: officialPattern.paper6.note,
    questions: cases.flatMap((item) => item.questions),
    divisions: cases.map((item) => ({
      title: `Case Study ${item.caseNo} - ${item.topic}`,
      note: "25 marks: 10 marks MCQs and 15 marks descriptive. Attempt any four cases in the actual pattern.",
      ids: item.questions.map((q) => q.id)
    }))
  };
}

function makeMcq(paper, topic, index, marks) {
  const id = makeId("mcq", index, topic);
  const scenario = makeScenario(paper, topic, index);
  const correct = 0;
  const options = [
    `Recognise the issue, apply the relevant standard/provision, and disclose the judgement relating to ${topic}.`,
    `Ignore the matter until finalisation because it is only a management estimate.`,
    `Record the most tax-efficient result without documenting professional reasoning.`,
    `Treat the matter as immaterial solely because no cash movement has occurred.`
  ];
  return {
    id,
    type: "mcq",
    number: index,
    marks,
    topic,
    prompt: fill(pick(questionStems.mcq, index), topic),
    scenario,
    options,
    answer: String.fromCharCode(65 + correct),
    model: options[correct],
    rubric: ["Identify facts", "Apply relevant provision/standard", "Avoid unsupported assumptions"]
  };
}

function makeDescriptive(paper, topic, index, marks) {
  const id = makeId("descriptive", index, topic);
  return {
    id,
    type: "descriptive",
    number: index,
    marks,
    topic,
    prompt: fill(pick(questionStems.descriptive, index), topic),
    scenario: makeScenario(paper, topic, index + 7),
    model: modelAnswerPoints(paper, topic),
    rubric: ["State the issue clearly", "Quote/apply relevant principle", "Analyse facts", "Conclude with treatment/advice", "Mention disclosure/compliance where relevant"]
  };
}

function makeIbsCase(paper, topic, caseNo) {
  const questions = [];
  for (let i = 1; i <= 5; i += 1) {
    questions.push(makeMcq(paper, `${topic} - case sub-issue ${i}`, caseNo * 10 + i, 2));
  }
  questions.push({
    id: makeId("ibs", caseNo, topic),
    type: "ibs",
    number: caseNo,
    marks: 15,
    topic,
    prompt: fill(pick(questionStems.ibs, caseNo), topic),
    scenario: makeIbsScenario(topic, caseNo),
    model: modelAnswerPoints(paper, topic).concat([
      "Integrate financial reporting, audit, tax, finance, law, cost and strategy implications.",
      "Separate open-book references from professional judgement and final recommendation.",
      "Prioritise risk, stakeholder impact, timeline and documentation."
    ]),
    rubric: ["Multidisciplinary coverage", "Use of facts", "Professional judgement", "Actionable recommendation", "Ethics and compliance"]
  });
  return { caseNo, topic, questions };
}

function makeScenario(paper, topic, seed) {
  const company = ["Aarav Components Ltd.", "Nira Foods Private Ltd.", "Setu Infra LLP", "Mira Global Services Ltd."][seed % 4];
  const amount = [48, 125, 310, 760, 1180][seed % 5];
  const contextByPaper = {
    p1: `${company} is finalising its Ind AS financial statements. A transaction of Rs. ${amount} lakh connected with ${topic} was recorded using management's provisional view, but the audit committee has asked for a defensible reporting treatment.`,
    p2: `${company} is considering a financing/investment decision involving Rs. ${amount} lakh. The CFO wants a recommendation on ${topic}, including risk, valuation and shareholder-value impact.`,
    p3: `During the audit of ${company}, the engagement team identified a matter involving ${topic}. Evidence is mixed, management is under reporting pressure, and the auditor must decide further procedures and reporting implications.`,
    p4: `${company} has a tax position involving Rs. ${amount} lakh and ${topic}. The finance head wants advice on computation, compliance risk, documentation and ethical tax conduct.`,
    p5: `${company} has GST/customs transactions affected by ${topic}. The tax team needs a view on levy, credit, documentation, return reporting and potential exposure.`,
    p6: `${company} is facing a board-level decision where ${topic} affects reporting, finance, audit, tax, law, cost and strategy together. Management wants a concise professional note.`
  };
  return contextByPaper[paper.id] || contextByPaper.p6;
}

function makeIbsScenario(topic, seed) {
  const businesses = ["listed manufacturing group", "fintech services company", "export-oriented pharma company", "infrastructure developer", "consumer marketplace"];
  return `A ${pick(businesses, seed)} is preparing for a board meeting after a rapid expansion. The core issue is ${topic}. The case file includes draft financials, a proposed funding plan, related-party transactions, tax positions, GST documentation gaps, internal control exceptions and a strategic cost reduction proposal. Prepare an integrated response suitable for an open-book CA Final Paper 6 answer.`;
}

function modelAnswerPoints(paper, topic) {
  const common = [
    `Identify the precise issue in ${topic} and list the relevant facts before applying law or standards.`,
    "State assumptions separately from conclusions.",
    "Apply the latest applicable ICAI material, statute, standard, guidance note, notification or case law as relevant for the attempt.",
    "Quantify the impact wherever data permits and explain the treatment if data is incomplete.",
    "Conclude with the required accounting/tax/audit/finance treatment and necessary disclosure or documentation."
  ];
  const paperSpecific = {
    p1: ["Discuss recognition, measurement, presentation and disclosure under Ind AS.", "Check consistency, materiality and fair presentation."],
    p2: ["Evaluate risk-return trade-off, cost of capital, cash flows and sensitivity.", "Recommend the alternative that maximises value within risk constraints."],
    p3: ["Design further audit procedures and evaluate sufficiency of evidence.", "Consider reporting, ethics, independence and documentation implications."],
    p4: ["Compute tax impact and cite the charging, exemption, deduction or anti-avoidance provision.", "Address interest, penalty, litigation and ethical compliance risk."],
    p5: ["Analyse levy, place/time/value of supply, input tax credit and documentation.", "Mention return disclosure, refund/demand exposure and penalty risk."],
    p6: ["Integrate multiple subjects and rank issues by risk and decision impact.", "Give a board-ready recommendation with implementation steps."]
  };
  return common.concat(paperSpecific[paper.id] || []);
}

function renderPaper(generated, paper, pattern) {
  const topics = getTopics();
  const meta = `
    <div class="paper-meta">
      <div class="meta-cell"><span>Course</span><strong>CA Final New Scheme</strong></div>
      <div class="meta-cell"><span>Paper</span><strong>${escapeHtml(`Paper ${paper.number}: ${paper.title}`)}</strong></div>
      <div class="meta-cell"><span>Duration</span><strong>${pattern.duration}</strong></div>
      <div class="meta-cell"><span>Marks</span><strong>${pattern.marks}</strong></div>
    </div>
  `;

  const intro = `
    <section class="division">
      <h3>${escapeHtml(generated.modeLabel)}</h3>
      <p class="division-note">${escapeHtml(generated.instructions)}</p>
      <p class="division-note"><strong>Syllabus source:</strong> ${escapeHtml(paper.source)}. <strong>Topic base:</strong> ${topics.length} topic(s) currently loaded.</p>
      <p class="division-note"><strong>Status:</strong> ${state.submitted ? "Submitted. Answers and model points are unlocked." : "In progress. Answers are locked until you submit the test."}</p>
    </section>
  `;

  const content = generated.divisions
    ? generated.divisions.map((division) => renderDivision(division, generated.questions)).join("")
    : renderDivision({ title: "Generated Questions", note: "Use the answer key and model points after attempting.", ids: generated.questions.map((q) => q.id) }, generated.questions);

  els.paperOutput.innerHTML = meta + intro + content;
  bindQuestionAnswerControls();
}

function renderDivision(division, questions) {
  const selected = division.ids.map((id) => questions.find((q) => q.id === id)).filter(Boolean);
  return `
    <section class="division">
      <h3>${escapeHtml(division.title)}</h3>
      <p class="division-note">${escapeHtml(division.note)}</p>
      ${selected.map(renderQuestion).join("")}
    </section>
  `;
}

function renderQuestion(question) {
  const options = question.type === "mcq"
    ? `<ol class="options" type="A">${question.options.map((option) => `<li>${escapeHtml(option)}</li>`).join("")}</ol>`
    : renderSubjectiveAnswerBox(question);
  const answer = question.type === "mcq"
    ? `<strong>Answer:</strong> ${question.answer}. ${escapeHtml(question.model)}`
    : `<strong>Model answer points:</strong><ul>${question.model.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>`;
  const answerBlock = state.submitted
    ? `<details open>
        <summary>Answer key and rubric</summary>
        <div class="answer-key">${answer}</div>
        <div class="rubric"><strong>Rubric:</strong> ${question.rubric.map(escapeHtml).join(" | ")}</div>
      </details>`
    : `<div class="locked-answer"><strong>Answers locked.</strong> Submit the test to view the answer key, model points, and rubric.</div>`;

  return `
    <div class="question-card" id="${question.id}">
      <div class="question-head">
        <h4>Q${question.number}. ${escapeHtml(question.prompt)}${question.type !== "mcq" && state.mode === "full" && question.number === 1 ? " <span class=\"required-tag\">Compulsory</span>" : ""}</h4>
        <span class="marks">${question.marks} marks</span>
      </div>
      <div class="scenario">${escapeHtml(question.scenario)}</div>
      ${options}
      ${answerBlock}
    </div>
  `;
}

function gradeQuestionAnswer(questionId) {
  const textarea = els.paperOutput.querySelector(`[data-answer-for="${cssEscape(questionId)}"]`);
  const feedback = els.paperOutput.querySelector(`[data-feedback-for="${cssEscape(questionId)}"]`);
  const answer = textarea?.value.trim() || "";
  const question = state.generated.find((item) => item.id === questionId);
  state.answerDrafts[questionId] = textarea?.value || "";
  if (!answer || !question) {
    feedback.hidden = false;
    feedback.innerHTML = `<p>Please type an answer or extract text from a photo before evaluating.</p>`;
    return;
  }

  const words = tokenize(answer);
  const modelTokens = tokenize(question.model.join(" "));
  const topicTokens = tokenize(question.topic);
  const rubricTokens = tokenize(question.rubric.join(" "));
  const coverage = overlap(words, unique(modelTokens.concat(topicTokens))) * 100;
  const structure = scoreStructure(answer);
  const specificity = overlap(words, unique(topicTokens.concat(rubricTokens))) * 100;
  const lengthScore = clamp((words.length / Math.max(120, question.marks * 25)) * 100, 0, 100);
  const total = Math.round((coverage * 0.4) + (structure * 0.25) + (specificity * 0.2) + (lengthScore * 0.15));

  const missing = unique(modelTokens)
    .filter((token) => token.length > 5 && !words.includes(token))
    .slice(0, 8);

  feedback.hidden = false;
  feedback.innerHTML = `
    <p><strong>Question assessed:</strong> ${escapeHtml(question.topic)} (${question.marks} marks)</p>
    <div class="score-grid">
      <div class="score"><span>Indicative score</span><strong>${Math.round(total * question.marks / 100)}/${question.marks}</strong></div>
      <div class="score"><span>Coverage</span><strong>${Math.round(coverage)}%</strong></div>
      <div class="score"><span>Structure</span><strong>${Math.round(structure)}%</strong></div>
      <div class="score"><span>Specificity</span><strong>${Math.round(specificity)}%</strong></div>
    </div>
    <div class="answer-key">
      <strong>Feedback:</strong>
      <p>${feedbackSentence(total)}</p>
      <p><strong>Improve next:</strong> ${missing.length ? missing.map(escapeHtml).join(", ") : "Add more precise statutory/standard references and a sharper conclusion."}</p>
      <p><strong>Exam technique:</strong> Open with the issue, apply the provision/standard to facts, quantify where possible, then conclude. For May 2027, refresh all law/standard references from ICAI applicability announcements.</p>
    </div>
  `;
  recordAnswerFeedback(question, total, answer);
  renderDashboard();
}

function feedbackSentence(score) {
  if (score >= 78) return "Strong answer shape. It appears to cover the core issue and has enough structure for examiner-friendly reading.";
  if (score >= 58) return "Workable answer, but it needs tighter coverage of model points and more explicit application to the facts.";
  if (score >= 38) return "The answer has a start, but it is likely too generic. Add provisions, calculations, assumptions and a clear conclusion.";
  return "This is underdeveloped for CA Final standard. Rebuild it using issue, provision, analysis, computation if any, and conclusion.";
}

function scoreStructure(answer) {
  const markers = ["issue", "provision", "analysis", "conclusion", "therefore", "as per", "in the given case", "disclosure", "computation", "assumption"];
  const lower = answer.toLowerCase();
  const markerScore = markers.filter((marker) => lower.includes(marker)).length * 10;
  const paragraphScore = Math.min(answer.split(/\n\s*\n/).filter(Boolean).length * 12, 35);
  return clamp(markerScore + paragraphScore, 0, 100);
}

function saveState() {
  localStorage.setItem("ca-final-mock-studio", JSON.stringify({
    paperId: els.paperSelect.value,
    mode: state.mode,
    topics: els.topicInput.value,
    count: state.topicQuestionCount,
    topicQuestionCount: state.topicQuestionCount,
    difficulty: els.difficulty.value
  }));
  els.saveBtn.textContent = "Saved";
  setTimeout(() => { els.saveBtn.textContent = "Save"; }, 1100);
}

function recordMockAttempt(generated, paper) {
  const attempts = getStoredList("ca-final-mock-history");
  attempts.unshift({
    title: generated.title,
    paper: `Paper ${paper.number}`,
    mode: generated.modeLabel,
    questions: generated.questions.length,
    at: new Date().toISOString()
  });
  localStorage.setItem("ca-final-mock-history", JSON.stringify(attempts.slice(0, 10)));
}

function recordAnswerFeedback(question, score, answer) {
  const feedback = getStoredList("ca-final-answer-history");
  feedback.unshift({
    topic: question.topic,
    marks: question.marks,
    score,
    words: tokenize(answer).length,
    at: new Date().toISOString()
  });
  localStorage.setItem("ca-final-answer-history", JSON.stringify(feedback.slice(0, 10)));
}

function getStoredList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function renderDashboard() {
  const stats = getProgressStats();
  els.homeProgress.textContent = `${stats.overall}%`;
  els.homeProgress.parentElement.style.setProperty("--progress", stats.overall);
  els.homeProgressBars.innerHTML = [
    { label: "Overall", value: stats.overall },
    { label: "Group I", value: stats.groupOne },
    { label: "Group II", value: stats.groupTwo }
  ].map((item) => `
    <div class="mini-bar">
      <header><span>${item.label}</span><strong>${item.value}%</strong></header>
      <div class="bar-track"><div class="bar-fill" style="--value: ${item.value}%"></div></div>
    </div>
  `).join("");

  const attempts = getStoredList("ca-final-mock-history");
  els.mockHistory.innerHTML = attempts.length ? attempts.slice(0, 5).map((item) => `
    <div class="history-item">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.mode)} | ${item.questions} questions | ${formatDate(item.at)}</span>
    </div>
  `).join("") : `<p class="hint">No mock generated yet. Start with a topic drill or full paper.</p>`;

  const answers = getStoredList("ca-final-answer-history");
  els.answerHistory.innerHTML = answers.length ? answers.slice(0, 5).map((item) => `
    <div class="history-item">
      <strong>${escapeHtml(item.topic)}</strong>
      <span>${Math.round((item.score * item.marks) / 100)}/${item.marks} indicative | ${item.words} words | ${formatDate(item.at)}</span>
    </div>
  `).join("") : `<p class="hint">No subjective answer assessed yet. Generate a mock, select a question, then assess.</p>`;
}

function getProgressStats() {
  const checklist = getChecklist();
  const allRows = papers.flatMap((paper) => paper.topics.map((topic) => ({ paper, key: checklistKey(paper, topic) })));
  const groupOneRows = allRows.filter((row) => row.paper.group === "Group I");
  const groupTwoRows = allRows.filter((row) => row.paper.group === "Group II");
  return {
    overall: percent(allRows.filter((row) => checklist[row.key]).length, allRows.length),
    groupOne: percent(groupOneRows.filter((row) => checklist[row.key]).length, groupOneRows.length),
    groupTwo: percent(groupTwoRows.filter((row) => checklist[row.key]).length, groupTwoRows.length)
  };
}

function loadSavedState() {
  try {
    return JSON.parse(localStorage.getItem("ca-final-mock-studio"));
  } catch {
    return null;
  }
}

function exportHtml() {
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(els.paperTitle.textContent)}</title><link rel="stylesheet" href="styles.css"></head><body><main class="workspace">${els.paperOutput.outerHTML}</main></body></html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "ca-final-mock-paper.html";
  a.click();
  URL.revokeObjectURL(url);
}

function pick(list, index) {
  if (!list.length) return "Selected topic";
  return list[index % list.length];
}

function fill(template, topic) {
  return template.replace("{topic}", topic);
}

function makeId(type, index, topic) {
  return `${type}-${index}-${topic.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 34)}`;
}

function tokenize(text) {
  const stop = new Set(["the", "and", "for", "with", "that", "this", "from", "into", "under", "where", "which", "will", "shall", "should", "would", "have", "been", "case", "given", "answer"]);
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((word) => word.length > 2 && !stop.has(word));
}

function unique(items) {
  return [...new Set(items)];
}

function overlap(source, target) {
  if (!target.length) return 0;
  const sourceSet = new Set(source);
  return target.filter((item) => sourceSet.has(item)).length / target.length;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function percent(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
}

function cssEscape(value) {
  if (window.CSS?.escape) return CSS.escape(value);
  return String(value).replaceAll('"', '\\"');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const THEMES = [
  { key: "light",    icon: "☀️",  label: "Light"    },
  { key: "dark",     icon: "🌙",  label: "Dark"     },
  { key: "midnight", icon: "🌑",  label: "Midnight" },
  { key: "forest",   icon: "🌿",  label: "Forest"   },
  { key: "sepia",    icon: "📜",  label: "Sepia"    }
];

const toggleBtn = document.getElementById("theme-toggle");

function applyTheme(key) {
  if (key === "light") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", key);
  }
  localStorage.setItem("theme", key);
  const idx = THEMES.findIndex((t) => t.key === key);
  const next = THEMES[(idx + 1) % THEMES.length];
  toggleBtn.textContent = THEMES[idx].icon;
  toggleBtn.title = `Theme: ${THEMES[idx].label} — click for ${next.label}`;
}

applyTheme(localStorage.getItem("theme") || "light");

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const idx = THEMES.findIndex((t) => t.key === current);
  applyTheme(THEMES[(idx + 1) % THEMES.length].key);
});

function getStreak() {
  try {
    return JSON.parse(localStorage.getItem("ca-final-streak")) || { count: 0, lastDate: null };
  } catch {
    return { count: 0, lastDate: null };
  }
}

function updateStreak() {
  const today = new Date().toDateString();
  const data = getStreak();
  if (data.lastDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  data.count = data.lastDate === yesterday.toDateString() ? data.count + 1 : 1;
  data.lastDate = today;
  localStorage.setItem("ca-final-streak", JSON.stringify(data));
  renderStreak();
}

function renderStreak() {
  const badge = document.getElementById("streakBadge");
  if (!badge) return;
  const { count } = getStreak();
  if (count > 0) {
    badge.textContent = `🔥 ${count} day${count === 1 ? "" : "s"} streak`;
    badge.hidden = false;
  } else {
    badge.hidden = true;
  }
}


init();
