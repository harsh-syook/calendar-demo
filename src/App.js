import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
moment.locale('en')
const localizer = momentLocalizer(moment)
const myEventsList=[
  {
    title: "test",
    start: new Date(2019,10,24),
    end: new Date(2019,10,24),
    allDay: true
  },
  {
    title: "test2",
    start: new Date(2019,10,25),
    end: new Date(2019,10,25),
    allDay: true
  },
  {
    title: "test3",
    start: new Date(2019,10,25),
    end: new Date(2019,10,25),
    allDay: true
  }
]

function App(props) {
  return (
    <div className="App">
    <Calendar 
    localizer={localizer}
    hideGutter
    hideTimeIndicator
    step={60}
    showMultiDayTimes
    events={myEventsList}
    getNow={()=>new Date()}
    views={['week','month']}
    
    />
     
    </div>
  );
}

export default App;
