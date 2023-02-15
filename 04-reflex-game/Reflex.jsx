import React, {useState, useRef} from 'react';


const Reflex = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('Click to begin.');
    const [result, setResult] = useState([]);
    const startTime = useRef();
    const endTime = useRef();
    const timeout = useRef(null);

    const onClickScreenHandler = (e) => {
        if(state === 'waiting') {
            setState('ready');
            setMessage('Click when you see Green');
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('Click NOW');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);

        } else if (state === 'ready') {
            setState('waiting');
            setMessage("Too fast. You got disqualified.");
            clearTimeout(timeout.current);
        } else if (state === 'now') {
            endTime.current = new Date();

            setState('waiting');
            setMessage('Click to begin.')
            setResult([...result, endTime.current - startTime.current])
        }
    }

    const onClickResetHandler = () => {
        setResult([]);
    }

    const renderAverageSpeed = () => {
        return result.length !== 0 && (
            <>
                <div>
                    Average Time: {result.reduce((a, c) => a + c) / result.length}ms
                </div>
                <button onClick={onClickResetHandler}>Reset</button>
                <ol>
                    {result.map((x, i) => <li key={x+i}>{x}ms</li>)}
                </ol>
            </>
        )
    }

    return (
        <>
        <div id="screen" className={state} onClick={onClickScreenHandler}>
            {message}
        </div>
        {renderAverageSpeed()}
        </>
    )
}

export default Reflex;