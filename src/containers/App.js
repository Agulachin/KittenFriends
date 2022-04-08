import React, { useState, useEfect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             return response.json()})
    //         .then(users => {this.setState({ robots: users})
    //         });  
    // }

    useEfect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {return response.json()})
            .then(users => {setRobots(users)});
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    const filteredRobots = robots.filter(robot =>{ 
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?       
            <div className="vh-100 dt w-100">
                <h1 className="dtc ph3 tc f1 v-mid">Loading...</h1>
            </div> : (
            <div className="tc">
                <h1 className="f1">KittenFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
                
                <div className="dt w-100 mt5">
                    <footer className="dtc ph3 tc f1 v-mid">Agulachin</footer>
                </div>
            </div>
        )}



export default App;