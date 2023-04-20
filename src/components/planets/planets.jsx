let planets = [
  {
    photo:
      "https://cdn.britannica.com/05/110305-050-42CA686B/Mercury-Wide-Angle-Messenger-probe-hemisphere-image-Jan-14-2008.jpg",
    name: "Mercury",
    nickname: "The Swift Planet",
    distance: 57900000,
    diameter: 4880,
    moons: 0,
    dayLength: "59 Earth Days",
    yearLength: "88 Earth Days",
    bio: "Mercury is the smallest and innermost planet in our solar system. It is named after the Roman messenger god, Mercury. With a diameter of about 4,880 kilometers, it is about one-third the size of Earth. Mercury has a rocky terrain with a heavily cratered surface, similar to the Moon. It experiences extreme temperatures ranging from -173°C to 427°C due to its close proximity to the Sun. Mercury has a very thin atmosphere and a weak magnetic field. Its highly eccentric orbit around the Sun takes approximately 88 Earth days to complete, while it rotates once on its axis in just 59 Earth days. The planet has been visited by two spacecraft, Mariner 10 and MESSENGER, providing valuable insights into its geology, composition, and magnetic field.",
  },
  {
    photo:
      "https://planetary.s3.amazonaws.com/image/VENUS_HQ_MOSAIC_malmer_cropped.jpg",
    name: "Venus",
    nickname: "Morning & Evening Star",
    distance: 108200000,
    diameter: 12104,
    moons: 0,
    dayLength: "243 Earth Days",
    yearLength: "225 Earth Days",
    bio: "Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. With a diameter of about 12,104 kilometers, it is slightly smaller than Earth. Venus has a thick and toxic atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid that create a greenhouse effect, resulting in surface temperatures that can reach up to 470°C, making it the hottest planet in our solar system. Venus rotates on its axis in the opposite direction to most planets, taking about 243 Earth days to complete a rotation, but it takes about 225 Earth days to complete one orbit around the Sun. Venus has a few impact craters but is mainly covered in volcanic features such as mountains, plains, and lava channels. It has no moons, and no spacecraft has landed on its surface, but several missions have orbited it, providing valuable data about its geology and atmosphere.",
  },
  {
    photo:
      "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg",
    name: "Earth",
    nickname: "The Blue Planet",
    distance: 14960000,
    diameter: 12756,
    moons: 1,
    dayLength: "24 Hours",
    yearLength: "365 Days",
    bio: "Earth is the third planet from the Sun and the only known planet in the universe to support life. It has a diameter of approximately 12,756 kilometers and is the fifth largest planet in our solar system. Earth is composed of a solid inner core, a liquid outer core, a mantle, and a crust that is made up of various tectonic plates. It is the densest planet in our solar system and has a strong magnetic field that protects it from harmful solar radiation. Earth has a moderate climate that supports a diverse range of ecosystems and is home to millions of species of flora and fauna, including humans. The planet has a natural satellite, the Moon, which is the fifth largest moon in the solar system. The study of Earth and its environment is known as Earth science, and it is a crucial field of study for understanding the planet's geology, atmosphere, and natural resources.",
  },
  {
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    name: "Mars",
    nickname: "The Red Planet",
    distance: 227900000,
    diameter: 6792,
    moons: 2,
    dayLength: "24.6 Hours",
    yearLength: "687 Earth Days",
    bio: "Mars is the fourth planet from the Sun and is known as the 'Red Planet' due to its reddish appearance. It is named after the Roman god of war, Mars. Mars has a diameter of about 6,792 kilometers, which is roughly half the size of Earth. It has a thin atmosphere consisting mainly of carbon dioxide and has a weak magnetic field. Mars experiences extreme temperatures, with an average temperature of about -63°C. It has the largest volcano and the deepest canyon in our solar system, Olympus Mons and Valles Marineris, respectively. Mars has two small moons, Phobos and Deimos. The planet has been extensively studied by numerous spacecraft, including the rovers Spirit, Opportunity, and Curiosity, which have provided valuable information about its geology, climate, and the potential for life. The exploration of Mars continues to be a major focus of interest for space agencies around the world.",
  },
  {
    photo:
      "https://cdn.spacetelescope.org/archives/images/screen/heic2017a.jpg",
    name: "Jupiter",
    nickname: "The Giant Planet",
    distance: 778600000,
    diameter: 142984,
    moons: 95,
    dayLength: "10 Hours",
    yearLength: "12 Earth Years",
    bio: "Jupiter is the largest planet in our solar system, named after the Roman king of the gods. With a diameter of approximately 142,984 kilometers, it is more than 11 times larger than Earth. Jupiter is a gas giant, primarily composed of hydrogen and helium, with no solid surface. It has a thick atmosphere with a distinctive banded appearance, and it rotates faster than any other planet in our solar system, completing one rotation in just under 10 hours. Jupiter has a strong magnetic field, over 20,000 times more powerful than Earth's, and numerous moons, including four large moons known as the Galilean moons. It is often studied as a representative of gas giants, and several spacecraft have been sent to explore the planet, including Pioneer 10 and 11, Voyager 1 and 2, and Juno, which is currently in orbit around Jupiter.",
  },
  {
    photo:
      "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg",
    name: "Saturn",
    nickname: "Ringed Planet",
    distance: 1433500000,
    diameter: 120536,
    moons: 83,
    dayLength: "10 Hours",
    yearLength: "29 Earth Years",
    bio: "Saturn is the sixth planet from the Sun and is the second-largest planet in our solar system. It is named after the Roman god of agriculture and wealth, Saturn. Saturn has a prominent ring system composed of icy particles, rocks, and dust, which makes it one of the most visually striking planets. It has a diameter of approximately 116,460 kilometers and is mainly composed of hydrogen and helium. The planet has over 80 known moons, including Titan, the largest moon in the solar system.",
  },
  {
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg",
    name: "Uranus",
    nickname: "Ice Giant",
    distance: 2872500000,
    diameter: 51118,
    moons: 27,
    dayLength: "17 Hours",
    yearLength: "84 Earth Years",
    bio: "Uranus is the seventh planet from the Sun and the third-largest planet in our solar system. It was discovered in 1781 by the British astronomer William Herschel. Uranus is named after the Greek god of the sky, Ouranos. With a diameter of approximately 51,118 kilometers, it is roughly four times the size of Earth. Uranus is known for its distinctive blue-green color, which is due to the presence of methane in its atmosphere. It has 27 known moons and a system of rings, similar to Saturn. Uranus has an axial tilt of about 98 degrees, causing it to appear to roll on its side as it orbits the Sun. This unique characteristic also results in extreme seasonal changes, with each pole experiencing 42 years of continuous daylight followed by 42 years of continuous darkness. Uranus has been visited by only one spacecraft, Voyager 2, in 1986, which provided valuable data and images of the planet and its moons.",
  },
  {
    photo: "https://cdn.mos.cms.futurecdn.net/PezBzd9Fehsq9XWgWMauVV.jpg",
    name: "Neptune",
    nickname: "Big Blue Planet",
    distance: 4495100000,
    diameter: 49528,
    moons: 14,
    dayLength: "16 Hours",
    yearLength: "165 Earth Years",
    bio: "Neptune is the eighth and farthest planet from the Sun in our solar system. It is named after the Roman god of the sea, Neptune. With a diameter of about 49,244 kilometers, it is the fourth-largest planet in our solar system. Neptune has a blue color due to the presence of methane in its atmosphere, which absorbs red light and reflects blue light. It has the strongest winds in our solar system, with wind speeds up to 2,100 kilometers per hour. Neptune has 14 known moons, the largest of which is Triton. It also has a system of faint rings around it. The planet has been visited only once by a spacecraft, Voyager 2, which provided valuable data on its atmosphere, moons, and rings.",
  },
];

export default planets;
