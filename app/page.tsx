"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Sun, Linkedin, Instagram, Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Description } from "@radix-ui/react-dialog"

const categories = [
  "Home",
  "Abstract",
  "Character",
  "Environment",
  "Game Design",
  "Gif",
  "Lightsout",
  "Product Design",
  "Prompt",
]

const projects = {
  Home: [],
  Abstract: [
    {
      id: 1,
      items: [
        {
          type: "video",
          src:"/assets/abstract/abstract_anim.mp4",
        },

      ],
      title: "Ball and Cloth",
      description: "Amazing nigaball w cloth",
      orientation: "vertical",
    },
    {
      id: 2,
      items: [
        {
          type: "video",
          src:"/assets/abstract/abstract_anim2.mov",
        },

      ],
      title: "Abstract",
      description: "IDK What the fuck is this :P",
      orientation: "vertical",
    },
    {
      id: 3,
      items: [
        {
          type: "video",
          src:"/assets/abstract/abstract_balls.mp4",
        },

      ],
      title: "Balls Dropping",
      description: "Squid Game PUHAHAHA",
      orientation: "vertical",
    },
    {
      id: 4,
      items: [
        {
          type: "video",
          src:"/assets/abstract/abstract_wallpaper_loop.mp4",
        },

      ],
      title: "Wallpaper",
      description: "Fkn Matrix vibes",
      orientation: "vertical",
    },
  ],
  Character: [
    {
      id: 5,
      items: [
        {
          type: "image",
          src:"/assets/character/character_goblin1.jpg",
        },
        {
          type: "image",
          src: "/assets/character/character_goblin2.jpg",
        },
        {
          type: "image",
          src: "/assets/character/character_goblin3.jpg",
        },
      ],
      title: "Goblin Character",
      description:
        "3D rendered fantasy goblin character collection with detailed textures, crown accessory, and multiple color variants in forest environment.",
      orientation: "vertical",
    },
    {
      id: 6,
      items: [
        {
          type: "image",
          src: "/assets/character/character_mahmutcan.png",
        },
      ],
      title: "Mahmutcan",
      description: "Colorful 3D character design with blue spiky hair and vibrant clothing on clean background.",
      orientation: "vertical",
    },
    {
      id: 7,
      items: [
        {
          type: "video",
          src: "/assets/character/character_robot.mp4",
        },
      ],
      title: "Robot Character",
      description: "Animated robot character with dynamic movement and mechanical design elements.",
      orientation: "vertical",
    },
  ],
  Environment: [
    {
      id: 8,
      items: [
        {
          type: "video",
          src: "/assets/environment/environment_arcrender.mp4",
        },
      ],
      title: "Coastal Paradise",
      description:
        "Stunning rocky coastal environment with turquoise waters, dramatic rock formations, and architectural elements in bright daylight.",
      orientation: "horizontal",
    },
    {
      id: 9,
      items: [
        {
          type: "video",
          src: "/assets/environment/environment_ocean.mp4",
        },
      ],
      title: "Stormy Seas",
      description:
        "Dramatic cargo ship scene in turbulent ocean waters with moody lighting, rain effects, and atmospheric tension.",
      orientation: "horizontal",
    },
    {
      id: 10,
      items: [
        {
          type: "video",
          src: "/assets/environment/environment_bardforest.mp4",
        },
      ],
      title: "Bard Forest",
      description:
        "Nostalgic scene with classic Coca-Cola signage, vintage automobile, and retro gas station atmosphere with warm tones.",
      orientation: "horizontal",
    },
    {
      id: 11,
      items: [
        {
          type: "video",
          src: "/assets/environment/environment_vfx.mp4",
        },
      ],
      title: "VFX",
      description: "VFX",
      orientation: "horizontal",
    },
    {
      id: 12,
      items: [
        {
          type: "image",
          src: "/assets/environment/environment_1.png",
        },
      ],
      title: "MOAI",
      description:
        "MOAI",
      orientation: "horizontal",
    },
    {
      id: 13,
      items: [
        {
          type: "image",
          src: "/assets/environment/environment_dabbe.png",
        },
      ],
      title: "Dabbe",
      description:
        "Dabbe!",
      orientation: "horizontal",
    },
    {
      id: 14,
      items: [
        {
          type: "image",
          src: "/assets/environment/environment_oda.png",
        },
      ],
      title: "Music Studio",
      description:
        "Warm interior environment featuring piano, guitars, vintage furniture, and atmospheric lighting in a creative space.",
      orientation: "horizontal",
    },

  ],
  "Game Design": [
    {
      id: 15,
      items: [
        {
          type: "video",
          src: "/assets/gamedesign/gamedesign_lowlight_anim-1.mp4",
        },
      ],
      title: "Lowlight Game",
      description: "Lowlight",
      orientation: "vertical",
    },
    {
      id: 16,
      items: [
        {
          type: "video",
          src: "/assets/gamedesign/gamedesign_lowlight_anim-2.mp4",
        },
      ],
      title: "Lowlight Game",
      description: "Lowlight",
      orientation: "vertical",
    },
    {
      id: 17,
      items: [
        {
          type: "image",
          src: "/assets/gamedesign/gamedesign_lowlight_photo.jpg",
        },
      ],
      title: "Lowlight Game",
      description: "Lowlight",
      orientation: "vertical",
    },
  ],
  Gif: [
    {
      id: 18,
      items: [
        {
          type: "video",
          src: "/assets/gif/gif_dayi.mp4",
        },
      ],
      title: "Dayi Animation",
      description: "Animated character sequence with smooth motion and dynamic presentation.",
      orientation: "vertical",
    },
    {
      id: 19,
      items: [
        {
          type: "video",
          src: "/assets/gif/gif_dayi2.mp4",
        },
      ],
      title: "Dayi Animation 2",
      description: "Second animated sequence featuring character movement and expressive animation.",
      orientation: "vertical",
    },
    {
      id: 20,
      items: [
        {
          type: "video",
          src: "/assets/gif/gif_amcas1.mp4",
        },
      ],
      title: "Amcas Animation 1",
      description: "Second animated sequence featuring character movement and expressive animation.",
      orientation: "vertical",
    },
    {
      id: 21,
      items: [
        {
          type: "video",
          src: "/assets/gif/gif_amcas.mp4",
        },
      ],
      title: "Amcas Animation 2",
      description: "Second animated sequence featuring character movement and expressive animation.",
      orientation: "vertical",
    },
    {
      id: 22,
      items: [
        {
          type: "video",
          src: "/assets/gif/gif_karakter5.mp4",
        },
      ],
      title: "Character Animation",
      description: "Second animated sequence featuring character movement and expressive animation.",
      orientation: "vertical",
    },
  ],
  Lightsout: [
    {
      id: 23,
      items: [
        {
          type: "image",
          src: "/assets/lightstout/ligthsout_poster2.png",
        },
      ],
      title: "Poster",
      description: "Poster",
      orientation: "horizontal",
    },
    {
      id: 24,
      items: [
        {
          type: "image",
          src: "/assets/lightstout/lighstout_storyboard.png",
        },
      ],
      title: "Storyboard",
      description: "Storyboard",
      orientation: "horizontal",
    },
    {
      id: 25,
      items: [
        {
          type: "image",
          src: "/assets/lightstout/ligthsout_karakter1.png",
        },
      ],
      title: "Character Design",
      description: "Character Design",
      orientation: "horizontal",
    },
    {
      id: 26,
      items: [
        {
          type: "image",
          src: "/assets/lightstout/lightsout_mekan1r.png",
        },
        {
          type: "image",
          src: "/assets/lightstout/ligthsout_mekan1s.png",
        },
        {
          type: "image",
          src: "/assets/lightstout/ligthsout_mekan2r.png",
        },
        {
          type: "image",
          src: "/assets/lightstout/ligthsout_mekan2s.png",
        },
      ],
      title: "Environment",
      description: "Environment",
      orientation: "horizontal",
    },
    
  ],
  "Product Design": [
    {
      id: 27,
      items: [
        {
          type: "image",
          src: "/assets/product/product_phone1.png",
        },
        {
          type: "image",
          src: "/assets/product/product_phone2.png",
        },
      ],
      title: "MOCHA PHONE 107",
      description: "Yellow smartphone product photography collection with clean angles and creative styling.",
      orientation: "vertical",
    },
    {
      id: 28,
      items: [
        {
          type: "video",
          src: "/assets/product/product_hhpvid.mp4",
        },
      ],
      title: "NIKE HeadPhones AD",
      description:
        "High-end headphones and modern design collection featuring elegant aesthetics with dark green, beige, and geometric elements.",
      orientation: "vertical",
    },
    {
      id: 29,
      items: [
        {
          type: "image",
          src: "/assets/product/product_hhp1.png",
        },
        {
          type: "image",
          src: "/assets/product/product_hhhpp2.png",
        },
      ],
      title: "NIKE HeadPhones",
      description:
        "High-end headphones and modern design collection featuring elegant aesthetics with dark green, beige, and geometric elements.",
      orientation: "vertical",
    },
    {
      id: 30,
      items: [
        {
          type: "video",
          src: "/assets/product/product_karadutvid.mp4",
        },
      ],
      title: "KARADUT AD",
      description:
        "Premium black mulberry juice packaging designs with creative beverage photography, floating fruits, and nutritional branding.",
      orientation: "vertical",
    },
    {
      id: 31,
      items: [
        {
          type: "image",
          src: "/assets/product/product_karadut1.png",
        },
        {
          type: "image",
          src: "/assets/product/product_karadut2.png",
        },
        {
          type: "image",
          src: "/assets/product/product_karadut3.png",
        },
      ],
      title: "KARADUT",
      description:
        "Premium black mulberry juice packaging designs with creative beverage photography, floating fruits, and nutritional branding.",
      orientation: "vertical",
    },
  ],
  Prompt: [
    {
      id: 32,
      items: [
        {
          type: "video",
          src: "/assets/prompt/prompt_book.mp4",
        },
      ],
      title: "Book",
      description: "book",
      orientation: "vertical",
    },
    {
      id: 33,
      items: [
        {
          type: "video",
          src: "/assets/prompt/prompt_sword.mp4",
        },
      ],
      title: "Sword",
      description: "Sword",
      orientation: "vertical",
    },
    {
      id: 34,
      items: [
        {
          type: "video",
          src: "/assets/prompt/prompt_bloody.mp4",
        },
      ],
      title: "Bloody",
      description: "bloody",
      orientation: "vertical",
    },
    {
      id: 35,
      items: [
        {
          type: "video",
          src: "/assets/prompt/prompt_hamburger.mp4",
        },
      ],
      title: "Hamburger",
      description: "hamburger",
      orientation: "vertical",
    },
    {
      id: 36,
      items: [
        {
          type: "video",
          src: "/assets/prompt/prompt_kutu.mp4",
        },
      ],
      title: "Box",
      description: "box",
      orientation: "vertical",
    },
    {
      id: 37,
      items: [
        {
          type: "video",
          src: "/assets/prompt/prompt_coin.mp4",
        },
      ],
      title: "Coin",
      description: "coin",
      orientation: "vertical",
    },
    {
      id: 38,
      items: [
        {
          type: "image",
          src: "/assets/prompt/prompt_minimidikeyboard2.jpg",
        },
        {
          type: "image",
          src: "/assets/prompt/prompt_minimidikeyboard1.jpg",
        },
        {
          type: "image",
          src: "/assets/prompt/prompt_minimidikeyboard3.jpg",
          orientation: "horizontal",
        },
      ],
      title: "MIDI Keyboard",
      description: "MIDI",
      orientation: "vertical",
    },
    {
      id: 39,
      items: [
        {
          type: "image",
          src: "/assets/prompt/prompt_sunsworda.png",
        },
        {
          type: "image",
          src: "/assets/prompt/prompt_sunsworda2.png",
        },
        {
          type: "image",
          src: "/assets/prompt/prompt_sunsworda2solid.png",
        },
      ],
      title: "Sunsword",
      description: "Sunsword",
      orientation: "vertical",
    },
    {
      id: 40,
      items: [
        {
          type: "image",
          src: "/assets/prompt/prompt_sword1.png",
        },
        {
          type: "image",
          src: "/assets/prompt/prompt_sword1wire.png",
        },
        {
          type: "image",
          src: "/assets/prompt/prompt_sword2.png",
        },
      ],
      title: "Sword",
      description: "Sunsword",
      orientation: "vertical",
    }, 
  ],
}

