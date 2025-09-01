export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-tinko-teal via-tinko-teal to-teal-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Orange circles */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-tinko-orange rounded-full opacity-80"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-tinko-orange rounded-full opacity-70"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-tinko-orange rounded-full opacity-60"></div>
        
        {/* Green accent circles */}
        <div className="absolute top-1/3 left-10 w-20 h-20 bg-green-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-green-400 rounded-full opacity-60"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-20 left-1/4 w-8 h-8 bg-yellow-300 transform rotate-45 opacity-70"></div>
        <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col justify-center min-h-screen">
        {/* Coming Soon Text */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
            COMING SOON
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-white/90 mb-8">
            TO YOUR TOWN
          </h3>
        </div>

        {/* Logo Section with Shopping Bag */}
        <div className="text-center mb-12 relative">
          {/* Shopping bag icon */}
          <div className="inline-block mb-6">
            <div className="relative">
              {/* Bag shape */}
              <div className="w-32 h-40 bg-gradient-to-b from-purple-600 to-purple-800 rounded-t-3xl rounded-b-lg relative mx-auto">
                {/* Bag handles */}
                <div className="absolute -top-3 left-6 w-8 h-8 border-4 border-purple-600 rounded-full bg-transparent"></div>
                <div className="absolute -top-3 right-6 w-8 h-8 border-4 border-purple-600 rounded-full bg-transparent"></div>
                
                {/* Tinko text overlay on bag */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-2xl tracking-wider">
                    ti
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Tinko Text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight">
            tinko
          </h1>
        </div>

        {/* Tagline */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Find it. Get it. Tinko
          </h3>
        </div>

        {/* Domain */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="w-8 h-8 bg-white/20 rounded-full mr-3 flex items-center justify-center">
              <span className="text-white text-sm">🌐</span>
            </div>
            <span className="text-white font-semibold text-xl">
              tinko.in
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-green-500 text-white font-bold text-xl md:text-2xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer">
            GET A SNEAK PEEK!
          </div>
        </div>

        {/* Bottom branding */}
        <div className="absolute bottom-8 right-8">
          <span className="text-white/60 font-light text-lg">
            tinko
          </span>
        </div>
      </div>
    </div>
  )
}