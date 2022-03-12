import React from 'react'

export default function Input({type="text",...props}) {
  return (
    <input {...props} type={type} className="w-full border-gray-300 rounded-xl" />
  )
}
