
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
return (
<div className='flex flex-col items-center mt-6 lg:mt-20'>
    <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
        VirtualR build tools
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
            {" "}
            for developers
        </span>
    </h1>
    <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
        Enpower your creativity nad bring your VR app ideas to life with our intuitive developement tools.
        Get started today and turn your imagination into immersive reality.
    </p>
    <div className='flex justify-center my-10'>
        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 mx-4 px-4
         rounded-md sm:text-xs'>Sign for free</a>
        <a href='#' className='border py-3 px-4 mx-3 rounded-md'>Documentation</a>
    </div>

    <div className='flex mt-10 justify-center'>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-400 shadow-orange-400 mx-2 my-2'>
            <source src={video1} type="video/mp4" />
            Your Browser Does not Support This

        </video>
        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-400 shadow-orange-400 mx-2 my-2'>
            <source src={video2} type="video/mp4" />
            Your Browser Does not Support This

        </video>
        
    </div>
</div>
)
}

export default HeroSection