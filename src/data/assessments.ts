import { Question } from "@/components/TestInterface";

export const upscQuestions: Question[] = [
  {
    id: 1,
    text: "Which of the following is NOT a Fundamental Right under the Indian Constitution?",
    options: [
      "Right to Equality",
      "Right to Freedom",
      "Right to Property",
      "Right against Exploitation",
    ],
    correctAnswer: 2,
    explanation:
      "The Right to Property was removed from Fundamental Rights by the 44th Amendment Act, 1978, and made a constitutional right under Article 300A.",
    difficulty: "medium",
    subject: "Polity",
    marks: 2,
  },
  {
    id: 2,
    text: "The Tropic of Cancer does NOT pass through which of the following Indian states?",
    options: ["Gujarat", "Rajasthan", "Chhattisgarh", "Odisha"],
    correctAnswer: 3,
    explanation:
      "The Tropic of Cancer passes through Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. It does not pass through Odisha.",
    difficulty: "easy",
    subject: "Geography",
    marks: 2,
  },
  {
    id: 3,
    text: "Who was the first woman President of the Indian National Congress?",
    options: ["Annie Besant", "Sarojini Naidu", "Vijaya Lakshmi Pandit", "Indira Gandhi"],
    correctAnswer: 0,
    explanation:
      "Annie Besant became the first woman President of the Indian National Congress in 1917.",
    difficulty: "medium",
    subject: "History",
    marks: 2,
  },
  {
    id: 4,
    text: "Which Article of the Indian Constitution deals with the Amendment procedure?",
    options: ["Article 352", "Article 356", "Article 360", "Article 368"],
    correctAnswer: 3,
    explanation:
      "Article 368 of the Indian Constitution deals with the power of Parliament to amend the Constitution and the procedure for amendment.",
    difficulty: "medium",
    subject: "Polity",
    marks: 2,
  },
  {
    id: 5,
    text: "The 'Grand Trunk Road' was built by?",
    options: ["Akbar", "Babur", "Sher Shah Suri", "Humayun"],
    correctAnswer: 2,
    explanation:
      "The Grand Trunk Road was built by Sher Shah Suri. It connected Bengal to Afghanistan.",
    difficulty: "easy",
    subject: "History",
    marks: 2,
  },
  {
    id: 6,
    text: "Which among the following is a Kharif crop?",
    options: ["Wheat", "Mustard", "Rice", "Barley"],
    correctAnswer: 2,
    explanation:
      "Rice is a Kharif crop, sown in the monsoon season (June-July) and harvested in September-October. Wheat, Mustard, and Barley are Rabi crops.",
    difficulty: "easy",
    subject: "Geography",
    marks: 2,
  },
  {
    id: 7,
    text: "The concept of 'Judicial Review' in the Indian Constitution has been borrowed from?",
    options: ["USA", "UK", "Ireland", "Canada"],
    correctAnswer: 0,
    explanation:
      "The concept of Judicial Review has been borrowed from the United States Constitution.",
    difficulty: "medium",
    subject: "Polity",
    marks: 2,
  },
  {
    id: 8,
    text: "Which Gas is primarily responsible for the greenhouse effect?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: 2,
    explanation:
      "Carbon Dioxide (CO2) is the primary greenhouse gas responsible for trapping heat in Earth's atmosphere.",
    difficulty: "easy",
    subject: "Environment",
    marks: 2,
  },
  {
    id: 9,
    text: "The famous 'Chipko Movement' originated in which state?",
    options: ["Uttarakhand", "Himachal Pradesh", "Sikkim", "Assam"],
    correctAnswer: 0,
    explanation:
      "The Chipko Movement originated in Uttarakhand (then Uttar Pradesh) in 1973 to protect trees from deforestation.",
    difficulty: "medium",
    subject: "Environment",
    marks: 2,
  },
  {
    id: 10,
    text: "Who was the founder of the Maurya Empire?",
    options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
    correctAnswer: 1,
    explanation:
      "Chandragupta Maurya founded the Maurya Empire around 321 BCE with the help of Chanakya.",
    difficulty: "easy",
    subject: "History",
    marks: 2,
  },
];

