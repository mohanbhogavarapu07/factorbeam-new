// GATE Assessment Data Service
// This service loads and processes GATE assessment data from JSON files

// PYQ (Previous Year Questions) subjects
export const PYQ_SUBJECTS = [
  { id: 'pyq-chemistry', name: 'Chemistry (CY)', fileName: 'chemistry.json' },
  { id: 'pyq-cse', name: 'Computer Science (CS)', fileName: 'cse.json' },
  { id: 'pyq-civil', name: 'Civil Engineering (CE)', fileName: 'civil.json' },
  { id: 'pyq-mechanical', name: 'Mechanical Engineering (ME)', fileName: 'mechanical.json' },
  { id: 'pyq-electrical', name: 'Electrical Engineering (EE)', fileName: 'electrical.json' },
  { id: 'pyq-electronics', name: 'Electronics Engineering (EC)', fileName: 'electronics.json' },
  { id: 'pyq-physics', name: 'Physics (PH)', fileName: 'physics.json' },
  { id: 'pyq-mathematics', name: 'Mathematics (MA)', fileName: 'mathematics.json' },
  { id: 'pyq-petroleum', name: 'Petroleum Engineering (PE)', fileName: 'petroleum.json' },
  { id: 'pyq-instrumental', name: 'Instrumentation Engineering (IN)', fileName: 'instrumental.json' },
  { id: 'pyq-engineering', name: 'Engineering Sciences (XE)', fileName: 'engineering.json' },
  { id: 'pyq-datascience', name: 'Data Science & AI (DS)', fileName: 'datascience & ai.json' },
  { id: 'pyq-statistics', name: 'Statistics (ST)', fileName: 'statistics.json' },
  { id: 'pyq-chemistry1', name: 'Chemistry (CY) - Variant 2', fileName: 'chemistry1.json' }
];

export interface GateAssessment {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: string;
  tags: string[];
  whatIsDescription: string;
  typicalCareers: Array<{
    title: string;
    description: string;
  }>;
  whoShouldConsider: string[];
  idealTraits: string[];
  assessmentOverview: {
    modules: string[];
    resultsInclude: string[];
  };
  gateSections: {
    aptitude: {
      title: string;
      description: string;
      timeLimit: number;
      questions: Array<{
        id: string;
        text: string;
        type: string;
        category: string;
        options: Array<{
          id: string;
          text: string;
          value: string;
        }>;
        correctAnswer: string;
        subject: string;
        difficulty: string;
        explanation: string;
      }>;
    };
    core: {
      title: string;
      description: string;
      timeLimit: number;
      questions: Array<{
        id: string;
        text: string;
        type: string;
        category: string;
        options: Array<{
          id: string;
          text: string;
          value: string;
        }>;
        correctAnswer: string;
        subject: string;
        difficulty: string;
        explanation: string;
      }>;
    };
  };
}

export interface MockTest {
  id: string;
  title: string;
  questions: number;
  duration: string;
  difficulty: string;
  subject: string;
  description: string;
  tags: string[];
}

export interface SectionalTest {
  id: string;
  title: string;
  questions: number;
  duration: string;
  topics: string;
  subject: string;
  description: string;
}

// Load GATE assessment data from JSON files
const loadGateAssessment = async (fileName: string): Promise<GateAssessment> => {
  try {
    const response = await fetch(`/Gate-1-json/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${fileName}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${fileName}:`, error);
    throw error;
  }
};

