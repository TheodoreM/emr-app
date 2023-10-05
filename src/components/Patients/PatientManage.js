import React, { useState } from 'react';
import PatientList from './PatientList.js';
import PatientDetails from './PatientDetails';
import Appointments from './Appointments';

function PatientManagement() {
    // State to track which view is currently active
    const [activeView, setActiveView] = useState('allPatients');


    const switchView = (view) => {
        setActiveView(view);
    };

    return (
        <div>

            <div>
                <button onClick={() => switchView('allPatients')}>All Patients</button>
                <button onClick={() => switchView('patientDetails')}>Patient Details</button>
                <button onClick={() => switchView('appointments')}>Appointments</button>
            </div>


            {activeView === 'allPatients' && <PatientList />}
            {activeView === 'patientDetails' && <PatientDetails />}
            {activeView === 'appointments' && <Appointments />}
        </div>
    );
}

export default PatientManagement;