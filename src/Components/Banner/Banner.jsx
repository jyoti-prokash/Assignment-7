import bannerMain from '../../assets/img/banner-main.png'
import banner from '../../assets/img/bg-shadow.png'
const Banner = ({claimCredit}) => {
    return (
        <div className='py-12 bg-cover bg-center rounded-xl bg-black' style={{backgroundImage: `url(${banner})`}}>
                <div className='p-10 flex items-center justify-center'>
                    <img src={bannerMain} alt="" />
                </div>
                <div className="text-center space-y-6">
                    <h1 className="text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1> 
                <p className="text-gray-400 text-xl font-bold">Beyond Boundaries Beyond Limits</p>
                <button onClick={claimCredit} className="border-4 border-black bg-[#E7FE29] px-3 py-2 rounded-lg font-bold">Claim Free Credit</button>
                </div>
        </div>
    );
};

export default Banner;