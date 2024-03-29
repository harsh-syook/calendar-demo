import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from 'moment'


import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

moment.locale('en')
const localizer = momentLocalizer(moment)
const DragAndDropCalendar = withDragAndDrop(Calendar)

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      events:[{
        id:0,
        title: "test",
        start: new Date(2019,10,24),
        end: new Date(2019,10,24),
        allDay: true,
        tooltip:"description goes here for test",
        hexColor: 'FCD116'
      },
      {
        id:1,
        title: "test2",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test2",
        hexColor: 'e94922'
      },
      {
        id:2,
        title: "test3",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test3",
        hexColor: '50651b'
      },
      {
        id:3,
        title: "test",
        start: new Date(2019,10,24),
        end: new Date(2019,10,24),
        allDay: true,
        tooltip:"description goes here for test",
        hexColor: 'FCD116'
      },
      {
        id:4,
        title: "test2",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test2",
        hexColor: 'e94922'
      },
      {
        id:5,
        title: "test3",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test3",
        hexColor: '50651b'
      },
      {
        id:6,
        title: "test",
        start: new Date(2019,10,24),
        end: new Date(2019,10,24),
        allDay: true,
        tooltip:"description goes here for test",
        hexColor: 'FCD116'
      },
      {
        id:7,
        title: "test2",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test2",
        hexColor: 'e94922'
      },
      {
        id:8,
        title: "test3",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test3",
        hexColor: '50651b'
      },
      {
        id:9,
        title: "test",
        start: new Date(2019,10,24),
        end: new Date(2019,10,24),
        allDay: true,
        tooltip:"description goes here for test",
        hexColor: 'FCD116'
      },
      {
        id:10,
        title: "test2",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test2",
        hexColor: 'e94922'
      },
      {
        id:12,
        title: "test3",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test3",
        hexColor: '50651b'
      },{
        id:13,
        title: "test",
        start: new Date(2019,10,24),
        end: new Date(2019,10,24),
        allDay: true,
        tooltip:"description goes here for test",
        hexColor: 'FCD116'
      },
      {
        id:14,
        title: "test2",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test2",
        hexColor: 'e94922'
      },
      {
        id:15,
        title: "test3",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test3",
        hexColor: '50651b'
      },
      {
        id:16,
        title: "test",
        start: new Date(2019,10,24),
        end: new Date(2019,10,24),
        allDay: true,
        tooltip:"description goes here for test",
        hexColor: 'FCD116'
      },
      {
        id:17,
        title: "test2",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test2",
        hexColor: 'e94922'
      },
      {
        id:18,
        title: "test3",
        start: new Date(2019,10,25),
        end: new Date(2019,10,25),
        allDay: true,
        tooltip:"description goes here for test3",
        hexColor: '50651b'
      }]
    }
  }
    handleSelect = ({ start, end }) => {
      
    const title = window.prompt('New Event name')
    if(title){
      this.setState(prev=>{
        return{
          events:[...prev.events,{title,start,end}]
        }
      })
    }
  }
  moveEvent=({ event, start, end, isAllDay: droppedOnAllDaySlot })=>{
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }
  eventStyleGetter=(event, start, end, isSelected)=> {
    console.log(event);
    const backgroundColor = '#' + event.hexColor;
    const style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 1,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
}
  render(){
    return (
    <div className="App">
    <DragAndDropCalendar 
    selectable
    popup
    localizer={localizer}
    tooltipAccessor={(event)=>event.tooltip}
    events={this.state.events}
    getNow={()=> new Date()}
    onEventDrop={this.moveEvent}
    views={['day','week','month']}
    onSelectEvent={event => alert(event.title)}
    onSelectSlot={this.handleSelect}
    eventPropGetter={this.eventStyleGetter}
    
    />
    
     
    </div>
  )
  }
}

export default App;
