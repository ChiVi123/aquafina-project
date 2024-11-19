import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components';

function DefaultLayout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
            </Suspense>
            <footer className='hidden lg:block'>Footer</footer>
        </>
    );
}

export default DefaultLayout;
