import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function NotFound() {
    return (
        <Layout>
            <div className='w-full pt-[50px] lg:pt-[100px] flex items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <span className='text-[100px] lg:text-[150px] bg_linear_gradient'>404</span>
                    <span className='text-[20px] lg:text-[26px]'>Извините, страница не найдена.</span>
                    <Link to="/" className='mt-[20px] lg:mt-[30px] w-[100px] h-[35px] border flex items-center justify-center border-orange-300 text-orange-300 rounded-md hover:bg-orange-200 hover:text-white transition-all'>
                        <span className=''>Главный</span>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default NotFound;