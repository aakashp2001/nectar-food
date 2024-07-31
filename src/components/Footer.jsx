import React, { Link } from 'react'

const Footer = () => {
    return (
        <>
            <div className='container-fluid mt-5 bg-body-secondary' style={{ boxShadow: "0 -4px 4px -4px #333" }}>
                <footer className='page-footer mx-4'>
                    <div className='row'>
                        <div className="col-2"></div>
                        <div className='col-4'>
                            <a href='/' className='text-decoration-none text-black'>
                            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>Nectar Foods</span><br/>
                            <span style={{ fontSize: '15px', fontWeight: 'light' }}>Tasty Nector Easily at your home</span>
                            </a>
                            
                        </div>
                        <div className='col-3'>

                        <ul className="p-0" style={{
                            cursor: 'pointer', listStyle: 'none'
                        }}
                        >
                            <li><a href='/products' className='text-decoration-none text-black'>Products</a></li>
                            <li><a href='/products' className='text-decoration-none text-black'>About Us</a></li>
                            <li><a href='/products' className='text-decoration-none text-black'>FAQ</a></li>
                            <li><a href='/products' className='text-decoration-none text-black'>Find Us</a></li>
                        </ul>
                        </div>
                        <div className='col-3'></div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer