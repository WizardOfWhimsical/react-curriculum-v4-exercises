//Week-01 Introduction to React
//Exercise: Build an "About Me" Component in this file
import { useState } from 'react';
const student = {
  firstName: 'Stephen',
  lastName: 'Lewis',
  age: 40,
  hobbies: [
    {
      id: '000',
      value: 'Disc Golf',
    },
    {
      id: '001',
      value: 'XR Research',
    },
    {
      id: '002',
      value: 'Reading my Bible',
    },
    {
      id: '003',
      value: 'Magic the Gathering',
    },
    {
      id: '004',
      value: 'Putting good Vibes out there',
    },
  ],
};

export default function StudentWork() {
  //add variables here
  const [hobbies, setHobbies] = useState(student.hobbies);
  return (
    <div>
      {/* add JSX here */}
      <h1>
        The Whimsical Wizard: {student.firstName} {student.lastName}
      </h1>
      <p>
        When I am not at work, preparing some wonderful food. I am home at my
        make shift little office, studying hard for class. But thats not always
        the case and I do enjoy a good pod cast, StarTalk being one.
      </p>
      <h3>Other Hobbies Include:</h3>
      {/* i could make a component and pass the id to that and it should change on each call, correct? */}
      <ul>
        {hobbies.map((hobby) => {
          return <Hobby key={hobby.id} hobby={hobby.value} />;
        })}
      </ul>
    </div>
  );
}

function Hobby({ hobby }) {
  return <li>{hobby}</li>;
}
