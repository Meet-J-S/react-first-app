import React from 'react';
import PokeBall from '../images/pokeball.png';
import '../styles/App.scss';
import Home from './Home';
import Button from 'react-bootstrap/Button';
import {} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Meet'
        };
    }

    componentDidMount() {
        // alert(JSON.stringify(this.props));
        localStorage.setItem('a',5);
    }

    changeToUpperCase = (name) => {
        return name.toUpperCase();
    };

    goToHome = () => {
        this.props.history.push("/home");
    };

    toListPage = () => {
        this.props.history.push("/list");
    };

    render() {

        const {name} = this.state;

        return (
            <div className="App">
                <header className="section-1">
                    <img src={PokeBall} className="App-logo" alt="logo"/>
                </header>
                <div className="section-2">
                    <div className="side-bar">
                        <input type={'text'} className="text-input" placeholder={'   Username'}/>
                        <input type={'text'} className="text-input" placeholder={'   Password'}/>
                    </div>
                    <div>
                        <Button variant="success" className="margins" onClick={this.goToHome}>Success</Button>
                        <Button variant="danger" onClick={this.toListPage}>List</Button>
                            
                        <h1>Hello, {this.changeToUpperCase(name)}</h1>
                        <Router>
                            <Link to="/home/">About</Link>
                            <br/>
                            <Link to="/">Home</Link>
                            {/*<Route path="/home/" component={this.goToHome}/>*/}
                            <Route path="/home/" component={Home}/>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

// export default App;
