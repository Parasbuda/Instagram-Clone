import React from "react"
import "./Post.css"
import Avatar from "@material-ui/core/Avatar"
const Post = ({imageUrl,username,caption}) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img
        src={imageUrl}
        alt="postImage"
        className="post__image"
      />
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  )
}

export default Post
