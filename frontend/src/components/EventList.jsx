import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EventList() {
    const [events, setEvents] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/api/events?populate=*`)
            .then(res => res.json())
            .then(data => setEvents(data.data || []))
            .catch(console.error);
    }, []);

    return (
        <div>
            <h2>Event List</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <strong>{event.attributes.nameOfTheEvent}</strong>{" "}
                        <Link to={`/events/${event.id}`}>Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
