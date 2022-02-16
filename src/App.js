import { useEffect, useRef, useState } from 'react';
import useRandomJoke from './hooks/useRandomJoke';

function App() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
  const joke = useRandomJoke(firstName,lastName)



  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
    console.log(firstName)


	};
	return (
		<div className="App">
			<h1>Joke generator</h1>
			<h2>{joke}</h2>
			<form>
				<input
					placeholder="first name"
          ref={firstNameRef}

				></input>
				<input
					placeholder="last name"
					ref={lastNameRef}
				></input>

				<button onClick={generateJoke}>generate joke</button>
			</form>
		</div>
	);
}

export default App;
