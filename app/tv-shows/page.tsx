"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Bell, ChevronDown, Play, Info, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// Helper function to get image src for each card
function getTvShowImageSrc(categoryIndex: number, showIndex: number) {
  // Popular TV Shows
  if (categoryIndex === 0) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623256/wlife_xxfg94.webp";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755622997/friends_trd4j8.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755622749/bb_mjeuhv.webp";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755695275/All-Of-Us-Are-Dead-on-Netflix-1_haoxvy.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755696871/love_next_door_kut2eo.webp";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755538202/new-wednesday-season-2-banner_zew3wj.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755695411/glory_whdk97.webp";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755694828/vincenzo_vfkudz.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755697522/weak_hero_wyobco.webp";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755696152/train_v0rwss.jpg";
  }
  // New Releases
  if (categoryIndex === 1) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756017592/thug_life_wzpc3b.webp";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756017706/demon_city_ina9uh.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755534729/mandala_m_efgvdi.jpg";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018738/deva_lqud87.webp";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756018897/vida_cya2lc.jpg";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537500/jaat-ott_ibq8bj.webp";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756019602/makehp_p6txc7.webp";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537148/kung-fu-panda-4-2560x1440-15545_owz398.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756020267/theamateur_pqbtsc.jpg";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755624058/sg_b3atsg.jpg";
  }
  // Top 10 TV Shows
  if (categoryIndex === 2) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755689180/oethb_caa9gl.avif";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536232/kpop_vls2vq.jpg";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690502/1752355417884_rmn951.png";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690604/Thammudu_gurtag.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690756/hit_chl1je.jpg";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755690963/Kathal_1-1_f4f1wa.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755691082/maxresdefault_m4hwok.jpg";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755623846/pushpa_wmi80g.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536779/one_piece_zionu0.webp";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755536956/Chhaava-m2-1_xbuund.jpg";
  }
  // Action & Adventure
  if (categoryIndex === 3) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756020920/my-hero-academia-season-7_jbncmu.webp";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021182/jujutsu_rfa1o5.webp";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021305/black_bz0ctu.webp";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756021692/demon-slayer-anime-to-the-swordsmith-village-05crqo0e0fzkql5q_beuolo.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756022662/Chainsaw_Man_.Promo_Poster_m8kaol.png";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023007/vinalndsaga_kemcaw.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023304/tokyo_fvrtxt.jpg";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1756023484/ship_c9eyef.jpg";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537500/jaat-ott_ibq8bj.webp";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755537148/kung-fu-panda-4-2560x1440-15545_owz398.jpg";
  }
  // Comedies
  if (categoryIndex === 4) {
    if (showIndex === 0) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755622997/friends_trd4j8.jpg";
    if (showIndex === 1) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755879038/Lady-Gaga-A-Star-Is-Born-Soundtrack_h7965s.webp";
    if (showIndex === 2) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755880302/saiyaara_pxoh7r.avif";
    if (showIndex === 3) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755879293/Bridgerton-Netflix_ptdfbd.jpg";
    if (showIndex === 4) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755879636/little_eldhzf.jpg";
    if (showIndex === 5) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755879203/Nevertheless-Banniere-800x445_udjdqv.jpg";
    if (showIndex === 6) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755880541/laila_majnu_zojray.jpg";
    if (showIndex === 7) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755880709/zero_yotqpa.webp";
    if (showIndex === 8) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755880869/pers_xpnfeu.jpg";
    if (showIndex === 9) return "https://res.cloudinary.com/dx9bvma03/image/upload/v1755624058/sg_b3atsg.jpg";
  }
  
  return "https://via.placeholder.com/300x169?text=TV+Show"
}

interface Category {
  title: string
  shows: null[]
  showNumbers?: boolean
}

export default function TvShowsPage() {
  const [isMuted, setIsMuted] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const categories: Category[] = [
    { title: "Popular on Netflix", shows: Array(10).fill(null) },
    { title: "New Releases", shows: Array(10).fill(null) },
    { title: "Top 10 TV Shows in India Today", shows: Array(10).fill(null), showNumbers: true },
    { title: "Action & Adventure", shows: Array(10).fill(null) },
    { title: "Comedies", shows: Array(10).fill(null) },
    { title: "Dramas", shows: Array(10).fill(null) },
    { title: "Crime TV Shows", shows: Array(10).fill(null) },
    { title: "Reality TV", shows: Array(10).fill(null) },
  ]

  const handleHeroEnter = () => {
    setIsHovered(true)
  }

  const handleHeroLeave = () => {
    setIsHovered(false)
  }

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
              <Link href="/home" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/tv-shows" className="text-white font-semibold hover:text-gray-300">
                TV Shows
              </Link>
              <Link href="/movies" className="text-gray-300 hover:text-white">
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
      <div className="relative h-screen group mt-[1.2cm]" onMouseEnter={handleHeroEnter} onMouseLeave={handleHeroLeave}>
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dx9bvma03/image/upload/v1755623256/wlife_xxfg94.webp"
            alt="The Witcher"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 md:px-12">
          <div className="max-w-2xl pt-28 md:pt-40 lg:pt-48 -mt-[1.5cm]">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">The Witcher</h1>
            <p className="mb-6 text-lg md:text-xl">
              Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.
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
      <div className="relative z-20 -mt-[calc(8rem+1cm)] space-y-12 pb-20">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="px-4 md:px-12">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">{category.title}</h2>
            <div className="group relative">
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
                {category.shows.map((_, showIndex) => (
                  <div
                    key={showIndex}
                    className={`relative min-w-[200px] cursor-pointer md:min-w-[300px] group transition-transform duration-300 hover:scale-105${showIndex === 0 ? ' ml-6 md:ml-12' : ''}`}
                  >
                    {category.showNumbers && showIndex < 10 && (
                      <div className={`absolute -left-4 top-0 z-10 text-6xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-8xl stroke-1 stroke-black [-webkit-text-stroke:1px_black]`}>
                        {showIndex + 1}
                      </div>
                    )}
                    <div className="relative aspect-video overflow-hidden rounded">
                      <Image
                        src={getTvShowImageSrc(categoryIndex, showIndex)}
                        alt={`TV Show ${showIndex + 1}`}
                        fill
                        className="object-cover"
                        priority={showIndex < 3}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
