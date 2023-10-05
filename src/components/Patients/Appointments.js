import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Appointments({ match }) {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Extract patient ID from the URL (e.g., '/patients/:id/appointments')
        const patientId = match.params.id;

        // Make an Axios GET request to fetch patient's appointments
        axios.get(`/api/patients/${patientId}/appointments`)
            .then((response) => {
                // Update the state with the fetched appointments
                setAppointments(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching appointments:', error);
                setLoading(false);
            });
    }, [match.params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        <p>Date: {appointment.date}</p>
                        <p>Time: {appointment.time}</p>
                        {/* Display other appointment details here */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Appointments;