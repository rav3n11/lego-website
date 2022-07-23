import React from 'react'

export default function SectionHeader({color, number, title}) {
  return (
    <div className={`section-header`} >
      <div className={`section__number ${color}`}>{number}</div>
      <div className='section__title'>{title}</div>
    </div>
  )
}
