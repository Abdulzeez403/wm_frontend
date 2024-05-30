import React from 'react'
import { HeroSection } from "../home/components/heroSection"
import { CarouselSection } from "../home/components/carouselSection"
import { Whywalkmetru } from './components/whywalkmetru';
import { Testimonial } from './components/testimonial';
import { FaqSection } from './components/faq';
import { HowitworkSection } from './components/howitwork';
import { PartnerSection } from './components/partner';

function HomeDetailPage() {
    return (
        <div>
            <HeroSection />
            <CarouselSection />
            <Whywalkmetru />
            <Testimonial />
            <FaqSection />
            <HowitworkSection />
            <PartnerSection />

        </div>
    )
}

export default HomeDetailPage;
