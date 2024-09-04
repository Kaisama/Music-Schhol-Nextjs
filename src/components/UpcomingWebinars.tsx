'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'
import { HoverEffect } from './ui/card-hover-effect';

const UpcomingWebinars = () => {

  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      link: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      link: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      link: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      link: 'music-production-essentials',
      isFeatured: true,
    },
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      link: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      link: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3l leading-8 font-extrabold tracking-light text-white sm:text-4xl'>Enhance Your Musical Journey</p>
            </div>
            <div className='mt-10'>
            <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={featuredWebinars.map(webinar=>(
        {
          title:webinar.title,
          description:webinar.description,
          link:webinar.link
        }
      ))} />
    </div>
            </div>
            <div className='mt-10 text-center'>
            <Link href={'/courses'}>
                    <Button
                         borderRadius="1.75rem"
                            className="bg-gray"
                      >
                                    View All Webinars
                      </Button>
                
                   </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars