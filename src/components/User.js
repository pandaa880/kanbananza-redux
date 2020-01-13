import React from "react"
import md5 from "md5"

// create profile image URL
const createProfileImageURL = ({ email }) => {
  const hash = md5(email.trim())

  return `https://wwww.gravatar.com/avatar/${hash}`
}

function User({ user }) {
  const profileImage = createProfileImageURL(user)

  return (
    <article className="User">
      <img className="User-picture" src={profileImage} alt={user.name} />
      <div className="User-info">
        <h2>{user.name}</h2>
      </div>
    </article>
  )
}

export default User
