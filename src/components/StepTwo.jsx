import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styles from './StepTwo.module.css'


const StepTwo = ({onPrevious , onComplete}) => {
    const [email, setEmail] = useState('');
    const [newsletter, setNewsletter] = useState('daily');

    const previousHandler = () => {
        onPrevious()
    }

    const completeHandler = (event) => {
        if(email !== '') {
            onComplete({email , newsletter})

        }
        else {
            event.preventDefault()
        }
    }


    return (
        <div className={styles.container}>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <select value={newsletter} onChange={(event) => setNewsletter(event.target.value)}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <div className={styles.btnLinks}>
                    <Link to='/' onClick={previousHandler} className={styles.link}>Previous</Link>
                    <button onClick={completeHandler}>Complete</button>
                </div>
            </form>
        </div>
    );
};

export default StepTwo;