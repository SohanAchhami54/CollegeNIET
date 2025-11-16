export default function Hero() {
  const stats = [
    { number: '6+', title: 'Expert Faculty', icon: <AutoAwesomeIcon style={{color:"white"}} />, description: 'Industry Experience' },
    { number: '7+', title: 'Full-Time Staff', icon: <LanguageIcon style={{color:"white"}}/>, description: 'Global Universities' },
    { number: '19+', title: 'Courses Taught', icon: <ScienceIcon style={{color:"white"}}/>, description: 'Research Excellence' },
    { number: '50+', title: 'PhD Holders', icon: <LeaderboardIcon style={{color:"white"}}/>, description: 'Student Success' }
  ];

  return (
    <section id="hero" className="relative min-h-[135vh] pb-24 flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <img src="/building.jpg" alt="Building College" className="w-full h-full object-cover opacity-20 backdrop-blur-md" />
      </div>
      <div className="relative z-10 max-w-3xl">
        <Box className="inline-flex gap-2 px-4 py-2 rounded-full bg-transparent border border-blue-100 mb-6 mt-8 md:mt-10 lg:mt-12 backdrop-blur-lg bg-black/30 text-white">
          <AutoAwesomeIcon style={{color:"white"}} fontSize="small" />
          <Typography variant="body2" className="text-white">
            Expert Engineering Faculty And Staff
          </Typography>
        </Box>
        <h1 className="text-6xl md:text-8xl text-white font-bold mb-10">
          Meet Our<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expert team</span>
        </h1>
        <p className="text-xl text-blue-100 mb-10">
          Experienced educators, researchers, and administrators with PhD and Masters degrees from leading institutions. Our faculty combines academic excellence with real-world industry expertise to deliver exceptional engineering education in Nepal.
        </p>

        {/* Grid of Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="bg-transparent backdrop-blur-lg border border-white/20 p-6 rounded-lg shadow-lg mb-4 w-full text-white">
                <h2 className="text-5xl font-semibold">{stat.number}</h2>
                <p className="whitespace-nowrap">{stat.title}</p>
              </div>
              <Box className="inline-flex gap-2 px-4 py-2 rounded-full bg-transparent border border-blue-100 backdrop-blur-lg bg-black/30 whitespace-nowrap">
                {stat.icon}
                <Typography variant="body2" className="text-white">{stat.description}</Typography>
              </Box>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}