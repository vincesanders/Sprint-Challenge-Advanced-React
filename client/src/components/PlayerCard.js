import React from 'react';
import usflag from '../assets/usflag.jpg';
import argentinaflag from '../assets/argentinaflag.jpg';
import australiaflag from '../assets/australiaflag.jpg';
import brazilflag from '../assets/brazilflag.jpg';
import franceflag from '../assets/franceflag.jpg';
import canadaflag from '../assets/canadaflag.jpg';
import chileflag from '../assets/chileflag.jpg';
import germanyflag from '../assets/germanyflag.jpg';
import italyflag from '../assets/italyflag.jpg';
import netherlandsflag from '../assets/netherlandsflag.jpg';
import norwayflag from '../assets/norwayflag.jpg';
import spainflag from '../assets/spainflag.jpg';
import swedenflag from '../assets/swedenflag.jpg';
import ukflag from '../assets/ukflag.jpg';

export default ({ name, country, searches }) => {

    const getFlagImage = () => {
        let flag = "";
        switch(country) {
            case 'United States': 
                flag = usflag;
                break;
            case "Brazil": 
                flag = brazilflag;
                break;
            case "France": 
                flag = franceflag;
                break;
            case "Sweden": 
                flag = swedenflag;
                break;
            case "Netherlands": 
                flag = netherlandsflag;
                break;
            case "Australia": 
                flag = australiaflag;
                break;
            case "Chile": 
                flag = chileflag;
                break;
            case "Canada": 
                flag = canadaflag;
                break;
            case "Germany": 
                flag = germanyflag;
                break;
            case "Italy": 
                flag = italyflag;
                break;
            case "Norway": 
                flag = norwayflag;
                break;
            case "Spain": 
                flag = spainflag;
                break;
            case "England": 
                flag = ukflag;
                break;
            case "Argentina":
                flag = argentinaflag;
        }
        return flag;
    }

    return (
        <div className='player-card'>
            <h3>{name}</h3>
            <p className='country'>
                <img 
                    className='flag-icon' 
                    src={getFlagImage()} 
                    alt={'flag of ' + country} />
                {country}
            </p>
            <p>Number of searches: <br /><span>{searches}</span></p>
        </div>
    );
}