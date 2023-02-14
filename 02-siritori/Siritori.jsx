import React from 'react';

class Siritori extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            word: "カメラ",
            value: '',
            result: '',
        }
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        let x = this.state.word.charCodeAt(this.state.word.length-1) - this.state.value.charCodeAt(0);
        let isSame = Math.abs(x) == 0 ? true : Math.abs(x) == 96 ? true : false;
        if(isSame) {
            if(this.state.value[this.state.value.length-1] === 'ん' || this.state.value[this.state.value.length-1] === 'ン') {
                this.setState({
                    word: '',
                    value: '',
                    result: "はい、負けー！ お疲れです。Refreshして!"
                })
            } else {
                this.setState((prev) => ({
                    word: prev.value,
                    value: '',
                    result: "オッケー！",
                }))
                this.input.focus();
            }
        } else {
            this.setState({
                value: '',
                result: "違う！"
            })
            this.input.focus();
        }
    };

    onChangeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    onRefInput = (c) => {
        this.input = c;
    }

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitHandler}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeHandler} />
                    <button>入力</button>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }
}

export default Siritori;