function VideoPlayer({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover cursor-pointer"
      autoPlay
      loop
      muted
      playsInline
      onClick={handleVideoClick}
      aria-label={`${title} - Click to ${isPlaying ? "pause" : "play"}`}
    />
  )
}

function TiledPreview({ items }: { items: Array<{ type: string; src: string }> }) {
  if (items.length === 1) {
    const item = items[0]
    if (item?.type === "video") {
      return <VideoPlayer src={item.src} title="Preview" />
    }
    return <img src={item?.src || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
  }

  if (items.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-0.5 w-full h-full">
        {items.map((item, idx) =>
          item.type === "video" ? (
            <div key={idx} className="w-full h-full">
              <VideoPlayer src={item.src} title={`Preview ${idx + 1}`} />
            </div>
          ) : (
            <img
              key={idx}
              src={item.src || "/placeholder.svg"}
              alt={`Preview ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          ),
        )}
      </div>
    )
  }

  if (items.length === 3) {
    return (
      <div className="grid grid-rows-2 gap-0.5 w-full h-full">
        <div className="grid grid-cols-2 gap-0.5">
          {items.slice(0, 2).map((item, idx) =>
            item.type === "video" ? (
              <div key={idx} className="w-full h-full">
                <VideoPlayer src={item.src} title={`Preview ${idx + 1}`} />
              </div>
            ) : (
              <img
                key={idx}
                src={item.src || "/placeholder.svg"}
                alt={`Preview ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            ),
          )}
        </div>
        {items[2]?.type === "video" ? (
          <div className="w-full h-full">
            <VideoPlayer src={items[2].src} title="Preview 3" />
          </div>
        ) : (
          <img src={items[2]?.src || "/placeholder.svg"} alt="Preview 3" className="w-full h-full object-cover" />
        )}
      </div>
    )
  }

  // 4 or more items: 2x2 grid
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-full h-full">
      {items.slice(0, 4).map((item, idx) =>
        item.type === "video" ? (
          <div key={idx} className="w-full h-full">
            <VideoPlayer src={item.src} title={`Preview ${idx + 1}`} />
          </div>
        ) : (
          <img
            key={idx}
            src={item.src || "/placeholder.svg"}
            alt={`Preview ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        ),
      )}
    </div>
  )
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Home")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null)

  const allProjects = projects[selectedCategory as keyof typeof projects] || []

  const handleProjectClick = (projectId: number, hasMultipleItems: boolean) => {
    if (hasMultipleItems) {
      setExpandedProjectId(expandedProjectId === projectId ? null : projectId)
    }
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Theme Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 z-50 h-8 w-8"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        {/* Mobile Menu Toggle */}
        <div className="fixed top-4 left-4 z-50 lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="relative p-2">
            <div
              className={`absolute inset-0 rounded-lg p-[2px] ${
                isDarkMode
                  ? "bg-gradient-to-r from-black via-gray-400 to-white"
                  : "bg-gradient-to-r from-white via-gray-400 to-black"
              }`}
            >
              <div className="w-full h-full bg-background rounded-lg" />
            </div>
            <div className="relative">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </div>
          </button>
        </div>

        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside
            className={`
              fixed lg:static inset-y-0 left-0 z-40
              w-64 p-8 flex flex-col
              transition-transform duration-300 lg:translate-x-0
              ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
              bg-background
            `}
            style={{
              borderRight: isDarkMode ? "1px solid #000000" : "1px solid oklch(0.922 0 0)",
            }}
          >
            {/* Profile */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border">
                  <img
                    src="/assets/pp.jpg"
                    alt="Şafak Düvenci"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory("Home")
                    setIsMobileMenuOpen(false)
                    setExpandedProjectId(null)
                  }}
                  className="relative group"
                  aria-label="Home"
                >
                  {selectedCategory === "Home" && (
                    <div
                      className={`absolute inset-0 rounded-lg p-[2px] ${
                        isDarkMode
                          ? "bg-gradient-to-r from-black via-gray-400 to-white"
                          : "bg-gradient-to-r from-white via-gray-400 to-black"
                      }`}
                    >
                      <div className="w-full h-full bg-background rounded-lg" />
                    </div>
                  )}
                  <div
                    className={`relative p-3 rounded-lg transition-colors ${
                      selectedCategory === "Home" ? "" : "hover:bg-accent/30"
                    }`}
                  >
                    <Home className="h-6 w-6" />
                  </div>
                </button>
              </div>

              {/* Category Menu */}
              <nav className="space-y-2">
                {categories
                  .filter((cat) => cat !== "Home")
                  .map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category)
                        setIsMobileMenuOpen(false)
                        setExpandedProjectId(null)
                      }}
                      className="relative w-full text-left group"
                    >
                      {selectedCategory === category && (
                        <div
                          className={`absolute inset-0 rounded-lg p-[3px] ${
                            isDarkMode
                              ? "bg-gradient-to-r from-black via-gray-400 to-white"
                              : "bg-gradient-to-r from-white via-gray-400 to-black"
                          }`}
                        >
                          <div className="w-full h-full bg-background rounded-lg" />
                        </div>
                      )}
                      <motion.div
                        animate={{
                          x: selectedCategory === category ? 8 : 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className={`relative flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category ? "" : "hover:bg-accent/30"
                        }`}
                      >
                        <span className={`text-sm ${selectedCategory === category ? "font-medium" : ""}`}>
                          {selectedCategory === category ? "◉ " : "○ "}
                          {category}
                        </span>
                      </motion.div>
                    </button>
                  ))}
              </nav>
            </div>

            {/* Social Icons */}
            <div className="mt-auto">
              <div
                className={`relative rounded-lg p-[2px] ${
                  isDarkMode
                    ? "bg-gradient-to-b from-white via-gray-500 to-black"
                    : "bg-gradient-to-b from-black via-gray-500 to-white"
                }`}
              >
                <div className="bg-background rounded-lg p-3">
                  <div className="flex justify-around items-center gap-2">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-accent rounded-lg transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://artstation.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-accent rounded-lg transition-colors"
                      aria-label="ArtStation"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 6.728 2.565 14.286h10.306z" />
                      </svg>
                    </a>
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-accent rounded-lg transition-colors"
                      aria-label="Discord"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-accent rounded-lg transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
          )}

          {/* Main Content */}
          <main className="flex-1 p-6 lg:p-12">
            {/* Header */}
            <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-8 lg:mb-12">Mustafa Şafak Düvenci</h1>

            {selectedCategory === "Home" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-center items-center"
              >
                <div className="w-full max-w-5xl aspect-video rounded-lg overflow-hidden border border-border shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jrJtd-Izb8M?autoplay=1&loop=1&playlist=jrJtd-Izb8M&mute=1&controls=1"
                    title="Portfolio Showreel"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <h2 className="text-xl lg:text-2xl font-medium mt-6 text-center">2024 Blender ShowReel</h2>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
                >
                  {allProjects.map((project: any, index) => {
                    const hasMultipleItems = project.items.length > 1
                    const isExpanded = expandedProjectId === project.id
                    const aspectRatio = project.orientation === "horizontal" ? "aspect-[16/9]" : "aspect-[3/4]"

                    if (hasMultipleItems && isExpanded) {
                      return project.items.map((item: any, itemIndex: number) => (
                        <motion.div
                          key={`${project.id}-${itemIndex}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          className="group"
                        >
                          <div
                            className={`relative ${aspectRatio} rounded-lg overflow-hidden bg-muted mb-4 border border-border cursor-pointer`}
                            onClick={() => handleProjectClick(project.id, hasMultipleItems)}
                          >
                            {item.type === "video" ? (
                              <VideoPlayer src={item.src} title={`${project.title} ${itemIndex + 1}`} />
                            ) : (
                              <img
                                src={item.src || "/placeholder.svg"}
                                alt={`${project.title} ${itemIndex + 1}`}
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>
                          <h3 className="text-base lg:text-lg font-medium mb-2">
                            {project.title} {itemIndex + 1}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                        </motion.div>
                      ))
                    }

                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group"
                      >
                        <div
                          className={`relative ${aspectRatio} rounded-lg overflow-hidden bg-muted mb-4 border border-border ${
                            hasMultipleItems ? "cursor-pointer" : ""
                          }`}
                          onClick={() => handleProjectClick(project.id, hasMultipleItems)}
                        >
                          <TiledPreview items={project.items} />
                        </div>
                        <h3 className="text-base lg:text-lg font-medium mb-2">
                          {project.title}
                          {hasMultipleItems && (
                            <span className="text-xs ml-2 text-muted-foreground">({project.items.length})</span>
                          )}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
