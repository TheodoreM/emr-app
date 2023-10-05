import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PatientDetails({ match }) {
    const [patient, setPatient] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Extract patient ID from the URL (e.g., '/patients/:id')
        const patientId = match.params.id;

        // Make an Axios GET request to fetch patient details
        axios.get(`/api/patients/${patientId}`)
            .then((response) => {
                // Update the state with the fetched patient details
                setPatient(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching patient details:', error);
                setLoading(false);
            });
    }, [match.params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Patient Details</h2>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>

        </div>
    );
}

export default PatientDetails;