// Question Generation Logic Based on Bloom's Taxonomy

// Scenario templates for different contexts
const getScenarioContext = (context, difficulty) => {
  const scenarios = {
    beginner: [
      `You are working as a junior analyst at a supply chain company focusing on ${context}.`,
      `As a new employee in the ${context} department, you encounter the following situation:`,
      `During your training in ${context}, you are presented with this scenario:`
    ],
    intermediate: [
      `You are a supply chain analyst responsible for ${context} at a mid-sized manufacturing company.`,
      `As the lead coordinator for ${context}, you face the following challenge:`,
      `Your ${context} team has identified an issue that requires your expertise:`
    ],
    advanced: [
      `As the senior director of ${context} for a Fortune 500 company, you must address a critical situation:`,
      `You are consulting for a major enterprise on their ${context} strategy when you discover:`,
      `Leading the ${context} transformation initiative, you encounter this complex scenario:`
    ]
  }

  const contextScenarios = scenarios[difficulty] || scenarios.intermediate
  return contextScenarios[Math.floor(Math.random() * contextScenarios.length)]
}

// Multiple Choice Question Templates by Bloom's Level
const mcqTemplates = {
  remember: {
    starters: [
      'What is the primary definition of',
      'Which of the following best describes',
      'What term refers to',
      'Identify the correct definition of'
    ],
    verbs: ['recall', 'identify', 'list', 'define', 'name']
  },
  understand: {
    starters: [
      'How would you explain',
      'What is the main reason why',
      'Which statement best summarizes',
      'What does it mean when'
    ],
    verbs: ['explain', 'describe', 'summarize', 'interpret', 'clarify']
  },
  apply: {
    starters: [
      'Given this situation, what should you',
      'How would you apply',
      'What is the best approach to',
      'Which solution would be most effective for'
    ],
    verbs: ['apply', 'implement', 'use', 'execute', 'solve']
  },
  analyze: {
    starters: [
      'What is the root cause of',
      'How do these factors relate to',
      'What conclusion can be drawn from',
      'Which analysis best explains'
    ],
    verbs: ['analyze', 'compare', 'examine', 'investigate', 'diagnose']
  },
  evaluate: {
    starters: [
      'Which solution would you recommend and why',
      'What is the most critical factor to consider when',
      'How would you prioritize',
      'Which approach would yield the best results for'
    ],
    verbs: ['evaluate', 'justify', 'assess', 'critique', 'prioritize']
  },
  create: {
    starters: [
      'Design a strategy to',
      'Propose a new approach for',
      'Develop a framework that',
      'Create a solution that addresses'
    ],
    verbs: ['design', 'develop', 'create', 'formulate', 'construct']
  }
}

// Short Answer Question Templates
const shortAnswerTemplates = {
  remember: 'List and briefly describe three key components related to this scenario.',
  understand: 'Explain the underlying principles at work in this scenario and why they matter.',
  apply: 'Describe the step-by-step process you would follow to address this situation.',
  analyze: 'Analyze the relationship between the various factors in this scenario and their potential impacts.',
  evaluate: 'Evaluate the trade-offs between different approaches and justify your recommended solution.',
  create: 'Design a comprehensive strategy to address this scenario, including implementation steps and success metrics.'
}

// Generate realistic distractors (wrong answers) for MCQs
const generateDistractors = (bloomsLevel, context, difficulty) => {
  const distractorTypes = {
    beginner: [
      'A partially correct answer that misses key details',
      'A common misconception in the field',
      'An answer that confuses related concepts'
    ],
    intermediate: [
      'A solution that addresses symptoms but not root causes',
      'An approach that works in theory but has practical limitations',
      'A strategy that prioritizes one factor while ignoring others'
    ],
    advanced: [
      'A sophisticated but ultimately flawed strategic approach',
      'A solution optimized for the wrong constraints',
      'An approach that creates unintended downstream consequences'
    ]
  }

  return distractorTypes[difficulty] || distractorTypes.intermediate
}

