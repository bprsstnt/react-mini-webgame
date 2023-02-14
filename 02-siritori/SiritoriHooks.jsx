import React, {useState, useRef} from 'react';

const SiritoriHooks = () => {
    const [word, setWord] = useState('カメラ');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let x = word.charCodeAt(word.length-1) - value.charCodeAt(0);
        let isSame = Math.abs(x) == 0 ? true : Math.abs(x) == 96 ? true : false;
        console.log(isSame);
        if(isSame) {
            console.log(`${value}  ${value.length-1}  ${value[value.length-1]}`)
            if(value[value.length-1] === 'ん' || value[value.length-1] === 'ン') {
                setWord('');
                setValue('');
                setResult("はい、負けー！ お疲れです。Refreshして!");
            } else {
                setWord(value);
                setValue('');
                setResult('オッケー！')
                inputRef.current.focus();
            }
        } else {
            setValue('');
            setResult('違う!');
            inputRef.current.focus();
        }
    };

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitHandler}>
                <input ref={inputRef} value={value} onChange={onChangeHandler} />
                <button>入力</button>
            </form>
            <div>{result}</div>
        </>
    )
}

export default SiritoriHooks;