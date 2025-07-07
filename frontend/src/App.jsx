import { Routes, Route, Link } from 'react-router-dom';
import CreateCompanion from './components/CreateCompanion';
import EventList from './components/EventList';
import EventDetails from './components/EventDetails';

export default function App() {
    return (
        <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
            <h1>Handicapp Frontend</h1>
            <nav style={{ marginBottom: '1rem' }}>
                <Link to="/">Create Companion</Link> |{" "}
                <Link to="/events">Event List</Link>
            </nav>

            <Routes>
                <Route path="/" element={<CreateCompanion />} />
                <Route path="/events" element={<EventList />} />
                <Route path="/events/:id" element={<EventDetails />} />
            </Routes>
        </div>
    );
}
