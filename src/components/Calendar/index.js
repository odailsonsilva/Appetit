import React, {useState} from 'react';
import DatePicker, {getDate, CalendarContainer} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Container } from './styles'


function Calendar() {
  const[selectedDate, setSelectedDate] = useState(null)
  
 
  return (
    <Container>
      <h6>Em qual data foi realizado?</h6>

      <div className="calendar_container">
        <DatePicker selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"  
          maxDate={new Date()}
          className="custom_input_date"
      >

      </DatePicker>

       
       <p>Data do pedido</p>
      </div>

    
    </Container>
   );
}

export default Calendar;