interface ComponentProps {
    src: string;
    alt?: string;
}

const LazyImage = ({ src, alt = '' }: ComponentProps) => {
    return <img src={src} alt={alt} />;
};

export default LazyImage;