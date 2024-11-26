import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
            Description
        </div>
        <div className="descriptionbox-nav-box fade">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionbox-description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam corporis harum rem nihil error unde animi vel consequatur dolore, numquam quos temporibus sapiente architecto mollitia cum repudiandae tempora eos. Quaerat dolor hic voluptatibus dignissimos rerum dolorum molestiae, aspernatur fuga earum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum blanditiis magni, odit sequi nobis consequatur mollitia ad voluptates natus!</p>
        </div>
    </div>
  )
}

export default DescriptionBox
