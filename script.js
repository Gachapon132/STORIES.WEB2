// --- THE MASTER STORY LIBRARY (50 UNIQUE STORIES) ---
const stories = [
    {
        title: "The Golden Woods",
        image: "https://thumbs.dreamstime.com/b/warm-autumn-glow-illuminates-peaceful-forest-path-golden-woods-340257542.jpg",
        content: "In a forest where the leaves are made of beaten gold, a young traveler discovers that the trees hum melodies of the past. To leave the woods, one must contribute a song of their own.\n\nThe golden leaves don't just shine; they vibrate with the history of everyone who has ever walked beneath them. If you listen closely, you can hear the laughter of children from centuries ago.\n\nTo find your way out, you must stand in the center of the clearing and sing your truest memory. Only then will the trees part to show you the path home.",
        // example: point to a girl‑voice MP3 you upload alongside the site
        audio: "audio/golden-woods-girl.mp3"
    },
    {
        title: "The Midnight Fox",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
        content: "Under a sapphire moon, a fox with fur like stardust guides lost souls across the Whispering River. It never speaks, but its eyes tell a thousand tales of forgotten kingdoms.\n\nLegend says the fox was once a prince who traded his voice for the ability to see through the fog of time. He now wanders the riverbank, waiting for those who have lost their way.\n\nIf you follow him, do not speak. The river feeds on words, and only silence can guarantee a safe crossing to the other side."
    },
    {
        title: "The Clockmaker's Secret",
        image: "https://miro.medium.com/v2/resize:fit:1170/1*gI0Y7RhJXC9ltezjLkUwvQ@2x.jpeg",
        content: "Master Elias didn't just fix clocks; he fixed time. When a townsperson lost a precious hour to sadness, Elias would reach into his gears and give them a spare minute of joy.\n\nHis shop was filled with the rhythmic ticking of a thousand hearts. He claimed that time was like water—it could be frozen, boiled, or poured into a different container.\n\nOne day, a girl asked him to stop time entirely. Elias smiled sadly and told her that a song only has beauty because it eventually ends."
    },
    {
        title: "The Sky Fisherman",
        image: "https://cdna.artstation.com/p/assets/images/images/000/050/794/large/Sky_Fishermen_Concept.jpg?1398986102",
        content: "Kaelen sat on the edge of the highest cliff, casting a line into the clouds. He wasn't looking for fish, but for fallen stars that got stuck in the mist.\n\nEach star he caught felt like a warm stone in his palm. He placed them in glass jars to sell to the villagers who lived in the shadow of the mountain.\n\nWithout his work, the valley would be plunged into eternal darkness. He is the unsung hero of the night sky."
    },
    {
        title: "The Librarian of Leaves",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        content: "In the Great Autumn Library, books aren't made of paper, but of fallen maple leaves. Each vein on the leaf represents a line of poetry written by the wind.\n\nThe Librarian, an owl with silver spectacles, organizes the leaves by scent. The scent of rain marks tragedy, while the scent of pine marks adventure.\n\nReaders must be careful not to sneeze, for a single gust could send a whole epic novel flying into the forest."
    },
    {
        title: "The Crystal Cave",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
        content: "Deep underground, there is a cave where the walls grow crystals that play music when touched. Each color represents a different instrument: blue for flutes, red for drums.\n\nExplorers who enter the cave often find themselves dancing to a rhythm they didn't know they had. The music is ancient, composed by the shifting of the earth itself.\n\nIf you take a crystal home, it goes silent. The music only lives where the earth can breathe."
    },
    {
        title: "The Cloud Baker",
        image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
        content: "Every morning, Mira climbs the ladder to the sky to knead the clouds into shapes. Some become fluffy sheep, while others become giant castles.\n\nShe uses lightning to bake them and rainbows to frost the edges. When a storm happens, it's usually because Mira burned a batch of thunder-bread.\n\nChildren look up and point at her work, never knowing that their snacks for the soul were made by a girl in a white apron."
    },
    {
        title: "The Iron Giant's Garden",
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800",
        content: "A rusted giant sits in a valley, unmoving for centuries. Over time, wild roses have grown over his limbs, and birds nest in his hollow chest.\n\nHe was built for war, but he chose to become a trellis for flowers. His silence is his greatest strength, protecting the tiny ecosystem that has claimed him.\n\nVillagers say that on the first day of spring, you can hear a metallic heart beating once, very slowly."
    },
    {
        title: "The Ghost Train",
        image: "https://tse3.mm.bing.net/th/id/OIP.IvRJn8pcMc4-jis7V6rO-wHaDj?pid=Api&P=0&h=180",
        content: "A train that runs on tracks made of moonlight appears only on the longest night of the year. It has no conductor, yet it always arrives on time.\n\nIts passengers are memories that people have forgotten. They sit in velvet seats, staring out at a world that no longer remembers their names.\n\nIf you board the train, you can visit any moment from your childhood, but you must leave before the sun rises."
    },
    {
        title: "The Well of Wishes",
        image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800",
        content: "The well in the center of the village doesn't hold water; it holds whispers. When you throw a coin in, you aren't paying for a wish—you're buying a secret.\n\nThe deeper the coin falls, the older the secret. Some have heard the recipe for eternal youth, while others heard the location of buried gold.\n\nBut beware: once you hear a secret from the well, you can never tell another soul, or you will lose your own voice."
    },
    {
        title: "The Silver Willow",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
        content: "In the center of the Forbidden Garden stands a willow tree with silver leaves. It is said that if you sleep under its branches, you will dream the future of your greatest enemy.\n\nThe leaves chime like bells when the wind blows, keeping the restless spirits of the garden at bay. Many have tried to chop it down, but their axes simply turn to water.\n\nTo the wise, the tree is a teacher. To the foolish, it is a mirror reflecting their own fears back at them."
    },
    {
        title: "Flight of the Phoenix",
        image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800",
        content: "Born from the embers of a dying star, the Phoenix flies once every century. Its feathers are made of liquid flame, and its song can heal any wound.\n\nAs it passes over the mountains, the snow melts into boiling rivers. It carries the weight of the sun's promise to return after the long winter.\n\nWhen its time comes, it builds a nest of cinnamon and spice, bursting into a brilliant fire that lights up the entire world for a single second."
    },
    {
        title: "The Library of Clouds",
        image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
        content: "A place where the books are written in the shapes of clouds. To read them, you must lie on your back and look up, letting your imagination fill in the gaps.\n\nThe words shift as the wind blows, meaning a story might be a comedy at noon and a tragedy by sunset. It is the most honest library in existence.\n\nScholars come from all over to study the 'Rainy Day' section, which is filled with the most moving poetry ever composed."
    },
    {
        title: "The Lantern Fish",
        image: "https://images.unsplash.com/photo-1520263115673-610416f52ab6?w=800",
        content: "Deep in the Midnight Trench, a fish carries a lantern made of a trapped lightning bolt. It uses the light to find treasure buried in the sand.\n\nOther fish follow it like a parade, hoping to catch a glimpse of the gold and jewels it unearths. The Lantern Fish is the king of the dark.\n\nIt never keeps the treasure for itself; it leaves the gold for the mermaids to build their palaces of light."
    },
    {
        title: "The Weaver of Rain",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800",
        content: "In a high tower, an old woman spins clouds into thread and weaves the rain. She decides if the storm will be a gentle drizzle or a roaring hurricane.\n\nHer loom is made of lightning rods, and her shuttle is a piece of polished obsidian. She hums a low tune that sounds like distant thunder.\n\nWithout her, the earth would wither. She is the mother of the rivers and the guardian of the thirsty fields."
    },
    {
        title: "The Sleeping Volcano",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800",
        content: "Mount Ignis hasn't erupted in a thousand years, but the villagers say it isn't dead—it's just dreaming of a world made of glass.\n\nSmoke rises in the shape of dragons, and the ground stays warm even in the dead of winter. It is a giant made of stone and fire.\n\nLegend says that if you whisper a secret into the crater, the volcano will keep it warm forever, ensuring it never goes cold."
    },
    {
        title: "The Paper Ship",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
        content: "A small boat made of a single page from a magic book sails the Great Ocean. It never sinks, no matter how high the waves get.\n\nThe captain is a tiny mouse with a needle for a sword. He is searching for the Isle of Cheese, a place where the mountains are made of cheddar.\n\nThough he is small, his courage is vast. He has faced krakens and storms, always protected by the magic ink on his hull."
    },
    {
        title: "The Mirror of Truth",
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800",
        content: "Hidden in a cave behind a waterfall is a mirror that doesn't show your face, but your soul. If you are kind, you see a garden; if you are cruel, you see a desert.\n\nMany have fled in terror after looking into it, unable to face what they have become. Others have wept with joy at the beauty within.\n\nThe mirror cannot lie. It is the final judge for those who seek the path of the enlightened."
    },
    {
        title: "The Star Thief",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800",
        content: "A creature with long, spindly fingers reaches into the sky every night to pluck a star. He keeps them in a velvet bag under his bed.\n\nHe isn't greedy; he just wants to make sure the stars don't get lonely in the vast darkness of space. He talks to them every morning.\n\nBy the time the moon sets, he puts them all back, polished and glowing brighter than ever before."
    },
    {
        title: "The City of Brass",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800",
        content: "In the middle of the desert is a city made entirely of polished brass. It reflects the sun so brightly that it can be seen from the moon.\n\nThe citizens are mechanical beings who never sleep. they spend their lives building intricate gears and winding up the world's clocks.\n\nAt night, the city hums with a metallic heartbeat that keeps the desert sand from shifting too far."
    },
    {
        title: "The Emerald Forest",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
        content: "The trees here have leaves made of solid emerald. They don't sway in the wind; they clink against each other like expensive jewelry.\n\nOnly the chosen few can enter. The animals are made of jade and marble, moving with a grace that no living creature could possess.\n\nIt is a place of absolute stillness and wealth beyond measure, guarded by a dragon made of living diamond."
    },
    {
        title: "The Ice Queen's Tear",
        image: "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?w=800",
        content: "A single tear shed by the Ice Queen froze into a diamond that holds the power of winter. If it ever melts, the world will be plunged into eternal fire.\n\nIt is kept in a palace of frost, guarded by polar bears with armor made of glacier ice. It glows with a pale blue light.\n\nEvery year, the Queen cries again to ensure the diamond stays cold, sacrificing her own warmth for the sake of the world."
    },
    {
        title: "The Giant shell",
        image: "https://tse2.mm.bing.net/th/id/OIP.d9xs26X8NYekhmbJQe1pOQHaE8?pid=Api&P=0&h=180",
        content: "If you pick up the giant shell on the beach of Isla Luna, you won't hear the ocean. Instead, you hear the voices of people from the future.\n\nThey speak of cities in the stars and flying cars. It is a telephone to a time that hasn't happened yet.\n\nMost people put it back, frightened by the strange sounds. But some listen for hours, learning the secrets of the ages to come."
    },
    {
        title: "The Shadow Jester",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=800",
        content: "In the kingdom of Nox, the king's jester has no body—he is only a shadow. He dances on the walls, making the court laugh with silent jokes.\n\nHe can detach himself from the wall and walk through shadows like they are doorways. He is the ultimate spy, seeing everything and saying nothing.\n\nWhen the king is sad, the jester performs a dance of light, turning into a silhouette of hope that even the darkness cannot touch."
    },
    {
        title: "The Singing Bridge",
        image: "https://imgcdn.stablediffusionweb.com/2024/12/7/a1e2ba50-0c10-45bf-b5e4-f50b782e423b.jpg",
        content: "The stone bridge over the River Lyre vibrates whenever someone crosses it. Depending on the weight of their step, it plays a different chord.\n\nA heavy heart produces a bass note, while a light spirit produces a high, flute-like sound. It is the world's largest musical instrument.\n\nOn festival nights, the villagers dance across it in patterns to create symphonies that can be heard for miles."
    },
    {
        title: "The Dragon's Breath",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800",
        content: "When the great dragon Ignis exhales, he doesn't just produce fire. He produces visions of the things you desire most.\n\nThe smoke twists into shapes of gold, love, or power. It is a dangerous magic that lures many to their doom in his lair.\n\nOnly those who want nothing can survive the breath. To them, the smoke is just a pleasant scent of cedar and spice."
    },
    {
        title: "The Moon's Garden",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
        content: "On the dark side of the moon, there is a garden where the flowers grow without sunlight. They drink the silver beams of the earth instead.\n\nThe petals are translucent and glow in the dark. Space travelers often stop there to rest on the soft, glowing moss.\n\nIt is the only place in the galaxy where you can hear the sound of silence, a hum that vibrates in your very bones."
    },
    {
        title: "The Compass of Souls",
        image: "https://images.unsplash.com/photo-1526749837599-b4efa9fd255e?w=800",
        content: "A golden compass found in a shipwreck doesn't point North. It points to the person you are destined to love.\n\nThe needle spins wildly until you are within a mile of them, then it locks into place with a steady glow. It has united thousands of hearts.\n\nBut once you find your love, the compass vanishes, moving on to the next soul who is lost in the sea of life."
    },
    {
        title: "The Time Traveler's Watch",
        image: "https://img6.arthub.ai/6544dc1f-b977.webp",
        content: "Arthur found a pocket watch that could stop time for five minutes every day. He used it to save people from accidents and win at chess.\n\nBut he noticed that every time he used it, he aged a little faster than everyone else. He was trading his life for those five minutes.\n\nHe eventually gave the watch to a child, telling them to never use it unless they were willing to give a piece of themselves away."
    },
    {
        title: "The Floating Isles",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        content: "High above the clouds are islands held up by giant balloons filled with hot air and magic. The people there never touch the ground.\n\nThey travel between islands using wings made of silk and bamboo. Their life is one of constant wind and sky.\n\nThey believe that the ground is a place of shadows and heavy thoughts, and they prefer to live where the sun hits first."
    },
    {
        title: "The Candle of Hope",
        image: "https://images.unsplash.com/photo-1501529301789-b48c1975542a?w=800",
        content: "In a dark cathedral, there is a candle that has been burning for five hundred years. It never gets shorter, and the flame never flickers.\n\nIt is fueled by the prayers of the people. As long as someone believes in a better tomorrow, the candle will stay lit.\n\nIt is a beacon for the hopeless, a small point of light that proves even the greatest darkness can be held back by a single spark."
    },
    {
        title: "The Giant's Flute",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800",
        content: "A flute made from the hollowed-out trunk of an ancient oak tree. Only a giant can play it, and the sound is like the low rumbling of the earth.\n\nWhen played, the music makes the trees grow three feet in a single night. It is the song of life and growth.\n\nThe giant only plays it during the spring equinox, ensuring the world stays green and vibrant for another year."
    },
    {
        title: "The Stone Heart",
        image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?w=800",
        content: "A statue of a warrior in the town square is said to have a real heart made of stone. Every night at midnight, you can hear it beat.\n\nLegend says the warrior gave his life to protect the town, and the gods turned him to stone to preserve his spirit forever.\n\nHe is the silent guardian, and as long as his heart beats, no enemy will ever pass through the town gates."
    },
    {
        title: "The River of Time",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
        content: "In a secret valley, the river flows backwards. If you step into the water, you grow younger with every second you spend submerged.\n\nMany have entered and disappeared, becoming babies again and being swept away by the current. It is a dangerous fountain of youth.\n\nThe wise only use it to wash their hands, gaining just enough time to finish their life's work."
    },
    {
        title: "The Velvet Night",
        image: "https://lh3.googleusercontent.com/UkxeOVhkRqBEI16WBBIYyIf6HTsN4_fBwqcrCsgpLPVacNKhuLQbmvyg3czj9-YT-0LUBatNf41lqot0",
        content: "The sky in the Kingdom of Somnus isn't made of air, but of dark blue velvet. The stars are diamonds sewn into the fabric by the Queen.\n\nIt feels soft to the touch if you fly high enough. The moon is a giant pearl that rolls across the fabric from East to West.\n\nIt is a world of eternal comfort and peace, where the night is a blanket that protects the sleepers from the harsh reality of the sun."
    },
    {
        title: "The Clockwork Bird",
        image: "https://images.unsplash.com/photo-1516533075015-a3838414c3ca?w=800",
        content: "A bird made of brass and silver wings that sings better than any living nightingale. It was built by a lonely king who wanted music that never died.\n\nBut the bird requires a golden key to wind up every morning. Without the key, it is just a cold piece of metal.\n\nThe king eventually realized that the bird's perfection was boring, and he traded it for a real bird that sang off-key but with a soul."
    },
    {
        title: "The Forest of Mirrors",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
        content: "Every tree in this forest has bark that reflects like a mirror. If you walk through it, you see yourself a thousand times from every angle.\n\nIt is impossible to get lost because your reflection always points the way out. However, most people get distracted by their own image.\n\nOnly the blind can truly navigate the forest, for they are the only ones not fooled by the infinite reflections of their own vanity."
    },
    {
        title: "The Lightning Jar",
        image: "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?w=800",
        content: "A young boy caught a bolt of lightning in a mason jar during a summer storm. The jar now glows with a fierce, crackling energy.\n\nHe uses it as a reading lamp, but the light is so bright it can be seen for miles. The lightning is restless, wanting to return to the sky.\n\nOne day, he will open the jar and let the bolt go, watching it streak back home to the clouds where it belongs."
    },
    {
        title: "The Weaver of Dreams",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800",
        content: "A spider in the attic of a magic school weaves webs that catch the dreams of the students as they sleep.\n\nShe turns the dreams into silk and makes robes for the professors. Each robe tells a different story of adventure, fear, or love.\n\nThe professors are the most knowledgeable in the world, for they wear the collective subconscious of their students every day."
    },
    {
        title: "The Golden Key",
        image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800",
        content: "A key made of solid gold that fits into any lock in the world. But every time you use it, you lose a memory of your childhood.\n\nIt is the ultimate tool for thieves and explorers, but the cost is high. Many have opened every door in the world only to forget who they are.\n\nThe key is currently hidden in a box that requires no key, waiting for someone brave or foolish enough to find it."
    },
    {
        title: "The Book of Everything",
        image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800",
        content: "A book that contains the history of every person who has ever lived. It updates itself in real-time as you breathe.\n\nThe pages are as thin as air and never end. If you read your own entry, you can see your future, but the ink fades as you look at it.\n\nIt is kept in the Library of Eternity, guarded by a monk who has been reading the same page for three hundred years."
    },
    {
        title: "The Silver Fountain",
        image: "https://tse4.mm.bing.net/th/id/OIP.mwX__gLAsBSakNnzRz3gsAHaEK?pid=Api&P=0&h=180",
        content: "In the center of the Moon Palace is a fountain that flows with liquid silver. It is the source of all the stars in the sky.\n\nEvery drop that splashes out of the fountain becomes a new star. The moon people use the silver to paint their houses and heal their wounds.\n\nIt is a place of absolute purity and light, where the water is cold but the spirit is warm."
    },
    {
        title: "The Dragon's Tear",
        image: "https://media.craiyon.com/2025-04-06/9e1LQrq_R0KCyMGr2rMMbw.webp",
        content: "When the last dragon died, he shed a single tear that turned into a blue pearl. It holds the magic of the entire dragon race.\n\nWhoever holds the pearl can speak to animals and breathe fire. But they also inherit the dragon's loneliness.\n\nIt is currently buried in a cave, waiting for the person who is strong enough to carry the legacy of the scales and the flame."
    },
    {
        title: "The Sky Kingdom",
        image: "https://tse3.mm.bing.net/th/id/OIP.diIPqDN0JvM0zu5llGQZoAHaEJ?pid=Api&P=0&h=180",
        content: "A kingdom built on the back of a giant whale that flies through the clouds. The people live in houses made of whalebone and silk.\n\nThey follow the migration of the clouds, avoiding the storms and seeking the eternal sun. It is a life of freedom and height.\n\nOnce a year, the whale descends to the ocean to drink, and the people see the ground for the only time in their lives."
    },
    {
        title: "The Mirror of Shadows",
        image: "https://tse2.mm.bing.net/th/id/OIP.ksFUYReA6L8vcA7m3-m0oQHaE8?pid=Api&P=0&h=180",
        content: "A mirror that only reflects your shadow. If your shadow is bigger than you, it means you have secrets; if it is smaller, you are honest.\n\nThe shadow in the mirror can move independently, acting out the things you are too afraid to do in real life.\n\nIt is a tool for self-reflection that is more literal than most people can handle, revealing the hidden depths of the human heart."
    },
    {
        title: "The Golden Apple",
        image: "https://tse3.mm.bing.net/th/id/OIP.Y_2W8xfhX0QuMu1DwcUBNgHaEJ?pid=Api&P=0&h=180",
        content: "An apple made of solid gold that grows on a tree in the middle of a desert. If you eat it, you gain eternal life.\n\nBut the apple is guarded by a sphinx who asks a riddle that no one has ever solved. The desert is filled with the bones of those who failed.\n\nThe apple is a lure for the greedy, a test of wisdom that proves life is only valuable because it is finite."
    },
    {
        title: "The Song of the Wind",
        image: "https://tse3.mm.bing.net/th/id/OIP.zR_Ib2XnwtOcL9LXIlJThwHaHa?pid=Api&P=0&h=180",
        content: "The wind doesn't just blow; it sings a song that only those with a musical soul can hear. The song tells the story of the world's creation.\n\nIf you can whistle the melody, the wind will carry you wherever you want to go. It is the ultimate form of travel.\n\nBut the song changes every day, and if you miss a note, the wind will drop you right where you are, no matter how high you are."
    },
    {
        title: "The Crystal Tower",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
        content: "A tower made of solid quartz that acts as a giant prism, turning the sunlight into a thousand rainbows that cover the land.\n\nIt is the home of the Light Weavers, who use the rainbows to make clothes for the gods. The tower is always warm and bright.\n\nEven during the longest night, the tower glows with the stored light of the day, a symbol of hope in a dark world."
    },
    {
        title: "The Heart of the Sea",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800",
        content: "In the deepest part of the ocean is a giant heart made of coral that beats with the rhythm of the tides. It is the life force of the sea.\n\nIf the heart ever stops, the ocean will go still and the world will die. It is protected by a thousand sharks and a veil of ink.\n\nOnly the King of the Merfolk knows the location, and he visits it every day to sing to it and keep it beating strong."
    },
    {
        title: "The Last Star",
        image: "https://tse3.mm.bing.net/th/id/OIP.kusXSim2lTJ90BbAVAL0SQHaF4?pid=Api&P=0&h=180",
        content: "When the universe finally goes dark, a single star will remain. It is the star of hope, and it will burn until the very end.\n\nIt holds the memories of all the planets and civilizations that ever existed. It is the final library of the cosmos.\n\nWhen it finally goes out, a new universe will be born from its ashes, starting the cycle of stories all over again."
    },
    {
        title: "The Legend of the Lizard (Ang Alamat ng Butiki)",
        image: "https://tse3.mm.bing.net/th/id/OIP.6UcyxCupCKQMqh2gLNqlNAHaEK?pid=Api&P=0&h=180",
        content: `Once upon a time, there was a young man named Lucas who lived with his elderly mother in a small village. Lucas’s mother was kind and hardworking, having spent her whole life making sure Lucas had everything he needed.

The Change in Heart
As Lucas grew older and stronger, he began to change. He became arrogant and started hanging out with a crowd that valued wealth and status over family. He began to see his mother—who was now frail, wrinkled, and dressed in old clothes—as an embarrassment.

Whenever his friends would come over, Lucas would hide his mother in the kitchen or tell her to stay in the back room so no one would see her.

The Confrontation
One evening, just as the sun was setting (the time of Orasyon or Angelus), Lucas was hosting a party for his wealthy friends. His mother, feeling weak and hungry, stumbled into the living room to ask for a bit of water.

Instead of helping her, Lucas became furious. He yelled at her in front of everyone, saying:

"Why are you showing your face here? You are old, ugly, and you smell of the earth! Get down on the ground where you belong!"

He pushed his mother so hard that she fell to the floor. Heartbroken and weeping, the mother looked up at her son and said, "If you are so ashamed of me that you want me on the ground, then perhaps you should stay there yourself."

The Transformation
Suddenly, the sky darkened, and a loud crack of thunder echoed through the house. Lucas began to shrink. His skin turned scaly and mottled, his limbs grew short and thin, and his voice turned into a faint "tiki-tiki-tiki" sound.

He tried to call out to his friends, but he was now a small creature scurrying across the floor. Out of shame, he ran up the wall to hide in the shadows.

The Moral and the "Orasyon"
To this day, Filipinos observe the behavior of the butiki (house lizard). People say that:

The Kiss: Every evening during the Orasyon (twilight), the lizard descends from the wall to "kiss" the ground. This is said to be Lucas, still performing an eternal act of penance, asking for his mother’s forgiveness for his arrogance.

The Sound: Its unique chirping sound is a reminder of the voice Lucas lost when he chose to be cruel.

Note: This legend is often used by Filipino parents to teach children the importance of Pagmamano (respecting elders) and the consequences of being "ingrato" (ungrateful).`
    },
    {
        title: "Ang Alamat ng Mangga",
        image: "https://tse4.mm.bing.net/th/id/OIP.NcV_YerFT1Scy_jFO_vVrQHaEK?pid=Api&P=0&h=180",
        content: `Noong unang panahon, isang batang may pagnanasa sa matamis na mangga ang nagdasal sa isang matanda. Sinabi ng matanda na kung magtanim siya ng isang buto ng mangga nang may pagmamahal, bubuhayin ito ng isang diwata. Lumaki ang puno at nagdala ng pinakamatamis na mangga sa buong baryo. Mula noon, kahit sino'y maaring masiyahan sa aking binhing ito.`
    },
    {
        title: "Ang Pagong at ang Matsing",
        image: "https://tse3.mm.bing.net/th/id/OIP.sjaIP9DaNcRm64AgitWaFwHaD4?pid=Api&P=0&h=180",
        content: `Magkaibigan ang pagong at ang matsing. Nais nilang magtanim ng niyog ngunit hindi nila alam kung paano. Pinatulong nila ang kapwa hayop na maghukay, at tinanong ng ibon kung sino ang mag-aalaga. Sa huli, ang pagong ang naging mapagtiis at nag-alaga sa tanim. Nakakuha siya ng maraming niyog at natutunan ng Matsing ang kahalagahan ng tiyaga.`
    },
    {
        title: "Si Malakas at si Maganda",
        image: "https://tse2.mm.bing.net/th/id/OIP.W9p--gzhs6Ub25RORP-bsgHaEK?pid=Api&P=0&h=180",
        content: `Sa simula, isang kawayan ang bumungkal at naghiwa, kinalimutan ng mundo ang lungkot. Mula rito lumitaw si Malakas at si Maganda. Sila ang unang mag-asawa na nagpalaki ng mga anak, at mula sa kanila nagmula ang lahat ng tao. Ang kanilang kuwento ay paalala ng simula ng buhay sa ating bansa.`
    },
    {
        title: "Ang Mabait na Alimango",
        image: "https://tse2.mm.bing.net/th/id/OIP.DVPM5GBNCTOIti_u47IKqgHaHZ?pid=Api&P=0&h=180",
        content: `Isang araw, may alimango na napadpad sa dalampasigan. Hindi siya makahupa ng malakas na bangga ng alon. Isang mangingisdang matulungin ang tumulong at inilagay siya sa sarili niyang balde. Lumaki ang alimango at lagi siyang nagpapasalamat sa mangingisda sa pamamagitan ng pagbibigay ng mga perlas.`
    },
    {
        title: "Ang Nawawalang Sapatos",
        image: "https://tse3.mm.bing.net/th/id/OIP.FqGJ0vsyRinbqFSMp4JvOgHaHa?pid=Api&P=0&h=180",
        content: `Si Liza ay naglakad papunta sa palengke ngunit nawala ang isang sapatos niya. Naghahanap siya at nakakita ng bakas sa hangin. Sinundan niya ito at natagpuan ang sapatos sa ilalim ng puno. Natutuhan ni Liza na mag-ingat sa kanyang mga gamit at huwag basta-basta magmadali.`
    },
    {
        title: "Ang Tatlong Baboy",
        image: "https://tse2.mm.bing.net/th/id/OIP.gMLV6S2qQYFtpt4aNONL-AHaEK?pid=Api&P=0&h=180",
        content: `Tatlong baboy ang nagbuo ng kanilang bahay: isa ay gawa sa dayami, isa sa kahoy, at isa sa bato. Dumating ang lobo at nilusaw ang unang dalawang bahay. Ngunit hindi niya maparusahan ang bahay na bato. Nilalaman nito na ang sipag at tiyaga ang tunay na proteksyon sa anumang unos.`
    },
    {
        title: "Si Bantay at ang Kulimlim",
        image: "https://tse2.mm.bing.net/th/id/OIP.-PcH35FVjwQqG_cE1YIsnwHaEo?pid=Api&P=0&h=180",
        content: `Si Bantay ay isang aso na nagbabantay sa gabi. Isang gabi, may lumitaw na kulimlim sa kanto. Hindi natakot si Bantay; sinuong niya ito at nanginig ang kulimlim sa kanyang tapang. Mula noon, kilala siya bilang pinakamatapang na bantay sa buong baryo.`
    },
    {
        title: "Ang Bulkan na Niyugyog",
        image: "https://tse4.mm.bing.net/th/id/OIP.gI26AqJQSGuB6pRDABhJrAHaEK?pid=Api&P=0&h=180",
        content: `May bulkan na tuwing gabi ay umiiyugyog nang parang nagigising. Ang mga tao sa paligid ay nagtatakbuhan. Isang matandang mambabarang ang nag-alok ng kwento: ang bulkan ay nagigising dahil sa isang higanteng naghihilom. Pinayuhan niya ang lahat na magbigay ng tahimik na paggalang, at unti-unti raw humupa ang pagyanig.`
    },
    {
        title: "Si Lam-ang at ang Halimaw",
        image: "https://tse4.mm.bing.net/th/id/OIP.p_HBzIcqFHxWNO-9IqVsnwHaEK?pid=Api&P=0&h=180",
        content: `Si Lam-ang ay isang bayani na naglakbay sa bundok para labanan isang halimaw. Nakipaglaban siya gamit ang kanyang tabak at nagwagi, pinalaya ang mga naninirahan sa nayon. Ang kanyang kuwento ay nagsasalaysay ng tapang at pagmamalasakit sa kapwa.`
    },
    {
        title: "Ang Tandang na Naghintay",
        image: "https://tse1.mm.bing.net/th/id/OIP.CAKj5mAuvG43Iwq4UXu03AHaEx?pid=Api&P=0&h=180",
        content: `May isang tandang na naghintay sa may kulungan ng kanyang amo. Araw-araw siyang umaawit sa umaga. Isang araw, nawala ang amo. Hindi siya tumigil sa paghihintay at pag-awit kahit kailan. Ang tandang ay naging simbolo ng tapat na pagsunod at pag-asa.`
    },
    {
        title: "Ang Prinsesang Hindi Tumatawa",
        image: "https://tse3.mm.bing.net/th/id/OIP._s-zfr1BMYewvBJQgyRj9wHaEK?pid=Api&P=0&h=180",
        content: `Noong unang panahon sa Kaharian ng Silangan, may isang magandang prinsesa na nagngangalang Prinsesa Luningning. Ngunit may isang problema: mula nang siya ay isilang, hindi pa siya kailanman nakikitang tumatawa o ngumingiti. Nag-alok ang Hari ng malaking gantimpala: Sino man ang makapagpapatawa sa aking anak ay pakakasalan siya at magiging tagapagmana ng trono! Maraming dumating. May mga payaso na nagbubunyi, may mga salamangkero na nagpapalabas ng kuneho, at may mga mayamang prinsipe na nagdala ng mamahaling alahas. Ngunit si Luningning ay nanatiling seryoso. Isang araw, isang simpleng magsasaka na si Kulas ang naglakbay patungo sa palasyo. Sa daan, tinulungan niya ang isang matandang nagugutom at ibinigay ang kanyang huling tinapay. Bilang pasasalamat, binigyan siya ng matanda ng isang Gintong Gansa. Ang sinumang humawak sa gansang ito na may masamang hangarin ay didikit dito, wika ng matanda. Habang naglalakad si Kulas, isang batang nagnanais magnakaw ang humawak sa gansa—at nadikit siya! Isang pulis ang susubok sumita sa kanila, pero nang hawakan niya ang bata, nadikit din siya! Hanggang sa maging isang mahabang linya sila ng mga taong nagtutulakan at nagkakamot dahil hindi sila makabitaw. Nang dumaan sila sa harap ni Prinsesa Luningning, nakita ng prinsesa ang nakakatawang hitsura ni Kulas na hila-hila ang gansa at ang mahabang linya ng mga taong nagkakagulo. Biglang Hahaha! Humagalpak ng tawa ang prinsesa! Dahil sa dalisay na kalooban ni Kulas at sa dala niyang saya, siya ang nagwagi. Hindi dahil sa yaman, kundi dahil sa ligayang dulot ng pagiging totoo.`
    },
    {
        title: "Si Langgam at si Tipaklong",
        image: "https://tse4.mm.bing.net/th/id/OIP.oLan71GCZQ2owFysc0i1KgHaFj?pid=Api&P=0&h=180",
        content: `Sa isang malawak na bukid, magkaibigan sina Langgam at Tipaklong. Si Langgam ay laging abala. Araw-araw siyang naghahakot ng butil ng palay at iniipon ito sa kanyang munting bahay sa ilalim ng lupa. Langgam, halika muna! Maglaro tayo at kumanta! anyaya ni Tipaklong habang nagpapakasaya sa ilalim ng araw. Napakaganda ng panahon para mag-relax! Pasensya na, Tipaklong, sagot ni Langgam habang nagpupunas ng pawis. Kailangang mag-imbak ng pagkain dahil malapit na ang tag-ulan. Mahihirapan tayong humanap ng makakain kapag bumabaha na. Tumawa lang si Tipaklong. Masyado kang praning! Marami pang pagkain sa paligid. Enjoy muna! Dumating ang malakas na bagyo. Ang bukid ay nalubog sa tubig. Ginaw na ginaw at gutom na gutom si Tipaklong dahil wala siyang naipong pagkain. Pumunta siya sa pintuan ni Langgam at kumatok. Kaibigang Langgam, parang awa mo na, bigyan mo ako ng kaunting pagkain, pagsusumamo niya. Dahil mabuti ang puso ni Langgam, pinatuloy niya si Tipaklong at binigyan ng mainit na sabaw at sapat na pagkain. Salamat, Langgam. Ngayon ay natuto na ako. Hindi sapat ang magsaya lang; dapat ay laging handa sa kinabukasan, wika ni Tipaklong. Mula noon, naging masipag na rin siya.`
    },
    {
        title: "Ang Alamat ng Saging",
        image: "https://tse3.mm.bing.net/th/id/OIP.wEfKA5tkCDD0BRWspXBgzAHaHZ?pid=Api&P=0&h=180",
        content: `Sa isang malayo at luntiang lambak, may isang magandang dalaga na nagngangalang Juana. Nagkaroon siya ng kasintahang hindi taga-lupa, si Aging. Sila ay labis na nagmamahalan, ngunit alam nilang hindi sila maaaring magkasama habang buhay dahil si Aging ay isang engkanto. Isang gabi, kailangang bumalik ni Aging sa kanilang mundo. Humawak siya sa bintana ni Juana, ngunit sa bilis ng paghila sa kanya ng mahiwagang puwersa, naiwan ang kanyang mga kamay sa loob ng silid ni Juana. Ibinaba ni Juana ang mga kamay at ibinayong ito sa lupa bilang tanda ng kanilang pag-ibig. Makalipat ang ilang araw, isang halaman ang tumubo sa mismong pinagbaunan. Ang bunga nito ay hugis mga daliri ng tao na nakayuko—ang Saging na hango sa pangalan ni Aging.`
    },
    {
        title: "Ang Alamat ng Gagamba",
        image: "https://tse3.mm.bing.net/th/id/OIP.DL30dwGwkuKaWaqrz6301QHaIf?pid=Api&P=0&h=180",
        content: `May isang babaeng nagngangalang Amba na napakahusay maghabi ng tela. Ang kanyang mga disenyo ay napakaganda kaya dinarayo siya ng mga tao. Ngunit dahil sa dami ng papuri, naging mayabang si Amba. Hinamon niya ang isang matanda na tila isang diyosa sa paghahabi. Natalo si Amba dahil kahit maganda ang kanyang gawa, ang disenyo niya ay puno ng panunuya sa mga diyos. Bilang parusa sa kanyang kayabangan, ginawa siyang isang maliit na insekto na may walong paa. Kahit naging insekto, hindi nawala ang kanyang talento. Hanggang ngayon, makikita si Amba na tinawag na Gagamba na walang tigil sa paghahabi ng kanyang sapot.`
    },
    {
        title: "Ang Alamat ng Rosas",
        image: "https://tse3.mm.bing.net/th/id/OIP.CjPcEBFmmIj9ZlKE3637pgHaLH?pid=Api&P=0&h=180",
        content: `Si Rosa ay isang dalagang kilala sa kanyang pambihirang ganda. Ngunit hindi lang ganda ang mayroon siya; siya rin ay matulungin at mapagmahal sa kanyang kapwa. Maraming lalaki ang nanliligaw sa kanya, ngunit isa rito ay isang masamang mangkukulam na nagpanggap na tao. Nang tanggihan ni Rosa ang mangkukulam dahil sa masamang ugali nito, isinumpa siya nito. Naglaho si Rosa at sa kanyang kinalalagyan ay tumubo ang isang halaman. Ang bulaklak nito ay kasingganda ni Rosa, ngunit ito ay may mga tinik sa tangkay upang protektahan ang kanyang sarili mula sa mga taong nais siyang saktan. Tinawag itong Rosas.`
    },
    {
        title: "Ang Alamat ng Alitaptap",
        image: "https://tse1.mm.bing.net/th/id/OIP.zTugG-p24-QDAgEXhF6DQwHaEK?pid=Api&P=0&h=180",
        content: `Noong unang panahon, may isang binatang nagngangalang Alit. Siya ay isang seryosong binata na laging may dala-dalang sulo o ilawan dahil natatakot siyang maligaw sa dilim. Isang gabi, nawala ang kanyang mahal sa buhay sa gitna ng kagubatan. Hindi tumigil si Alit sa paghahanap. Gabi-gabi siyang naglalakad, dala ang kanyang munting ilawan, umaasang makikita ang kanyang hinahanap. Dahil sa kanyang busilak na puso at tapat na pag-ibig, ginawa siyang isang maliit na insekto ng mga Diwata. Ngayon, siya ay naging Alitaptap—ang insektong may sariling ilaw na kumukutitap sa dilim upang magbigay ng liwanag sa mga naliligaw.`
    },
    {
        title: "Ang Alamat ng Langgam",
        image: "https://tse2.mm.bing.net/th/id/OIP.JajBxq7OrRDMPPychECBtQHaFj?pid=Api&P=0&h=180",
        content: `Noong unang panahon, may isang lalaking nagngangalang Lino. Siya ay kilala sa pagiging sobrang mabusili sa pagkolekta ng mga butil ng palay. Habang ang ibang tao ay naglalaro, si Lino ay laging nakayuko at namumulot ng mga nahulog na butil. Tinatawanan siya ng kanyang mga kapitbahay dahil sa kanyang liit at pagiging masyadong seryoso sa pag-iipon. Isang araw, dumating ang isang higanteng baha. Dahil sa kanyang pagiging maingat at masipag, si Lino ay nakahanap ng paraan upang makaligtas sa ilalim ng lupa kasama ang kanyang mga naipong pagkain. Nagbago ang kanyang anyo at naging Langgam, ang simbolo ng kasipagan at pagkakaisa.`
    },
    {
        title: "Ang Alamat ng Pakwan",
        image: "https://tse3.mm.bing.net/th/id/OIP.Psu0cBSUAhEo9b8KbUrr1AHaFj?pid=Api&P=0&h=180",
        content: `Sa isang tuyot na bayan, may isang batang lalaki na nakakita ng isang uhaw na matanda. Kahit kakaunti na lang ang kanyang tubig, ibinigay niya ito sa matanda. Bilang pasasalamat, binigyan siya ng matanda ng isang itim na buto. Ibaon mo ito sa lupa at diligan, wika ng matanda. Tumubo ang isang gumagapang na halaman na may malalaking bilog na bunga. Nang buksan ito, ang loob ay kasing-pula ng puso ng bata at puno ng matamis na tubig na nakapawi sa uhaw ng buong baryo. Tinawag itong Pakwan.`
    },
    {
        title: "Ang Pagong at ang Matsing (Variant)",
        image: "https://tse2.mm.bing.net/th/id/OIP.qnEV2lbadVpPk3-4cVVzdgHaEK?pid=Api&P=0&h=180",
        content: `Nahati nina Pagong at Matsing ang isang puno ng saging. Dahil tuso si Matsing, kinuha niya ang taas na bahagi na may mga dahon dahil akala niya ay tutubo ito agad. Kay Pagong naman ang ibabang bahagi na may mga ugat. Namatay ang tanim ni Matsing, habang ang kay Pagong ay namunga nang marami. Nang hindi maakyat ni Pagong ang bunga, nagboluntaryo si Matsing pero kinain niya lahat ng saging sa taas! Upang makaganti, naglagay si Pagong ng mga tinik sa puno. Sa huli, tinangka ni Matsing na lunurin si Pagong, pero nakalimutan niyang sa tubig talaga nakatira si Pagong. Hahaha! Bahay ko ang tubig! tawa ni Pagong habang lumalangoy palayo.`
    },
    {
        title: "Ang Alamat ng Tutubi",
        image: "https://tse1.mm.bing.net/th/id/OIP.ToBl_1zo0s0GBqGVvEkW7QHaFj?pid=Api&P=0&h=180",
        content: `Noong unang panahon, ang mga tutubi ay mga prinsipe ng hangin. Sila ay may malalaking pakpak ngunit wala silang boses. Isang araw, isang malakas na hangin ang nagbanta na sisirain ang mga pananim ng mga tao. Ang mga tutubi ay mabilis na lumipad at humarang sa hangin gamit ang kanilang mga pakpak. Dahil sa kanilang kabayanihan, binigyan sila ng mga Diwata ng kakayahang lumipad nang napakabilis at tumigil sa ere. Sila ang naging bantay ng mga bukid, tinitiyak na payapa ang paligid bago dumating ang ulan.`
    },
    {
        title: "Si Juan Tamad at ang Alimango",
        image: "https://tse3.mm.bing.net/th/id/OIP.JwiPjN3meOGg2EtxHcqwFAHaD4?pid=Api&P=0&h=180",
        content: `Inutusan ng ina si Juan Tamad na bumili ng mga alimango sa palengke. Dahil tinatamad siyang maglakad habang dala ang mabibigat na alimango, pinakawalan niya ang mga ito sa sapa. Mauna na kayo sa bahay, alam niyo naman ang daan, 'di ba? sabi ni Juan. Umuwi si Juan at natulog. Nang magtanong ang kanyang ina kung nasaan ang mga alimango, sinabi ni Juan na pinauwi na niya ang mga ito. Siyempre, wala silang nakitang alimango dahil ang mga ito ay nakatakas na sa sapa!`
    }
];

