import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../../../../assets/images/hero_1.jpg'
import Women from '../../../../assets/images/women.jpg'
import Children from '../../../../assets/images/children.jpg'
import Men from '../../../../assets/images/men.jpg'
import Blog from '../../../../assets/images/blog_1.jpg'

const Home = ({products}) => {
    return (
        <div>
        <div className="site-blocks-cover" style={{backgroundImage: `url(${Banner})`}} data-aos="fade">
          <div className="container">
            <div className="row align-items-start align-items-md-center justify-content-end">
              <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
                <h1 className="mb-2">Finding Your Perfect Shoes</h1>
                <div className="intro-text text-center text-md-left">
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                  <p>
                    <a href="#" className="btn btn-sm btn-primary">Shop Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="site-section block-3 site-blocks-2 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>Featured Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">

                {products.map(({id, name, image, price }, index) => (
                  <div className="col-md-4 mb-4">
                    <div className="item">
                      <div className="block-4 text-center">
                        <figure className="block-4-image">
                          <img src={image} style={{height: '400px'}} alt="Image placeholder" className="img-fluid" />
                        </figure>
                        <div className="block-4-text p-2">
                          <h3 className="mb-2"><a href={`/product/${id}`}>{name}</a></h3>
                          <p className="text-primary font-weight-bold">${price}</p>
                          <div className="block-input">
                            <button className="btn btn-primary">Add to cart</button>
                        </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
        </div>
      
    )
}

Home.propTypes = {

}

export default Home
