import { memo } from 'react'
import { Button } from './Button'

const dj = [
  {
    lst: [
      { label: 'Name', value: 'Capslock Design System' },
      { label: 'Role', value: 'Frontend Design System Engineer' },
      {
        label: 'Scope',
        value: 'Component Library, Architecture, Scalability'
      },
      { label: 'Date', value: '2025' }
    ],
    proj: [
      {
        img: 'https://capslock.studio/logo.svg',
        title: 'High-Impact Component Architecture',
        description:
          'Built 50+ reusable React components with Tailwind CSS, refactored legacy code into modular architecture, and ensured full responsiveness.',
        lnk: ''
      }
    ]
  },
  {
    lst: [
      { label: 'Name', value: 'Capslock Data Studio' },
      { label: 'Role', value: 'Full Stack Developer' },
      {
        label: 'Scope',
        value: 'API Integration, Database Management, State Management'
      },
      { label: 'Date', value: '2025' }
    ],
    proj: [
      {
        img: 'https://capslock.studio/products/data-studio.svg',
        title: 'Data Integration & API Architecture',
        description:
          'Integrated REST APIs and handled data fetching, state management, and error handling across applications. Implemented Supabase and Neon DB integrations for real-time data and serverless PostgreSQL workflows.',
        lnk: 'https://email-validation-kappa.vercel.app/'
      }
    ]
  },
  {
    lst: [
      { label: 'Name', value: 'Capslock Studios' },
      { label: 'Role', value: 'Product/Website Maintenance' },
      {
        label: 'Scope',
        value: 'UI Maintenance, Production Support, Frontend Optimization'
      },
      { label: 'Date', value: '2025' }
    ],
    proj: [
      {
        img: 'https://capslock.studio/logo.svg',
        title: 'Production Website Maintenance',
        description:
          'Maintained UI and frontend functionality for 5+ production websites.',
        lnk: ''
      }
    ]
  },
  {
    lst: [
      { label: 'Name', value: 'TradeIntel' },
      { label: 'Role', value: 'Frontend Developer' },
      {
        label: 'Scope',
        value:
          'UI Development, Theme System, Responsive Design, Dark/Light Mode'
      },
      { label: 'Date', value: '2026' }
    ],
    proj: [
      {
        img: '/tradeintel-og.svg',
        title: 'Import/Export Intelligence Platform',
        description:
          'Built a modern React + Vite SPA for global trade intelligence — featuring dark/light theme system, responsive layout, and component-driven architecture with Tailwind CSS v4.',
        lnk: 'https://tradeintels.netlify.app/'
      }
    ]
  },
  {
    lst: [
      { label: 'Name', value: 'UniSearch' },
      { label: 'Role', value: 'Frontend Developer' },
      {
        label: 'Scope',
        value:
          'Full-Stack SPA, Search & Filter, Favorites System, API Integration, Theme System'
      },
      { label: 'Date', value: '2026' }
    ],
    proj: [
      {
        img: '/unisearch-og.svg',
        title: 'University Discovery Platform',
        description:
          'Built a React + Vite SPA for discovering universities worldwide — integrated Hipolabs Universities API (15,000+ institutions), implemented country-based search with table/card views, favorites with localStorage persistence, dark/light theme toggle, CSV export, visitor analytics, and responsive design with Tailwind CSS v4 + DaisyUI.',
        lnk: 'https://uni-search-tau.vercel.app/'
      }
    ]
  }
]

export const Fifth = memo(() => {
  return (
    <div className='flex flex-row gap-4 max-md:flex-col max-md:gap-0'>
      <div className='section-label flex-1 text-xs font-medium uppercase tracking-widest'>
        Key Project
      </div>
      <div className='flex flex-5 flex-col gap-15'>
        {dj.map((params, idx) => (
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
                  <div className='w-full h-[220px] rounded-lg bg-[#0d0d0d] flex items-center justify-center p-4'>
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
