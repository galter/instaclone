import React, { useEffect, useState } from 'react'
import { FiHeart } from 'react-icons/fi'

import { client } from '../utils'

const LikePost = ({ isLiked, postId, incLikes, decLikes }) => {
  const [likedState, setLiked] = useState(isLiked)

  useEffect(() => {
    setLiked(isLiked)
  }, [isLiked])

  const handleToggleLike = () => {
    if (likedState) {
      setLiked(false)
      decLikes()

      //client(`/posts/${postId}/toggleLike`)
    } else {
      setLiked(true)
      incLikes()

      //client(`/posts/${postId}/toggleLike`)
    }
  }

  if (likedState) {
    return (
      <FiHeart
        size="1.6em"
        color="#d24d57"
        fill="#d24d57"
        onClick={handleToggleLike}
      />
    )
  }

  if (!likedState) {
    return <FiHeart size="1.6em" onClick={handleToggleLike} />
  }
}

export default LikePost
