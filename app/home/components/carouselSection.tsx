"use client"
import * as React from "react"
import Image from "next/image"
import { Domedata, ICarouselProps } from "./data";
import Slider from "react-slick";


export const CarouselSection = () => {

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    const CarouseItemChild = ({
        image,
        courseTitle,
        profile,
        name,
    }: ICarouselProps) => {
        return (
            <div className="relative">
                <div>
                    <Image src={image} alt="image" width={300} height={280} />
                </div>
                <div className="absolute bottom-0 p-4 w-full">
                    <h4 className="font-semibold text-white">{courseTitle}</h4>
                    <div className="flex gap-x-4 items-center">
                        <div>
                            <Image
                                src={profile}
                                alt="image"
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                        </div>
                        <p className="text-white">{name}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (


        <div className="slider-container bg-secondary  py-8 px-6">
            <Slider {...settings}>
                {Domedata.map((d, index) => (
                    <div key={index} >
                        <CarouseItemChild
                            image={d.image}
                            courseTitle={d.courseTitle}
                            name={d.name}
                            profile={d.profile}

                        />
                    </div>

                ))}

            </Slider>
        </div>


    )
}
