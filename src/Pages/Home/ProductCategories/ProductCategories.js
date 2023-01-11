import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/categories/1.jpg'
import img2 from '../../../assets/categories/2.jpg'
import img3 from '../../../assets/categories/3.jpg'

const ProductCategories = () => {

    return (
        <div className='my-20'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-orange-600'>Our Categories</h2>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card   shadow-xl">
                <figure><img src={img1} alt="crt tv img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">CRT TV</h2>
                    <p>Looking for sell or buy a CRT TV. This is the best place for best deal.</p>
                    <div className="card-actions justify-end">
                    <Link to='/crt' className="btn btn-secondary">See Deals</Link>
                    </div>
                </div>
            </div>
            <div className="card  shadow-xl">
                <figure><img src={img2} alt="LED TV img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">LED TV</h2>
                    <p>Need some crazy exeprience with SMART TV. Sell you old LED TV with best price and buy a SMART TV for you home.</p>
                    <div className="card-actions justify-end">
                    <Link to='/led' className="btn btn-secondary">See Deals</Link>
                    </div>
                </div>
            </div>
            <div className="card  shadow-xl">
                <figure><img src={img3} alt="SMART TV img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">SMART TV</h2>
                    <p>Are you looking for best deal on SMART TV. This is bet most populer and relaiable place to buy or sell SMSRT TV</p>
                    <div className="card-actions justify-end">
                    <Link to='/smart' className="btn btn-secondary">See Deals</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCategories;