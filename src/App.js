import React, { useState, useEffect } from 'react'
import List from './List';
import Alert from './Alert';

function App() {
  const[name, setName] = useState('');
  const[list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show:false,
    msg:'',
    type:''
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name){
      showAlert(true,'danger','Please Enter a Fruit')
    }
    else if(name && isEditing){
      // editing
    }
    else{
      showAlert(true, 'success', 'Fruit Added to Basket!')
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show, type, msg})
  }

  const clearBasket = () => {
    showAlert(true, 'danger', 'Your Basket is Now Empty!')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Fruit Removed From Basket!')
    setList(list.filter((item) => item.id !== id))
  }

  return <section className="section-center">
    <form className="fruit-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <h3>Fruit Collection</h3>
      <div className="form-control">
        <input 
          type='text'
          className='fruit'
          placeholder='ex: Pineapple'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEditing? 'edit': 'Submit'}
        </button>
      </div>
    </form>
    {list.length > 0 && (
    <div className="fruit-container">
      <List items={list} removeItem={removeItem} />
      <button className="clear-btn" onClick={clearBasket}>
        Clear Fruits
        </button>
    </div>
    )}
  </section>
}

export default App;