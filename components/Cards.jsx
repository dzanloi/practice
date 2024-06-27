import React from 'react'

const Cards = ({imageSrc, title, description, tools}) => {
  return (
    <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <Image src={imageSrc} width={100} height={100} className='mx-auto'/>
        <h3 className='text-lg font-medium pt-8 pb-2'> {title} </h3>
        <p>{description}</p>

        <h4 className='py-4 text-teal-600'>Design Tools I used:</h4>
        <ul>
            {tools.map((tool, index) => (
                <li key={index} className='text-gray-800 py-1'> {tool} </li>
            ))}
        </ul>
    </div>
  )
}

export default Cards