export const catQuestions: Question[] = [
  {
    id: 1,
    text: "If 2x + 3y = 12 and 3x + 2y = 13, what is the value of x + y?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation:
      "Adding both equations: 5x + 5y = 25, therefore x + y = 5.",
    difficulty: "medium",
    subject: "Quantitative Aptitude",
    marks: 3,
  },
  {
    id: 2,
    text: "A train travels at 60 km/hr for the first 2 hours and 80 km/hr for the next 3 hours. What is the average speed?",
    options: ["68 km/hr", "70 km/hr", "72 km/hr", "75 km/hr"],
    correctAnswer: 2,
    explanation:
      "Total distance = (60×2) + (80×3) = 360 km. Total time = 5 hours. Average speed = 360/5 = 72 km/hr.",
    difficulty: "medium",
    subject: "Quantitative Aptitude",
    marks: 3,
  },
  {
    id: 3,
    text: "Choose the word most opposite in meaning to 'METICULOUS':",
    options: ["Careful", "Careless", "Precise", "Thorough"],
    correctAnswer: 1,
    explanation:
      "Meticulous means extremely careful and precise. The opposite is Careless.",
    difficulty: "easy",
    subject: "Verbal Ability",
    marks: 3,
  },
  {
    id: 4,
    text: "If the ratio of boys to girls in a class is 3:2 and there are 15 boys, how many students are there in total?",
    options: ["20", "25", "30", "35"],
    correctAnswer: 1,
    explanation:
      "If boys are 3 parts = 15, then 1 part = 5. Girls = 2 parts = 10. Total = 25.",
    difficulty: "easy",
    subject: "Quantitative Aptitude",
    marks: 3,
  },
  {
    id: 5,
    text: "A company's profit increased from 20 lakhs to 30 lakhs. What is the percentage increase?",
    options: ["40%", "50%", "60%", "75%"],
    correctAnswer: 1,
    explanation:
      "Increase = 10 lakhs. Percentage = (10/20) × 100 = 50%.",
    difficulty: "easy",
    subject: "Quantitative Aptitude",
    marks: 3,
  },
  {
    id: 6,
    text: "Complete the series: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    correctAnswer: 1,
    explanation:
      "The differences are 4, 6, 8, 10, 12... Next number = 30 + 12 = 42.",
    difficulty: "medium",
    subject: "Logical Reasoning",
    marks: 3,
  },
  {
    id: 7,
    text: "Choose the correctly spelt word:",
    options: ["Accomodation", "Accommodation", "Acommodation", "Acomodation"],
    correctAnswer: 1,
    explanation:
      "The correct spelling is 'Accommodation' with two 'c's and two 'm's.",
    difficulty: "easy",
    subject: "Verbal Ability",
    marks: 3,
  },
  {
    id: 8,
    text: "A sum of money doubles itself in 8 years at simple interest. What is the rate of interest?",
    options: ["10%", "12.5%", "15%", "20%"],
    correctAnswer: 1,
    explanation:
      "If principal = P, then interest = P in 8 years. Rate = (P × 100)/(P × 8) = 12.5%.",
    difficulty: "hard",
    subject: "Quantitative Aptitude",
    marks: 3,
  },
  {
    id: 9,
    text: "If all roses are flowers and some flowers are red, which conclusion is definitely true?",
    options: [
      "All roses are red",
      "Some roses are red",
      "All flowers are roses",
      "None of the above",
    ],
    correctAnswer: 3,
    explanation:
      "None of the conclusions can be definitely drawn from the given statements.",
    difficulty: "hard",
    subject: "Logical Reasoning",
    marks: 3,
  },
  {
    id: 10,
    text: "The area of a circle is 154 sq cm. What is its circumference? (Use π = 22/7)",
    options: ["44 cm", "48 cm", "52 cm", "56 cm"],
    correctAnswer: 0,
    explanation:
      "πr² = 154, so r² = 49, r = 7. Circumference = 2πr = 2 × (22/7) × 7 = 44 cm.",
    difficulty: "medium",
    subject: "Quantitative Aptitude",
    marks: 3,
  },
];

