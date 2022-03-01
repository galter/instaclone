import React, { useEffect, useState } from 'react'
import { FiBookmark } from 'react-icons/fi'

import { client } from '../utils'

const SavePost = ({ isSaved, postId }) => {
  const [savedState, setSaved] = useState(isSaved)

  useEffect(() => {
    setSaved(isSaved)
  }, [isSaved])

  const handleToggleSave = () => {
    if (savedState) {
      setSaved(false)
      //client(`/posts/${postId}/toggleSave`)
    } else {
      setSaved(true)
      //client(`/posts/${postId}/toggleSave`)
    }
  }

  if (savedState) {
    return (
      <FiBookmark
        size="1.6em"
        color="#4b77be"
        fill="#4b77be"
        onClick={handleToggleSave}
      />
    )
  }

  if (!savedState) {
    return <FiBookmark size="1.6em" onClick={handleToggleSave} />
  }
}

export default SavePost
