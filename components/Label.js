import React from 'react'

export default function Label({forinput, children}) {
  return (
    <label htmlFor={forinput} className="block mb-1 text-gray-700">{children}</label>
  )
}
