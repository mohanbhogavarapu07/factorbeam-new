import { QuizQuestion } from '../types/quiz';

// Import images
import realisticImg from '../assets/quiz/realistic-1.png';
import investigativeImg from '../assets/quiz/investigative-1.png';
import artisticImg from '../assets/quiz/artistic-1.png';
import socialImg from '../assets/quiz/social-1.png';
import enterprisingImg from '../assets/quiz/enterprising-1.png';
import conventionalImg from '../assets/quiz/conventional-1.png';

export const quizQuestions: QuizQuestion[] = [
  // R vs I (Questions 1-2)
  {
    id: 1,
    prompt: "Which task looks more interesting?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Hands assembling mechanical parts on a workbench with tools",
      description: "Build and repair mechanical equipment"
    },
    optionB: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Computer screen displaying statistical data charts and analysis",
      description: "Analyze complex data and find patterns"
    }
  },
  {
    id: 2,
    prompt: "Which work environment appeals to you?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Workshop with tools and machinery",
      description: "Work in a workshop with equipment and tools"
    },
    optionB: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Research laboratory or data analysis workspace",
      description: "Work in a research lab or quiet analytical space"
    }
  },
  
  // R vs A (Questions 3-4)
  {
    id: 3,
    prompt: "Which activity interests you more?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Mechanical assembly and construction",
      description: "Fix machines and build physical structures"
    },
    optionB: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Artist workspace with canvas, paintbrushes and creative materials",
      description: "Create original artwork and design"
    }
  },
  {
    id: 4,
    prompt: "What type of work excites you?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Hands-on technical work",
      description: "Operate machinery and technical equipment"
    },
    optionB: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Creative design and expression",
      description: "Express ideas through creative mediums"
    }
  },

  // R vs S (Questions 5-6)
  {
    id: 5,
    prompt: "Which role sounds more fulfilling?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Technical hands-on work",
      description: "Work with tools to create tangible results"
    },
    optionB: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Collaborative teaching and community environment",
      description: "Help others learn and grow"
    }
  },
  {
    id: 6,
    prompt: "What energizes you most?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Solving physical problems",
      description: "Solve practical, hands-on problems"
    },
    optionB: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Supporting and teaching others",
      description: "Make a positive impact on people's lives"
    }
  },

  // R vs E (Questions 7-8)
  {
    id: 7,
    prompt: "Which work style fits you better?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Individual technical work",
      description: "Work independently on technical projects"
    },
    optionB: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Professional presentation and business charts",
      description: "Lead teams and drive business results"
    }
  },
  {
    id: 8,
    prompt: "What motivates you?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Building and creating",
      description: "Building things that work efficiently"
    },
    optionB: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Achieving ambitious goals",
      description: "Achieving ambitious goals and winning"
    }
  },

  // R vs C (Questions 9-10)
  {
    id: 9,
    prompt: "Which task appeals to you?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Hands-on mechanical work",
      description: "Repair and maintain equipment"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Organized office desk with documents and filing system",
      description: "Organize data and maintain records"
    }
  },
  {
    id: 10,
    prompt: "What kind of work satisfies you?",
    optionA: {
      type: 'R',
      imageUrl: realisticImg,
      altText: "Physical problem-solving",
      description: "Solve problems with physical tools"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Systematic organization",
      description: "Create order through systematic processes"
    }
  },

  // I vs A (Questions 11-12)
  {
    id: 11,
    prompt: "Which project excites you more?",
    optionA: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Data research and analysis",
      description: "Research and analyze complex information"
    },
    optionB: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Creative artistic expression",
      description: "Design innovative and original concepts"
    }
  },
  {
    id: 12,
    prompt: "How do you prefer to solve problems?",
    optionA: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Analytical and methodical approach",
      description: "Use logic and systematic analysis"
    },
    optionB: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Creative and experimental approach",
      description: "Use creativity and intuition"
    }
  },

  // I vs S (Questions 13-14)
  {
    id: 13,
    prompt: "What work environment do you prefer?",
    optionA: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Quiet analytical workspace",
      description: "Work independently on complex problems"
    },
    optionB: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Collaborative team environment",
      description: "Work with people to help them succeed"
    }
  },
  {
    id: 14,
    prompt: "What gives you satisfaction?",
    optionA: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Discovering insights",
      description: "Discovering new insights and understanding"
    },
    optionB: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Helping others grow",
      description: "Seeing others grow and succeed"
    }
  },

  // I vs E (Questions 15-16)
  {
    id: 15,
    prompt: "Which role interests you?",
    optionA: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Research and investigation",
      description: "Conduct research and develop theories"
    },
    optionB: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Leadership and business",
      description: "Persuade others and drive business growth"
    }
  },
  {
    id: 16,
    prompt: "What motivates you most?",
    optionA: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Understanding complexity",
      description: "Understanding how things work"
    },
    optionB: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Achieving success",
      description: "Achieving goals and influencing outcomes"
    }
  },

  // I vs C (Questions 17-18)
  {
    id: 17,
    prompt: "Which task appeals to you?",
    optionA: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Abstract problem solving",
      description: "Solve abstract, theoretical problems"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Organized data management",
      description: "Manage information with precision"
    }
  },
  {
    id: 18,
    prompt: "What work style suits you?",
    optionA: {
      type: 'I',
      imageUrl: investigativeImg,
      altText: "Exploratory research",
      description: "Explore new ideas and possibilities"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Systematic organization",
      description: "Follow proven systems and procedures"
    }
  },

  // A vs S (Questions 19-20)
  {
    id: 19,
    prompt: "Which work excites you?",
    optionA: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Creative expression",
      description: "Create original designs and artwork"
    },
    optionB: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Teaching and mentoring",
      description: "Teach and mentor others"
    }
  },
  {
    id: 20,
    prompt: "What brings you fulfillment?",
    optionA: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Artistic innovation",
      description: "Expressing your unique vision"
    },
    optionB: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Helping communities",
      description: "Building supportive communities"
    }
  },

  // A vs E (Questions 21-22)
  {
    id: 21,
    prompt: "Which role interests you?",
    optionA: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Creative design work",
      description: "Design innovative creative solutions"
    },
    optionB: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Strategic leadership",
      description: "Lead strategic initiatives"
    }
  },
  {
    id: 22,
    prompt: "What environment suits you?",
    optionA: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Unstructured creative space",
      description: "Work in a flexible, creative environment"
    },
    optionB: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Dynamic business setting",
      description: "Work in a competitive, fast-paced setting"
    }
  },

  // A vs C (Questions 23-24)
  {
    id: 23,
    prompt: "Which task interests you?",
    optionA: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Open-ended creative projects",
      description: "Explore creative possibilities freely"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Structured organized work",
      description: "Complete structured, detailed tasks"
    }
  },
  {
    id: 24,
    prompt: "What work style fits you?",
    optionA: {
      type: 'A',
      imageUrl: artisticImg,
      altText: "Experimental and innovative",
      description: "Experiment without strict guidelines"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Methodical and precise",
      description: "Follow established procedures precisely"
    }
  },

  // S vs E (Questions 25-26)
  {
    id: 25,
    prompt: "Which work appeals to you?",
    optionA: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Supporting others",
      description: "Support individuals through challenges"
    },
    optionB: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Driving results",
      description: "Drive teams toward ambitious targets"
    }
  },
  {
    id: 26,
    prompt: "What motivates you?",
    optionA: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Making personal impact",
      description: "Making a difference in people's lives"
    },
    optionB: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Achieving success",
      description: "Achieving recognition and success"
    }
  },

  // S vs C (Questions 27-28)
  {
    id: 27,
    prompt: "Which role fits you better?",
    optionA: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Collaborative helping",
      description: "Work directly with people to help them"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Administrative efficiency",
      description: "Manage operations and maintain order"
    }
  },
  {
    id: 28,
    prompt: "What brings you satisfaction?",
    optionA: {
      type: 'S',
      imageUrl: socialImg,
      altText: "Emotional connection",
      description: "Building meaningful relationships"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Organizational excellence",
      description: "Creating efficient, organized systems"
    }
  },

  // E vs C (Questions 29-30)
  {
    id: 29,
    prompt: "Which work interests you?",
    optionA: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "Entrepreneurial ventures",
      description: "Launch new ventures and take risks"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Stable systematic work",
      description: "Maintain stable, predictable operations"
    }
  },
  {
    id: 30,
    prompt: "What environment do you prefer?",
    optionA: {
      type: 'E',
      imageUrl: enterprisingImg,
      altText: "High-stakes competitive",
      description: "Thrive in high-stakes, competitive settings"
    },
    optionB: {
      type: 'C',
      imageUrl: conventionalImg,
      altText: "Structured predictable",
      description: "Work in structured, predictable environments"
    }
  },
];
