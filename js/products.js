/**
 * Sawariya Royal Luxury Jewellery - Product Catalog
 * Owner: Om Mishra | Jaipur, Rajasthan
 * WhatsApp: +91 9257222342 | Email: omommishra746@gmail.com
 * Note: Custom luxury jewelry with premium anti-tarnish luster finish.
 */

const PRODUCTS_DATA = [
  // ===================== BRACELETS =====================
  {
    id: "SRLJ-BR-01",
    name: "Royal Blossom Carved Floral Cuff",
    category: "Bracelets",
    categorySlug: "bracelets",
    price: 399,
    originalPrice: 899,
    image: "images/bracelets1.jpeg",
    fallbackImage: "images/bracelets1.jpeg",
    badge: "Royal Heritage",
    rating: 4.8,
    reviewsCount: 25,
    isBestseller: true,
    isFloatingHero: false,
    description: "Exquisitely sculpted imperial floral petals crafted in a royal gold-tone finish. Designed to drape the wrist with regal grandeur, reminiscent of the timeless blossom gardens of Jaipur palaces.",
    features: [
      "Custom Sculpted Royal Floral Motifs",
      "Skin-Friendly Anti-Tarnish Finish",
      "Open Flexible Cuff - Fits All Wrist Sizes",
      "Hypoallergenic & Comfortable Everyday Wear"
    ],
    material: "Custom designer jewelry alloy with protective anti-tarnish coating",
    finish: "Imperial Royal Gold Luster",
    dimensions: "Width: 3.2 cm | Inner Diameter: 6.0 cm (Adjustable)",
    care: "Wipe gently with soft dry cloth after wear. Keep away from direct perfumes and harsh chemicals."
  },
  {
    id: "SRLJ-BR-02",
    name: "Jaipur Coral Reef Textured Open Cuff Bangle",
    category: "Bracelets",
    categorySlug: "bracelets",
    price: 399,
    originalPrice: 899,
    image: "images/bracelets2.jpeg",
    fallbackImage: "images/bracelets2.jpeg",
    badge: "Modern Luxury",
    rating: 4.8,
    reviewsCount: 29,
    isBestseller: false,
    isFloatingHero: false,
    description: "Modern organic coral-inspired branching artistry cast in gleaming gold tone. An artistic statement piece that effortlessly transitions from festive Jaipur celebrations to contemporary cocktail galas.",
    features: [
      "Architectural Coral Branch Design",
      "Matte & Gloss Multi-Dimensional Texture",
      "Anti-Tarnish Protective Shield",
      "Comfort-contoured inner edges"
    ],
    material: "Premium jewelry alloy with gold-tone finish",
    finish: "Textured Royal Gold Luster",
    dimensions: "Width: 2.8 cm | Diameter: 5.8 cm (Adjustable)",
    care: "Store in airtight pouch provided with purchase."
  },
  {
    id: "SRLJ-BR-03",
    name: "Botanical Monstera Palm Leaf Embossed Luxury Bangle",
    category: "Bracelets",
    categorySlug: "bracelets",
    price: 349,
    originalPrice: 699,
    image: "images/bracelets3.jpeg",
    fallbackImage: "images/bracelets3.jpeg",
    badge: "Trending",
    rating: 4.3,
    reviewsCount: 21,
    isBestseller: true,
    isFloatingHero: false,
    description: "Delicate overlapping monstera leaf engravings with textured stippling. Captures the light with a radiant luster on skin, designed for girls and ladies with a taste for botanical sophistication.",
    features: [
      "Detailed Monstera Leaf Vein Etching",
      "Anti-Fade Protective Sealant",
      "Lightweight Ergonomic All-Day Wear",
      "Signature Sawariya Royal Collection"
    ],
    material: "Custom artisan jewelry alloy",
    finish: "Brushed & Polished Dual Gold Tone",
    dimensions: "Width: 2.5 cm | Free Size Adjustable",
    care: "Avoid moisture and store in royal velvet box."
  },
  {
    id: "SRLJ-BR-04",
    name: "Imperial Butterfly Filigree Gold Silhouette Cuff",
    category: "Bracelets",
    categorySlug: "bracelets",
    price: 349,
    originalPrice: 699,
    image: "images/bracelets4.jpeg",
    fallbackImage: "images/bracelets4.jpeg",
    badge: "Signature Icon",
    rating: 4.5,
    reviewsCount: 16,
    isBestseller: true,
    isFloatingHero: true,
    description: "Intricately etched twin butterflies hovering in lace filigree with rich gold-tone shine. A breathtaking feminine masterpiece that evokes grace, transformation, and sheer royalty.",
    features: [
      "Intricate Butterfly Wing Micro-Filigree",
      "Lightweight yet Durable Construction",
      "Rich Warm Champagne Gold Hue",
      "Comes in Velvet Royal Gift Box"
    ],
    material: "Fine artisan jewelry alloy with mirror polish",
    finish: "Mirror-Polished Gold-Tone Filigree",
    dimensions: "Width: 3.5 cm | Open Cuff Adjustable",
    care: "Keep in dry box, clean with microfiber suede cloth."
  },

  // ===================== NECKLACES =====================
  {
    id: "SRLJ-NK-01",
    name: "Maharani Starlight Baguette Royal Choker Set",
    category: "Necklaces",
    categorySlug: "necklaces",
    price: 499,
    originalPrice: 1299,
    image: "images/necklace1.jpeg",
    fallbackImage: "images/necklace1.jpeg",
    badge: "Celebrity Choice",
    rating: 4.8,
    reviewsCount: 22,
    isBestseller: true,
    isFloatingHero: true,
    description: "As adorned by our royal Jaipur muse: Radiant double-row cascading baguette crystal choker with matching chandelier drops. Perfectly contoured for evening soirees, weddings, and high-glamour celebrations.",
    features: [
      "Faceted Baguette Crystal Stones",
      "High-Shine Diamond-Silver Luster Finish",
      "Includes Pair of Matching Drop Earrings",
      "Dual Security Clasp with Adjustable Tail Extension"
    ],
    material: "Custom jewelry alloy with multi-faceted Austrian baguette crystals",
    finish: "Diamond-Silver High Luster",
    dimensions: "Choker Length: 36 cm + 7 cm extension | Earrings: 3.8 cm",
    care: "Store individually in velvet box to maintain stone brilliance."
  },
  {
    id: "SRLJ-NK-02",
    name: "Aura Herringbone Chain with Teardrop Solitaire Pendant",
    category: "Necklaces",
    categorySlug: "necklaces",
    price: 399,
    originalPrice: 899,
    image: "images/necklace2.jpeg",
    fallbackImage: "images/necklace2.jpeg",
    badge: "Everyday Luxury",
    rating: 4.8,
    reviewsCount: 19,
    isBestseller: true,
    isFloatingHero: false,
    description: "Sleek, fluid liquid-gold herringbone choker chain crowned with a brilliant teardrop crystal halo pendant. Effortless everyday luxury that hugs the collarbone seamlessly.",
    features: [
      "Fluid Liquid-Gold Tone Flat Snake Chain",
      "Faceted Teardrop Solitaire with Pavé Halo",
      "Anti-Tarnish Daily Wear Protective Coating",
      "Adjustable Tail Extension"
    ],
    material: "Premium jewelry alloy & faceted crystal halo",
    finish: "Glossy Liquid Gold Tone",
    dimensions: "Chain: 40 cm + 5 cm extension | Pendant: 1.5 cm",
    care: "Suitable for daily wear. Keep clean by wiping with dry cloth."
  },
  {
    id: "SRLJ-NK-03",
    name: "Pastel Baguette Gemstone & Diamond Fringe Choker Ensemble",
    category: "Necklaces",
    categorySlug: "necklaces",
    price: 499,
    originalPrice: 1299,
    image: "images/necklace3.jpeg",
    fallbackImage: "images/necklace3.jpeg",
    badge: "Festive Edit",
    rating: 4.9,
    reviewsCount: 18,
    isBestseller: true,
    isFloatingHero: false,
    description: "A melody of pastel mint, blush rose, and lavender baguette crystals draped in triple-line diamond tennis sparkle. Accompanied by matching linear baguette earrings for a modern royal statement.",
    features: [
      "Mint, Lavender & Rose Quartz Pastel Crystals",
      "Triple-Row Micro-Pavé Crystal Collar",
      "Includes Matching Baguette Earrings Set",
      "Ideal for Pastel Lehengas & Evening Gowns"
    ],
    material: "Custom jewelry alloy with pastel crystal baguettes",
    finish: "High-Shine Diamond Finish",
    dimensions: "Collar Length: 38 cm + 6 cm extender | Earrings: 3.2 cm",
    care: "Store in cool, dry velvet slot to prevent scratching."
  },

  // ===================== EARRINGS =====================
  {
    id: "SRLJ-ER-01",
    name: "Sawariya Royal Mother-of-Pearl Geometric Tier Drop Earrings",
    category: "Earrings",
    categorySlug: "earrings",
    price: 299,
    originalPrice: 699,
    image: "images/ear_rings1_a.jpeg",
    fallbackImage: "images/ear_rings1.jpeg",
    badge: "Bestseller",
    rating: 4.4,
    reviewsCount: 15,
    isBestseller: true,
    isFloatingHero: false,
    description: "Arched triple-tier iridescent mother-of-pearl slabs framed in polished gold-tone contour. Displayed on authentic Sawariya Royal Luxury Jewellery official packaging.",
    features: [
      "Natural Lustrous Shell Inlay",
      "Triple Arched Fan Silhouette",
      "Hypoallergenic Comfort Posts",
      "Authentic Sawariya Royal Packaging"
    ],
    material: "Mother of Pearl Composite & Gold-Tone Jewelry Alloy",
    finish: "Polished Gold Tone & Iridescent Shell",
    dimensions: "Length: 4.2 cm | Width: 2.8 cm",
    care: "Avoid direct contact with water and perfume."
  },
  {
    id: "SRLJ-ER-02",
    name: "Filigree Butterfly Caged Moonstone Orb Drop Earrings",
    category: "Earrings",
    categorySlug: "earrings",
    price: 349,
    originalPrice: 899,
    image: "images/ear_rings1_b.jpeg",
    fallbackImage: "images/ear_rings1.jpeg",
    badge: "Brand Icon",
    rating: 4.9,
    reviewsCount: 23,
    isBestseller: true,
    isFloatingHero: true,
    description: "Delicate golden filigree butterflies supporting a spiral-caged translucent glowing moonstone orb. The pinnacle of whimsical royal Jaipur glamour.",
    features: [
      "Artisan Butterfly Stud Silhouette",
      "Spiral Wire Caged Glowing Moonstone Orb",
      "Smooth Kinetic Movement & Graceful Sway",
      "Official Sawariya Royal Card Presentation"
    ],
    material: "Custom jewelry alloy & synthetic opalescent moonstone",
    finish: "Warm Gold Tone & Glowing Pearl Luster",
    dimensions: "Total Drop: 4.5 cm | Width: 2.0 cm",
    care: "Wipe with dry velvet cloth after use."
  },
  {
    id: "SRLJ-ER-03",
    name: "Solitaire Stud & Pearl Teardrop Crystal Chandelier Drops",
    category: "Earrings",
    categorySlug: "earrings",
    price: 349,
    originalPrice: 899,
    image: "images/ear_rings1_c.jpeg",
    fallbackImage: "images/ear_rings1.jpeg",
    badge: "Royal Classic",
    rating: 4.9,
    reviewsCount: 20,
    isBestseller: false,
    isFloatingHero: false,
    description: "Triple-tier elegance: Round brilliant crystal stud flowing into a lustrous ivory pearl, culminating in a faceted teardrop crystal pendant in a warm gold-tone setting.",
    features: [
      "Triple Tier: Crystal Stud + Pearl + Teardrop",
      "High Refraction Faceted Crystal Drop",
      "Comfort Push Back with Wide Support Disc",
      "Original Sawariya Royal Card Presentation"
    ],
    material: "Faceted Austrian Crystal, Shell Pearl, Custom Gold-Tone Alloy",
    finish: "Gold Tone & Crystal Brilliance",
    dimensions: "Drop Length: 5.0 cm | Width: 1.2 cm",
    care: "Keep in dry container; avoid chemical exposure."
  },
  {
    id: "SRLJ-ER-04",
    name: "Riviera Chunky Fluted Croissant Gold Huggie Hoops",
    category: "Earrings",
    categorySlug: "earrings",
    price: 299,
    originalPrice: 599,
    image: "images/ear_rings2.jpeg",
    fallbackImage: "images/ear_rings2.jpeg",
    badge: "Must-Have",
    rating: 4.8,
    reviewsCount: 22,
    isBestseller: true,
    isFloatingHero: false,
    description: "Bold, sculptural fluted croissant huggies in radiant polished gold tone. The ultimate modern luxury essential for everyday chic and effortless royal styling.",
    features: [
      "Sculpted Fluted Ribbed Design",
      "Anti-Tarnish Protective Shield",
      "Hollow Core - Featherweight on Ears",
      "Skin-Friendly Everyday Wear"
    ],
    material: "High-grade jewelry alloy with mirror polish",
    finish: "High-Mirror Yellow Gold Tone",
    dimensions: "Diameter: 2.4 cm | Thickness: 1.0 cm",
    care: "Ideal for daily wear. Clean with warm dry cloth."
  },
  {
    id: "SRLJ-ER-05",
    name: "Midnight & Nude Enamel Golden Twin Leaf Studs",
    category: "Earrings",
    categorySlug: "earrings",
    price: 299,
    originalPrice: 599,
    image: "images/ear_rings3.jpeg",
    fallbackImage: "images/ear_rings3.jpeg",
    badge: "New Arrival",
    rating: 4.7,
    reviewsCount: 12,
    isBestseller: false,
    isFloatingHero: false,
    description: "Hand-applied glossy midnight navy and warm nude enamel encased in polished gold-tone leaf veins. Chic, subtle, and exceptionally versatile for ethnic and western outfits.",
    features: [
      "Glossy Vitreous Dual Enamel Inlay",
      "Fine Botanical Leaf Structure",
      "Secure Push Back Clasp",
      "Jaipur Artisan Custom Design"
    ],
    material: "Designer jewelry alloy with enamel inlay and gold-tone border",
    finish: "Enamel Gloss & Gold Polish",
    dimensions: "Height: 2.2 cm | Width: 1.4 cm",
    care: "Keep away from hard impacts and cosmetics."
  },
  {
    id: "SRLJ-ER-06",
    name: "Noir & Pavé Crystal Interlocking Swirl Studs",
    category: "Earrings",
    categorySlug: "earrings",
    price: 329,
    originalPrice: 799,
    image: "images/ear_rings4.jpeg",
    fallbackImage: "images/ear_rings4.jpeg",
    badge: "Cocktail Glam",
    rating: 4.8,
    reviewsCount: 20,
    isBestseller: false,
    isFloatingHero: false,
    description: "Sleek jet-black enamel ribbons interwoven with pavé-set Austrian crystal halos. Modern high-jewelry aesthetics crafted for contemporary queens.",
    features: [
      "Interlocking Infinity Swirl Geometry",
      "Jet Black Glaze with Pavé Crystal Border",
      "Low Profile Ear-Hugging Comfort",
      "Statement Cocktail Elegance"
    ],
    material: "Custom jewelry alloy, pavé crystals, black enamel",
    finish: "Gold Tone, Jet Black & Crystal Pavé",
    dimensions: "Height: 2.4 cm | Width: 1.8 cm",
    care: "Wipe with soft cotton after wearing."
  },
  {
    id: "SRLJ-ER-07",
    name: "Imperial Tiara Crystal Arch & Cultured Pearl Studs",
    category: "Earrings",
    categorySlug: "earrings",
    price: 299,
    originalPrice: 599,
    image: "images/ear_rings5.jpeg",
    fallbackImage: "images/ear_rings5.jpeg",
    badge: "Royal Pick",
    rating: 4.4,
    reviewsCount: 19,
    isBestseller: true,
    isFloatingHero: false,
    description: "An inverted royal tiara arch encrusted with sparkling crystals cradling a luminous natural-shine pearl. A royal crown for your earlobes.",
    features: [
      "Crown Tiara Pavé Arch Design",
      "Lustrous Ivory Pearl Center",
      "Anti-Tarnish Protective Coating",
      "Perfect for Festive & Party Elegance"
    ],
    material: "Custom gold-tone jewelry alloy, pavé stones, cultured shell pearl",
    finish: "Yellow Gold Tone & Pearl Luster",
    dimensions: "Height: 1.8 cm | Width: 1.6 cm",
    care: "Store in soft velvet pouch."
  },
  {
    id: "SRLJ-ER-08",
    name: "Starlight Swirl Caged Rose Quartz Orb Dangles",
    category: "Earrings",
    categorySlug: "earrings",
    price: 349,
    originalPrice: 899,
    image: "images/ear_rings6.jpeg",
    fallbackImage: "images/ear_rings6.jpeg",
    badge: "Romantic Luxury",
    rating: 5.0,
    reviewsCount: 30,
    isBestseller: true,
    isFloatingHero: false,
    description: "Top brilliant-cut crystal stud suspending a spiral golden cage holding a soft frosted rose quartz orb. Delicate, ethereal, and captivating.",
    features: [
      "Brilliant Cut Solitaire Top Stud",
      "Spiral Swirl Gold-Tone Wire Cage",
      "Frosted Rose Quartz Glass Orb",
      "Gentle Kinetic Pendulum Sway"
    ],
    material: "Custom jewelry alloy, crystal stud, frosted quartz glass",
    finish: "Yellow Gold Tone & Soft Rose Hue",
    dimensions: "Length: 3.8 cm | Orb Diameter: 1.4 cm",
    care: "Protect from scratching against rough surfaces."
  },
  {
    id: "SRLJ-ER-09",
    name: "Infinity Crystal Pavé & Luminous Pearl Drop Earrings",
    category: "Earrings",
    categorySlug: "earrings",
    price: 329,
    originalPrice: 599,
    image: "images/ear_rings7.jpeg",
    fallbackImage: "images/ear_rings7.jpeg",
    badge: "Timeless",
    rating: 4.8,
    reviewsCount: 25,
    isBestseller: false,
    isFloatingHero: false,
    description: "Curved infinity silhouette pavé-set with shimmering crystals anchored by a teardrop pearl. Symbol of everlasting grace and royal beauty.",
    features: [
      "Endless Figure-8 Infinity Loop",
      "Micro-Pavé Austrian Crystals",
      "Teardrop Pearl Accent",
      "Comfort Post Closure"
    ],
    material: "Custom gold-tone jewelry alloy, crystals, drop pearl",
    finish: "Gold Tone & Sparkling Crystal",
    dimensions: "Length: 2.6 cm | Width: 1.0 cm",
    care: "Wipe clean with dry soft fabric."
  },
  {
    id: "SRLJ-ER-10",
    name: "Crystal Blossom & Cascading Pearl Waterfall Earrings",
    category: "Earrings",
    categorySlug: "earrings",
    price: 299,
    originalPrice: 599,
    image: "images/ear_rings8.jpeg",
    fallbackImage: "images/ear_rings8.jpeg",
    badge: "Silver Royalty",
    rating: 4.9,
    reviewsCount: 13,
    isBestseller: false,
    isFloatingHero: false,
    description: "Five-petal crystal flower stud with delicate waterfall drop pearls that sway playfully with every turn. Finished in brilliant diamond silver tone.",
    features: [
      "Five-Petal Diamond Crystal Blossom Stud",
      "Triple Cascading Pearl Waterfall Tendrils",
      "Anti-Tarnish Silver Luster",
      "Lightweight for Long Party Evenings"
    ],
    material: "Custom jewelry alloy, marquise cut crystals, drop pearls",
    finish: "Brilliant Diamond Silver Tone",
    dimensions: "Length: 3.5 cm | Width: 1.5 cm",
    care: "Store in pouch away from moisture."
  },
  {
    id: "SRLJ-ER-11",
    name: "Jaipur MOP Tiered Triangular Architectural Studs",
    category: "Earrings",
    categorySlug: "earrings",
    price: 359,
    originalPrice: 899,
    image: "images/ear_rings9.jpeg",
    fallbackImage: "images/ear_rings9.jpeg",
    badge: "Artisan Craft",
    rating: 4.7,
    reviewsCount: 15,
    isBestseller: false,
    isFloatingHero: false,
    description: "Art-deco inspired three-tier mother-of-pearl shell layered with fine gold-tone dividers on a sculpted triangular profile. Clean, majestic, and understated royal style.",
    features: [
      "Three-Tier Stepped Triangular Profile",
      "Natural Iridescent Shell Sheen",
      "Warm Gold-Tone Inlay Dividers",
      "Ergonomic Flat Backing"
    ],
    material: "Mother of Pearl Composite & Gold-Tone Alloy",
    finish: "Pearlescent Ivory & Polished Gold Tone",
    dimensions: "Height: 2.1 cm | Width: 1.8 cm",
    care: "Keep away from water immersion."
  },

  // ===================== RINGS =====================
  {
    id: "SRLJ-RG-01",
    name: "Jaipur Rajwada Solitaire Halo Cocktail Ring",
    category: "Rings",
    categorySlug: "rings",
    price: 399,
    originalPrice: 999,
    image: "images/ring1.jpeg",
    fallbackImage: "images/ring1.jpeg",
    badge: "Jaipur Heritage",
    rating: 4.8,
    reviewsCount: 22,
    isBestseller: true,
    isFloatingHero: false,
    description: "Imperial round brilliant-cut solitaire crystal enveloped in a delicate pavé diamond halo with dual-split micro-pavé shank. Majestic royal presence on any finger.",
    features: [
      "Round Brilliant Solitaire Center Stone",
      "Delicate Double Halo Pavé Setting",
      "Comfort-Contoured Dual Split Band",
      "Anti-Tarnish Velvet Box Presentation"
    ],
    material: "Designer jewelry alloy, precision-cut Austrian crystal diamonds",
    finish: "Silver Platinum Luster & Diamond Shine",
    dimensions: "Solitaire: 1.2 cm | Free-size adjustable band",
    care: "Wipe with soft cloth. Avoid moisture and hand sanitizers."
  },
  {
    id: "SRLJ-RG-02",
    name: "Emerald Empress Pavé Halo Royal Cocktail Ring",
    category: "Rings",
    categorySlug: "rings",
    price: 449,
    originalPrice: 1199,
    image: "images/ring2.jpeg",
    fallbackImage: "images/ring2.jpeg",
    badge: "Royal Pick",
    rating: 4.9,
    reviewsCount: 28,
    isBestseller: true,
    isFloatingHero: false,
    description: "A breathtaking cushion-cut pink crystal gemstone nestled within a sparkling micro-pavé halo on a rose gold-tone band. Designed for grand festive presence and royal cocktail banquets.",
    features: [
      "Radiant Cushion-Cut Center Stone",
      "Micro-Pavé Diamond Crystal Halo",
      "Comfort-Contoured Rose Gold-Tone Band",
      "Adjustable Free-Size Fit"
    ],
    material: "Custom jewelry alloy, faceted crystal gemstone, Austrian stones",
    finish: "Rose Gold Tone & Pink Sapphire Luster",
    dimensions: "Center Stone: 1.4 cm x 1.2 cm | Adjustable band",
    care: "Store in ring box slot to protect stone facets."
  },
  {
    id: "SRLJ-RG-03",
    name: "Aura Oval Topaz & Crystal Trillion Statement Ring",
    category: "Rings",
    categorySlug: "rings",
    price: 499,
    originalPrice: 999,
    image: "images/ring3.jpeg",
    fallbackImage: "images/ring3.jpeg",
    badge: "Feminine Modern",
    rating: 4.9,
    reviewsCount: 31,
    isBestseller: false,
    isFloatingHero: false,
    description: "An exquisite oval-cut golden topaz crystal flanked by twin trillion-cut Austrian side crystals set on a polished rose gold-tone band. Clean, unmistakable luxury ring silhouette with radiant warmth.",
    features: [
      "Faceted Oval Amber-Topaz Crystal Center",
      "Twin Trillion-Cut Side Accent Crystals",
      "Polished Rose Gold-Tone Slender Band",
      "Skin-Friendly Comfort Fit"
    ],
    material: "Custom jewelry alloy, faceted crystal gemstone, Austrian side stones",
    finish: "Rose Gold Tone & Golden Topaz Luster",
    dimensions: "Oval Center: 1.1 cm x 0.8 cm | Adjustable band",
    care: "Remove before hand washing for extended luster."
  }
];

