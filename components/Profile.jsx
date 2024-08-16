import React from 'react'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <seciton className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {name} Profile
        </span>
      </h1>
      <p className='mt-10 prompt_layout'>{desc}</p>
    </seciton>
  )
}

export default Profile