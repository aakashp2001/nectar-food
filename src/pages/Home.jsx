import React from 'react'
import nectar from '../res/nectar.jpg'
import bee from '../res/bee.png'
import { Link } from 'react-router-dom'
import honeyJar from '../res/honeyJar.jpg'

const Home = () => {
    return (
        <>
            <div className='align-middle text-center bg-warning container mt-5 rounded-2'>

                <div className="row">
                    <div className="col-2  ">
                        <img className='img-fluid ' src={bee} height={'20px'} alt='beeImg'></img>

                    </div>
                    <div className="col-6 text-start align-items-center text-uppercase">
                        <h1 style={{ fontSize: '50px' }}>
                            Honey Nectar, provided with best nurturing of HoneyBees<br />
                        </h1>
                        <Link to='/products' className='text-white text-decoration-none'>
                            <button className='btn btn-danger p-3 rounded-5 text-start text-white'>

                                View Our Products
                            </button>
                        </Link>
                        <div className='bg-warning'>
                            <a href='#next-part' className='bg-warning'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-4">
                        <img className='img-fluid' src={nectar} height={'300px'} alt='beeImage'></img>
                    </div>

                </div>
            </div>
            <div className='container text-center mt-5 align-items-center' id='#next-part'>
                <div className='row'>
                    <div className='col-6 text-start'>
                        <h1 className=''>
                            Honey
                        </h1>
                        <hr style={{ background: 'orange', height: '10px', width: '80px', border: 0 }} />
                        <span style={{ font: '20px' }}>
                            Honey is a sweet, viscous substance made by bees from the sugary secretions of plants and other insects. Bees refine the secretions through regurgitation and enzymatic activity within their bodies, and through water evaporation in the hive. Honey is mostly sugar, but it also contains amino acids, vitamins, minerals, iron, zinc, and antioxidants.
                            Honey is a sweet, viscous substance made by bees from the sugary secretions of plants and other insects. Bees refine the secretions through regurgitation and enzymatic activity within their bodies, and through water evaporation in the hive. Honey is mostly sugar, but it also contains amino acids, vitamins, minerals, iron, zinc, and antioxidants.
                        </span>
                    </div>
                    <div className='col-6'>
                        <img src={honeyJar} className='img-fluid rounded-3' height={'200px'} alt='JarImage' style={{ transform: "rotate(2deg)" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home