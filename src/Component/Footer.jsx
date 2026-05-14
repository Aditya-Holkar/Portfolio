export const Footer = () => (
  <div className='flex flex-col items-center gap-2 pb-8 pt-16 text-xs' style={{ color: 'var(--text-muted)' }}>
    <p>&copy; {new Date().getFullYear()} Aditya Holkar</p>
    <p>Built with React + Vite + Tailwind CSS</p>
  </div>
)