// --- ELEMENTS ---
const gridContainer = document.getElementById('grid-container');
const carouselContainer = document.getElementById('carousel-container');
const storyOverlay = document.getElementById('story-overlay');
const searchInput = document.getElementById('story-search');
const pageTurnSound = document.getElementById('page-turn-sound');
const audioBtn = document.querySelector('.audio-btn');
const voiceControls = document.getElementById('voice-controls');

let speechUtterance = null; // current utterance or list
let isSpeaking = false;
let availableVoices = [];
let chosenVoice = null; // will hold a selected voice for emotion
let currentGenderPreference = 'female'; // default to girl voice

// load voices (some browsers load asynchronously)
function selectVoiceByGender(gender) {
    // ensure we have voices loaded
    const englishVoices = availableVoices.filter(v => /en|english/i.test(v.lang));
    if (englishVoices.length === 0) return;

    // look for a voice whose name suggests the requested gender; fall back gracefully
    const genderRegex = gender === 'male'
        ? /(male|man|boy|m[ae]le)/i
        : /(female|woman|girl|f[ae]male)/i;
    let match = englishVoices.find(v => genderRegex.test(v.name));
    if (!match) {
        // try using the voice's 'gender' property if present (non-standard, e.g. Edge)
        match = englishVoices.find(v => v.gender && v.gender.toLowerCase() === gender);
    }
    // final fallback to first english voice
    chosenVoice = match || englishVoices[0];
}

