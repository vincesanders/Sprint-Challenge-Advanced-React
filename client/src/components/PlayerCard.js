import React from 'react';

export default ({ name, country, searches }) => {
    return (
        <div className='player-card'>
            <h3>{name}</h3>
            <p className='country'>
                <img 
                    className='flag-icon' 
                    src={'./blah.jpg'} 
                    alt={'flag of ' + country} />
                {country}
            </p>
            <p>Number of searches: <br /><span>{searches}</span></p>
        </div>
    );
}