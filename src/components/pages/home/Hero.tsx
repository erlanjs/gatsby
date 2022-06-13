import * as React from 'react';
import {StaticImage} from  "gatsby-plugin-image"

const Hero = () => {
    return (
        <div className="bg-[#FFFFFF]  min-h-[100vh]">
            <div className="bg-[#1F1F1F] min-h-[40vh]">
                <div className="container mx-auto w-[90%] pt-[64px]">

                    <StaticImage
                        src={"../../../images/logo.svg"}
                        loading="eager"
                        quality={95}
                        width={200}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                        className="mt-[50px]"
                    />
                    <div className="absolute z-10 ml-[-20px]">
                        <span className="text-[268px] font-[900] mr-[75px] text-black">D</span>
                        <span className="text-[268px] font-[900] mr-[75px] text-black">E</span>
                        <span className="text-[268px] font-[900] mr-[75px] text-black">V</span>
                        <span className="text-[268px] font-[900] text-white mr-[75px]">S</span>
                    </div>
                    <StaticImage
                        src={"../../../images/esenbb.png"}
                        loading="eager"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        width={630}
                        alt=""
                        className="absolute mt-[90px] ml-[550px]"
                    />

                </div>

            </div>
        </div>
    );
};

export default Hero;