// Business & Owner Information
const BUSINESS_INFO = {
  name: "Sawariya Royal Luxury Jewellery",
  shortName: "Sawariya Royal",
  tagline: "Timeless Jaipur Royalty, Handcrafted for the Queen in You.",
  owner: "Om Mishra",
  phone: "9257222342",
  phoneDisplay: "+91 9257222342",
  email: "omommishra746@gmail.com",
  whatsappNumber: "919257222342",
  whatsappChannel: "https://whatsapp.com/channel/0029VbEGqteAojYmeHsOnk3B",
  instagramUrl: "https://www.instagram.com/sawariya_royal_lxry.52?psln=MWRrMnFnOWIya2FqdQ==",
  instagramHandle: "@sawariya_royal_lxry.52",
  location: "Jaipur, Rajasthan, India",
  hours: "Mon - Sun: 10:00 AM - 9:00 PM IST",
  logo: "images/logo.jpeg"
};

// Category Definitions
const CATEGORIES = [
  { id: "all", name: "All Jewels", count: 21, icon: "crown" },
  { id: "earrings", name: "Earrings", count: 11, icon: "sparkles", image: "images/ear_rings1_b.jpeg" },
  { id: "necklaces", name: "Necklaces", count: 3, icon: "gem", image: "images/necklace1.jpeg" },
  { id: "bracelets", name: "Bracelets & Cuffs", count: 4, icon: "circle-dot", image: "images/bracelets4.jpeg" },
  { id: "rings", name: "Rings", count: 3, icon: "ring", image: "images/ring1.jpeg" }
];

// Attach to window and exports
if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
  window.BUSINESS_INFO = BUSINESS_INFO;
  window.CATEGORIES = CATEGORIES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS_DATA, BUSINESS_INFO, CATEGORIES };
}
