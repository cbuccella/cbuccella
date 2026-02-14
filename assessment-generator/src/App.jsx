import { useState } from 'react'
import InputForm from './components/InputForm'
import ResultsDisplay from './components/ResultsDisplay'

function App() {
  const [generatedQuestions, setGeneratedQuestions] = useState(null)

  const handleGenerate = (formData) => {
    // We'll implement the generation logic soon
    setGeneratedQuestions(formData)
  }

  const handleReset = () => {
    setGeneratedQuestions(null)
  }

  return (
    <>
      <header>
        <div className="container">
          <h1>Supply Chain Assessment Question Generator</h1>
          <p>Create scenario-based questions aligned with Bloom's Taxonomy</p>
        </div>
      </header>

      <main className="container">
        {!generatedQuestions ? (
          <InputForm onGenerate={handleGenerate} />
        ) : (
          <ResultsDisplay
            questions={generatedQuestions}
            onReset={handleReset}
          />
        )}
      </main>
    </>
  )
}

export default App