export const gateQuestions: Question[] = [
  {
    id: 1,
    text: "What is the time complexity of binary search algorithm?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
    correctAnswer: 1,
    explanation:
      "Binary search divides the search space in half with each iteration, resulting in O(log n) time complexity.",
    difficulty: "easy",
    subject: "Data Structures",
    marks: 1,
  },
  {
    id: 2,
    text: "Which data structure uses LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation:
      "Stack follows LIFO principle where the last element inserted is the first to be removed.",
    difficulty: "easy",
    subject: "Data Structures",
    marks: 1,
  },
  {
    id: 3,
    text: "In a B-Tree of order m, what is the maximum number of children a node can have?",
    options: ["m", "m-1", "m+1", "2m"],
    correctAnswer: 0,
    explanation:
      "In a B-Tree of order m, a node can have at most m children.",
    difficulty: "medium",
    subject: "Data Structures",
    marks: 2,
  },
  {
    id: 4,
    text: "Which scheduling algorithm can cause starvation?",
    options: ["FCFS", "Round Robin", "Priority Scheduling", "SJF"],
    correctAnswer: 2,
    explanation:
      "Priority Scheduling can cause starvation as low-priority processes may never get CPU time if high-priority processes keep arriving.",
    difficulty: "medium",
    subject: "Operating Systems",
    marks: 2,
  },
  {
    id: 5,
    text: "What is the purpose of the 'volatile' keyword in C?",
    options: [
      "To declare a constant",
      "To prevent compiler optimization",
      "To allocate dynamic memory",
      "To declare a pointer",
    ],
    correctAnswer: 1,
    explanation:
      "The 'volatile' keyword tells the compiler not to optimize the variable as its value may change unexpectedly.",
    difficulty: "medium",
    subject: "Programming",
    marks: 2,
  },
  {
    id: 6,
    text: "In a relation R(A,B,C,D), if A→B and B→C, then A→C is an example of:",
    options: [
      "Reflexive Rule",
      "Augmentation Rule",
      "Transitivity Rule",
      "Decomposition Rule",
    ],
    correctAnswer: 2,
    explanation:
      "This is the Transitivity Rule in functional dependencies: If X→Y and Y→Z, then X→Z.",
    difficulty: "medium",
    subject: "Database Systems",
    marks: 2,
  },
  {
    id: 7,
    text: "The Boolean expression (A + B)(A + C) simplifies to:",
    options: ["A + BC", "A + B + C", "ABC", "A(B + C)"],
    correctAnswer: 0,
    explanation:
      "Using distributive law: (A + B)(A + C) = A + AC + AB + BC = A(1 + C + B) + BC = A + BC.",
    difficulty: "hard",
    subject: "Digital Logic",
    marks: 2,
  },
  {
    id: 8,
    text: "What is the maximum number of edges in a complete undirected graph with n vertices?",
    options: ["n", "n-1", "n(n-1)", "n(n-1)/2"],
    correctAnswer: 3,
    explanation:
      "In a complete undirected graph, each vertex connects to every other vertex. Total edges = nC2 = n(n-1)/2.",
    difficulty: "medium",
    subject: "Graph Theory",
    marks: 2,
  },
  {
    id: 9,
    text: "Which of the following is NOT a valid IP address class?",
    options: ["Class A", "Class D", "Class E", "Class F"],
    correctAnswer: 3,
    explanation:
      "IP addresses are divided into Classes A, B, C, D, and E. There is no Class F.",
    difficulty: "easy",
    subject: "Computer Networks",
    marks: 1,
  },
  {
    id: 10,
    text: "The minimum number of comparisons required to find the minimum and maximum of n numbers is:",
    options: ["n", "2n", "3n/2", "2n-2"],
    correctAnswer: 2,
    explanation:
      "By comparing elements in pairs and then comparing max of pair with current max and min of pair with current min, we need 3n/2 - 2 comparisons.",
    difficulty: "hard",
    subject: "Algorithms",
    marks: 2,
  },
];

