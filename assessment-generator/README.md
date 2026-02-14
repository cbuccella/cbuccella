# Supply Chain Assessment Question Generator

A professional web-based tool for instructional designers to generate scenario-based assessment questions aligned with Bloom's Taxonomy for supply chain software certification programs.

## Features

- **Bloom's Taxonomy Alignment**: Generate questions at all 6 cognitive levels (Remember, Understand, Apply, Analyze, Evaluate, Create)
- **Scenario-Based Questions**: Contextual, real-world scenarios tailored to supply chain contexts
- **Multiple Question Types**:
  - 3 Multiple Choice Questions with realistic distractors
  - 2 Short Answer Questions with detailed rubrics
- **Professional Rubrics**: Detailed scoring guides and answer keys for each question
- **PDF Export**: Export complete assessments as formatted PDF documents
- **Difficulty Levels**: Beginner, Intermediate, and Advanced question complexity

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The application will open automatically at http://localhost:3000

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## How to Use

1. **Input Assessment Parameters**:
   - Enter your learning objective
   - Select the appropriate Bloom's Taxonomy level
   - Choose difficulty level (Beginner/Intermediate/Advanced)
   - Specify the supply chain context (e.g., "Enterprise Scheduling", "Demand Forecasting")

2. **Generate Questions**:
   - Click "Generate Assessment Questions"
   - Review the generated questions and rubrics

3. **Export**:
   - Click "Export to PDF" to download a formatted document
   - Use "Create New Assessment" to generate another set of questions

## Technology Stack

- **React 18**: Modern UI framework
- **Vite**: Fast build tool and dev server
- **jsPDF**: PDF generation library
- **CSS3**: Professional corporate styling

## Project Structure

```
assessment-generator/
├── src/
│   ├── components/
│   │   ├── InputForm.jsx      # Form for assessment parameters
│   │   └── ResultsDisplay.jsx # Display generated questions
│   ├── utils/
│   │   ├── questionGenerator.js # Question generation logic
│   │   └── pdfExporter.js      # PDF export functionality
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Educational Design Principles

This tool implements several instructional design best practices:

- **Bloom's Taxonomy**: Questions are crafted to assess specific cognitive levels
- **Scenario-Based Learning**: All questions present realistic supply chain situations
- **Authentic Assessment**: Questions mirror real-world challenges professionals face
- **Clear Rubrics**: Transparent scoring criteria help ensure fair, consistent grading
- **Scaffolded Difficulty**: Adjustable complexity supports diverse learner needs

## Future Enhancements

- Database integration for saving assessments
- Question bank management
- Collaborative editing
- Learning Management System (LMS) integration
- Custom template creation

## License

MIT

## Author

Created for supply chain software certification programs
