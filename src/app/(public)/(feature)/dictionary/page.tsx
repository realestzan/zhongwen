'use client'
import React, { useRef } from 'react'
import WordOrigin from './word-origin'
import WordSearch from './word-search'
import WordDetail from './word-detail'
import WordCompound from './word-compound'
import WordOption from './word-option'
import WordRelated from './word-related'
import WordExample from './word-examples'
import AnimatedSection from '@/components/animate/section'
import { useInView } from 'framer-motion'

export default function Page() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true });
  const section2InView = useInView(section2Ref, { once: true });
  const section3InView = useInView(section3Ref, { once: true });
  const section4InView = useInView(section4Ref, { once: true });
  const section5InView = useInView(section5Ref, { once: true });
  const section6InView = useInView(section6Ref, { once: true });

  return (
    <div className='max-w-6xl mx-auto p-12 lg:py-32 max-md:p-0 flex flex-col gap-32'>
            
            
            
            
            
            

        <AnimatedSection ref={section1Ref} isInView={section1InView}><div id='word-search' ><WordSearch /></div></AnimatedSection>
        <AnimatedSection ref={section2Ref} isInView={section2InView}><div id='word-detail' ><WordDetail /></div></AnimatedSection>
        <AnimatedSection ref={section3Ref} isInView={section3InView}><div id='word-example' ><WordExample /></div></AnimatedSection>
        <AnimatedSection ref={section4Ref} isInView={section4InView}><div id='word-related' ><WordRelated /></div></AnimatedSection>
        <AnimatedSection ref={section5Ref} isInView={section5InView}><div id='word-compound' ><WordCompound /></div></AnimatedSection>
        <AnimatedSection ref={section6Ref} isInView={section6InView}><div id='word-origin' ><WordOrigin /></div></AnimatedSection>
    
        <div id='word-option' ><WordOption /></div>
    </div>
  )
}
