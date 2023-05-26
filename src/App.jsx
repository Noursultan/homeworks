import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [dataShow, setDataShow] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleNameChange = (e) => {
    dispatch({ type: 'UPDATE_NAME', payload: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: 'UPDATE_AGE', payload: e.target.value });
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value)
    dispatch({ type: 'UPDATE_GENDER', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDataShow(true)
  }

  return (
    <>
      <h3>Please fill in your personal data</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" onChange={handleNameChange} />
        <input type="text" placeholder="age" onChange={handleAgeChange} />
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">submit</button>
      </form>

      {dataShow && (
        <div>
          <h4>Name: {user.name}</h4>
          <h4>Age: {user.age}</h4>
          <h4>Gender: {user.gender}</h4>
        </div>
      )}
    </>
  )
}

export default App
