  
 import './App.css'

import UserCard from "./UserCard";



function App() {
  
let usersArray=[
  {fullName: "sama ali ahmed ", age: 30 ,city:   "alex", image:"https://picsum.photos/200/300" },
  {fullName: "noha said mostafa  ", age: 25 ,city: "cairo",image:"https://picsum.photos/200/303/"  },
  {fullName: "heba sallah  mohamed", age: 22 ,city:   "tanta", image:"https://picsum.photos/200/301" },

    
];  
   








return (
  <>
    <div className="card">
      {usersArray.map((item) => (
        <div >
          <UserCard
            fullName={item.fullName}
            age={item.age}
            city={item.city}
            image=<img src={item.image} alt="User"className="card-image" style={{ width: '50px', height: '50px' }} />
          />
        </div>
      ))}
    </div>
  </>
);
}

export default App
