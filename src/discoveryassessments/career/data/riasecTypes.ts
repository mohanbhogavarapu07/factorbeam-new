export const riasecTypes = {
  R: {
    name: "Realistic",
    persona: "The Builder",
    motivation: "Values tangible results through hands-on work with tools, machines, or nature.",
    characteristics: ["Practical", "Mechanical", "Physical", "Direct"],
    color: "hsl(var(--realistic))",
    gradient: "var(--gradient-realistic)",
  },
  I: {
    name: "Investigative",
    persona: "The Thinker",
    motivation: "Driven by curiosity and the need to understand complex systems through analysis.",
    characteristics: ["Analytical", "Curious", "Intellectual", "Methodical"],
    color: "hsl(var(--investigative))",
    gradient: "var(--gradient-investigative)",
  },
  A: {
    name: "Artistic",
    persona: "The Creator",
    motivation: "Seeks self-expression and innovation through creative, unstructured work.",
    characteristics: ["Creative", "Expressive", "Original", "Independent"],
    color: "hsl(var(--artistic))",
    gradient: "var(--gradient-artistic)",
  },
  S: {
    name: "Social",
    persona: "The Helper",
    motivation: "Finds purpose in supporting, teaching, and caring for others.",
    characteristics: ["Empathetic", "Collaborative", "Patient", "Supportive"],
    color: "hsl(var(--social))",
    gradient: "var(--gradient-social)",
  },
  E: {
    name: "Enterprising",
    persona: "The Persuader",
    motivation: "Energized by leading, influencing, and achieving ambitious goals.",
    characteristics: ["Ambitious", "Confident", "Persuasive", "Strategic"],
    color: "hsl(var(--enterprising))",
    gradient: "var(--gradient-enterprising)",
  },
  C: {
    name: "Conventional",
    persona: "The Organizer",
    motivation: "Values order, accuracy, and systematic approaches to work.",
    characteristics: ["Organized", "Detail-oriented", "Reliable", "Structured"],
    color: "hsl(var(--conventional))",
    gradient: "var(--gradient-conventional)",
  },
};

export const typeDescriptions = {
  primary: {
    R: "As a Builder, you are most alive when working with your hands and seeing physical results. You thrive when given concrete problems to solve with tools, equipment, or technical skills, and you're at your best when creating, repairing, or operating machinery. You value efficiency and practical outcomes over abstract theories. Your challenge is remembering that some problems require patience with ambiguity rather than immediate action.",
    I: "As a Thinker, you are driven by insatiable curiosity and the need to understand how things work. You thrive when given complex, abstract problems with no clear solution, and you're at your best when researching, analyzing patterns, or developing theories. You value intellectual rigor and evidence-based conclusions. Your challenge is remembering that not everyone needs the same level of proof you do—sometimes 'good enough' is the enemy of progress.",
    A: "As a Creator, you need freedom to express your unique vision and experiment without constraints. You thrive in unstructured environments that value originality over convention, and you're at your best when designing, performing, or inventing something new. You see possibilities where others see limitations. Your challenge is balancing creative exploration with the practical need to finish and ship your work.",
    S: "As a Helper, you find deep meaning in making a positive difference in people's lives. You thrive when working directly with individuals or communities, and you're at your best when teaching, counseling, or supporting others' growth. You have a natural ability to read emotions and build trust. Your challenge is maintaining boundaries—you can't pour from an empty cup, and helping others shouldn't come at the cost of your own wellbeing.",
    E: "As a Persuader, you are energized by big visions, high stakes, and the thrill of winning others over. You thrive in competitive, dynamic environments where leadership and influence create measurable impact, and you're at your best when pitching ideas, closing deals, or rallying teams toward ambitious goals. You turn obstacles into opportunities. Your challenge is remembering that sustainable success requires listening as much as leading.",
    C: "As an Organizer, you create order from chaos and find satisfaction in systems that work flawlessly. You thrive in structured environments with clear procedures and standards, and you're at your best when managing data, processes, or operations that require precision. You see details others miss and prevent problems before they occur. Your challenge is adapting when ambiguity or rapid change disrupts established systems.",
  },
  shadow: {
    R: "Your Shadow Style is Realistic, meaning you're likely drained by highly physical, hands-on work that requires repetitive manual labor or constant equipment operation. This isn't a weakness—it's simply not where your energy naturally flows. You may find tasks requiring mechanical troubleshooting, outdoor endurance, or technical maintenance to feel tedious or unfulfilling. Strategy: When practical work is required, focus on learning just-in-time skills or delegate to specialists.",
    I: "Your Shadow Style is Investigative, meaning you're likely drained by extended research, data analysis, or solitary intellectual work. This isn't a weakness—it's simply not where your energy naturally flows. You may find tasks requiring deep statistical reasoning, hypothesis testing, or long periods of isolated study to feel overwhelming or boring. Strategy: When analytical work is required, collaborate with detail-oriented teammates or break it into short, focused sprints.",
    A: "Your Shadow Style is Artistic, meaning you're likely drained by open-ended creative projects with no clear structure or deadline. This isn't a weakness—it's simply not where your energy naturally flows. You may find tasks requiring original design, abstract thinking, or subjective aesthetic judgment to feel uncomfortable or frustrating. Strategy: When creativity is required, start with templates, frameworks, or examples rather than a blank canvas.",
    S: "Your Shadow Style is Social, meaning you're likely drained by constant interpersonal interaction, emotional labor, or collaborative group work. This isn't a weakness—it's simply not where your energy naturally flows. You may find tasks requiring extensive networking, consensus-building, or caregiving to feel exhausting or inauthentic. Strategy: When teamwork is required, contribute through expertise or individual work streams rather than facilitation roles.",
    E: "Your Shadow Style is Enterprising, meaning you're likely drained by high-pressure sales environments, constant networking, or aggressive goal-chasing. This isn't a weakness—it's simply not where your energy naturally flows. You may find tasks requiring frequent persuasion, public speaking, or competitive posturing to feel inauthentic or exhausting. Strategy: When leadership is required, lead through expertise or service rather than charisma.",
    C: "Your Shadow Style is Conventional, meaning you're likely drained by repetitive administrative tasks, rigid procedures, or detail-heavy documentation. This isn't a weakness—it's simply not where your energy naturally flows. You may find tasks requiring extensive data entry, compliance monitoring, or organizational maintenance to feel monotonous or stifling. Strategy: When structure is required, automate what you can and batch similar tasks to minimize context-switching.",
  },
};
