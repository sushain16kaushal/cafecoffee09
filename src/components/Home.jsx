import React from 'react'
import { useRef } from 'react'
import useAutoscroll from '../hooks/useAutoScroll'
import { Link } from 'react-router-dom';
function Home() {
    const scrollRef=useRef(null);
    const {onMouseEnter,onMouseLeave,onClickpause}=useAutoscroll(scrollRef,3);
    return (
        <>
        <div className='outlet'>
            <div className='Picgallery ml-65 mt-8 w-3xl overflow-x-hidden'>
                 <h2 className='text-center text-2xl text-red-500'>Experience the pleasure of our place </h2>
                <div ref={scrollRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClickpause}  className='flex aspect-video overflow-x-scroll scroll-smooth mt-8 hover:cursor-pointer'>
                <img src="https://as1.ftcdn.net/v2/jpg/07/66/38/12/1000_F_766381285_P6cqEt7HyM6fVehVDCjkxO7lNwTSn8dg.jpg" className='min-w-full h-full  shrink-0 object-fill' />
                 <img src="https://images.pexels.com/photos/2159070/pexels-photo-2159070.jpeg" className='min-w-full h-full shrink-0 object-fill' />
                 <img src="https://images.pexels.com/photos/5812847/pexels-photo-5812847.jpeg" className='min-w-full  h-full shrink-0 object-fill' />
                 <img src="https://images.pexels.com/photos/35133035/pexels-photo-35133035.jpeg" className='min-w-full  h-full shrink-0 object-fill' />
            </div>
            </div>
            <div className='offers mt-10'>
                <h2 className='text-4xl text-center text-red-500'>Exciting Offers</h2>
                <div className='flex ml-10 mt-10 mr-10 gap-x-10'>
<div class="bg-neutral-primary-soft bg-rose-400 block max-w-sm p-6 border border-default rounded-base shadow-xs hover:translate-y-2 hover:border-4 hover:border-red-600">
    <Link href="#">
        <img class="rounded-base" src="https://images.pexels.com/photos/6478943/pexels-photo-6478943.jpeg" alt="valentines" />
    </Link>
    <Link href="#">
        <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Sip, Share, and Spark Romance</h5>
    </Link>
    <p class="mb-6 text-body">Experience the ultimate coffee date with our curated Valentine’s Menu. From velvet-smooth cappuccinos to rich cocoa treats, we’ve crafted the perfect atmosphere for you and your special someone to slow down and savor the moment.</p>
    <Link href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none hover:bg-red-600">
        Read more
        <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </Link>
</div>
<div class="bg-neutral-primary-soft  bg-rose-400 block max-w-sm p-6 border border-default rounded-base shadow-xs hover:translate-y-2 hover:border-4 hover:border-red-600">
    <Link href="#">
        <img class="rounded-base" src="https://i.pinimg.com/736x/f4/c7/ac/f4c7ac3700949a7e8a04579d7d4171e9.jpg" alt="" />
    </Link>
    <Link href="#">
        <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">From First Sip to Final Credits!</h5>
    </Link>
    <p class="mb-6 text-body">Turn your daily coffee run into a movie night. Buy any large specialty brew and grab a Free Movie Coupon on the house. It’s the perfect excuse to treat yourself to a great drink and a blockbuster show.</p>
    <Link href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none hover:bg-red-600">
        Read more
        <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </Link>
</div>
<div class="bg-neutral-primary-soft  bg-rose-400 block max-w-sm p-6 border border-default rounded-base shadow-xs hover:translate-y-2 hover:border-4 hover:border-red-600">
    <Link href="#">
        <img class="rounded-base" src="https://images.pexels.com/photos/90607/pexels-photo-90607.png" alt="" />
    </Link>
    <Link href="#">
        <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Your Morning Just Got a Whole Lot Sweeter</h5>
    </Link>
    <p class="mb-6 text-body">Start your day on a high note with our "Perfect Pair" deal. Grab your favorite signature blend and we’ll throw in a complimentary muffin to go with it. Because every great coffee deserves a delicious partner in crime.</p>
    <Link href="#" class="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none hover:bg-red-600">
        Read more
        <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </Link>
</div>
</div>
    </div>
    <div className='reviews'>
<h2 className='Reviews text-3xl text-center mt-14 text-red-500'>See What People Say About Us</h2>
<div class="grid mb-8 bg-neutral-primary-soft gap-12 bg-orange-200 rounded-base md:mb-12 md:grid-cols-2 mt-12 ml-10 mr-10 hover:shadow-2xl rounded-3xl">
    <div class="flex flex-col hover:translate-y-2 items-center justify-center p-8 text-center border-0 rounded-t-base md:rounded-t-none md:rounded-ss-base m-4">
        <blockquote class="max-w-2xl mx-auto mb-4 text-body lg:mb-8">
            <h3 class="text-lg font-semibold text-heading">Architectural Grandeur Meets the Perfect Pour</h3>
            <p class="my-4">A breathtaking space where the sleek, modern design is matched only by the world-class espresso and a team that makes you feel like a guest of honor.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            <div class="space-y-0.5 text-left rtl:text-right ms-2">
                <div class="leading-tight text-base text-heading font-medium mb-0.5">Bonnie Green</div>
                <div class="text-sm text-body">Developer at Open AI</div>
            </div>
        </figcaption>    
    </div>
    <div class="flex flex-col hover:translate-y-2  items-center justify-center p-8 text-center border-0  md:rounded-se-base">
        <blockquote class="max-w-2xl mx-auto mb-4 text-body lg:mb-8">
            <h3 class="text-lg font-semibold text-heading">Sip in Style: A Sanctuary for Design Lovers</h3>
            <p class="my-4">The stunning interior creates an atmosphere of pure luxury, making their expertly crafted brews and warm, attentive staff the absolute highlight of my day.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
            <div class="space-y-0.5 text-left rtl:text-right ms-2">
                <div class="leading-tight text-base text-heading font-medium mb-0.5">Roberta Casas</div>
                <div class="text-sm text-body">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </div>
    <div class="flex flex-col hover:translate-y-2  items-center justify-center p-8 text-center border-0 md:rounded-es-base ">
        <blockquote class="max-w-2xl mx-auto mb-4 text-body lg:mb-8">
            <h3 class="text-lg font-semibold text-heading">A Symmetry of Taste and Texture</h3>
            <p class="my-4">An incredible blend of avant-garde architecture and top-tier coffee craftsmanship, all brought together by the most welcoming baristas in the city.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
            <div class="space-y-0.5 text-left rtl:text-right ms-2">
                <div class="leading-tight text-base text-heading font-medium mb-0.5">Jese Leos</div>
                <div class="text-sm text-body">Software Engineer at Facebook</div>
            </div>
        </figcaption>    
    </div>
    <div class="flex flex-col hover:translate-y-2  items-center justify-center p-8 text-center rounded-b-base border-0 md:rounded-se-base">
        <blockquote class="max-w-2xl mx-auto mb-4 text-body lg:mb-8">
            <h3 class="text-lg font-semibold text-heading">A Masterclass in Aesthetics and Hospitality</h3>
            <p class="my-4">Every corner of this cafe is a visual feast, perfectly complemented by their artisanal coffee and a level of service that is simply unparalleled.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
            <div class="space-y-0.5 text-left rtl:text-right ms-2">
                <div class="leading-tight text-base text-heading font-medium mb-0.5">Joseph McFall</div>
                <div class="text-sm text-body">CTO at Google</div>
            </div>
        </figcaption>    
    </div>
</div>
</div>
</div>
      
        </>
    )
}

export default Home
