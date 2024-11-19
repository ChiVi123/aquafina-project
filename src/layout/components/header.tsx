import { HomeIcon } from '~icons';

function Header() {
    return (
        <div className='p-4 bg-gradient-to-t from-white to-[#CDE8FF]'>
            <div className='flex items-center justify-between mb-[6px]'>
                <HomeIcon className='text-icon text-[1.75rem]' />

                <button
                    type='button'
                    className='inline-flex items-center justify-center min-w-[130px] h-[35px] px-2 rounded-[999px] bg-primary leading-[1.2] text-white shadow-[inset_0_0_10px_5px_rgba(50,143,253,0.6)]'
                >
                    Phân tích A.I
                </button>
            </div>

            <div className='flex items-center justify-between'>
                <img src='/assets/images/logo-mobile.png' alt='logo' className='w-[119px]' />
                <p className='max-w-[153px] text-xs text-center text-primary'>
                    Khám Phá <br /> Phong Cách Thuần Khiết
                </p>
            </div>
        </div>
    );
}

export default Header;
