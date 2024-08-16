import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {name} Profile
        </span>
      </h1>
      <p className='desc text-left mb-5'>{desc}</p>

      <div>
      {/* {Array.isArray(data) ? (
          data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))
        ) : (
          <p>No data available</p>
        )} */}

        {
          data ? data.map((post) => (
            <PromptCard
              key={post.id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />

          )) : (
            <p>No data available</p>
          )
        }
      </div>
    </section>
  )
}

export default Profile