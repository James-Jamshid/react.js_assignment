import React from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'
const AppCon = () => {
  return (
    <div className='container'>
      <div className='left'>
        <Link to='/'>

          <div className='wrapper'>
            <div>
              Main
            </div>

          </div>

        </Link>

        <Link to='/Tutorials'>
          <div className='wrapper'>
            <div>
              Tutorials
            </div>

          </div>

        </Link>
        <Link to='/References'>
          <div className='wrapper'>
            <div>
              References
            </div>

          </div>

        </Link>
        <Link to='/Exercises'>
          <div className='wrapper'>

            <div>
              Exercises
            </div>

          </div>

        </Link>
        <Link to='/Videos'>
          <div className='wrapper'>
            <div>
              Videos
            </div>

          </div>

        </Link>
        <Link to='/Pro'>
          <div className='wrapper'>
            <div>
              Pro
            </div>

          </div>

        </Link>
      </div>
      <div className='right'>
        <Link to='/Website'>
          <div className='wrapper'>
            <div>
              Website
            </div>

          </div>

        </Link>
        <Link to='/Paid_Courses'>
          <div className='wrapper'>
            <div>
              Paid_Courses
            </div>

          </div>

        </Link>
      </div>

    </div>
  )
}

export default AppCon