export const sscQuestions: Question[] = [
  {
    id: 1,
    text: "The HCF of 18 and 24 is:",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    explanation:
      "Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. Highest common factor = 6.",
    difficulty: "easy",
    subject: "Mathematics",
    marks: 2,
  },
  {
    id: 2,
    text: "If 30% of a number is 90, what is the number?",
    options: ["200", "250", "300", "350"],
    correctAnswer: 2,
    explanation:
      "Let the number be x. Then 30% of x = 90, so (30/100) × x = 90, x = 300.",
    difficulty: "easy",
    subject: "Mathematics",
    marks: 2,
  },
  {
    id: 3,
    text: "The smallest number by which 392 must be multiplied to make it a perfect square is:",
    options: ["2", "3", "5", "7"],
    correctAnswer: 0,
    explanation:
      "392 = 2³ × 7². To make it a perfect square, we need one more 2. So multiply by 2.",
    difficulty: "medium",
    subject: "Mathematics",
    marks: 2,
  },
  {
    id: 4,
    text: "Who was the first Indian to win a Nobel Prize?",
    options: [
      "C.V. Raman",
      "Rabindranath Tagore",
      "Mother Teresa",
      "Amartya Sen",
    ],
    correctAnswer: 1,
    explanation:
      "Rabindranath Tagore won the Nobel Prize in Literature in 1913, becoming the first Indian Nobel laureate.",
    difficulty: "easy",
    subject: "General Awareness",
    marks: 2,
  },
  {
    id: 5,
    text: "Choose the synonym of 'ABUNDANT':",
    options: ["Scarce", "Plentiful", "Rare", "Limited"],
    correctAnswer: 1,
    explanation:
      "Abundant means existing in large quantities. The synonym is Plentiful.",
    difficulty: "easy",
    subject: "English",
    marks: 2,
  },
  {
    id: 6,
    text: "If A is the father of B, but B is not the son of A, what is B to A?",
    options: ["Nephew", "Daughter", "Niece", "Son-in-law"],
    correctAnswer: 1,
    explanation:
      "If A is the father of B but B is not the son, then B must be the daughter of A.",
    difficulty: "easy",
    subject: "Reasoning",
    marks: 2,
  },
  {
    id: 7,
    text: "The capital of Australia is:",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: 2,
    explanation:
      "Canberra is the capital city of Australia, chosen as a compromise between Sydney and Melbourne.",
    difficulty: "easy",
    subject: "General Awareness",
    marks: 2,
  },
  {
    id: 8,
    text: "A man can row 6 km/hr in still water. If the river flows at 2 km/hr, what is his speed downstream?",
    options: ["4 km/hr", "6 km/hr", "8 km/hr", "10 km/hr"],
    correctAnswer: 2,
    explanation:
      "Speed downstream = Speed in still water + Speed of river = 6 + 2 = 8 km/hr.",
    difficulty: "easy",
    subject: "Mathematics",
    marks: 2,
  },
  {
    id: 9,
    text: "Find the odd one out: Dog, Cat, Cow, Lion",
    options: ["Dog", "Cat", "Cow", "Lion"],
    correctAnswer: 2,
    explanation:
      "Cow is a domestic herbivore, while Dog, Cat, and Lion are carnivores.",
    difficulty: "easy",
    subject: "Reasoning",
    marks: 2,
  },
  {
    id: 10,
    text: "The Battle of Plassey was fought in which year?",
    options: ["1757", "1764", "1857", "1947"],
    correctAnswer: 0,
    explanation:
      "The Battle of Plassey was fought on 23 June 1757 between the British East India Company and the Nawab of Bengal.",
    difficulty: "medium",
    subject: "General Awareness",
    marks: 2,
  },
];
