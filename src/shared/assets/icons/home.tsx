interface IProps {
    className?: string;
}

const HomeIcon = ({ className }: IProps) => (
    <svg
        width='1em'
        height='1em'
        viewBox='0 0 28 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
    >
        <path
            d='M14.6074 0.224694C14.2579 -0.0748979 13.7421 -0.0748979 13.3926 0.224694L0 11.7041V25.2C0 26.7464 1.2536 28 2.8 28H10.2667C10.7821 28 11.2 27.5821 11.2 27.0667V21.4667C11.2 19.9203 12.4536 18.6667 14 18.6667C15.5464 18.6667 16.8 19.9203 16.8 21.4667V27.0667C16.8 27.5821 17.2179 28 17.7333 28H25.2C26.7464 28 28 26.7464 28 25.2V11.7041L14.6074 0.224694Z'
            fill='currentColor'
        />
    </svg>
);
export default HomeIcon;
