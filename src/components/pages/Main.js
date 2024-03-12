import React from 'react';
import Header from '../templates/Header';
import Table from '../templates/Table';
import News from '../templates/News';

export default function Main() {
    return (
        <>
            <Header />
            <div className='flex'>
                <Table />
                <News />
            </div>

        </>

    )
}
