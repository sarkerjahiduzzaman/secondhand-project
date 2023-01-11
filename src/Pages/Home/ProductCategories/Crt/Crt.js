import { useQuery } from '@tanstack/react-query';
import React, {  useState } from 'react';
import BookingModal from '../../../Booking/BookingModal/BookingModal';
import Loading from '../../../Shared/Loading/Loading';
import TvCard from './TvCard';

const Crt = () => {
    
    const [product, setProduct] = useState(null);
    
    const {data: tvs = [], isLoading} = useQuery({
        queryKey: ['tvs'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/crtTvCollection')
            const data = await res.json();
            return data;
        }
    });
    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">CRT TV</p>
                <h2 className="text-5xl font-semibold">Our CRT TV Collection</h2>
                <p>We sell & buy good qualitiful CRT TV with a good deal.</p>
            </div>
            <div>
                {/* <h2>services: {services.length}</h2> */}
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        tvs.map(tv => <TvCard
                            key={tv._id}
                            tv={tv}
                            setProduct={setProduct}
                        ></TvCard>)
                    }
                </div>
            </div>
            {
                product &&
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default Crt;