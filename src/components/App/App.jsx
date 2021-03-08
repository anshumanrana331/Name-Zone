import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name Zone',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                {<SearchBox onInputChage={this.handleInputChange} headerExpanded={this.state.headerExpanded}/>}       
                {<ResultsContainer suggestedNames={this.state.suggestedNames} headerExpanded={this.state.headerExpanded}/>} 
            </div>
            /* headerExpanded prop added in Searchbox and ResultsContainer for animation */
        );
    }
}

export default App;