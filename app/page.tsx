export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tinko-teal via-teal-500 to-teal-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Orange circles - matching your design */}
        <div className="absolute top-20 right-16 w-48 h-48 bg-tinko-orange rounded-full opacity-90"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-tinko-orange rounded-full opacity-80"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-tinko-orange rounded-full opacity-70"></div>
        
        {/* Green accent elements */}
        <div className="absolute top-1/4 left-12 w-28 h-28 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-green-400 rounded-full opacity-70"></div>
        <div className="absolute bottom-1/2 left-1/2 w-12 h-12 bg-green-400 transform rotate-45 opacity-60"></div>
        
        {/* Purple/blue accents */}
        <div className="absolute top-32 left-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-80"></div>
        <div className="absolute bottom-1/3 right-12 w-6 h-6 bg-blue-300 rounded-full opacity-70"></div>
        
        {/* Abstract line patterns - subtle */}
        <div className="absolute top-10 left-1/4 w-32 h-1 bg-green-300 opacity-30 transform rotate-12"></div>
        <div className="absolute top-16 left-1/4 w-24 h-1 bg-green-300 opacity-30 transform rotate-12"></div>
        <div className="absolute top-22 left-1/4 w-16 h-1 bg-green-300 opacity-30 transform rotate-12"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col justify-center min-h-screen text-center">
        
        {/* Coming Soon Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-widest">
            COMING SOON
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-white/90 tracking-wide">
            TO YOUR TOWN
          </h3>
        </div>

        {/* Main Tinko Logo Text - with rounded font styling */}
        <div className="mb-8">
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-4 leading-none"
            style={{
              fontFamily: 'ui-rounded, "SF Pro Rounded", "Helvetica Neue", Arial, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            tinko
          </h1>
        </div>

        {/* Tagline */}
        <div className="mb-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide">
            Find it. Get it. Tinko
          </h3>
        </div>

        {/* Website Domain Badge */}
        <div className="mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/30">
            <div className="w-8 h-8 bg-teal-400/80 rounded-full mr-4 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-white font-bold text-2xl">
              tinko.in
            </span>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mb-8">
          <button className="inline-block bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-black text-xl md:text-2xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl border-2 border-green-300">
            GET A SNEAK PEEK!
          </button>
        </div>

        {/* Bottom Right Tinko Branding */}
        <div className="absolute bottom-8 right-8">
          <span className="text-white/80 font-light text-2xl tracking-wide">
            tinko
          </span>
        </div>
      </div>
    </div>
  )
}