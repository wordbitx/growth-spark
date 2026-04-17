import type { Product, Testimonial } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Instagram Growth Mastery',
    description: 'Complete guide to growing your Instagram presence with proven strategies, engagement tactics, and content optimization tips.',
    price: 29.99,
    category: 'Social Media',
    image: '/images/products/instagram-growth.jpg',
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'TikTok Viral Blueprint',
    description: 'Master the TikTok algorithm with our proven viral content strategies. Learn trending formats and optimization techniques.',
    price: 34.99,
    category: 'Social Media',
    image: '/images/products/tiktok-blueprint.jpg',
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'YouTube Channel Success Kit',
    description: 'Everything you need to launch a successful YouTube channel. From setup to monetization strategies.',
    price: 49.99,
    category: 'Social Media',
    image: '/images/products/youtube-kit.jpg',
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'LinkedIn Professional Branding',
    description: 'Elevate your professional brand on LinkedIn. Perfect for job seekers and business professionals.',
    price: 24.99,
    category: 'Social Media',
    image: '/images/products/linkedin-guide.jpg',
    rating: 4.6,
    reviews: 78
  },
  {
    id: '5',
    name: 'Twitter X Engagement Booster',
    description: 'Increase your Twitter engagement with proven strategies for growing your audience and influence.',
    price: 19.99,
    category: 'Social Media',
    image: '/images/products/twitter-booster.jpg',
    rating: 4.5,
    reviews: 92
  },
  {
    id: '6',
    name: 'Facebook Ads Mastery',
    description: 'Complete guide to Facebook advertising. Learn to create high-converting ad campaigns.',
    price: 59.99,
    category: 'Marketing',
    image: '/images/products/facebook-ads.jpg',
    rating: 4.8,
    reviews: 134
  },
  {
    id: '7',
    name: 'Pinterest Traffic Masterclass',
    description: 'Drive massive traffic to your website using Pinterest marketing strategies.',
    price: 27.99,
    category: 'Marketing',
    image: '/images/products/pinterest-masterclass.jpg',
    rating: 4.4,
    reviews: 67
  },
  {
    id: '8',
    name: 'Social Media Content Calendar 2024',
    description: '12-month content calendar with 365 post ideas for all major platforms.',
    price: 14.99,
    category: 'Social Media',
    image: '/images/products/content-calendar.jpg',
    rating: 4.7,
    reviews: 203
  },
  {
    id: '9',
    name: 'Kids Alphabet Adventure Book',
    description: 'Fun and educational alphabet learning book for children with colorful illustrations and activities.',
    price: 12.99,
    category: 'Kids Learning',
    image: '/images/products/kids-alphabet.jpg',
    rating: 4.9,
    reviews: 245
  },
  {
    id: '10',
    name: 'Kids Math Adventures Workbook',
    description: 'Engaging math workbook for kids ages 5-8 with fun activities and puzzles.',
    price: 15.99,
    category: 'Kids Learning',
    image: '/images/products/kids-math.jpg',
    rating: 4.8,
    reviews: 178
  },
  {
    id: '11',
    name: 'Coding for Kids Starter Kit',
    description: 'Introduce your child to programming with this fun and interactive coding starter kit.',
    price: 22.99,
    category: 'Kids Learning',
    image: '/images/products/kids-coding.jpg',
    rating: 4.7,
    reviews: 89
  },
  {
    id: '12',
    name: 'Arduino Starter Project Guide',
    description: 'Complete guide to Arduino projects for beginners. Build your own electronic creations.',
    price: 39.99,
    category: 'Dev Kits',
    image: '/images/products/arduino-guide.jpg',
    rating: 4.8,
    reviews: 112
  },
  {
    id: '13',
    name: 'Raspberry Pi Projects Collection',
    description: 'Ultimate DIY electronics and coding handbook with Raspberry Pi projects.',
    price: 44.99,
    category: 'Dev Kits',
    image: '/images/products/raspberry-pi.jpg',
    rating: 4.9,
    reviews: 95
  },
  {
    id: '14',
    name: 'Freelancing Success Blueprint',
    description: 'Build your freelance empire with proven strategies for finding clients and scaling your business.',
    price: 49.99,
    category: 'Business',
    image: '/images/products/freelancing-blueprint.jpg',
    rating: 4.6,
    reviews: 134
  },
  {
    id: '15',
    name: 'Digital Marketing Masterclass',
    description: 'Unlock your business potential with comprehensive digital marketing strategies.',
    price: 69.99,
    category: 'Marketing',
    image: '/images/products/digital-marketing.jpg',
    rating: 4.8,
    reviews: 167
  },
  {
    id: '16',
    name: 'E-commerce Launch Guide',
    description: 'Expert strategies for entrepreneurs to launch and grow successful online stores.',
    price: 54.99,
    category: 'Business',
    image: '/images/products/ecommerce-guide.jpg',
    rating: 4.7,
    reviews: 88
  },
  {
    id: '17',
    name: 'Virtual Assistant Training Kit',
    description: 'Master productivity and flexibility with comprehensive VA training materials.',
    price: 42.99,
    category: 'Business',
    image: '/images/products/virtual-assistant.jpg',
    rating: 4.5,
    reviews: 76
  },
  {
    id: '18',
    name: 'Canva Design Mastery',
    description: 'Unlock your creative potential with professional Canva design techniques and templates.',
    price: 32.99,
    category: 'Design',
    image: '/images/products/canva-mastery.jpg',
    rating: 4.8,
    reviews: 198
  },
  {
    id: '19',
    name: 'SEO Optimization Guide',
    description: 'Unlock top rankings and traffic with advanced SEO strategies and techniques.',
    price: 47.99,
    category: 'Marketing',
    image: '/images/products/seo-guide.jpg',
    rating: 4.6,
    reviews: 123
  },
  {
    id: '20',
    name: 'Email Marketing Automation',
    description: 'Unlock your business growth with powerful email marketing automation strategies.',
    price: 38.99,
    category: 'Marketing',
    image: '/images/products/email-marketing.jpg',
    rating: 4.7,
    reviews: 145
  },
  {
    id: '21',
    name: 'Copywriting Mastery Course',
    description: 'Unlock your voice and amplify your message with professional copywriting techniques.',
    price: 55.99,
    category: 'Business',
    image: '/images/products/copywriting.jpg',
    rating: 4.8,
    reviews: 112
  },
  {
    id: '22',
    name: 'Kids Science Adventures',
    description: 'Fun experiments and cool discoveries for young scientists. Spark curiosity and learn!',
    price: 18.99,
    category: 'Kids Learning',
    image: '/images/products/kids-science.jpg',
    rating: 4.9,
    reviews: 234
  },
  {
    id: '23',
    name: 'Python Programming for Beginners',
    description: 'Unlock your coding journey with comprehensive Python programming fundamentals.',
    price: 44.99,
    category: 'Dev Kits',
    image: '/images/products/python-beginners.jpg',
    rating: 4.8,
    reviews: 189
  },
  {
    id: '24',
    name: 'Web Development Bootcamp',
    description: 'Master coding from scratch with this comprehensive web development bootcamp.',
    price: 79.99,
    category: 'Dev Kits',
    image: '/images/products/web-dev.jpg',
    rating: 4.9,
    reviews: 267
  },
  {
    id: '25',
    name: 'Snapchat Marketing Guide',
    description: 'Unlock your brand potential on Snapchat with proven marketing strategies and engagement tactics.',
    price: 26.99,
    category: 'Social Media',
    image: '/images/products/snapchat-guide.jpg',
    rating: 4.5,
    reviews: 56
  },
  {
    id: '26',
    name: 'Affiliate Marketing Mastery',
    description: 'Unlock your financial potential and scale your business with affiliate marketing strategies.',
    price: 56.99,
    category: 'Marketing',
    image: '/images/products/affiliate-marketing.jpg',
    rating: 4.7,
    reviews: 98
  },
  {
    id: '27',
    name: 'Dropshipping Success Guide',
    description: 'Unlock your e-commerce empire with expert dropshipping strategies and supplier management.',
    price: 48.99,
    category: 'Business',
    image: '/images/products/dropshipping.jpg',
    rating: 4.6,
    reviews: 87
  },
  {
    id: '28',
    name: 'Kids Art Creativity Book',
    description: 'Unleash your child inner artist with fun art projects, drawing guides, and creative activities.',
    price: 16.99,
    category: 'Kids Learning',
    image: '/images/products/kids-art.jpg',
    rating: 4.8,
    reviews: 156
  },
  {
    id: '29',
    name: 'Unity Game Development Starter',
    description: 'Unlock your creative journey in game development with Unity engine fundamentals and projects.',
    price: 64.99,
    category: 'Dev Kits',
    image: '/images/products/unity-gamedev.jpg',
    rating: 4.8,
    reviews: 112
  },
  {
    id: '30',
    name: 'ChatGPT AI Prompts Mastery',
    description: 'Master AI prompting techniques to boost productivity, creativity, and business efficiency.',
    price: 35.99,
    category: 'Business',
    image: '/images/products/chatgpt-prompts.jpg',
    rating: 4.9,
    reviews: 234
  },
  {
    id: '31',
    name: 'Podcast Launch Masterclass',
    description: 'Unlock your voice and share your story with professional podcast creation and growth strategies.',
    price: 42.99,
    category: 'Marketing',
    image: '/images/products/podcast-masterclass.jpg',
    rating: 4.7,
    reviews: 78
  },
  {
    id: '32',
    name: 'Personal Finance Mastery',
    description: 'Unlock your wealth potential with budgeting, investing, and financial planning strategies.',
    price: 38.99,
    category: 'Business',
    image: '/images/products/personal-finance.jpg',
    rating: 4.8,
    reviews: 145
  },
  {
    id: '33',
    name: 'React Native Mobile Development',
    description: 'Master cross-platform app building with React Native framework and real-world projects.',
    price: 68.99,
    category: 'Dev Kits',
    image: '/images/products/react-native.jpg',
    rating: 4.7,
    reviews: 134
  },
  {
    id: '34',
    name: 'Kids Reading Adventure Collection',
    description: 'Unlock new worlds with engaging stories, reading exercises, and literacy activities for children.',
    price: 14.99,
    category: 'Kids Learning',
    image: '/images/products/kids-reading.jpg',
    rating: 4.9,
    reviews: 198
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'SJ',
    rating: 5,
    text: 'The Instagram Growth Mastery guide completely transformed my social media presence. I gained over 10k followers in just 2 months!',
    date: 'March 15, 2024'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'MC',
    rating: 5,
    text: 'GROWTH SPARK LLC delivers exceptional quality. The TikTok Viral Blueprint helped me go viral multiple times. Highly recommended!',
    date: 'March 10, 2024'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'ER',
    rating: 5,
    text: 'My kids love the educational books! The Alphabet Adventure Book made learning so much fun for my 4-year-old.',
    date: 'February 28, 2024'
  },
  {
    id: '4',
    name: 'David Thompson',
    avatar: 'DT',
    rating: 5,
    text: 'The Arduino Starter Guide is perfect for beginners. Clear instructions and great projects. Will definitely buy more!',
    date: 'February 20, 2024'
  },
  {
    id: '5',
    name: 'Lisa Park',
    avatar: 'LP',
    rating: 5,
    text: 'Freelancing Success Blueprint changed my life. I went from struggling to find clients to having a waitlist!',
    date: 'February 15, 2024'
  },
  {
    id: '6',
    name: 'James Wilson',
    avatar: 'JW',
    rating: 5,
    text: 'Excellent customer service and instant delivery. The Facebook Ads Mastery course paid for itself in the first week!',
    date: 'February 8, 2024'
  }
];

export const categories = [
  'All',
  'Social Media',
  'Marketing',
  'Kids Learning',
  'Dev Kits',
  'Business',
  'Design'
];
