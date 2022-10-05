import React, { useEffect, useState } from 'react'
import QuoteCard from './QuoteCard'

function CardStack() {

  const [content, setContent] = useState('');

  const getContent = async () => {
    const url = 'https://radiant-sands-42865.herokuapp.com/api/diwali-contents?populate=*';

    const token = 'Bearer 78b41b1791ab5080c45d5f7832c40dd55a91d2e6ef300dc5cdc23549fb4893ada2a1bdc54ac014d8273c051ea36fd91f40932eeafe48355d0d76a48f3aa38fdc1ff23d84273ab96a3c611f46c14a03a92b70c7f61133aa1359c53e9e334f235415e032dc1d1f0761e5e4f3878850ef075e1e0881040adf174d29689144074cae';

    const data = {
      method: "GET",
      headers: { 'Authorization': token }
    }

    fetch(url, data)
      // Handle success
      .then(response => response.json())  // convert to json
      .then(json => {
        setContent(json.data)
      })    //print data to console
      .catch(err => console.log('Request Failed', err)); // Catch errors

  }

  useEffect(() => {
    getContent();
  }, [])

  return (
    <>
      <h1 className='text-center text-2xl pt-8 font-bold'>Get 100+ Advance Happy diwali short quotes | just copy and share with your love one.</h1>
      <p className='mx-44'>Celebrate this diwali with short and fresh quotes from <span className='font-bold'>"Happy Diwali SMS"</span> team and also you can share this page with all your whatsApp contacts, Facebook page Groups and twitter handle.</p>
      <div className='grid gap-y-8 gap-x-2 place-items-center py-10 xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          Object.entries(content).map((data, index) => {
            return (
              <QuoteCard key={index} data={data} />
            )
          })
        }
      </div>
    </>
  )
}

export default CardStack
