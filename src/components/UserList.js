import React, {useState} from "react";
import App from "./App";

const UserList = (props)=>{
    const superCompleja =()=>{
        console.log('calculos complejos');
        return [
            {
                firstName: 'Maury',
                lastName: 'Rodriguez'
            },
            {
                firstName: 'Mauricio',
                lastName: 'Rodriguez'
            },
            {
                firstName: 'Mesias',
                lastName: 'Rodriguez'
            }
        ];
    };

    const [users, setUsers]= useState(props.users);
    const [count, setCount]= useState(0);

    const  formatName = (user) =>{
        return user.firstName + ' ' + user.lastName;
    };
    const handleAddUser = () =>{
        const firstName = document.querySelector('#firstName').value;
        const lastName = document.querySelector('#lastName').value;
        const newUser ={
            firstName,
            lastName
        };

        setUsers((prevState)=>{
            return [
                ...prevState,
                newUser
            ];
        });

    };

    return (
        <>
            {count}
            <button onClick={()=> setCount(count+1)}>Sumar</button>
            <button onClick={()=> setCount(0)}>Resetear</button>
            <div>
                <label htmlFor="firstName">Nombre</label>
                <input type="text" id='firstName'/>

                <label htmlFor="lastName">Apellido</label>
                <input type="text" id='lastName'/>
                <button onClick={handleAddUser}>Agregar</button>
            </div>
            <ul>
                {
                    users.map((user, index)=>{
                        return <li key={ `user-${index}` }>{formatName(user)}</li>;
                    })
                }
            </ul>
        </>
    );
};
export default UserList;