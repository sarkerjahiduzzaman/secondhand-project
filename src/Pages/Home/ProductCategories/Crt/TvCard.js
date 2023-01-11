import React from 'react';

const TvCard = ({tv, setProduct}) => {
    const {img, resale_price, original_price, title, location, years_of_use, posted_time, sellers_name} = tv;
    return (
        <div className="card card-compact  shadow-xl">
            <figure><img src={img} style={{height: '300px'}} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Resale Price: {resale_price} taka</p>
                <p className='text-xl font-semibold'>Original Price: {original_price} taka</p>
                <p className='font-semibold'>Years of use: {years_of_use}</p>
                <p className='font-semibold'>Location: {location}</p>
                <p className='font-semibold'>Posted time: {posted_time}</p>
                <p className='font-semibold'>Seller's name: {sellers_name}</p>

                
                <div className="card-actions justify-end">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setProduct(tv)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default TvCard;