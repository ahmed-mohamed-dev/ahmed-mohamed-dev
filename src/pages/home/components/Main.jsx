import React from 'react'


export default function Main({
  content,
  sliders,
  setSelected,
  selected
}) {
  return (
    <main className='gap-[10%] projects-overview'>
      <div className='basis-3/5 main-message'>
        {content.domElement}
      </div>
      <div className='basis-1/6 main-projects'>
        <h2>Projects</h2>
        <div className='project-wrapper'>
          <div>

            {sliders.slice(1).map((v, index) => (
              <a rel="noreferrer" target="_blank" href='https://autoninjas.com' onClick={(e) => {
                e.preventDefault()
                setSelected(selected === index + 1 ? 0 : index + 1)
              }}>
                <span>{v.projectName}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main >
  )
}
