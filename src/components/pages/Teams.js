import React from 'react';
import Header from '../templates/Header';
import Table from '../templates/Table';
import Team from '../templates/Team';

export default function Teams() {
    return (
        <>
            <Header />
            <div className='flex'>
                <Table />
                <Team />
            </div>

        </>

    )
}
