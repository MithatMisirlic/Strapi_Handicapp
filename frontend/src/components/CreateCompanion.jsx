import { useState } from 'react';

const CreateCompanion = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const apiUrl = import.meta.env.VITE_API_URL;

        try {
            const res = await fetch(`${apiUrl}/api/companions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // If using Authenticated role:
                    // 'Authorization': `Bearer YOUR_JWT`
                },
                body: JSON.stringify({
                    data: {
                        FirstName: firstName,
                        LastName: lastName,
                        user: parseInt(userId)
                    }
                })
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('✅ Companion created successfully!');
                setFirstName('');
                setLastName('');
                setUserId('');
            } else {
                setMessage(`❌ Error: ${data.error?.message || 'Unknown error'}`);
            }
        } catch (err) {
            setMessage(`❌ Request failed: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Create Companion</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <br /><br />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <br /><br />
                <input
                    type="number"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Companion'}
                </button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default CreateCompanion;
