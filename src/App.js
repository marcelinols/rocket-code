import React, { useState } from 'react';
import Name from './components/names';
import Birthday from './components/birthday';
import Contac from './components/contact';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'; 

import './App.css';
import { useSelector } from 'react-redux';


function App() {

  const user = useSelector((state) => state);

  const [result, setResult] = useState("");
  const [show, setShow] = useState(false);
  const [type, setType] = useState("light");

  const img = "https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-4-1024x1024.jpg";

  async function sendInfo() {

    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            name: user.name,
            secondName: user.secondName,
            firstName: user.firstName,
            lastName: user.lastName,
            day: user.day,
            month: user.month,
            year: user.year,
            email: user.email,
            phone: user.phone,
          }
        ),
      });

      if (response.ok) {
        setShow(true);
        setType('success')
        setResult('Usuario Creado Exitosamente')
      } else {
        setShow(true);
        setType('danger')
        setResult('Error al crear el usuario')
      }
    } catch (error) {
      setShow(true);
      setType('danger')
      setResult("Error en la conexion al servidor")
      console.error('Error: -', error);
    }


  }

  function Note() {
    return (
      <div>
        <p className='note'>Si tus datos son correctos por favor continuamos</p>
      </div>
    )

  }

  return (
    <>
      <header className="App-header">
        <h5 className='text-center mt-2'>Hey, My name is Marcelino</h5>
        <div className="chat">

          <Name image={img} />

          {(user.birthday) && <Birthday image={img} />}

          {(user.contact) && <Contac image={img} />}

          {(user.send) && <Note className="card pd-2" />}

          {(show) &&
            <Alert variant={type} onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Mensaje</Alert.Heading>
              <p>{result}</p>
            </Alert>
          }

          {(user.send) &&
            <div className="d-grid gap-2">
              <Button className='btn-send' onClick={sendInfo} variant="danger">Iniciar</Button>
            </div>
          }
          <br></br>


        </div> 
      </header>
    </>
  );
}

export default App;


