import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px', marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-between p-4'>
         <div style={{width:'400px'}} className='intro'>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E Cart</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors</p>
          <p>Code licensed Luminar, docs CC BY 3.0</p>
          <p>Currently v5.3.2</p>
         </div>
         <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Links</h5>
         <Link to={'/'} style={{textDecoration: 'none',color:'white'}} >Landing Page</Link>
             <Link to={'/home'} style={{textDecoration: 'none',color:'white'}} >Home Page</Link>
             <Link to={'/history'} style={{textDecoration: 'none',color:'white'}} >Watch History Page</Link>
         </div>
         {/* guides */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Guides</h5>
        <a style={{textDecoration: 'none',color:'white'}} href="https://react.dev/" target='_blank'>React</a>
        <a style={{textDecoration: 'none',color:'white'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
        <a style={{textDecoration: 'none',color:'white'}} href="https://www.npmjs.com/package/react-router-dom" target='_blank'>React Router</a>
        </div>
        {/* contact */}
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Contact US</h5>
          <div className='flex'>
             <input type="text" placeholder='Enter Your Email Here..' className='form-control me-2' />
             <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='flex justify-between mt-3'>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/Twitter"><i class="fa-brands fa-twitter"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://x.com/i/flow/login"><i class="fa-brands fa-x-twitter"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://www.apple.com/"><i class="fa-solid fa-apple-whole"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='_blank' href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
              <a style={{textDecoration: 'none',color:'white'}} target='blank' href="https://en.wikipedia.org/wiki/Media(communication)"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; May 2024 Batch, Media Player. Built with React.</p>
    </div>
  )
}

export default Footer