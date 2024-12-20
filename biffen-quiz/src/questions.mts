// Defination for questions
export interface IQuestion {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: string;
  }
  
  // Array for questions
  const quizQuestions: IQuestion[] = [
    {
      id: 0,
      question: "Vilket år föddes Biffen?",
      answers: ["2022", "2023", "2024"],
      correctAnswer: "2023"
    },
    {
      id: 1,
      question: "Vilket stjärntecken är Biffen?",
      answers: ["Vattumannen", "Oxen", "Stenbocken"],
      correctAnswer: "Vattumannen"
    },
    {
      id: 2,
      question: "I vilken skånsk ort föddes Biffen?",
      answers: ["Hofterup", "Veberöd", "Kävlinge"],
      correctAnswer: "Kävlinge"
    },
    {
      id: 3,
      question: "Vilken ras är Biffen?",
      answers: ["Staffordshire Bullterrier", "American Staffordshire Bullterrier", "Miniatyr Bullterrier"],
      correctAnswer: "Staffordshire Bullterrier"
    },
    {
      id: 4,
      question: "Vad är Biffens favoritsnacks?",
      answers: ["Chips", "Spraygrädde", "Yoghurt"],
      correctAnswer: "Spraygrädde"
    },
    {
      id: 5,
      question: "Hur många syskon har Biffen?",
      answers: ["1", "3", "5"],
      correctAnswer: "3"
    },
    {
      id: 6,
      question: "Vilket djur kallas Biffen för?",
      answers: ["Grisen", "Katten", "Kossan"],
      correctAnswer: "Grisen"
    },
    {
      id: 7,
      question: "Vilken stadsdel känner Biffen sig hemma i?",
      answers: ["Möllan", "Limhamn", "Seved"],
      correctAnswer: "Seved"
    },
    {
      id: 8,
      question: "Vilket tricks kan Biffen?",
      answers: ["Sitta fint", "Snurra", "Spela död"],
      correctAnswer: "Snurra"
  },
    {
      id: 9,
      question: "Vad heter Biffens mini-matte?",
      answers: ["Saga", "Marre", "Moa"],
      correctAnswer: "Saga"
    },
    {
      id: 10,
      question: "Åh nej! Biffen leker dragkamp med något han inte får! Vad ska du säga för att han ska släppa?",
      answers: ["Tack", "Loss", "Släpp"],
      correctAnswer: "Tack"
    },
    {
      id: 11,
      question: "Vad tycker Biffen om regn?",
      answers: ["Nej tack", "Helt ok", "Tveksam"],
      correctAnswer: "Nej tack"
    },
    {
      id: 12,
      question: "Vad hjälper Biffen gärna till att tvätta?",
      answers: ["Händer", "Fötter", "Tvätten"],
      correctAnswer: "Fötter"
    },
    {
      id: 13,
      question: "Vem juckar Biffen helst på?",
      answers: ["Alla", "Maria", "Astro"],
      correctAnswer: "Astro"
    },
    {
      id: 14,
      question: "Vad heter Biffens bästa gosedjur?",
      answers: ["Grisen", "Blåbäret", "Räven"],
      correctAnswer: "Grisen"
    },
    {
      id: 15,
      question: "Vad är den bästa leksaken?",
      answers: ["Pinne", "Tuggben", "Boll"],
      correctAnswer: "Boll"
    },
    {
      id: 16,
      question: "Vad tycker Biffen om att åka bil?",
      answers: ["Hemskt men görbart", "Vidrigt och inte okej", "Kul och spännande"],
      correctAnswer: "Hemskt men görbart"
    },
    {
      id: 17,
      question: "Vad är Biffens riktiga namn?",
      answers: ["Ultimate Navy's Xander", "Ultimate Navy's Xi Gemini", "Ultimate Navy's Xanté Poire"],
      correctAnswer: "Ultimate Navy's Xi Gemini"
    },
    {
      id: 18,
      question: "Vad är det värsta man kan göra mot Biffen?",
      answers: ["Ignorera honom", "Skratta åt honom", "Sluta klappa honom"],
      correctAnswer: "Ignorera honom"
    },
    {
      id: 19,
      question: "Vad tycker Biffen om sin hundkoja?",
      answers: ["Fruktansvärd", "Supermysig", "Nästan helt värdelös"],
      correctAnswer: "Nästan helt värdelös"
    }
  ];
  
  export default quizQuestions;