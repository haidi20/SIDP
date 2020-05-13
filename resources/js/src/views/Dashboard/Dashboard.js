import React from 'react';

const dashboard = () => {
    const baseDomain = document.head.querySelector('meta[name="api-base-url"]').content;
    console.log(baseDomain);
    console.log('dashboard');

    return (<div>
        {/* <h1>Selamat Datang</h1> <br /> */}
        <h1>Aplikasi Sistem Informasi Dinas Pendidikan Samarinda</h1>
    </div>)
}

export default dashboard;