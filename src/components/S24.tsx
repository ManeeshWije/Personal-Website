import tulipLogo from "../assets/tulip-logo.png";

const S24: React.FC = () => {
    return (
        <>
            <div className="text-[#ddc7a1] animate-in slide-in-from-left-20 duration-700 p-5 pt-8 flex flex-col justify-center items-center">
                <a href="https://www.tulip.com">
                    <img src={tulipLogo} width={150} height={50} alt="tulip-retail-logo" />
                </a>
                <i className="pt-2">Summer 2024</i>
            </div>
        </>
    );
};

export default S24;
