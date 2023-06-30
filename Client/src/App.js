
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
function App() {


  const [itemtext,setitemtext] = useState('')

  const [updateitemtext,setupdateitemtext] = useState('')

  const [listitems,setlistitems]= useState([]);
  const [newupdate,setnewupdate] = useState('')
  const additem = async (e)=>{
    e.preventDefault();
         try {
             const add = await axios.post('http://localhost:5500/api/items',{item:itemtext})
            setlistitems(prev => [...prev,add.data])
             setitemtext('');
         } catch (error) {
          console.log('not working')
         }
  }

useEffect( ()=>{
  
    const show = async () =>{      
      try {
        const show_data = await axios.get('http://localhost:5500/api/items')
      setlistitems(show_data.data);
      } catch (error) {
        
      }
     }
     show();
},[]);


// deleteitems 

const deleteitems = async (x)=>{
  try {
    
    const del = await axios.delete(`http://localhost:5500/api/items/${x._id}`) 
    console.log("item deleted")
    const newlist = listitems.filter(item =>
      item._id !== x._id
    )
    setlistitems(newlist)
  } catch (error) {
    
  }
} 

//update the item
const itemupdate = async (e)=>{
  e.preventDefault();
  console.log("hello")
  try {
    console.log('updated')
    const update = await axios.put(`http://localhost:5500/api/items/${newupdate}`, {item:updateitemtext})
    setupdateitemtext('')
    setnewupdate('')
    console.log('updated')
    console.log(update.data)
   
const findindex = listitems.findIndex(item => item._id == newupdate)
const updateditem = listitems[findindex].item = updateitemtext
  } catch (error) {
    
  }
}


//making input field for updation
const updateitem =  () => (

 
    <form className='newform' onSubmit={e => itemupdate(e)}>
      <input className='newinput' type='text' placeholder = "update the item" onChange={e=>setupdateitemtext(e.target.value) }  value={updateitemtext}/>
      <button type='submit' className='newbutton'>update</button>
    </form> 
  
)

  return (
    <div className="App">
      <h1>To-Do List </h1>
      <form className="form" onSubmit={ e => additem(e)}>
         <input type="text" placeholder = "Add todo item" className="inputtext" onChange={e => {setitemtext(e.target.value)}} value = {itemtext}/>
         <button type="submit" className="addbutton">ADD</button>
      </form>
      <div className="Addtodoitems">
        {
       listitems.map(x => (
        <div className="item">

{
        newupdate === x._id
        ?
        updateitem()
        : <>   
        <p className="item-content">{x.item}</p>
        <button className="button-u" onClick={()=>{setnewupdate(x._id)}}>update</button>
        <button className="button-d" onClick={()=>{deleteitems(x)}}>Delete</button>       
          </>
}
</div>

       ))
   
        }
      </div>
    </div>
  );
}

export default App;
