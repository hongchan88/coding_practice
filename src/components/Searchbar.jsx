import React, { useState } from 'react';

const Searchbar = (props) => {

 const [value , setvalue] = useState()

const onChange = (e) =>{
    setvalue(e.currentTarget.value)
}

return (
<div>
<form>

<input placeholder="Search for" onChange = {onChange} />

</form>

<button onClick={() => console.log(value)}>Search</button>

</div>

)
}
            
    
    

export default Searchbar;