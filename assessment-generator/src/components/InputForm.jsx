import { useState } from 'react'

const BLOOMS_LEVELS = [
  { value: 'remember', label: 'Remember - Recall facts and basic concepts' },
  { value: 'understand', label: 'Understand - Explain ideas or concepts' },
  { value: 'apply', label: 'Apply - Use information in new situations' },
  { value: 'analyze', label: 'Analyze - Draw connections among ideas' },
  { value: 'evaluate', label: 'Evaluate - Justify a decision or stance' },
  { value: 'create', label: 'Create - Produce new or original work' }
]

const DIFFICULTY_LEVELS = [
  { value: 'beginner', label: 'Beginner - Entry-level understanding' },
  { value: 'intermediate', label: 'Intermediate - Working knowledge' },
  { value: 'advanced', label: 'Advanced - Expert-level proficiency' }
]

function InputForm({ onGenerate }) {
  const [formData, setFormData] = useState({
    learningObjective: '',
    bloomsLevel: 'apply',
    context: '',
    difficulty: 'intermediate'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onGenerate(formData)
  }

  const isFormValid = formData.learningObjective.trim() && formData.context.trim()

  return (
    <div className="card">
      <h2 className="card-title">Assessment Parameters</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="learningObjective">
            Learning Objective *
          </label>
          <textarea
            id="learningObjective"
            name="learningObjective"
            value={formData.learningObjective}
            onChange={handleChange}
            placeholder="Example: Students will be able to analyze demand patterns to optimize inventory levels"
            required
          />
          <small style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            What should learners be able to do after completing this assessment?
          </small>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="bloomsLevel">
              Bloom's Taxonomy Level *
            </label>
            <select
              id="bloomsLevel"
              name="bloomsLevel"
              value={formData.bloomsLevel}
              onChange={handleChange}
              required
            >
              {BLOOMS_LEVELS.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="difficulty">
              Difficulty Level *
            </label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              required
            >
              {DIFFICULTY_LEVELS.map(level => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="context">
            Supply Chain Context *
          </label>
          <input
            type="text"
            id="context"
            name="context"
            value={formData.context}
            onChange={handleChange}
            placeholder="Example: Enterprise Scheduling, Demand Forecasting, Warehouse Management"
            required
          />
          <small style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Specify the supply chain domain or software context
          </small>
        </div>

        <div className="button-group">
          <button
            type="submit"
            className="button button-primary"
            disabled={!isFormValid}
          >
            Generate Assessment Questions
          </button>
        </div>
      </form>
    </div>
  )
}

export default InputForm
