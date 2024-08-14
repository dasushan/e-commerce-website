import React, {useRef} from 'react'
import "./ContactUs.css"
const Contact = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const numberRef = useRef('');

    async function submitHandler(event) {
        event.preventDefault();

        const info = {
            name : nameRef.current.value,
            email : emailRef.current.value,
            number: numberRef.current.value
        }
        const response = await fetch(
            'https://react-backend-app-f330f-default-rtdb.asia-southeast1.firebasedatabase.app/infos.json',
            {
              method: 'POST',
              body: JSON.stringify(info),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );

          const data = await response.json();
          console.log(data);
    }
    return(
        <section className='contact'>
            <form onSubmit={submitHandler} >
            <div className='control'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={nameRef}></input>
            </div>
            <div className='control'>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' ref={emailRef}></input>
            </div>
            <div className='control'>
                <label htmlFor='number'>Contact No.</label>
                <input type='number' id='number' ref={numberRef}></input>
            </div>
            <button className='control-btn'>Submit</button>
        </form>
        </section>
        
    )
}

export default Contact;




