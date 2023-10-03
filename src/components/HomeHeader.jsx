import React, {useState} from 'react'

const HomeHeader = () => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [timespan, setTimespan] = useState(1);

    const submitHandler = e => {
        try {
            e.preventDefault()
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div id='HomeHeader'>
        <h1>Serach for a trip</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="from">From</label>
            <input type="text" id='from' placeholder='Origin' onChange={e => setOrigin(e.value.target)}/>
            <label htmlFor="to">To</label>
            <input type="text" id='to' placeholder='Destination' onChange={e => setDestination(e.value.target)}/>
            <label htmlFor="date">Date</label>
            <input type="datetime-local" id='date' placeholder='Date' onChange={e => setDate(e.value.target)}/>
            <label htmlFor="timespan">Timespan (in hrs)</label>
            <input type="number" id='timespan' placeholder='Timespan' onChange={e => setTimespan(e.value.target)}/>
            <button type='submit'>Search</button>
        </form>
    </div>
  )
}

export default HomeHeader