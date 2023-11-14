import React, {Fragment, useState} from 'react';

const Form = () =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [pupName, setPupName] = useState("");
    const [weight, setWeight] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [appointment, setAppointment] = useState("");

    const onSubmitForm = async e => {
    e.preventDefault();
    try {
        const body = { firstName, lastName, pupName, weight, phoneNumber, appointment}; 
        const response = await fetch("http://localhost:5000/new-client", {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(body)
        });

        window.location = '/';
    } catch (error) {
        console.error(error.message)
    }
}
    return<Fragment>
        <div>
            <h1 className='mt-5'>Request an Appointment</h1>
            <form className='align-items-center mt-5 ml-5 mr-5' onSubmit={onSubmitForm}>
                <input type='text'
                placeholder='First Name'
                className='form-control'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                />
                <input type='text'
                placeholder='Last Name'
                className='form-control'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                />
                 <input type='text'
                placeholder='Pet Name'
                className='form-control'
                value={pupName}
                onChange={e => setPupName(e.target.value)}
                />
                <input type='number'
                placeholder='Weight'
                className='form-control'
                value={weight}
                onChange={e => setWeight(e.target.value)}
                />
                 <input type='tel'
                placeholder='Phone Number'
                className='form-control'
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                />
                 <input type='date'
                placeholder='Desired Appointment'
                className='form-control'
                value={appointment}
                onChange={e => setAppointment(e.target.value)}
                />
                <button>Add</button>
            </form> 
         {/* redirect here */}
        </div>
    </Fragment>
}

export default Form;