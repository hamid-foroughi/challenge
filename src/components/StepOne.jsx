import React, {useState} from 'react';
import styles from './StepOne.module.css'
import {Link} from "react-router-dom";


const StepOne = ({onNext}) => {
    const [name , setName] = useState('')
    const [age , setAge] = useState('')


    const nextPageHandler = (event) => {
        if(name.trim() !== '' && age.trim() !== '') {
            onNext({name , age})
        }
        else {
            event.preventDefault()
        }
    }



    return (
        <div className={styles.container}>
           <form>
               <input
                   type='text'
                   placeholder='Name'
                   value={name}
                   name='name'
                   onChange={(event) => setName(event.target.value)}
               />
               <input
                   type='text'
                   placeholder='Age'
                   value={age}
                   name='age'
                   onChange={(event) => setAge(event.target.value)}
               />
               <Link to='/stepTwo' className={styles.link} onClick={nextPageHandler}>Next</Link>
           </form>
        </div>
    );
};

export default StepOne;