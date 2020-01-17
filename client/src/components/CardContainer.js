import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import { Bar } from 'react-chartjs-2';

class CardContainer extends React.Component {
    state = {data: []};
    
    graphData = {
        labels: [],
        datasets: [{
            label: '# of Searches',
            data: [],
            backgroundColor: [
                'rgba(102, 0, 0, 0.2)',
                'rgba(102, 0, 51, 0.2)',
                'rgba(102, 0, 102, 0.2)',
                'rgba(51, 0, 102, 0.2)',
                'rgba(0, 0, 102, 0.2)',
                'rgba(0, 51, 102, 0.2)',
                'rgba(0, 102, 255, 0.2)',
                'rgba(0, 102, 102, 0.2)',
                'rgba(0, 102, 51, 0.2)',
                'rgba(51, 102, 0, 0.2)',
                'rgba(255, 204, 102, 0.2)',
                'rgba(102, 102, 0, 0.2)',
                'rgba(102, 77, 0, 0.2)',
                'rgba(102, 51, 0, 0.2)'
            ], 
            borderColor: [
                'rgba(102, 0, 0, 1)',
                'rgba(102, 0, 51, 1)',
                'rgba(102, 0, 102, 1)',
                'rgba(51, 0, 102, 1)',
                'rgba(0, 0, 102, 1)',
                'rgba(0, 51, 102, 1)',
                'rgba(0, 102, 255, 1)',
                'rgba(0, 102, 102, 1)',
                'rgba(0, 102, 51, 1)',
                'rgba(51, 102, 0, 1)',
                'rgba(255, 204, 102, 1)',
                'rgba(102, 102, 0, 1)',
                'rgba(102, 77, 0, 1)',
                'rgba(102, 51, 0, 1)'
            ],
            borderWidth: 1
        }]
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            .then(res => {
                //res.data is an array of 100 soccerplayers, with name, country, searches and id
                //sort the array based on number of searches.
                this.setState({data: res.data.sort((a, b) => {
                    if (a.searches > b.searches) {
                        return -1;
                    }
                    if (a.searches < b.searches) {
                        return 1;
                    }
                    return 0;
                })});
            }).catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.data !== prevState.data) {
            this.state.data.forEach(playerObj => {
                if (!this.graphData.labels.includes(playerObj.country)) {
                    this.graphData.labels.push(playerObj.country);
                }
                this.graphData.datasets[0].data[this.graphData.labels.indexOf(playerObj.country)] = this.graphData.datasets[0].data[this.graphData.labels.indexOf(playerObj.country)] || 0 + parseInt(playerObj.searches);
            })
        }
    }

    render() {
        console.log(this.graphData);
        return (
            <div className='cards-container'>
                <Bar data={this.graphData} />
                {/* map through state data to create cards for each player with info. */}
                {this.state.data.map(player => {
                    return <PlayerCard name={player.name} searches={player.searches} country={player.country} key={player.id} />
                })}
            </div>
        );
    }
}

export default CardContainer;