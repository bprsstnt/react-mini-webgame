import React, {useState} from 'react';
import Attempt from './Attempt';

const getNumbers = () => {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i=0; i<4; ++i) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }

    return array;
};

const NumberBaseball = (props) => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers);
    const [attempt, setAttempt] = useState([]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(value === answer.join('')) {
            setResult('Homerun!');
            setAttempt([...attempt, {
                try: value,
                result: 'Homerun!',
                value: ''
            }]);
            setValue('');
            setAnswer(getNumbers());
            setAttempt([]);
        } else {
            const answerArray = value.split('').map(v => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(attempt.length >= 9) {
                setResult(`Game over! The answer was ${answer.join(',')}`);
                setValue('');
                setAnswer(getNumbers());
                setAttempt([]);
            } else {
                for(let i=0; i<4; ++i) {
                    if(answerArray[i] === answer[i]) {
                        ++strike;
                    } else if (answer.includes(answerArray[i])) {
                        ++ball;
                    }
                }
                
                setAttempt([...attempt, {
                    try: value,
                    result: `${strike} strike(s) ${ball} ball(s).`,
                    value: ''
                }]);
            }
        }
    };

    const onChangeHandler = (e) => {
        setResult('');
        console.log(answer);
        setValue(e.target.value);
    };


    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitHandler}>
                <input maxLength={4} value={value} onChange={onChangeHandler}/>
                <button type='submit'>Submit</button>
            </form>
            <div>Attempt: {attempt.length}</div>

            <ul>
                {attempt.map((v, i) => <Attempt key={`${i + 1}`} attemptInfo={v} index={i}/>)}
            </ul>
        </>
    )
}

export default NumberBaseball;