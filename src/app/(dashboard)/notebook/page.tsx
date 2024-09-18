import React from 'react'
import NotebookGrid from './notebook-grid'
import NotebookList from './notebook-list'

export default function NotebookPage() {
  return (
    <div className='flex flex-col gap-12'>
      
      {/* <h2 className="max-w-5xl pl-4 text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">Recently Active</h2> */}
      <NotebookGrid/>
      
      {/* <h2 className="max-w-5xl pl-4 text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans"><span className="text-ai">All</span> Notebooks</h2> */}
      <NotebookList/>
      

    </div>
  )
}
