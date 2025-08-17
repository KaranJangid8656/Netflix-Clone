import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Bell, ChevronDown, Play, Info, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const categories = [
    { title: "Trending Now", movies: Array(10).fill(null) },
    { title: "Popular on Netflix", movies: Array(10).fill(null) },
    { title: "Top 10 in India Today", movies: Array(10).fill(null), showNumbers: true },
    { title: "Continue Watching", movies: Array(10).fill(null) },
    { title: "New Releases", movies: Array(10).fill(null) },
    { title: "My List", movies: Array(10).fill(null) },
  ]

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-[#141414]/90 backdrop-blur-sm transition-all duration-300">
        <div className="flex items-center justify-between px-4 py-4 md:px-12">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <svg viewBox="0 0 111 30" className="h-6 w-auto fill-[#E50914] md:h-8" aria-hidden="true">
                <g>
                  <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                </g>
              </svg>
            </Link>
            <div className="hidden space-x-6 md:flex">
              <Link href="/home" className="text-white hover:text-gray-300">
                Home
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                TV Shows
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Movies
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                New & Popular
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                My List
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer hover:text-gray-300" />
            <Bell className="h-5 w-5 cursor-pointer hover:text-gray-300" />
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="h-8 w-8 rounded bg-[#E50914]"></div>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Featured Movie"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 md:px-12">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">Stranger Things</h1>
            <p className="mb-6 text-lg md:text-xl">
              When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying
              supernatural forces, and one strange little girl.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-white text-black hover:bg-white/80 font-semibold px-8 py-3">
                <Play className="mr-2 h-5 w-5 fill-current" />
                Play
              </Button>
              <Button
                variant="secondary"
                className="bg-gray-500/70 text-white hover:bg-gray-500/50 font-semibold px-8 py-3"
              >
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="relative z-20 -mt-32 space-y-12 pb-20">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="px-4 md:px-12">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">{category.title}</h2>
            <div className="group relative">
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-4">
                {category.movies.map((_, movieIndex) => (
                  <div
                    key={movieIndex}
                    className="relative min-w-[200px] cursor-pointer transition-transform duration-300 hover:scale-105 md:min-w-[300px]"
                  >
                    {category.showNumbers && movieIndex < 10 && (
                      <div className="absolute -left-4 top-0 z-10 text-6xl font-bold text-gray-500 md:text-8xl">
                        {movieIndex + 1}
                      </div>
                    )}
                    <div className="relative aspect-video overflow-hidden rounded">
                      <Image
                        src={`/placeholder.svg?height=169&width=300&text=Movie${movieIndex + 1}`}
                        alt={`Movie ${movieIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="absolute -left-8 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70 md:flex">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="absolute -right-8 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70 md:flex">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#141414] px-4 py-16 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex space-x-6">
            <svg className="h-6 w-6 fill-gray-400" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
            <svg className="h-6 w-6 fill-gray-400" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <svg className="h-6 w-6 fill-gray-400" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            <svg className="h-6 w-6 fill-gray-400" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-400 md:grid-cols-4">
            <div className="space-y-3">
              <Link href="#" className="block hover:underline">
                FAQ
              </Link>
              <Link href="#" className="block hover:underline">
                Investor Relations
              </Link>
              <Link href="#" className="block hover:underline">
                Privacy
              </Link>
              <Link href="#" className="block hover:underline">
                Speed Test
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block hover:underline">
                Help Centre
              </Link>
              <Link href="#" className="block hover:underline">
                Jobs
              </Link>
              <Link href="#" className="block hover:underline">
                Cookie Preferences
              </Link>
              <Link href="#" className="block hover:underline">
                Legal Notices
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block hover:underline">
                Account
              </Link>
              <Link href="#" className="block hover:underline">
                Ways to Watch
              </Link>
              <Link href="#" className="block hover:underline">
                Corporate Information
              </Link>
              <Link href="#" className="block hover:underline">
                Only on Netflix
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="#" className="block hover:underline">
                Media Centre
              </Link>
              <Link href="#" className="block hover:underline">
                Terms of Use
              </Link>
              <Link href="#" className="block hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <select className="bg-transparent border border-gray-500 text-gray-400 p-2">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <p className="mt-6 text-gray-400">© 1997-2024 Netflix, Inc.</p>
        </div>
      </footer>
    </div>
  )
}
