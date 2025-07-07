import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/api/events/${id}?populate=*`)
            .then(res => res.json())
            .then(data => setEvent(data.data))
            .catch(console.error);
    }, [id]);

    if (!event) return <p>Loading...</p>;

    const attrs = event.attributes;

    return (
        <div>
            <h2>{attrs.nameOfTheEvent}</h2>
            <p>{attrs.Description}</p>
            <p><strong>Start:</strong> {attrs.startTime}</p>
            <p><strong>End:</strong> {attrs.endTime}</p>
            <p><strong>Location:</strong> {attrs.locations?.data?.map(loc => loc.attributes.nameOfLocation).join(', ')}</p>
        </div>
    );
}
