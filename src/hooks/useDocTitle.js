import { useState, useEffect } from 'react'

export const useDocTitle = (title) => {
  const [doctitle, setDocTitle] = useState(title)

  useEffect(() => {
    document.title = doctitle
  }, [doctitle])

  return [doctitle, setDocTitle]
}