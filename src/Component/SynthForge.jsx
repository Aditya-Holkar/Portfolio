import { memo } from 'react'
import { Button } from './Button'
import { projectsData } from '../Data/ProjectsData'

const aiProjects = projectsData.filter(p => p.category === 'ai')

export const SynthForge = memo(() => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex flex-row gap-4 max-md:flex-col'>
        <div className='section-label flex-1 text-xs font-medium uppercase tracking-widest'>
          Category
        </div>
        <div className='flex flex-[5] flex-col gap-2'>
          <h1 className='text-4xl font-bold tracking-tight'>SynthForge</h1>
          <p className='max-w-2xl text-sm leading-relaxed' style={{ color: 'var(--text-muted)' }}>
            AI-augmented projects — powered by LLMs, vector search, and intelligent automation.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-15'>
        {aiProjects.map((params, idx) => (
          <div
            key={idx}
            className='flex flex-row border-t-2 p-[28px_8px_0px_8px] max-md:flex-col'
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div className='flex w-1/3 flex-col gap-5'>
              {params.lst.map((item, itemIdx) => (
                <div key={itemIdx}>
                  <div
                    className='text-xs font-medium uppercase tracking-widest'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.label}
                  </div>
                  <div className='mt-0.5 text-sm font-bold'>{item.value}</div>
                </div>
              ))}
            </div>

            <div className='flex w-full flex-col gap-5'>
              {params.proj.map((project, projectIdx) => (
                <div key={projectIdx} className='flex flex-col gap-4'>
                  <div className='w-full h-[220px] rounded-lg flex items-center justify-center p-4' style={{ backgroundColor: project.bg || '#0d0d0d' }}>
                    <img
                      src={project.img}
                      alt=''
                      className='h-full w-full object-contain'
                    />
                  </div>
                  <div className='flex flex-row gap-4 text-2xl max-md:flex-col'>
                    <div className='font-bold'>{project.title}</div>
                    {project.lnk ? (
                      <a
                        href={project.lnk}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Button>
                          <span className='font-bold'>View</span>
                        </Button>
                      </a>
                    ) : (
                      <Button>
                        <span className='cursor-not-allowed font-bold opacity-50'>
                          View (Unavailable)
                        </span>
                      </Button>
                    )}
                  </div>
                  <div
                    className='text-sm leading-relaxed'
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {project.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
