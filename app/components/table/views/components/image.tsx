interface ImageProps {
    image: string;
    name: string;
}

export default function Image({ image, name }: ImageProps) {
    return (
        <img 
            src={image === "cow_1" ? "/cow_1.png" : "/cow_2.png"} 
            alt={`${name} bull image`} 
            className="rounded-lg w-21 h-18 object-cover" 
        />
    );
}