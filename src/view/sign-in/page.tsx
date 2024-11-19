function SignInPage() {
    return (
        <div className='min-h-screen p-4 px-4 bg-gradient-to-b from-white to-[#CDE8FF]'>
            <div>
                <h1 className='text-2xl font-bold text-center text-primary'>KHÁM PHÁ PHONG CÁCH</h1>
                <p className='font-motherland text-[2.5rem] text-center text-[#00D7F9]'>thuần khiết</p>
                <p className='text-sm font-bold text-center text-primary'>CÙNG AQUAFINA A.I</p>
                <p className='text-sm text-center text-primary'>
                    Nhận <strong>thông điệp tỏa sáng</strong> mỗi ngày
                </p>
            </div>

            <div className='w-[283px] mx-auto'>
                <img src='/assets/images/image-body-mobile.png' alt='body' className='w-full' />
            </div>
            <p className='text-sm text-center text-primary'>
                Tổng quà tặng giá trị hơn <strong>200 triệu đồng</strong>
            </p>

            <div className='mt-[42px] text-[1.375rem] text-center font-bold text-primary'>NHẬP OTP</div>

            <div className='mb-5 text-sm text-center text-primary'>
                Một mã OTP vừa được gửi vào số <strong>0327784561</strong>
            </div>

            {/* <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center gap-4 mb-7'>
            <input
                ref={(ref) => (otpRefs.current[0] = ref!)}
                type='text'
                name='otp.0'
                id='otp.0'
                className='rounded-lg size-[44px] text-center border border-[#AEB1B5]'
            />
        </div>

        <button
            type='submit'
            className={clsx(
                'inline-flex items-center justify-center w-full h-[35px] px-2 rounded-[999px] bg-primary leading-[1.2] text-white shadow-[inset_0_0_10px_5px_rgba(50,143,253,0.6)]'
            )}
        >
            Xác nhận
        </button>
    </form>

    <p className='mt-3 mb-2 text-sm text-center text-primary'>
        Mã sẽ được gửi trong vòng <strong>{timer} giây</strong>
    </p>

    <div className='flex justify-center'>
        <span
            className={clsx('text-sm text-center text-white underline', { 'opacity-40': timer === 0 })}
            onClick={handleSendOTP}
        >
            Gửi lại mã
        </span>
    </div> */}
        </div>
    );
}

export default SignInPage;
