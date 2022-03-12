import React from 'react'

export default function Select({children, ...props}) {
  return (
    <select {...props} className="w-full border-gray-300 rounded-xl">{children}</select>
  )
}
