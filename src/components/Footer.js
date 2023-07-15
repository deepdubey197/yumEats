import React from 'react'
import { FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-grey-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500 pb-4'>yumEats</h1>
                    <p className="text-white">
                    We are grateful for your support and the opportunity to delight your senses with our delectable creations.
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare className='cursor-pointer hover:text-[#00df9a] text-white' size={30}/>
                        <FaInstagram className='cursor-pointer hover:text-[#00df9a] text-white' size={30}/>
                        <FaTwitterSquare className='cursor-pointer hover:text-[#00df9a] text-white' size={30}/>
                        <FaGithubSquare className='cursor-pointer hover:text-[#00df9a] text-white' size={30}/>
                        <FaDribbbleSquare className='cursor-pointer hover:text-[#00df9a] text-white' size={30}/>
                    </div>
                
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <a href='https://www.google.com/maps/place/Mumbai,+Maharashtra/@19.0826068,72.551507,10z/data=!3m1!4b1!4m6!3m5!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69!8m2!3d19.0759837!4d72.8776559!16zL20vMDR2bXA?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Mumbai</li></a>
                        <a href='https://www.google.com/maps/place/Delhi/@28.6442873,76.7635583,10z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Delhi</li></a>
                        <a href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9544595,77.3012577,10z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Bangalore</li></a>
                        <a href='https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.5355649,88.2649499,12z/data=!3m1!4b1!4m6!3m5!1s0x39f882db4908f667:0x43e330e68f6c2cbc!8m2!3d22.572646!4d88.363895!16zL20vMGN2dzk?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Kolkata</li></a>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                    <a href='https://www.google.com/maps/place/Jamshedpur,+Jharkhand/@22.7841655,86.0933679,12z/data=!3m1!4b1!4m6!3m5!1s0x39f5e31989f0e2b5:0xeeec8e81ce9b344!8m2!3d22.8045665!4d86.2028754!16zL20vMDF0dGp4?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Jamshedpur</li></a>
                    <a href='https://www.google.com/maps/place/Chennai,+Tamil+Nadu/@13.0479859,79.87933,10z/data=!3m1!4b1!4m6!3m5!1s0x3a5265ea4f7d3361:0x6e61a70b6863d433!8m2!3d13.0826802!4d80.2707184!16zL20vMGM4dGs?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Chennai</li></a>
                    <a href='https://www.google.com/maps/place/Hyderabad,+Telangana/@17.4127332,78.0783655,10z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2!8m2!3d17.385044!4d78.486671!16zL20vMDljNnc?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Hyderabad</li></a>
                    <a href='https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0204741,72.414926,11z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Ahmedabad</li></a>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                    <a href='https://www.google.com/maps/place/Pune,+Maharashtra/@18.5248706,73.6981502,11z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Pune</li></a>
                    <a href='https://www.google.com/maps/place/Goa/@15.3479368,72.8235459,9z/data=!3m1!4b1!4m6!3m5!1s0x3bbfba106336b741:0xeaf887ff62f34092!8m2!3d15.2993265!4d74.123996!16zL20vMDFjMW5t?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Goa</li></a>
                    <a href='https://www.google.com/maps/place/Jaipur,+Rajasthan/@26.8854214,75.6257419,11z/data=!3m1!4b1!4m6!3m5!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709!16zL20vMDE2NzIy?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Jaipur</li></a>
                    <a href='https://www.google.com/maps/place/Chandigarh/@30.735203,76.6811264,12z/data=!3m1!4b1!4m6!3m5!1s0x390fed0be66ec96b:0xa5ff67f9527319fe!8m2!3d30.7333148!4d76.7794179!16zL20vMDFmMXE4?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Chandigarh</li></a>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                    <a href='https://www.google.com/maps/place/Varanasi,+Uttar+Pradesh/@25.3208949,82.9087062,12z/data=!3m1!4b1!4m6!3m5!1s0x398e2db76febcf4d:0x68131710853ff0b5!8m2!3d25.3176452!4d82.9739144!16zL20vMDFqOTIy?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Varanasi</li></a>
                    <a href='https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh/@23.1989377,76.8148817,10z/data=!3m1!4b1!4m6!3m5!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615!16zL20vMGN3NTE?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Bhopal</li></a>
                    <a href='https://www.google.com/maps/place/Lucknow,+Uttar+Pradesh/@26.8480769,80.3515184,10z/data=!3m1!4b1!4m6!3m5!1s0x399bfd991f32b16b:0x93ccba8909978be7!8m2!3d26.8466937!4d80.946166!16zL20vMDIydHE0?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Lucknow</li></a>
                    <a href='https://www.google.com/maps/place/Kochi,+Kerala/@9.9828865,75.9712512,10z/data=!3m1!4b1!4m6!3m5!1s0x3b080d514abec6bf:0xbd582caa5844192!8m2!3d9.9312328!4d76.2673041!16zL20vMGZsMnM?entry=ttu'><li className='py-2 text-sm text-white hover:text-[#00df9a]'>Kochi</li></a>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  );
};

export default Footer;
