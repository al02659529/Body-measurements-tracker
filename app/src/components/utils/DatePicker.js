import React from 'react';
import { DatePicker, Space } from 'antd';

const DateInputPicker = () => {
    const [selectedDate, setSelectedDate] = React.useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    return (
        <DatePicker onChange={handleDateChange} />
    );
};

export default DateInputPicker;
