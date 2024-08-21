import landingImage from '../assets/landing.png'
import appDownload from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-gray-100 rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold
         tracking-tight text-red-600"> Tuck into a takeaway today</h1>
         <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage}/>
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
            <span className='font-bold text-3xl tracking-tight'>
                Order takeaway even faster!
            </span>
            <span>
                Download Gaulas App for faster orderign and personalised recommendations!
            </span>
            <img src={appDownload}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
