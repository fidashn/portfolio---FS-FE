import React from 'react';

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>
              <span>Fida Shnakher</span> 
            </h1>
            <h3>FullStack | FrontEnd developer</h3>
          </div>
          <div className='right row'>
            <div className='img'>
              {/* <img style={{backgroundImage:`url(https://photos.google.com/photo/AF1QipPZsRGQgwQMQrzDdh84wCnEc0-6Ew5ugLRzo6SM)`}} alt='img' /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;