// Generate Multiple Choice Questions
const generateMCQ = (formData, questionNumber) => {
  const { learningObjective, bloomsLevel, context, difficulty } = formData
  const scenario = getScenarioContext(context, difficulty)
  const template = mcqTemplates[bloomsLevel]
  const starter = template.starters[questionNumber % template.starters.length]

  // Create a contextual scenario-based question
  const scenarios = {
    beginner: `${scenario} The system shows an unexpected pattern in your ${context} data.`,
    intermediate: `${scenario} Multiple stakeholders are requesting conflicting priorities in ${context}.`,
    advanced: `${scenario} The organization needs to balance cost optimization with service levels in ${context}.`
  }

  const questionScenario = scenarios[difficulty] || scenarios.intermediate
  const actionWord = template.verbs[questionNumber % template.verbs.length]

  const question = `${questionScenario}\n\n${starter} you ${actionWord} in this situation related to: "${learningObjective}"?`

  // Generate options based on difficulty
  const correctAnswer = `Correctly ${actionWord} the ${context} approach by analyzing data patterns, stakeholder requirements, and aligning with the learning objective to achieve optimal results.`

  const distractorDescriptions = generateDistractors(bloomsLevel, context, difficulty)
  const options = [
    { text: correctAnswer, isCorrect: true },
    { text: `Focus solely on immediate ${context} metrics without considering long-term implications or stakeholder alignment.`, isCorrect: false },
    { text: `Implement a standard ${context} template without adapting it to the specific scenario or learning objective.`, isCorrect: false },
    { text: `Escalate the decision to management without attempting to ${actionWord} the situation using available data.`, isCorrect: false }
  ]

  // Shuffle options
  return {
    type: 'Multiple Choice',
    question,
    options: options.sort(() => Math.random() - 0.5),
    rubric: generateMCQRubric(bloomsLevel, correctAnswer, context)
  }
}

// Generate Short Answer Questions
const generateShortAnswer = (formData, questionNumber) => {
  const { learningObjective, bloomsLevel, context, difficulty } = formData
  const scenario = getScenarioContext(context, difficulty)

  const complexScenarios = [
    `${scenario} Your team has identified a gap between current performance and desired outcomes in ${context}. `,
    `${scenario} Stakeholders are asking for recommendations to improve ${context} effectiveness. `
  ]

  const questionPrompt = complexScenarios[questionNumber % 2] +
    shortAnswerTemplates[bloomsLevel]

  return {
    type: 'Short Answer',
    question: questionPrompt,
    rubric: generateShortAnswerRubric(bloomsLevel, learningObjective, context, difficulty)
  }
}

// Generate MCQ Rubric
const generateMCQRubric = (bloomsLevel, correctAnswer, context) => {
  return {
    correctAnswer,
    explanation: `This answer demonstrates mastery at the "${bloomsLevel}" level of Bloom's Taxonomy by requiring the learner to engage with ${context} concepts beyond simple recall. ` +
      `The correct option integrates data analysis, stakeholder considerations, and alignment with learning objectives - all essential competencies in supply chain management.`,
    pointValue: 1
  }
}

// Generate Short Answer Rubric
const generateShortAnswerRubric = (bloomsLevel, learningObjective, context, difficulty) => {
  const rubrics = {
    beginner: {
      exemplary: '3 points - Identifies all three key components with accurate descriptions',
      proficient: '2 points - Identifies 2-3 components with mostly accurate descriptions',
      developing: '1 point - Identifies 1-2 components with limited detail',
      unsatisfactory: '0 points - Unable to identify relevant components'
    },
    intermediate: {
      exemplary: '4 points - Provides comprehensive, step-by-step process with clear justification',
      proficient: '3 points - Describes logical process with most key steps included',
      developing: '2 points - Outlines basic process but missing critical steps',
      unsatisfactory: '0-1 points - Process is incomplete or illogical'
    },
    advanced: {
      exemplary: '5 points - Comprehensive strategy with clear implementation plan, metrics, and consideration of constraints',
      proficient: '4 points - Solid strategy with most implementation details and some metrics',
      developing: '3 points - Basic strategy outlined but lacks depth in implementation or metrics',
      unsatisfactory: '0-2 points - Strategy is vague, incomplete, or not aligned with scenario'
    }
  }

  const rubricLevel = rubrics[difficulty] || rubrics.intermediate

  return {
    criteria: `Response should demonstrate understanding of "${learningObjective}" within the context of ${context}.`,
    scoringGuide: rubricLevel,
    maxPoints: difficulty === 'advanced' ? 5 : difficulty === 'intermediate' ? 4 : 3
  }
}

// Main generation function
export const generateAssessment = (formData) => {
  const questions = []

  // Generate 3 Multiple Choice Questions
  for (let i = 0; i < 3; i++) {
    questions.push(generateMCQ(formData, i))
  }

  // Generate 2 Short Answer Questions
  for (let i = 0; i < 2; i++) {
    questions.push(generateShortAnswer(formData, i))
  }

  return {
    metadata: {
      learningObjective: formData.learningObjective,
      bloomsLevel: formData.bloomsLevel,
      context: formData.context,
      difficulty: formData.difficulty,
      generatedDate: new Date().toLocaleDateString()
    },
    questions
  }
}
