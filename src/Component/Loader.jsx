export const Loader = ({ full, inline }) => {
  const w = full ? 'fixed inset-0 z-50 flex items-center justify-center' : ''
  const i = inline ? 'inline-flex' : 'flex'
  return (
    <div className={`${w} ${i} items-center justify-center gap-1.5`} style={{ backgroundColor: full ? 'var(--bg)' : 'transparent' }}>
      {[0, 1, 2].map((d) => (
        <span key={d} className='spn-dot' style={{ animationDelay: `${d * 0.15}s` }} />
      ))}
    </div>
  )
}