function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices().filter(v => /en|english/i.test(v.lang));
    // choose according to current gender preference
    selectVoiceByGender(currentGenderPreference);
}

// update voice when user changes radio selection
function updateAudioButtonLabel() {
    const gender = currentGenderPreference === 'male' ? 'boy' : 'girl';
    if (audioBtn) {
        audioBtn.setAttribute('aria-label', `Read story aloud (${gender} voice)`);
    }
}

if (voiceControls) {
    voiceControls.addEventListener('change', e => {
        if (e.target && e.target.name === 'voice-gender') {
            currentGenderPreference = e.target.value;
            selectVoiceByGender(currentGenderPreference);
            updateAudioButtonLabel();
            // if we were speaking with the previous voice, stop so the new voice can be used next
            if (isSpeaking) stopSpeech();
        }
    });
}

// set initial label
updateAudioButtonLabel();

if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = () => {
        loadVoices();
        updateAudioButtonLabel();
    };
    // some browsers don't fire the event until user interaction; call immediately also
    loadVoices();
    updateAudioButtonLabel();
}

// --- RENDER FUNCTIONS ---
function renderGallery(filterText = "") {
    gridContainer.innerHTML = ""; 
    // update carousel simultaneously
    renderCarousel(filterText);
    
    const filteredStories = stories.filter(story => 
        story.title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredStories.length === 0) {
        gridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; font-size: 1.5rem; padding: 50px; opacity: 0.6;">No magical tales found by that name...</p>`;
        return;
    }

    filteredStories.forEach(story => {
        const card = document.createElement('div');
        card.classList.add('story-card');
        card.innerHTML = `
            <img src="${story.image}" alt="${story.title}" loading="lazy">
            <h2>${story.title}</h2>
        `;
        // Pass 'card' to the openStory function so we can animate it
        card.addEventListener('click', () => openStory(card, story));
        gridContainer.appendChild(card);
    });
}

