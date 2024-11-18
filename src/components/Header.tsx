import React from 'react'

export default function Header({title}: {title: string}) {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  )
}
