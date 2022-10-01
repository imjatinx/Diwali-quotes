import React from 'react'
import QuoteCard from './QuoteCard'

function CardStack() {
  return (
    <div className='flex justify-around py-10'>
      <QuoteCard/>
      <QuoteCard/>
      <QuoteCard/>
      <QuoteCard/>
    </div>
  )
}

export default CardStack
