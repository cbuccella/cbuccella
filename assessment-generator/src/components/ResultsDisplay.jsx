import { generateAssessment } from '../utils/questionGenerator'
import { exportToPDF } from '../utils/pdfExporter'

function ResultsDisplay({ questions, onReset }) {
  // Generate the actual assessment using our generator
  const assessment = generateAssessment(questions)

  const handleExport = () => {
    exportToPDF(assessment)
  }

  return (
    <div className="results-section">
      {/* Metadata Card */}
      <div className="card">
        <h2 className="card-title">Assessment Overview</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <strong>Learning Objective:</strong>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
              {assessment.metadata.learningObjective}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <strong>Bloom's Level:</strong>
              <p style={{ marginTop: '0.25rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>
                {assessment.metadata.bloomsLevel}
              </p>
            </div>
            <div>
              <strong>Context:</strong>
              <p style={{ marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
                {assessment.metadata.context}
              </p>
            </div>
            <div>
              <strong>Difficulty:</strong>
              <p style={{ marginTop: '0.25rem', color: 'var(--text-secondary)', textTransform: 'capitalize' }}>
                {assessment.metadata.difficulty}
              </p>
            </div>
            <div>
              <strong>Generated:</strong>
              <p style={{ marginTop: '0.25rem', color: 'var(--text-secondary)' }}>
                {assessment.metadata.generatedDate}
              </p>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button onClick={handleExport} className="button button-success">
            Export to PDF
          </button>
          <button onClick={onReset} className="button button-secondary">
            Create New Assessment
          </button>
        </div>
      </div>

      {/* Questions */}
      {assessment.questions.map((q, index) => (
        <div key={index} className="question-card">
          <div className="question-header">
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              Question {index + 1}
            </h3>
            <span className="question-type">{q.type}</span>
          </div>

          <p className="question-text">{q.question}</p>

          {/* Multiple Choice Options */}
          {q.type === 'Multiple Choice' && (
            <ul className="options-list">
              {q.options.map((option, optIndex) => (
                <li
                  key={optIndex}
                  className={`option-item ${option.isCorrect ? 'correct' : ''}`}
                >
                  <strong>{String.fromCharCode(65 + optIndex)}.</strong> {option.text}
                  {option.isCorrect && (
                    <span style={{
                      marginLeft: '0.5rem',
                      color: 'var(--success-green)',
                      fontWeight: '600'
                    }}>
                      ✓ Correct Answer
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* Rubric Section */}
          <div className="rubric-section">
            <h4 className="rubric-title">
              {q.type === 'Multiple Choice' ? 'Answer Key' : 'Scoring Rubric'}
            </h4>

            {q.type === 'Multiple Choice' ? (
              <div className="rubric-content">
                <p><strong>Correct Answer:</strong> {q.rubric.correctAnswer}</p>
                <p style={{ marginTop: '0.75rem' }}>
                  <strong>Explanation:</strong> {q.rubric.explanation}
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  <strong>Point Value:</strong> {q.rubric.pointValue} point
                </p>
              </div>
            ) : (
              <div className="rubric-content">
                <p><strong>Criteria:</strong> {q.rubric.criteria}</p>
                <div style={{ marginTop: '1rem' }}>
                  <strong>Scoring Guide (Max: {q.rubric.maxPoints} points):</strong>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                    <li><strong>Exemplary:</strong> {q.rubric.scoringGuide.exemplary}</li>
                    <li><strong>Proficient:</strong> {q.rubric.scoringGuide.proficient}</li>
                    <li><strong>Developing:</strong> {q.rubric.scoringGuide.developing}</li>
                    <li><strong>Unsatisfactory:</strong> {q.rubric.scoringGuide.unsatisfactory}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Summary */}
      <div className="card" style={{ textAlign: 'center', backgroundColor: 'var(--secondary-gray)' }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
          Total Questions: {assessment.questions.length}
          {' '}({assessment.questions.filter(q => q.type === 'Multiple Choice').length} Multiple Choice,
          {' '}{assessment.questions.filter(q => q.type === 'Short Answer').length} Short Answer)
        </p>
      </div>
    </div>
  )
}

export default ResultsDisplay
