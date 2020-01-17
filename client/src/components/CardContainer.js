import React from 'react';

class CardContainer extends React.Component {
    state = {data: []};

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
    
    render() {
        return (
            <div className='cards-container'>
                {/* map through state data to create cards for each player with info. */}
            </div>
        );
    }
}