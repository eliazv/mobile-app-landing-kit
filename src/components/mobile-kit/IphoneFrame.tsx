interface Props {
    src: string;
}

const IphoneFrame: React.FC<Props> = ({ src }) => {
    return (
        <div className="relative h-full overflow-hidden">
            <div className="absolute left-[4.6%] right-[4.4%] top-[1.9%] bottom-[1.8%] overflow-hidden rounded-[1.4rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="screenshot" className="h-full w-full object-cover" />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/misc/iphone-frame.webp" alt="iphone frame" className="relative z-10 h-full" />
        </div>
    );
};

export default IphoneFrame;
