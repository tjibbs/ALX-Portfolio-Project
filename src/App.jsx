import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which verse of the Quran was the first to be revealed?",
      answers: [
        {
          text: "Surah Al-Baqarah vs 210",
          correct: false,
        },
        {
          text: "Surah Al-Baqarah vs 281",
          correct: true,
        },
        {
          text: "Surah Al-Baqarah vs 285",
          correct: false,
        },
        {
          text: "Surah Nas",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Another name of the Quran is",
      answers: [
        {
          text: "Al-Shifa",
          correct: true,
        },
        {
          text: "Al-Basit",
          correct: false,
        },
        {
          text: "Al-Wadud",
          correct: false,
        },
        {
          text: "Al-Khafid",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which of the following does Allah say the Quran gives us?",
      answers: [
        {
          text: "Life",
          correct: false,
        },
        {
          text: "Faith",
          correct: false,
        },
        {
          text: "Money",
          correct: false,
        },
        {
          text: "Hope",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the fourth of the rightly-guided Caliph after the life of Prophet Muhammad (PBUH)?",
      answers: [
        {
          text: "Uthman Bin Affan",
          correct: false,
        },
        {
          text: "Ali Bin Abu Talib",
          correct: true,
        },
        {
          text: "Omar Bin Al-Khattab",
          correct: false,
        },
        {
          text: "Abu Bakr Al-Siddiq",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the companions was a paternal uncle of the Prophet, and was considered as a strong personality both in character and in physique?",
      answers: [
        {
          text: "Hamzah lbn Abdul Muttalib",
          correct: true,
        },
        {
          text: "Abdul Muttalib",
          correct: false,
        },
        {
          text: "Abu Talib",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What does Islam state about equality in justice?",
      answers: [
        {
          text: "Islam prescribes to render justice to friends and foes alike, in a just manner",
          correct: false,
        },
        {
          text: "Islam mentions that the hatred between people should not influence justice",
          correct: false,
        },
        {
          text: "Islam forbids injustice in all means",
          correct: false,
        },
        {
          text: "All the above",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "What is the Islamic concept for the community consensus called?",
      answers: [
        {
          text: "Aashura",
          correct: false,
        },
        {
          text: "Ijma",
          correct: true,
        },
        {
          text: "There is no consensus required",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Does Islam permit the free practice of other religions and religious tolerance?",
      answers: [
        {
          text: "Other religions cannot be practised in an Islamic State",
          correct: false,
        },
        {
          text: "There is no religious harmony in Islam",
          correct: false,
        },
        {
          text: "Islam permits religious harmony, freedom and religious tolerance",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the first right of the wife?",
      answers: [
        {
          text: "Mahr (obligatory dowry) from husband to wife is considered as the first right of the wife",
          correct: true,
        },
        {
          text: "Shelter is the first right of the wife",
          correct: false,
        },
        {
          text: "Feeding is the first right of the wife",
          correct: false,
        },
        {
          text: "All of the above",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who are mentioned as garments for one another in the Quran?",
      answers: [
        {
          text: "The father is the garment for a daughter",
          correct: false,
        },
        {
          text: "The mother is the garment for a daughter",
          correct: false,
        },
        {
          text: "Daughters are garments for parents",
          correct: false,
        },
        {
          text: "The husband is the garment for the wife and the wife a garment for the husband",
          correct: true,
        },
      ],
    },
  ];
  

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
