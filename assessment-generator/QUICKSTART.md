# Quick Start Guide

## For Instructional Designers: Your First Assessment

### Step 1: Start the Application

```bash
cd assessment-generator
npm run dev
```

The app will open at http://localhost:3000

### Step 2: Fill in Your Assessment Parameters

#### Example: Enterprise Scheduling Assessment

Let's say you're creating an assessment for a module on Enterprise Scheduling:

1. **Learning Objective** (What should learners demonstrate?):
   ```
   Students will be able to analyze production schedules and resource constraints
   to optimize manufacturing throughput while maintaining on-time delivery commitments
   ```

2. **Bloom's Taxonomy Level**: Select "Analyze"
   - This requires learners to examine relationships and draw connections

3. **Difficulty Level**: Select "Intermediate"
   - Assumes working knowledge of scheduling concepts

4. **Supply Chain Context**: Enter "Enterprise Scheduling"
   - This contextualizes all scenarios to scheduling situations

### Step 3: Generate and Review

Click **"Generate Assessment Questions"** and you'll see:

- **3 Multiple Choice Questions** with 4 options each
  - Realistic scenarios from the scheduling domain
  - One correct answer clearly marked
  - Detailed explanations for why the answer is correct

- **2 Short Answer Questions** with detailed rubrics
  - Comprehensive scoring guides (Exemplary/Proficient/Developing/Unsatisfactory)
  - Point values based on difficulty level
  - Clear criteria for what makes a good answer

### Step 4: Export Your Assessment

Click **"Export to PDF"** to download a professionally formatted document that includes:
- All questions with scenarios
- Answer keys for multiple choice
- Complete rubrics for short answer questions
- Assessment metadata (objective, Bloom's level, context, date)

### Step 5: Use in Your LMS or Training

The exported PDF can be:
- Uploaded to your Learning Management System (LMS)
- Distributed to instructors as an answer key
- Modified in any PDF editor
- Shared with subject matter experts for review

## Understanding Bloom's Taxonomy Levels

Choose the level based on what cognitive skill you want to assess:

| Level | When to Use | Example Verbs |
|-------|-------------|---------------|
| **Remember** | Recall basic facts, terminology | List, define, identify, name |
| **Understand** | Explain concepts in their own words | Explain, describe, summarize |
| **Apply** | Use knowledge in new situations | Apply, implement, solve, use |
| **Analyze** | Break down information, find patterns | Analyze, compare, examine |
| **Evaluate** | Make judgments, justify decisions | Evaluate, justify, recommend |
| **Create** | Design new solutions or strategies | Design, develop, create, propose |

## Adjusting Difficulty Levels

### Beginner
- Focuses on foundational concepts
- Simpler scenarios with fewer variables
- More straightforward correct answers
- 3-point rubric scale

### Intermediate
- Requires practical application
- Multiple factors to consider
- Stakeholder perspectives
- 4-point rubric scale

### Advanced
- Complex, multi-dimensional problems
- Strategic decision-making
- Trade-offs and constraints
- 5-point rubric scale

## Tips for Best Results

### Writing Effective Learning Objectives

Good:
> "Students will be able to evaluate demand forecasting methods and recommend the most appropriate technique for a given business scenario"

Why? Specific, measurable, uses Bloom's verb (evaluate), includes context

Not as good:
> "Understand forecasting"

Why? Too vague, doesn't specify what level of understanding

### Choosing Context

Be specific:
- ✅ "Warehouse Management Systems (WMS)"
- ✅ "Demand Planning and Forecasting"
- ✅ "Transportation Management"
- ❌ "Supply Chain" (too broad)

### Matching Bloom's Level to Difficulty

Recommended combinations:
- **Remember/Understand** → Beginner or Intermediate
- **Apply/Analyze** → Intermediate (most common)
- **Evaluate/Create** → Intermediate or Advanced

Avoid:
- "Create" at Beginner level (too advanced)
- "Remember" at Advanced level (too simple)

## Common Supply Chain Contexts

Here are some contexts that work well:

- Enterprise Resource Planning (ERP) Configuration
- Demand Forecasting and Planning
- Inventory Optimization
- Warehouse Management Systems
- Transportation Management
- Supply Chain Analytics
- Supplier Relationship Management
- Order Management Systems
- Production Scheduling
- Distribution Network Design

## Customizing Generated Questions

The generated questions are templates you can refine:

1. **Adjust specificity**: Add company names, specific metrics, or industry details
2. **Add data**: Include charts, tables, or specific numbers
3. **Modify scenarios**: Change the context to match your specific curriculum
4. **Combine questions**: Use parts from multiple generations
5. **Adjust rubrics**: Tailor point values and criteria to your grading system

## Need Help?

Common issues and solutions:

**Q: Questions seem too generic**
A: Be more specific in your context field. Instead of "Inventory Management," try "Inventory Management for Perishable Goods in Retail"

**Q: Questions don't match my learning objective**
A: Ensure your Bloom's level matches the verb in your objective. If your objective says "analyze," select "Analyze" as the Bloom's level.

**Q: Rubrics don't fit my grading scale**
A: The PDF is editable in most PDF editors. You can adjust point values and criteria after export.

**Q: Want more questions**
A: Simply click "Create New Assessment" and generate another set. You can combine multiple sets in a single exam.

## Example Workflow

1. **Monday**: Generate 3 different assessments at different Bloom's levels
2. **Tuesday**: Review with subject matter experts, pick best questions
3. **Wednesday**: Customize scenarios with specific company examples
4. **Thursday**: Create student version (without rubrics) and instructor version (with rubrics)
5. **Friday**: Upload to LMS and schedule for next week

Enjoy creating professional, pedagogically sound assessments!
