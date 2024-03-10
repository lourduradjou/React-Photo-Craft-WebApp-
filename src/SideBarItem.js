import React from 'react'

export default function SideBarItem({name, active, handleClick}) {
  return (
    <div>
      <button className={`sidebar-button ${active ? 'active': ''}`}
        onClick={handleClick}>
        {name}
        </button>
    </div>
  )
}
