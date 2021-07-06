import React, { useState } from 'react';
import Header from './header';
import Task from './Task';

const Main = (props) => {
    const [count, setcount] = useState([1, 2, 3]);
    return ( <div>
        <Header count={count} setcount={setcount}/>
        
    </div> );
}
 
export default Main;