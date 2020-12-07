import React from 'react'
import ReactDOM from 'react-dom'
import FP from './FirstPage'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {apiResponse: ""};
    }

    callAPI () {
        fetch("http://localhost:4000/")
        .then(res=> res.text())
        .catch(err => err)
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <FP />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);



