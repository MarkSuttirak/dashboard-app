import { useState, useEffect } from 'react'

export const useKeyboard = (key, callback) => {
  const [keyboard, setKeyboard] = useState(key)

  window.addEventListener('keypress', function(e){
    if (e.key === keyboard && callback){
      callback()
    }
  })

  return [keyboard, setKeyboard]
}