// Available GATE subjects
export const GATE_SUBJECTS = [
  { id: 'gate-cs-assessment', name: 'Computer Science & Information Technology (CS)', fileName: 'gate-cs-assessment.json' },
  { id: 'chemistry', name: 'Chemistry (CY)', fileName: 'chemistry.json' },
  { id: 'civil', name: 'Civil Engineering (CE)', fileName: 'civil.json' },
  { id: 'mechanical', name: 'Mechanical Engineering (ME)', fileName: 'mechanical.json' },
  { id: 'electrical', name: 'Electrical Engineering (EE)', fileName: 'electrical.json' },
  { id: 'electronics', name: 'Electronics & Communication (EC)', fileName: 'electronics.json' },
  { id: 'physics', name: 'Physics (PH)', fileName: 'physics .json' },
  { id: 'maths', name: 'Mathematics (MA)', fileName: 'maths.json' },
  { id: 'datascience', name: 'Data Science & AI (DS)', fileName: 'datascience.json' },
  { id: 'instrument', name: 'Instrumentation Engineering (IN)', fileName: 'instrument.json' },
  { id: 'petroleum', name: 'Petroleum Engineering (PE)', fileName: 'petroleum.json' },
  { id: 'engineering-science', name: 'Engineering Sciences (XE)', fileName: 'engineering science.json' },
  { id: 'statistics', name: 'Statistics (ST)', fileName: 'staistics.json' },
];

// Load actual GATE assessments from JSON files (not generate mock tests)
export const loadGateAssessments = async (): Promise<MockTest[]> => {
  const assessments: MockTest[] = [];
  
  console.log('🚀 Loading actual GATE assessments from', GATE_SUBJECTS.length, 'JSON files');
  
  for (const subject of GATE_SUBJECTS) {
    try {
      console.log(`📖 Loading ${subject.fileName}...`);
      const assessment = await loadGateAssessment(subject.fileName);
      
      const aptitudeQuestions = assessment.gateSections.aptitude.questions.length;
      const coreQuestions = assessment.gateSections.core.questions.length;
      const totalQuestions = aptitudeQuestions + coreQuestions;
      
      console.log(`✅ ${subject.name}: ${aptitudeQuestions} aptitude + ${coreQuestions} core = ${totalQuestions} total questions`);
      
      // Create ONE assessment per subject (not multiple mock tests)
      const subjectCode = subject.name.split('(')[1]?.replace(')', '') || 'XX';

      assessments.push({
        id: subject.id,
        title: assessment.title,
        questions: totalQuestions,
        duration: assessment.duration,
        difficulty: assessment.difficulty,
        subject: subject.name,
        description: assessment.description,
        tags: assessment.tags,
      });
    } catch (error) {
      console.error(`❌ Error loading assessment for ${subject.name}:`, error);
    }
  }
  
  console.log(`🎯 Loaded ${assessments.length} actual GATE assessments`);
  return assessments;
};

// Generate sectional tests from GATE assessment data
export const generateSectionalTests = async (): Promise<SectionalTest[]> => {
  const sectionalTests: SectionalTest[] = [];
  
  console.log('🚀 Generating sectional tests from GATE assessments');
  
  for (const subject of GATE_SUBJECTS) {
    try {
      const assessment = await loadGateAssessment(subject.fileName);
      
      // Create sectional tests for aptitude and core sections
      sectionalTests.push({
        id: `${subject.id}-aptitude`,
        title: `${subject.name} - General Aptitude`,
        questions: assessment.gateSections.aptitude.questions.length,
        duration: `${assessment.gateSections.aptitude.timeLimit} min`,
        topics: 'Verbal Ability, Quantitative Aptitude, Analytical Reasoning',
        subject: subject.name,
        description: assessment.gateSections.aptitude.description,
      });
      
      // Create sectional tests for core subjects
      const coreSubjects = [...new Set(assessment.gateSections.core.questions.map(q => q.subject))];
      coreSubjects.forEach(coreSubject => {
        const subjectQuestions = assessment.gateSections.core.questions.filter(q => q.subject === coreSubject);
        if (subjectQuestions.length > 0) {
          sectionalTests.push({
            id: `${subject.id}-${coreSubject.toLowerCase().replace(/\s+/g, '-')}`,
            title: `${subject.name} - ${coreSubject}`,
            questions: subjectQuestions.length,
            duration: `${Math.ceil(subjectQuestions.length * 1.5)} min`,
            topics: coreSubject,
            subject: subject.name,
            description: `Practice questions for ${coreSubject} in ${subject.name}`,
          });
        }
      });
    } catch (error) {
      console.error(`Error generating sectional tests for ${subject.name}:`, error);
    }
  }
  
  console.log(`🎯 Generated ${sectionalTests.length} sectional tests`);
  return sectionalTests;
};

