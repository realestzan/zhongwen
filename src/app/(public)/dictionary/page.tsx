import React from 'react'
import WordOrigin from './word-origin'
import WordSearch from './word-search'
import WordDetail from './word-detail'
import WordCompound from './word-compound'
import WordOption from './word-option'
import WordRelated from './word-related'
import WordExample from './word-examples'

export default function Page() {
  return (
    <div className='max-w-7xl mx-auto p-12 max-md:p-4 flex flex-col gap-32'>
        <div id='word-search' ><WordSearch /></div>

        <div id='word-detail' ><WordDetail /></div>

        <div id='word-example' ><WordExample /></div>
        <div id='word-related' ><WordRelated /></div>

        <div id='word-compound' ><WordCompound /></div>

    <div id='word-origin' ><WordOrigin /></div>

    <div id='word-option' ><WordOption /></div>

    </div>
  )
}