function renderCarousel(filterText = "") {
    if (!carouselContainer) return; // safety
    carouselContainer.innerHTML = "";

    const filteredStories = stories.filter(story => 
        story.title.toLowerCase().includes(filterText.toLowerCase())
    );

    filteredStories.forEach(story => {
        const card = document.createElement('div');
        card.classList.add('story-card');
        card.innerHTML = `
            <img src="${story.image}" alt="${story.title}" loading="lazy">
            <h2>${story.title}</h2>
        `;
        card.addEventListener('click', () => openStory(card, story));
        carouselContainer.appendChild(card);
    });
}

// --- SEARCH EVENT ---
searchInput.addEventListener('input', (e) => {
    renderGallery(e.target.value);
});

// --- OVERLAY FUNCTIONS ---
let currentStory = null; // track which story is open (for audio playback)

function openStory(cardElement, story) {
    currentStory = story;

    // 1. Play Sound
    pageTurnSound.currentTime = 0;
    pageTurnSound.play().catch(() => {});

    // 2. Trigger Zoom Animation on the card
    cardElement.classList.add('zooming');

    // 3. Prepare Overlay Data
    const titleEl = storyOverlay.querySelector('.story-title');
    const imgEl = storyOverlay.querySelector('#overlay-img');
    const contentEl = storyOverlay.querySelector('.story-content');

    titleEl.textContent = story.title;
    imgEl.src = story.image;

    const formattedContent = story.content.split('\n\n').map(p => `<p style="margin-bottom: 20px;">${p}</p>`).join('');
    contentEl.innerHTML = formattedContent;

    // 4. Wait for zoom animation to play, then show overlay
    setTimeout(() => {
        // clear any ongoing speech and reset button
        stopSpeech();
        storyOverlay.classList.add('active'); // Use .active as defined in previous CSS
        storyOverlay.classList.add('visible'); // Keep your existing logic if needed
        gridContainer.classList.add('blurred');
        document.body.style.overflow = "hidden"; 
        
        // Remove zoom class so it's fresh when we return
        cardElement.classList.remove('zooming');
    }, 450); 
}

