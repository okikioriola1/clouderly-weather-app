import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDaysForecastItem from '../UpcomingDaysForecastItem';

import styles from './UpcomingDaysForecast.module.css';

const UpcomingDaysForecast = ({ days }) => {
    


    return(
    <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
        {days && days.length >0 && days.map(day => (
             <UpcomingDaysForecastItem {...day} key={day.weekday} />
           
        ))}
        {/* <h1>Some text</h1> */}
    </ul>
    );

        };


UpcomingDaysForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
