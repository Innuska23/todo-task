const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-10 sm:py-6">
      <h1
        className="text-center text-4xl font-bold tracking-tight sm:text-6xl"
        style={{
          backgroundImage: 'linear-gradient(to right, #d3d3d3, #000000)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          textTransform: 'uppercase'
        }}
      >
        Todo List
      </h1>
    </div>
  )
}

export default Header