function closeStory() {
    stopSpeech();
    storyOverlay.classList.remove('active');
    storyOverlay.classList.remove('visible');
    gridContainer.classList.remove('blurred');
    document.body.style.overflow = "auto";
}

document.querySelector('.close-btn').onclick = closeStory;
audioBtn.onclick = toggleSpeech;

// --- SPEECH HELPERS ---
function createUtterancesWithEmotion(text) {
    const sentences = text.match(/[^.!?]+[.!?]?/g) || [text];
    return sentences.map(sentence => {
        const utt = new SpeechSynthesisUtterance(sentence.trim());
        // base settings
        utt.rate = 1;
        utt.pitch = 1;
        utt.volume = 1;
        if (chosenVoice) utt.voice = chosenVoice;

        // apply emotion heuristics
        if (/[!?]$/.test(sentence)) {
            // excitement or question
            utt.pitch = 1.3;
            utt.rate = 1.2;
        } else if (/,/.test(sentence)) {
            // slight pause
            utt.rate = 0.95;
        }

        // tweak for the 'AI girl' effect when female voice selected
        if (currentGenderPreference === 'female') {
            // make pitch slightly higher and rate a bit robotic
            utt.pitch *= 1.3;
            utt.rate *= 1.15;
            // occasional micro-pauses for staccato
            utt.onboundary = event => {
                if (event.name === 'word') {
                    // small random delay between words
                    const pause = Math.random() * 40;
                    const start = performance.now();
                    while (performance.now() - start < pause) {} // busy-wait short time
                }
            };
        }

        return utt;
    });
}

