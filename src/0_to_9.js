import { useState } from 'react';
const Home0to9 = () => {
    // let name = 'Vita';
    const [name, setName] = useState('Vita');
    const [age, setAge] = useState('70 000');
const handleClick = (e) => {
    alert('Clicked');
}
const handleClick2 = (name) => {
    alert('Hello ' + name);
}
const handleClick3 = (name) => {
    setName('Senadina');
    setAge('22');
}

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click here</button>
            <button onClick={() => handleClick2('Ninja')}>Click here AGAIN</button>
            <button onClick={() => handleClick3('Ninja')}>Click here hehe</button>
        </div>
    );
};

export default Home0to9;