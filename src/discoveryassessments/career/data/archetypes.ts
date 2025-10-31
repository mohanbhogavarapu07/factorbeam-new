import { Archetype } from "../types/quiz";

export const archetypes: Record<string, Archetype> = {
  // R dominant combinations
  "RI": {
    name: "The Technician",
    tagline: "You solve real-world problems with precision and analysis",
    code: "R-I",
    description: "You combine hands-on technical skills with deep analytical thinking",
    thriveIn: "You thrive in R&D environments where you can prototype solutions to complex problems. You need space to experiment physically while engaging your analytical mind. You're energized by roles that blend engineering precision with scientific discovery.",
    avoid: "Avoid purely social roles, high-pressure sales environments, or jobs requiring constant public performance. You'll burn out in unstructured creative settings or rigid administrative positions.",
    careers: [
      { title: "Research & Development Engineer", reason: "You invent solutions through experimentation and analysis" },
      { title: "Robotics Engineer", reason: "You build intelligent systems combining hardware and algorithms" },
      { title: "Biomedical Engineer", reason: "You solve medical challenges with technical innovation" },
      { title: "Quality Assurance Engineer", reason: "You test and improve systems with technical rigor" },
      { title: "Laboratory Technician", reason: "You conduct precise experiments and analyze results" },
    ],
    superpower: "You see how things work and have the skills to make them work better",
    nextSteps: [
      "Build a portfolio showing both technical builds and analytical depth",
      "Seek roles with 'engineer' or 'technician' in technical companies",
      "Join maker spaces or research labs where building meets thinking"
    ]
  },

  "RA": {
    name: "The Craftsperson",
    tagline: "You create beautiful, functional objects with your hands",
    code: "R-A",
    description: "You blend practical skill with aesthetic sensibility",
    thriveIn: "You thrive in workshops and studios where craftsmanship meets creativity. You need space to work with materials and tools while expressing your artistic vision. You're energized by creating tangible, beautiful things.",
    avoid: "Avoid desk jobs, abstract theoretical work, or roles requiring extensive data analysis. You'll burn out without opportunities for hands-on creation.",
    careers: [
      { title: "Furniture Maker", reason: "You craft functional art from wood and materials" },
      { title: "Industrial Designer", reason: "You design products that are both useful and beautiful" },
      { title: "Jeweler", reason: "You create wearable art with precision craftsmanship" },
      { title: "Set Designer", reason: "You build immersive physical environments for productions" },
      { title: "Architectural Model Maker", reason: "You bring designs to life through detailed physical models" },
    ],
    superpower: "You turn raw materials into functional beauty",
    nextSteps: [
      "Build a portfolio showcasing craftsmanship and design",
      "Learn specialized techniques in your chosen medium",
      "Network in maker communities and craft markets"
    ]
  },

  "RS": {
    name: "The Caregiver",
    tagline: "You support others through practical, hands-on help",
    code: "R-S",
    description: "You combine technical skills with genuine care for people",
    thriveIn: "You thrive in healthcare, emergency response, or service roles where you can help people through skilled action. You're energized by making a tangible difference in someone's day through practical support.",
    avoid: "Avoid purely administrative roles, abstract research, or competitive sales environments. You'll burn out without direct human impact.",
    careers: [
      { title: "Physical Therapist", reason: "You heal through hands-on rehabilitation techniques" },
      { title: "Paramedic", reason: "You provide critical care in emergency situations" },
      { title: "Veterinary Technician", reason: "You care for animals with technical medical skills" },
      { title: "Athletic Trainer", reason: "You help athletes recover and perform through practical support" },
      { title: "Dental Hygienist", reason: "You improve health through skilled, caring service" },
    ],
    superpower: "You help people through skilled, compassionate action",
    nextSteps: [
      "Pursue certifications in healthcare or emergency services",
      "Volunteer in service roles to build experience",
      "Seek roles combining technical training with caregiving"
    ]
  },

  "RE": {
    name: "The Foreman",
    tagline: "You lead teams to build and achieve tangible results",
    code: "R-E",
    description: "You combine hands-on expertise with leadership drive",
    thriveIn: "You thrive managing projects where you can both direct others and get your hands dirty. You're energized by leading teams to complete physical projects on time and under budget.",
    avoid: "Avoid purely strategic or administrative roles without execution. You'll burn out in environments that separate planning from doing.",
    careers: [
      { title: "Construction Manager", reason: "You oversee building projects from ground to completion" },
      { title: "Manufacturing Supervisor", reason: "You optimize production while leading floor teams" },
      { title: "Fleet Manager", reason: "You maintain vehicle operations and manage logistics" },
      { title: "Agricultural Manager", reason: "You run farm operations combining land work with business" },
      { title: "Facilities Director", reason: "You manage building operations and maintenance teams" },
    ],
    superpower: "You get things built by leading from the front",
    nextSteps: [
      "Gain technical expertise in your industry first",
      "Develop project management and leadership skills",
      "Seek supervisory roles in hands-on industries"
    ]
  },

  "RC": {
    name: "The Operator",
    tagline: "You maintain systems that run like clockwork",
    code: "R-C",
    description: "You combine technical precision with organizational discipline",
    thriveIn: "You thrive in roles requiring both technical skill and attention to detail. You're energized by keeping complex systems running smoothly through systematic maintenance and precise documentation.",
    avoid: "Avoid highly creative or unstructured roles, and jobs requiring extensive social interaction. You'll burn out without clear procedures.",
    careers: [
      { title: "Aviation Mechanic", reason: "You maintain aircraft with precision and documentation" },
      { title: "Medical Equipment Technician", reason: "You calibrate and repair critical healthcare machinery" },
      { title: "Quality Control Inspector", reason: "You ensure products meet exact specifications" },
      { title: "Building Inspector", reason: "You verify construction compliance with technical standards" },
      { title: "IT Systems Administrator", reason: "You maintain server infrastructure with systematic care" },
    ],
    superpower: "You keep critical systems running through disciplined expertise",
    nextSteps: [
      "Pursue technical certifications in your field",
      "Develop documentation and compliance skills",
      "Seek roles in regulated industries requiring precision"
    ]
  },

  // I dominant combinations
  "IR": {
    name: "The Scientist",
    tagline: "You test theories through hands-on experimentation",
    code: "I-R",
    description: "You blend analytical thinking with practical experimentation",
    thriveIn: "You thrive in laboratory and field research environments where you can design experiments and execute them yourself. You're energized by the scientific method applied through direct observation.",
    avoid: "Avoid purely theoretical roles or jobs requiring constant social performance. You'll burn out without opportunities for hands-on investigation.",
    careers: [
      { title: "Field Biologist", reason: "You study organisms in their natural habitats through direct observation" },
      { title: "Forensic Scientist", reason: "You solve crimes through physical evidence analysis" },
      { title: "Environmental Scientist", reason: "You measure and analyze ecological systems firsthand" },
      { title: "Materials Scientist", reason: "You develop and test new substances through experimentation" },
      { title: "Geologist", reason: "You study Earth through fieldwork and sample analysis" },
    ],
    superpower: "You discover truth through direct investigation",
    nextSteps: [
      "Pursue research positions combining lab and fieldwork",
      "Develop both analytical and technical laboratory skills",
      "Seek roles in applied science rather than pure theory"
    ]
  },

  "IA": {
    name: "The Innovator",
    tagline: "You transform complex ideas into creative breakthroughs",
    code: "I-A",
    description: "You blend analytical depth with creative expression",
    thriveIn: "You thrive in innovative environments where creative problem-solving is valued over process compliance. You need space to research deeply and express findings creatively. Think research meets design—you're energized by roles requiring both intellectual rigor and aesthetic vision.",
    avoid: "Avoid rigid corporate hierarchies, sales-driven cultures, or repetitive execution roles. You'll burn out in environments demanding constant social performance or manual labor.",
    careers: [
      { title: "UX Researcher", reason: "You uncover insights through study and translate them into innovative designs" },
      { title: "Creative Technologist", reason: "You prototype experiences at the intersection of art and technology" },
      { title: "Architect", reason: "You solve spatial problems through analytical thinking and aesthetic vision" },
      { title: "Game Designer", reason: "You architect complex systems that create engaging experiences" },
      { title: "Data Visualization Designer", reason: "You reveal insights through beautiful, intuitive graphics" },
      { title: "Science Communicator", reason: "You translate complex research into accessible, engaging content" },
    ],
    superpower: "You see patterns others miss and have the creative courage to build something new from them",
    nextSteps: [
      "Build a portfolio showing analytical depth and creative execution",
      "Seek roles with 'design' or 'research' at innovation-driven companies",
      "Join communities where makers and thinkers collaborate"
    ]
  },

  "IS": {
    name: "The Professor",
    tagline: "You illuminate complex ideas for others to understand",
    code: "I-S",
    description: "You combine intellectual depth with teaching passion",
    thriveIn: "You thrive in educational and mentorship roles where you can help others master complex subjects. You're energized by breaking down difficult concepts and watching understanding dawn in students' eyes.",
    avoid: "Avoid purely technical roles without teaching opportunity, or sales and administrative work. You'll burn out without intellectual stimulation and human connection.",
    careers: [
      { title: "University Professor", reason: "You research and teach in your area of expertise" },
      { title: "Research Coordinator", reason: "You guide research teams while mentoring junior scientists" },
      { title: "Educational Consultant", reason: "You help institutions improve learning outcomes" },
      { title: "Clinical Psychologist", reason: "You help people through evidence-based therapy" },
      { title: "Technical Trainer", reason: "You teach complex systems to new users" },
    ],
    superpower: "You make the complex comprehensible",
    nextSteps: [
      "Pursue advanced degrees in your field of interest",
      "Seek teaching or training opportunities",
      "Develop both subject expertise and communication skills"
    ]
  },

  "IE": {
    name: "The Strategist",
    tagline: "You drive success through analytical insight and vision",
    code: "I-E",
    description: "You combine deep analysis with strategic leadership",
    thriveIn: "You thrive in strategic roles where data-driven insights lead to ambitious goals. You're energized by analyzing complex problems and leading teams to execute innovative solutions.",
    avoid: "Avoid purely operational or hands-on technical roles. You'll burn out without opportunities for strategic thinking and leadership.",
    careers: [
      { title: "Management Consultant", reason: "You solve complex business problems with analytical rigor" },
      { title: "Strategy Director", reason: "You chart organizational direction through data-driven insights" },
      { title: "Product Manager", reason: "You lead product development based on market research and vision" },
      { title: "Investment Analyst", reason: "You identify opportunities through rigorous financial analysis" },
      { title: "Chief Technology Officer", reason: "You lead technical vision and strategy for organizations" },
    ],
    superpower: "You see the path to success others miss",
    nextSteps: [
      "Develop business acumen alongside analytical skills",
      "Seek roles combining research with decision-making authority",
      "Build track record of strategic wins backed by analysis"
    ]
  },

  "IC": {
    name: "The Analyst",
    tagline: "You uncover truth through systematic investigation",
    code: "I-C",
    description: "You combine analytical rigor with methodical precision",
    thriveIn: "You thrive in research and analysis roles requiring both intellectual depth and meticulous attention to detail. You're energized by solving puzzles through systematic investigation.",
    avoid: "Avoid highly social roles, creative ambiguity, or jobs requiring quick decisions without data. You'll burn out without time for thorough analysis.",
    careers: [
      { title: "Data Scientist", reason: "You extract insights from complex datasets with statistical rigor" },
      { title: "Financial Analyst", reason: "You evaluate investments through detailed quantitative analysis" },
      { title: "Research Scientist", reason: "You conduct systematic studies following rigorous protocols" },
      { title: "Actuary", reason: "You assess risk through mathematical and statistical analysis" },
      { title: "Epidemiologist", reason: "You investigate disease patterns through systematic data collection" },
    ],
    superpower: "You find truth in the details",
    nextSteps: [
      "Master statistical and analytical tools",
      "Seek roles in research, finance, or data science",
      "Develop both deep expertise and methodical work habits"
    ]
  },

  // A dominant combinations
  "AR": {
    name: "The Designer-Builder",
    tagline: "You bring creative visions to life through skilled craft",
    code: "A-R",
    description: "You combine artistic vision with practical building skills",
    thriveIn: "You thrive creating original designs and building them yourself. You're energized by the full creative cycle from concept to finished product, working with your hands to realize your vision.",
    avoid: "Avoid purely conceptual roles or jobs separating design from execution. You'll burn out without hands-on creation.",
    careers: [
      { title: "Product Designer", reason: "You design and prototype innovative physical products" },
      { title: "Landscape Architect", reason: "You create outdoor spaces and build them into reality" },
      { title: "Fashion Designer", reason: "You design clothing and construct garments yourself" },
      { title: "Custom Furniture Designer", reason: "You design unique pieces and craft them by hand" },
      { title: "Theatrical Set Builder", reason: "You design and construct immersive stage environments" },
    ],
    superpower: "You dream it and build it",
    nextSteps: [
      "Build portfolio showing design process and finished products",
      "Develop both creative and technical fabrication skills",
      "Seek roles allowing creative control and hands-on execution"
    ]
  },

  "AI": {
    name: "The Visionary",
    tagline: "You turn research insights into groundbreaking creative work",
    code: "A-I",
    description: "You blend creative intuition with analytical research",
    thriveIn: "You thrive in innovative environments valuing both creative exploration and intellectual depth. You need freedom to research deeply while expressing findings through original creative work.",
    avoid: "Avoid purely analytical roles without creative expression, or purely creative roles without intellectual substance. You'll burn out without both.",
    careers: [
      { title: "Design Researcher", reason: "You investigate user needs and create innovative design solutions" },
      { title: "Creative Director", reason: "You lead campaigns based on cultural and market insights" },
      { title: "Film Director", reason: "You craft narratives grounded in human psychology and cultural research" },
      { title: "Innovation Consultant", reason: "You research trends and develop creative strategies" },
      { title: "Art Director", reason: "You create visual concepts backed by strategic thinking" },
    ],
    superpower: "You create work that's both beautiful and smart",
    nextSteps: [
      "Build portfolio showing research informing creative work",
      "Develop both analytical research and creative expression skills",
      "Seek roles in innovation, design, or creative strategy"
    ]
  },

  "AS": {
    name: "The Storyteller",
    tagline: "You express meaningful ideas that connect and inspire people",
    code: "A-S",
    description: "You blend creative expression with genuine care for human impact",
    thriveIn: "You thrive in environments valuing authentic human connection through creative expression. You're energized by roles allowing you to teach, inspire, or create work that emotionally resonates with audiences.",
    avoid: "Avoid purely technical roles, highly competitive sales environments, or monotonous administrative work. You'll burn out without opportunities for creative expression and meaningful human interaction.",
    careers: [
      { title: "Art Therapist", reason: "You heal through creative expression" },
      { title: "Content Creator", reason: "You share stories that connect and inspire communities" },
      { title: "Museum Educator", reason: "You bring art to life for diverse audiences" },
      { title: "Brand Storyteller", reason: "You craft narratives that resonate emotionally" },
      { title: "Creative Writing Teacher", reason: "You help others find their voice through writing" },
    ],
    superpower: "You create work that makes people feel seen and understood",
    nextSteps: [
      "Build portfolio highlighting both creative work and human impact",
      "Seek roles in education, healthcare, or mission-driven organizations",
      "Network in communities valuing creativity and social good"
    ]
  },

  "AE": {
    name: "The Creative Director",
    tagline: "You lead bold creative visions to successful execution",
    code: "A-E",
    description: "You combine artistic vision with entrepreneurial drive",
    thriveIn: "You thrive leading creative projects and teams toward ambitious goals. You're energized by both generating original ideas and rallying others to bring them to market.",
    avoid: "Avoid purely operational roles or positions without creative control. You'll burn out executing others' visions without leadership authority.",
    careers: [
      { title: "Creative Agency Owner", reason: "You build and lead your own creative business" },
      { title: "Film Producer", reason: "You bring creative projects from concept to distribution" },
      { title: "Art Gallery Director", reason: "You curate shows and run the business side of art" },
      { title: "Fashion Brand Founder", reason: "You design collections and build the brand" },
      { title: "Experience Designer", reason: "You create and sell innovative event experiences" },
    ],
    superpower: "You turn creative visions into commercial success",
    nextSteps: [
      "Build portfolio showing creative leadership and results",
      "Develop business skills alongside creative expertise",
      "Seek roles with creative authority and strategic responsibility"
    ]
  },

  "AC": {
    name: "The Designer",
    tagline: "You create polished work through meticulous craft",
    code: "A-C",
    description: "You combine creative vision with precision and attention to detail",
    thriveIn: "You thrive in design roles requiring both originality and technical excellence. You're energized by perfecting every detail until your work is flawless.",
    avoid: "Avoid highly unstructured roles or fast-paced environments prioritizing speed over quality. You'll burn out without time to refine your work.",
    careers: [
      { title: "Graphic Designer", reason: "You create pixel-perfect visual communications" },
      { title: "User Interface Designer", reason: "You design beautiful, functional digital interfaces" },
      { title: "Technical Illustrator", reason: "You create precise, detailed visual documentation" },
      { title: "Publication Designer", reason: "You layout books and magazines with typographic precision" },
      { title: "Brand Identity Designer", reason: "You craft comprehensive, cohesive visual systems" },
    ],
    superpower: "You create beauty through disciplined craft",
    nextSteps: [
      "Master design tools and develop technical precision",
      "Build portfolio showing both creativity and attention to detail",
      "Seek roles valuing craft quality over quick output"
    ]
  },

  // S dominant combinations
  "SR": {
    name: "The Practitioner",
    tagline: "You help people through skilled, hands-on care",
    code: "S-R",
    description: "You combine compassion with practical technical skills",
    thriveIn: "You thrive in healthcare and service roles where you can directly help people through skilled action. You're energized by making a tangible difference through caring expertise.",
    avoid: "Avoid abstract analytical work or roles without direct human impact. You'll burn out without opportunities to help people practically.",
    careers: [
      { title: "Occupational Therapist", reason: "You help people regain independence through practical rehabilitation" },
      { title: "Massage Therapist", reason: "You relieve pain and promote wellness through skilled touch" },
      { title: "Emergency Medical Technician", reason: "You provide critical care in urgent situations" },
      { title: "Personal Trainer", reason: "You help clients achieve health goals through hands-on coaching" },
      { title: "Nurse", reason: "You care for patients through medical skills and compassion" },
    ],
    superpower: "You heal through skilled, compassionate hands",
    nextSteps: [
      "Pursue healthcare or service certifications",
      "Gain hands-on experience through volunteering",
      "Seek roles combining technical training with caregiving"
    ]
  },

  "SI": {
    name: "The Counselor",
    tagline: "You guide people through understanding and insight",
    code: "S-I",
    description: "You combine empathy with analytical understanding of human behavior",
    thriveIn: "You thrive in counseling and advisory roles where you can help people through deep understanding. You're energized by using psychological insights to support individual growth.",
    avoid: "Avoid purely technical or business-focused roles. You'll burn out without opportunities for meaningful one-on-one helping.",
    careers: [
      { title: "Clinical Social Worker", reason: "You help people navigate life challenges through therapy" },
      { title: "School Psychologist", reason: "You support student wellbeing through assessment and counseling" },
      { title: "Career Counselor", reason: "You guide people to fulfilling work through insight and assessment" },
      { title: "Addiction Counselor", reason: "You help people recover through understanding and support" },
      { title: "Researcher in Psychology", reason: "You study human behavior to improve helping approaches" },
    ],
    superpower: "You understand what people need before they know themselves",
    nextSteps: [
      "Pursue advanced degrees in counseling or psychology",
      "Gain clinical experience through internships",
      "Develop both empathy and evidence-based practice skills"
    ]
  },

  "SA": {
    name: "The Guide",
    tagline: "You inspire growth through creative expression and connection",
    code: "S-A",
    description: "You combine care for people with creative approaches to helping",
    thriveIn: "You thrive teaching, counseling, or leading through creative and expressive methods. You're energized by helping people discover themselves through art, movement, or story.",
    avoid: "Avoid highly technical or purely administrative roles. You'll burn out without creative expression and human connection.",
    careers: [
      { title: "Drama Therapist", reason: "You facilitate healing through theatrical expression" },
      { title: "Music Teacher", reason: "You nurture musical talent and personal growth" },
      { title: "Life Coach", reason: "You inspire transformation through creative coaching approaches" },
      { title: "Community Arts Coordinator", reason: "You build connection through collaborative creativity" },
      { title: "Dance Instructor", reason: "You teach movement while building confidence and community" },
    ],
    superpower: "You unlock human potential through creative connection",
    nextSteps: [
      "Develop expertise in both your creative medium and facilitation",
      "Seek certifications in therapeutic or educational approaches",
      "Build practice helping people through creative expression"
    ]
  },

  "SE": {
    name: "The Catalyst",
    tagline: "You inspire and mobilize people toward meaningful change",
    code: "S-E",
    description: "You combine genuine care for people with strategic vision and drive",
    thriveIn: "You thrive leading teams or initiatives where success means making a positive social impact. You're energized by both emotional intelligence and strategic thinking to create change.",
    avoid: "Avoid purely technical, isolated, or highly structured administrative roles. You'll burn out without opportunities to lead people toward meaningful goals.",
    careers: [
      { title: "Nonprofit Director", reason: "You lead organizations creating social impact" },
      { title: "Community Organizer", reason: "You mobilize groups toward collective action" },
      { title: "Social Entrepreneur", reason: "You build ventures solving social problems" },
      { title: "HR Director", reason: "You shape culture and develop people strategically" },
      { title: "Political Campaign Manager", reason: "You rally people around important causes" },
    ],
    superpower: "You see human potential and know how to unlock it at scale",
    nextSteps: [
      "Seek leadership roles in mission-driven organizations",
      "Build networks in social impact and community development",
      "Develop skills in both people management and strategic planning"
    ]
  },

  "SC": {
    name: "The Administrator",
    tagline: "You serve others through organized, reliable systems",
    code: "S-C",
    description: "You combine care for people with administrative excellence",
    thriveIn: "You thrive in support roles where you help people through efficient, organized service. You're energized by creating systems that make others' lives easier.",
    avoid: "Avoid highly creative or unstructured roles, or positions without direct service to people. You'll burn out without clear procedures and human impact.",
    careers: [
      { title: "Healthcare Administrator", reason: "You ensure smooth operations so caregivers can focus on patients" },
      { title: "School Administrator", reason: "You create systems supporting teachers and students" },
      { title: "Human Resources Specialist", reason: "You help employees through organized support services" },
      { title: "Patient Advocate", reason: "You navigate healthcare systems on behalf of patients" },
      { title: "Office Manager", reason: "You keep operations running so teams can focus on their work" },
    ],
    superpower: "You serve people through impeccable organization",
    nextSteps: [
      "Develop administrative and organizational skills",
      "Seek support roles in service-oriented organizations",
      "Build reputation for reliable, compassionate service"
    ]
  },

  // E dominant combinations
  "ER": {
    name: "The Builder",
    tagline: "You achieve ambitious goals through hands-on leadership",
    code: "E-R",
    description: "You combine entrepreneurial drive with practical building skills",
    thriveIn: "You thrive leading projects where you can both strategize and execute hands-on. You're energized by building tangible results through direct action and leadership.",
    avoid: "Avoid purely strategic roles without execution, or subordinate positions without authority. You'll burn out without ability to lead and build.",
    careers: [
      { title: "General Contractor", reason: "You lead construction projects from bid to completion" },
      { title: "Restaurant Owner", reason: "You run your business while working in operations" },
      { title: "Real Estate Developer", reason: "You identify opportunities and build properties" },
      { title: "Agricultural Entrepreneur", reason: "You run farming operations as a business" },
      { title: "Automotive Shop Owner", reason: "You manage the business and work on vehicles" },
    ],
    superpower: "You build successful ventures through hands-on leadership",
    nextSteps: [
      "Gain technical expertise in your target industry",
      "Develop business and leadership skills",
      "Start small ventures to build entrepreneurial track record"
    ]
  },

  "EI": {
    name: "The Pioneer",
    tagline: "You lead breakthrough initiatives through vision and analysis",
    code: "E-I",
    description: "You combine strategic ambition with deep analytical insight",
    thriveIn: "You thrive leading innovative initiatives backed by rigorous analysis. You're energized by identifying opportunities through research and driving teams to capitalize on them.",
    avoid: "Avoid operational roles without strategic input, or purely analytical roles without leadership authority. You'll burn out without both insight and impact.",
    careers: [
      { title: "Startup Founder", reason: "You identify market gaps and build companies to fill them" },
      { title: "Venture Capitalist", reason: "You analyze opportunities and lead investment decisions" },
      { title: "Chief Strategy Officer", reason: "You chart organizational direction through insight and vision" },
      { title: "Management Consultant", reason: "You solve complex business problems and lead implementation" },
      { title: "Innovation Director", reason: "You research trends and lead new product development" },
    ],
    superpower: "You see the future and lead others there",
    nextSteps: [
      "Build track record combining analysis with results",
      "Develop both strategic thinking and leadership skills",
      "Seek roles with decision-making authority backed by research"
    ]
  },

  "EA": {
    name: "The Visionary Leader",
    tagline: "You inspire teams to bring bold creative visions to life",
    code: "E-A",
    description: "You combine entrepreneurial ambition with creative innovation",
    thriveIn: "You thrive leading creative ventures where you can both generate original visions and drive teams to market success. You're energized by turning creative ideas into profitable realities.",
    avoid: "Avoid purely operational roles or positions executing others' visions. You'll burn out without creative authority and leadership impact.",
    careers: [
      { title: "Creative Agency CEO", reason: "You build and lead creative businesses to success" },
      { title: "Film Studio Executive", reason: "You greenlight projects and drive them to market" },
      { title: "Design Firm Principal", reason: "You lead design strategy and business development" },
      { title: "Media Entrepreneur", reason: "You create content brands and build audiences" },
      { title: "Innovation Lab Director", reason: "You lead teams developing breakthrough products" },
    ],
    superpower: "You turn creative visions into market-leading ventures",
    nextSteps: [
      "Build portfolio showing creative leadership and business results",
      "Develop both creative vision and commercial acumen",
      "Seek leadership roles in creative industries"
    ]
  },

  "ES": {
    name: "The Motivator",
    tagline: "You inspire people to achieve more than they thought possible",
    code: "E-S",
    description: "You combine leadership drive with genuine care for people's growth",
    thriveIn: "You thrive leading and developing people toward shared goals. You're energized by coaching teams to excellence while building supportive culture.",
    avoid: "Avoid purely technical roles or positions without people leadership. You'll burn out without opportunities to inspire and develop others.",
    careers: [
      { title: "Executive Coach", reason: "You develop leaders to reach their full potential" },
      { title: "Sales Director", reason: "You build and motivate high-performing teams" },
      { title: "Training & Development Director", reason: "You design programs that develop organizational talent" },
      { title: "Athletic Coach", reason: "You push athletes to excellence while building team culture" },
      { title: "Team Lead", reason: "You achieve goals while developing each team member" },
    ],
    superpower: "You bring out the best in everyone around you",
    nextSteps: [
      "Develop coaching and leadership development skills",
      "Seek management roles where culture matters",
      "Build reputation for developing people and driving results"
    ]
  },

  "EC": {
    name: "The Executive",
    tagline: "You build efficient systems that drive measurable results",
    code: "E-C",
    description: "You blend strategic ambition with operational excellence",
    thriveIn: "You thrive in structured business environments where you can optimize systems while driving ambitious goals. You're energized by roles requiring both strategic vision and meticulous execution.",
    avoid: "Avoid highly creative, unstructured roles or positions requiring extensive hands-on technical work. You'll burn out without clear metrics and organizational systems.",
    careers: [
      { title: "Operations Director", reason: "You build systems that scale efficiently" },
      { title: "Management Consultant", reason: "You optimize organizations for strategic success" },
      { title: "Project Manager", reason: "You deliver complex initiatives on time and budget" },
      { title: "Financial Analyst", reason: "You drive business decisions through data-driven insights" },
      { title: "Corporate Controller", reason: "You ensure financial precision while advising leadership" },
    ],
    superpower: "You see both the big picture and the details required to execute flawlessly",
    nextSteps: [
      "Seek management roles in established corporations",
      "Develop expertise in operations, finance, or strategy",
      "Build track record of delivering measurable results"
    ]
  },

  // C dominant combinations
  "CR": {
    name: "The Specialist",
    tagline: "You maintain complex systems with precision and expertise",
    code: "C-R",
    description: "You combine organizational discipline with technical skill",
    thriveIn: "You thrive in technical roles requiring both hands-on expertise and systematic documentation. You're energized by maintaining critical systems through methodical precision.",
    avoid: "Avoid highly social or creative roles, or positions requiring quick decisions without procedures. You'll burn out in unstructured environments.",
    careers: [
      { title: "Aircraft Maintenance Technician", reason: "You ensure safety through systematic inspections and repairs" },
      { title: "Medical Laboratory Technician", reason: "You conduct tests following precise protocols" },
      { title: "Calibration Technician", reason: "You maintain measurement accuracy across equipment" },
      { title: "Quality Assurance Inspector", reason: "You verify products meet exact specifications" },
      { title: "Systems Administrator", reason: "You maintain IT infrastructure with documented procedures" },
    ],
    superpower: "You keep critical systems running through disciplined expertise",
    nextSteps: [
      "Pursue technical certifications requiring precision",
      "Develop both technical and documentation skills",
      "Seek roles in regulated industries valuing accuracy"
    ]
  },

  "CI": {
    name: "The Researcher",
    tagline: "You uncover insights through systematic investigation",
    code: "C-I",
    description: "You combine methodical precision with analytical depth",
    thriveIn: "You thrive in research roles requiring both intellectual rigor and systematic methodology. You're energized by conducting thorough investigations following established protocols.",
    avoid: "Avoid highly social or creative roles, or jobs requiring quick decisions without data. You'll burn out without time for systematic analysis.",
    careers: [
      { title: "Clinical Research Coordinator", reason: "You manage studies following rigorous scientific protocols" },
      { title: "Data Analyst", reason: "You extract insights through systematic data investigation" },
      { title: "Archivist", reason: "You organize and research historical collections methodically" },
      { title: "Quality Assurance Analyst", reason: "You test systems systematically to find issues" },
      { title: "Compliance Officer", reason: "You ensure organizational adherence to regulations" },
    ],
    superpower: "You find truth through methodical investigation",
    nextSteps: [
      "Develop research methodology and analytical skills",
      "Seek positions in research or compliance",
      "Build reputation for thoroughness and accuracy"
    ]
  },

  "CA": {
    name: "The Curator",
    tagline: "You organize beautiful collections with meticulous care",
    code: "C-A",
    description: "You combine aesthetic sensibility with organizational precision",
    thriveIn: "You thrive in roles requiring both creative taste and systematic organization. You're energized by creating order in collections while maintaining artistic integrity.",
    avoid: "Avoid purely creative roles without structure, or purely administrative roles without aesthetic component. You'll burn out without both.",
    careers: [
      { title: "Museum Curator", reason: "You organize and present collections with scholarly precision" },
      { title: "Archival Specialist", reason: "You preserve historical materials using systematic methods" },
      { title: "Library Science Specialist", reason: "You organize information resources with cataloging expertise" },
      { title: "Collection Manager", reason: "You maintain and document art or artifact collections" },
      { title: "Editorial Production Manager", reason: "You ensure publications meet quality standards and deadlines" },
    ],
    superpower: "You bring order to beauty and beauty to order",
    nextSteps: [
      "Pursue specialized education in library or museum science",
      "Develop both organizational and aesthetic judgment",
      "Seek roles in cultural institutions or publishing"
    ]
  },

  "CS": {
    name: "The Coordinator",
    tagline: "You support people through organized, reliable service",
    code: "C-S",
    description: "You combine administrative excellence with genuine care for helping",
    thriveIn: "You thrive in support roles where you help people through efficient systems. You're energized by creating organized processes that make others' work easier.",
    avoid: "Avoid highly creative or unstructured roles, or positions without service to people. You'll burn out without clear procedures and human impact.",
    careers: [
      { title: "Patient Services Coordinator", reason: "You organize healthcare delivery so providers can focus on care" },
      { title: "Academic Advisor", reason: "You guide students through educational requirements systematically" },
      { title: "Event Coordinator", reason: "You plan and execute flawless events that bring people together" },
      { title: "HR Benefits Administrator", reason: "You help employees navigate benefit systems" },
      { title: "Program Coordinator", reason: "You organize social service delivery with care and precision" },
    ],
    superpower: "You serve people through impeccable organization",
    nextSteps: [
      "Develop project management and coordination skills",
      "Seek support roles in service-oriented organizations",
      "Build reputation for reliable, helpful service"
    ]
  },

  "CE": {
    name: "The Manager",
    tagline: "You achieve goals through systematic execution",
    code: "C-E",
    description: "You combine organizational discipline with results-driven leadership",
    thriveIn: "You thrive managing operations where systematic processes drive performance. You're energized by optimizing workflows and holding teams accountable to standards.",
    avoid: "Avoid highly creative or theoretical roles. You'll burn out without clear goals, metrics, and structured systems.",
    careers: [
      { title: "Operations Manager", reason: "You run efficient operations through systematic process management" },
      { title: "Program Manager", reason: "You deliver complex initiatives through structured planning" },
      { title: "Finance Manager", reason: "You manage budgets and financial operations with precision" },
      { title: "Supply Chain Manager", reason: "You optimize logistics through systematic process improvement" },
      { title: "Administrative Director", reason: "You ensure organizational efficiency through structured management" },
    ],
    superpower: "You deliver results through systematic excellence",
    nextSteps: [
      "Develop operational management and leadership skills",
      "Seek management roles in structured organizations",
      "Build track record of process improvement and results"
    ]
  },

  // Special cases
  "MULTI": {
    name: "The Multi-Potentialite",
    tagline: "You thrive at the intersection of multiple interests",
    code: "Multi",
    description: "You have equally strong interests across multiple areas",
    thriveIn: "You thrive in diverse, multifaceted roles allowing you to wear many hats. You're energized by variety and the ability to combine different skill sets in innovative ways.",
    avoid: "Avoid highly specialized roles requiring narrow focus. You'll burn out without variety and opportunities to explore multiple interests.",
    careers: [
      { title: "Entrepreneur", reason: "You build businesses drawing on diverse skills" },
      { title: "Consultant", reason: "You solve varied problems across different domains" },
      { title: "Portfolio Career Professional", reason: "You combine multiple part-time roles matching different interests" },
      { title: "Generalist Manager", reason: "You lead across functions drawing on broad expertise" },
      { title: "Innovation Specialist", reason: "You connect ideas across disciplines to create new solutions" },
    ],
    superpower: "You see connections others miss by spanning multiple domains",
    nextSteps: [
      "Embrace your diverse interests rather than forcing specialization",
      "Seek roles explicitly requiring broad skills",
      "Build portfolio showcasing range of capabilities"
    ]
  },

  "EXPLORER": {
    name: "The Explorer",
    tagline: "You're open to discovering where your interests truly lie",
    code: "Explorer",
    description: "You have balanced interests across all areas, suggesting you're still exploring",
    thriveIn: "You thrive in exploratory roles allowing you to try different types of work. You're energized by variety and discovering what resonates most deeply.",
    avoid: "Avoid highly specialized roles requiring deep commitment before you've explored enough. You'll burn out if locked into one path too early.",
    careers: [
      { title: "Rotational Program Participant", reason: "You experience different roles to find your fit" },
      { title: "Project Coordinator", reason: "You work across functions and learn what engages you" },
      { title: "Temp/Contract Worker", reason: "You try various roles and industries to discover preferences" },
      { title: "Apprentice", reason: "You learn trades and skills while discovering your direction" },
      { title: "Gap Year Volunteer", reason: "You gain exposure to different types of meaningful work" },
    ],
    superpower: "You approach career with curiosity rather than premature commitment",
    nextSteps: [
      "Try diverse experiences through volunteering, internships, or job shadowing",
      "Reflect on which activities energize vs. drain you",
      "Give yourself permission to explore before specializing"
    ]
  }
};