function speakText(text) {
    if (!window.speechSynthesis) return;
    stopSpeech();
    const utterances = createUtterancesWithEmotion(text);
    utterances.forEach((utt, idx) => {
        utt.onend = () => {
            // if last utterance, cleanup
            if (idx === utterances.length - 1) {
                isSpeaking = false;
                audioBtn.classList.remove('playing');
            }
        };
        window.speechSynthesis.speak(utt);
    });
    isSpeaking = true;
    audioBtn.classList.add('playing');
}

let customAudio = null;

function stopSpeech() {
    if (customAudio && !customAudio.paused) {
        customAudio.pause();
        customAudio.currentTime = 0;
    }
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    isSpeaking = false;
    audioBtn.classList.remove('playing');
}

function playCustomAudio(src) {
    stopSpeech();
    customAudio = new Audio(src);
    customAudio.onended = () => {
        isSpeaking = false;
        audioBtn.classList.remove('playing');
    };
    customAudio.play().catch(() => {});
    isSpeaking = true;
    audioBtn.classList.add('playing');
}

// simple jingle generator using Web Audio API
function playGirlTune(done) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const notes = [440, 494, 523, 587]; // A4, B4, C5, D5
        let i = 0;
        function playNext() {
            if (i >= notes.length) {
                ctx.close();
                if (done) done();
                return;
            }
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            osc.frequency.value = notes[i++];
            osc.connect(ctx.destination);
            osc.start();
            setTimeout(() => { osc.stop(); playNext(); }, 200);
        }
        playNext();
    } catch (e) {
        // audio context may be unavailable; just continue
        if (done) done();
    }
}

