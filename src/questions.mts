// Defination for questions
export interface IQuestion {
    id: number;
    expo?: string;
    question: string;
    answers: string[];
    correctAnswer: string;
  }
  
  // Array for questions
  const quizQuestions: IQuestion[] = [
    {
      id: 0,
      expo: "Historiska händelser bör hanteras med respekt.",
      question: "Vilket år föddes Biffen?",
      answers: ["2022", "2023", "2024"],
      correctAnswer: "2023",
    },
    {
      id: 1,
      expo: "Astrologi är viktigt och vetenskapligt och säger mycket om en person.",
      question: "Vilket stjärntecken är Biffen?",
      answers: ["Vattumannen", "Oxen", "Stenbocken"],
      correctAnswer: "Vattumannen"
    },
    {
      id: 2,
      expo: "Stora hjältar kan ha småstadsrötter.",
      question: "I vilken skånsk ort föddes Biffen?",
      answers: ["Hofterup", "Veberöd", "Kävlinge"],
      correctAnswer: "Kävlinge"
    },
    {
      id: 3,
      expo: "Det där gulliga trynet känner man igen!",
      question: "Vilken ras är Biffen?",
      answers: ["Staffordshire Bullterrier", "American Staffordshire Bullterrier", "Miniatyr Bullterrier"],
      correctAnswer: "Staffordshire Bullterrier"
    },
    {
      id: 4,
      expo: "Det finns mycket som är gott, speciellt människomat.",
      question: "Vad är Biffens favoritsnacks?",
      answers: ["Chips", "Spraygrädde", "Yoghurt"],
      correctAnswer: "Spraygrädde"
    },
    {
      id: 5,
      expo: "Det finns fler!",
      question: "Hur många syskon har Biffen?",
      answers: ["1", "3", "5"],
      correctAnswer: "3"
    },
    {
      id: 6,
      expo: "Detta är självförklarande.",
      question: "Vilket djur kallas Biffen för?",
      answers: ["Grisen", "Katten", "Kossan"],
      correctAnswer: "Grisen"
    },
    {
      id: 7,
      expo: "Världen är stor men Biffen är liten.",
      question: "Vilken stadsdel känner Biffen sig hemma i?",
      answers: ["Möllan", "Limhamn", "Seved"],
      correctAnswer: "Seved"
    },
    {
      id: 8,
      expo: "Han är en cirkushund, helt klart!",
      question: "Vilket tricks kan Biffen?",
      answers: ["Sitta fint", "Snurra", "Spela död"],
      correctAnswer: "Snurra"
  },
    {
      id: 9,
      expo: "Världens bästa mini-matte!",
      question: "Vad heter Biffens mini-matte?",
      answers: ["Saga", "Marre", "Moa"],
      correctAnswer: "Saga"
    },
    {
      id: 10,
      expo: "Åh nej, Biffen leker med nåt han inte ska! Biffen, tack... Tack... TACK!!!",
      question: "Vilket kommando gör så han släpper något?",
      answers: ["Tack", "Loss", "Släpp"],
      correctAnswer: "Tack"
    },
    {
      id: 11,
      expo: "Han kommer eventuella vägra att gå ut genom dörren.",
      question: "Vad tycker Biffen om regn?",
      answers: ["Nej tack", "Helt ok", "Tveksam"],
      correctAnswer: "Nej tack"
    },
    {
      id: 12,
      expo: "Världens hjälpsammaste hund drar såklart gärna sitt strå till stacken.",
      question: "Vad hjälper Biffen gärna till att tvätta?",
      answers: ["Händer", "Fötter", "Tvätten"],
      correctAnswer: "Fötter"
    },
    {
      id: 13,
      expo: "Biffen bad oss att ta bort den här frågan. Denied.",
      question: "Vem juckar Biffen helst på?",
      answers: ["Alla", "Maria", "Astro"],
      correctAnswer: "Astro"
    },
    {
      id: 14,
      expo: "Lika barn leka bäst.",
      question: "Vad heter Biffens bästa gosedjur?",
      answers: ["Grisen", "Blåbäret", "Räven"],
      correctAnswer: "Grisen"
    },
    {
      id: 15,
      expo: "Boll? Boll??? BOLL??? BOLL BOLL BOLL BOLL BOLL!!!",
      question: "Vad är den bästa leksaken?",
      answers: ["Pinne", "Tuggben", "Boll"],
      correctAnswer: "Boll"
    },
    {
      id: 16,
      expo: "Brum brum, dags för äventyr!",
      question: "Vad tycker Biffen om att åka bil?",
      answers: ["Hemskt men görbart", "Vidrigt och inte okej", "Kul och spännande"],
      correctAnswer: "Hemskt men görbart"
    },
    {
      id: 17,
      expo: "Tycker Biffen passar bättre faktiskt.",
      question: "Vad är Biffens riktiga namn?",
      answers: ["Ultimate Navy's Xander", "Ultimate Navy's Xi Gemini", "Ultimate Navy's Xanté Poire"],
      correctAnswer: "Ultimate Navy's Xi Gemini"
    },
    {
      id: 18,
      expo: "Hallå!!! Titta på mig då!!!",
      question: "Vad är det värsta man kan göra mot Biffen?",
      answers: ["Ignorera honom", "Skratta åt honom", "Sluta klappa honom"],
      correctAnswer: "Ignorera honom"
    },
    {
      id: 19,
      expo: "Duger när krisen eller kriget kommer.",
      question: "Vad tycker Biffen om sin hundkoja?",
      answers: ["Fruktansvärd", "Supermysig", "Nästan helt värdelös"],
      correctAnswer: "Nästan helt värdelös"
    }
  ];
  
  export default quizQuestions;