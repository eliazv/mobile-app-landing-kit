interface Props {
    src: string;
}

const IphoneFrame: React.FC<Props> = ({ src }) => {
    return (
        <div className="relative h-full overflow-hidden">
            <div className="absolute top-2 bottom-2 left-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="screenshot" className="rounded-2xl h-full" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/misc/iphone-frame.webp" alt="iphone frame" className="relative z-10 h-full" />
        </div>
    );
};

export default IphoneFrame;