function toggleSpeech() {
    if (isSpeaking) {
        stopSpeech();
        return;
    }

    const contentEl = storyOverlay.querySelector('.story-content');
    if (!contentEl) return;
    const text = contentEl.innerText || contentEl.textContent;

    const afterTune = () => {
        if (currentGenderPreference === 'female' && currentStory && currentStory.audio) {
            playCustomAudio(currentStory.audio);
        } else if (window.speechSynthesis) {
            speakText(text);
        }
    };

    // if girl voice selected, play jingle first
    if (currentGenderPreference === 'female') {
        playGirlTune(afterTune);
    } else {
        afterTune();
    }
}

// --- VIDEO CAROUSEL DATA & FUNCTIONS ---
// video IDs to embed; only the user-provided clips remain
const videoIds = [
    'tUjOL_Nk6uo', // from https://www.youtube.com/watch?v=tUjOL_Nk6uo
    'jKi2SvWOCXc', // from https://www.youtube.com/watch?v=jKi2SvWOCXc
    '9a9qNLUpkV8', // from https://www.youtube.com/watch?v=9a9qNLUpkV8
    'i4CPSH6eQWE', // from https://www.youtube.com/watch?v=i4CPSH6eQWE
    'l0Z8A4u3CtI', // from https://www.youtube.com/watch?v=l0Z8A4u3CtI
    'UHUZJoqLW-I', // from https://www.youtube.com/watch?v=UHUZJoqLW-I
    'CpXlvLOyBVI', // from https://www.youtube.com/watch?v=CpXlvLOyBVI
    '4TcA1Y-gaRA', // from https://www.youtube.com/watch?v=4TcA1Y-gaRA
    '1vOqQl0vJ4k', // from https://www.youtube.com/watch?v=1vOqQl0vJ4k
    '-9NXxlFnZcU', // from https://www.youtube.com/watch?v=-9NXxlFnZcU
    'v_NwMGuDF6w'  // from https://www.youtube.com/watch?v=v_NwMGuDF6w
];

function renderVideos() {
    const container = document.getElementById('video-carousel');
    if (!container) return;
    container.innerHTML = '';
    videoIds.forEach(id => {
        const card = document.createElement('div');
        card.className = 'video-card';
        // start with thumbnail image and play overlay
        const thumbUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
        card.innerHTML = `
            <div class="video-thumb-wrapper">
                <img src="${thumbUrl}" alt="Video thumbnail" class="video-thumb">
                <div class="play-overlay">▶</div>
            </div>
        `;
        // on click replace content with iframe player
        card.addEventListener('click', () => {
            card.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${id}?rel=0&autoplay=1" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            `;
        });
        container.appendChild(card);
    });
}

// Initialize
renderGallery();
renderVideos();