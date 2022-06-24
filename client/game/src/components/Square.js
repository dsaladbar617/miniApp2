import React from "react";

const Square = ({ cell, index, classy }) => {

  const handleClick = (e) => {
    e.currentTarget.classList.add('hidden')
    if (e.currentTarget.parentElement.parentElement.className === 'zero') {
      e.currentTarget.previousSibling.classList.remove('hidden')
    } else {
      e.currentTarget.previousSibling.classList.remove('hidden')

      setTimeout(() => {  alert('You have lost!!!')}, 500);
      setTimeout(() => { window.location.reload()}, 1000);

    }
    console.log(e.currentTarget.previousElementSibling.innerHTML)
  }

  return (
    <td key={index} className={`${classy}`}>
      <div className='cellcontain'>
        <div className='dat hidden'>{cell.adjacentBombs}</div>
        <button className={`btn btn${index[1]} row${index[0]}`} onClick={(e) => {
         handleClick(e);
        }} />
      </div>

    </td>)
}

export default Square;