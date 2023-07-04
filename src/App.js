import {useEffect, useState} from "react";
import styles from './App.css';
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { Routes , Route } from 'react-router-dom'
import { createUser } from "./helpers/functions";

function App() {

    const [user , setUser] = useState(null)


    const nextHandler = (userDataStepOne) => {
        setUser(userDataStepOne)
    }

    const previousHandler = () => {
        setUser(null)
    }

    const completeHandler = (userDataStepTwo) => {
        const details = {
            name: user.name,
            age: parseInt(user.age),
            email: userDataStepTwo.email,
            newsletter: userDataStepTwo.newsletter
        }
        console.log(userDataStepTwo.email)
        console.log(userDataStepTwo.newsletter)
        createUser(details)
            .then((response) => {
                alert('User account created successfully')
                alert(`${response.name} ${response.age} ${response.email} ${response.newsletter}`)
            })
    }

  return (
    <div>
      <Routes>
          <Route path='/' element={<StepOne onNext={nextHandler}/>}/>
          <Route path='/stepTwo' element={<StepTwo onPrevious={previousHandler} onComplete={completeHandler}/>}/>
      </Routes>
    </div>
  );
}

export default App;
