import { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='home-container'>
          <div className='home'>
            <h1 className='heading'>Welcome to our Bookstore</h1>
            <p className='description'>Bookstore, your cozy corner for literary adventures. From timeless classics to the latest bestsellers, our shelves are filled with stories waiting to be discovered. Whether you’re a book lover, a casual reader, or searching for the perfect gift, we have something for everyone. Come in, explore, and let your next great read find you!
              Discover the world’s best books at Bookstore — your online destination for reading enthusiasts. Browse through thousands of titles, from bestsellers to hidden gems, and enjoy easy ordering, fast delivery, and digital formats. Your next great read is just a click away!
            </p>
            <Link to='/books'>
              <button className='button'>Explore Books</button>
            </Link>
          </div>
          <div className='image-container'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu32xo0uTfFXuJr8vxfBefaNpqw4eILOcPfw&s'
              alt='home'
              className='home-image'
            />
          </div>
        </div>
      </>
    )
  }
}

export default Home