// Load specific GATE assessment data
export const loadGateAssessmentData = async (subjectId: string): Promise<GateAssessment | null> => {
  const subject = GATE_SUBJECTS.find(s => s.id === subjectId);
  if (!subject) {
    console.error(`Subject ${subjectId} not found`);
    return null;
  }
  
  try {
    return await loadGateAssessment(subject.fileName);
  } catch (error) {
    console.error(`Error loading assessment data for ${subjectId}:`, error);
    return null;
  }
};

// Convert GATE assessment questions to the format expected by TestInterface
export const convertToTestQuestions = (assessment: GateAssessment) => {
  const allQuestions = [
    ...assessment.gateSections.aptitude.questions,
    ...assessment.gateSections.core.questions
  ];
  
  return allQuestions.map((q, index) => ({
    id: index + 1,
    text: q.text,
    options: q.options.map(opt => opt.text),
    correctAnswer: q.options.findIndex(opt => opt.value === q.correctAnswer),
    explanation: q.explanation,
    difficulty: q.difficulty.toLowerCase(),
    subject: q.subject,
    marks: q.category === 'General Aptitude' ? 1 : 2,
  }));
};

// PYQ (Previous Year Questions) Loading Functions
export const loadPYQAssessment = async (fileName: string): Promise<GateAssessment> => {
  try {
    const response = await fetch(`/Gate-pyq-json/${fileName}`);
    if (!response.ok) {
      throw new Error(`Failed to load PYQ assessment: ${response.statusText}`);
    }
    const data = await response.json();
    return data as GateAssessment;
  } catch (error) {
    console.error(`Error loading PYQ assessment ${fileName}:`, error);
    throw error;
  }
};

export const loadPYQAssessments = async (): Promise<MockTest[]> => {
  const assessments: MockTest[] = [];

  console.log('🚀 Loading PYQ assessments from', PYQ_SUBJECTS.length, 'JSON files');

  for (const subject of PYQ_SUBJECTS) {
    try {
      console.log(`📖 Loading PYQ ${subject.fileName}...`);
      const assessment = await loadPYQAssessment(subject.fileName);

      const aptitudeQuestions = assessment.gateSections.aptitude.questions.length;
      const coreQuestions = assessment.gateSections.core.questions.length;
      const totalQuestions = aptitudeQuestions + coreQuestions;

      console.log(`✅ PYQ ${subject.name}: ${aptitudeQuestions} aptitude + ${coreQuestions} core = ${totalQuestions} total questions`);

      // Create ONE PYQ assessment per subject
      const subjectCode = subject.name.split('(')[1]?.replace(')', '') || 'XX';

      assessments.push({
        id: subject.id,
        title: assessment.title,
        questions: totalQuestions,
        duration: assessment.duration,
        difficulty: assessment.difficulty,
        subject: subject.name,
        description: assessment.description,
        tags: assessment.tags,
      });
    } catch (error) {
      console.error(`❌ Error loading PYQ assessment for ${subject.name}:`, error);
    }
  }

  console.log(`🎯 Loaded ${assessments.length} PYQ assessments`);
  return assessments;
};

export const loadPYQAssessmentData = async (subjectId: string): Promise<GateAssessment | null> => {
  const subject = PYQ_SUBJECTS.find(s => s.id === subjectId);
  if (!subject) {
    console.error(`PYQ subject not found: ${subjectId}`);
    return null;
  }

  try {
    return await loadPYQAssessment(subject.fileName);
  } catch (error) {
    console.error(`Error loading PYQ assessment data for ${subjectId}:`, error);
    return null;
  }
};
