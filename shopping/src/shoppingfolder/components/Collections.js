import React from 'react'

const Collections = (props) => {
  const {title,image1,image2,image3,image4,image5,image6,price1,price2,price3,price4,price5,price6}= props.gentsFashion;
  return (
    <div>
      <h3>{title}</h3>
      <div className='men-collection'>

      <div>
      <img src={image1} alt="gents fashion" className='gents-imgs'/>
      <p><b>Price:</b> ${price1}/piece </p>
      </div>

      <div>
      <img src={image2} alt="gents fashion" className='gents-imgs'/>
      <p><b>Price:</b> ${price2}/piece </p>
      </div>
     
      <div>
      <img src={image3} alt="gents fashion" className='gents-imgs'/>
      <p><b>Price:</b> ${price3}/piece </p>
      </div>

      <div>
      <img src={image4} alt="gents fashion" className='gents-imgs'/>
      <p><b>Price:</b> ${price4}/piece </p>
      </div>

      <div>
      <img src={image5} alt="gents fashion" className='gents-imgs'/>
      <p><b>Price:</b> ${price5}/piece </p>
      </div>

      <div>
      <img src={image6} alt="gents fashion" className='gents-imgs'/>
      <p><b>Price:</b> ${price6}/piece </p>
      </div>

      
      </div>

      
    </div>
  )
}

export default Collections
