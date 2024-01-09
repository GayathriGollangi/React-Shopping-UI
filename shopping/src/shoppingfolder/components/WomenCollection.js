import React from 'react'

const WomenCollection = (props) => {
    const {title,image1,image2,image3,image4,image5,image6,
    price1,price2,price3,price4,price5,price6}= props.womensFashion;
  return (
    <div>
      <h3>{title}</h3>
      <div className='women-banner-container'>
        <img src='assets/LadiesBanner.gif' alt='Ladies Banner' id='ladiesBanner'/>
      </div>
      <div className='women-collection'>
        <div>
        <img src={image1} alt='womens' className='women-imgs'/>
        <p className='price'><b>Price:</b> ${price1}/piece </p>
        </div>

        <div>
        <img src={image2} alt='womens' className='women-imgs'/>
        <p><b>Price:</b> ${price2}/piece </p>
        </div>

        <div>
        <img src={image3} alt='womens' className='women-imgs'/>
        <p><b>Price:</b> ${price3}/piece </p>
        </div>

        <div>
        <img src={image4} alt='womens' className='women-imgs'/>
        <p><b>Price:</b> ${price4}/piece </p>
        </div>

        <div>
        <img src={image5} alt='womens' className='women-imgs'/>
        <p><b>Price:</b> ${price5}/piece </p>
        </div>

        <div>
        <img src={image6} alt='womens' className='women-imgs'/>
        <p><b>Price:</b> ${price6}/piece </p>
        </div>
      </div>
    </div>
  )
}

export default WomenCollection
