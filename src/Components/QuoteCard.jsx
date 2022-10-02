import React from 'react'
import { MdContentCopy } from 'react-icons/md'

function QuoteCard(props) {

  // const clickToCopy = () => {
  //   var a = document.getElementsByClassName("copy");
  // }


  // console.log(props.data[1].attributes.image.data.attributes.url)

  return (
    <>
      <div className="card w-64 h-28 bg-base-100 border border-white shadow-xl image-full">
        <div className="card-body py-3 relative">
          {/* <img src={`https://radiant-sands-42865.herokuapp.com${props.data[1].attributes.image.data.attributes.url}?updated_at=2022-10-02T14:18:49.409Z`} alt="Quotes Happy Diwali SMS Shayari" /> */}
          <p className='copy'>{props.data[1].attributes.quote}</p>
          <div className='absolute flex justify-between bottom-2 right-2 tooltip tooltip-left' data-tip="Click to copy">
            <span className='text-primary hidden'>copied</span>
            <button onClick={() => {
              // clickToCopy()
            }}>
              <MdContentCopy className='text-3xl cursor-pointer hover:text-primary' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuoteCard
