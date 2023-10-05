import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PatientList() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/patients')
            .then((response) => {
                setPatients(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching patient data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>All Patients</h2>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        <a href={`/patients/${patient.id}`}>{patient.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PatientList;