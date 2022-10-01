import React from 'react'

function QuoteCard() {
  return (
    <div className="card w-72 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={"https://placeimg.com/400/225/arch"} alt={"Shoes"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{"Shoes"}</h2>
        <p>{"If a dog chews shoes whose shoes does he choose?"}</p>
      </div>
    </div>
  )
}

export default QuoteCard
