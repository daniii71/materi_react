import React from 'react'

function Event() {

    const handleClick = () => {
        alert("SUKSES!!!");
    };
    
  return (
    <div>
        <button onClick={handleClick}>Click Her</button>
        </div>
  )
}

export default Event