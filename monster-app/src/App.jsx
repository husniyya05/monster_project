import Search from "./componenet/search/search";
import CartList from "./componenet/cart-list/cart-list"
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([])
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(user)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((user) => {
        setUser(user)
        setFilter(user)
      })
  }, [])

  const searchFieldHandler = (event) => {
    const value = event.target.value.toLocaleLowerCase();
    setSearch(value);
  }

  useEffect(() => {
    const filterUser = user.filter(e => {
      return e.name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    })
    setFilter(filterUser)
  }, [search, user])

  return (
    <div className="App">
      <Search className={'search-box'} onChangeHendler={searchFieldHandler} placeholder={"search..."} />
      <CartList data={filter} />
    </div>
  );
}







export default App;


// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {

//   const [user, setUser] = useState([])
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState([])

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((user) => {
//         setUser(user)
//         setFilter(user)
//       })
//   }, [])


//   const searchFieldHandler = (event) => {
//     const value = event.target.value.toLocaleLowerCase();
//     setSearch(value);
//   }

//   useEffect(() => {
//     const filterUser = user.filter(e => {
//       return e.name
//         .toLocaleLowerCase()
//         .includes(search.toLocaleLowerCase());
//     })
//     setFilter(filterUser)
//   }, [search, user])

//   return (
//     <div className="App">
//       <input onChange={searchFieldHandler} type="search" placeholder='User search...' />
//       <div className='flex'>
//         {
//           filter.map((e) => (
//             <div key={e.id} className='user-box'>
//               <h1>{e.name}</h1>
//               <h5>Email : {e.email}</h5>
//               <h6>Street : {e.address.street}</h6>
//             </div>
//           ))
//         }

//       </div>
//     </div>
//   );
// }

// export default App;
