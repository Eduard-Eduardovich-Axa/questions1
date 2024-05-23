import React,{ useState }  from 'react';

// масив загадок и возможных ответов на них
const Item = () => {
  const riddles = [
    {
      id: 1,
      description: 'Висит груша - нельзя скушать.',
      option1: 'Лампа',
      option2: 'Груша',
      option3: 'грушА',
      option4: 'ГрУшА',
      correct: 1
    },
    {
      id: 2,
      description: 'Сидит в ложке свесив ножки.',
      option1: 'Сторож',
      option2: 'Лапша',
      option3: 'Муха',
      option4: 'Суп',
      correct: 4
    },
    {
      id: 3,
      description: '2+2=?.',
      option1: '1',
      option2: '3',
      option3: '4',
      option4: '5',
      correct: 4
    },
    {
      id: 4,
      description: 'Что всегда идет, а с места не сойдет',
      option1: 'Машина',
      option2: 'Часы',
      option3: 'Бегун',
      option4: 'Работа',
      correct: 2
    },
    {
      id: 5,
      description: 'Течет-течет —Не вытечет,Бежит-бежит —Не выбежит.',
      option1: 'Дерево',
      option2: 'Слезы',
      option3: 'Река', 
      option4: 'Дождь',
      correct: 3
    }
  ];
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerSelection = (riddleId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [riddleId]: answer,
    }));
  };
  //проверка ответов(сравнивание correct с выбором пользователя по id)
  return (
    <div>
      {riddles.map((riddle) => {
        const userAnswer = userAnswers[riddle.id];
        const isCorrect = userAnswer === riddle.correct;
        const feedback = isCorrect ? 'Правильный ответ!' : 'Вы ответили неправильно';

        //рендеринг страници
        return (
          <div key={riddle.id} className="riddle-container">
            <h3 className="riddle-description">{riddle.description} </h3>
            <ol className="answer-options"  >
              <li>
                <button className="answer-button"
                onClick={() => handleAnswerSelection(riddle.id, 1)}>
                  {riddle.option1}
                </button>
              </li>
              <li>
                <button className="answer-button"
                onClick={() => handleAnswerSelection(riddle.id, 2)}>
                  {riddle.option2}
                </button>
              </li>
              <li>
                <button className="answer-button"
                onClick={() => handleAnswerSelection(riddle.id, 3)}>
                  {riddle.option3}
                </button>
              </li>
              <li>
                <button className="answer-button"
                onClick={() => handleAnswerSelection(riddle.id, 4)}>
                  {riddle.option4}
                </button>
              </li>
            </ol>
            {userAnswer && <p className="feedback">{feedback}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Item;