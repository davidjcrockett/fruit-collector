import React, { useState, useEffect } from 'react'
import List from './List';
import Alert from './Alert';

function App() {
  const[name, setName] = useState('');
  const[list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show:false, msg:'', type:'' });
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('test')
  }

  return <section className="section-center">
    <form className="fruit-form" onSubmit={handleSubmit}>
      {alert.show && <Alert/>}
      <h3>Fruit Collection</h3>
      <div className="form-control">
        <input 
          type='text'
          className='fruit'
          placeholder='example: Pineapple'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEditing? 'edit': 'Submit'}
        </button>
      </div>
    </form>
    <div className="fruit-container">
      <List />
      <button className="clear-btn">Clear Fruits</button>
    </div>
  </section>
}

export default App;