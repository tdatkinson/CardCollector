export type CardCondition = 'Mint' | 'Near Mint' | 'Excellent' | 'Good';
export type CardGrade = '10' | '9.5' | '9' | '8' | '7';
export type CardRarity = 'Common' | 'Rare' | 'Ultra Rare' | 'Legendary';
export type CardAvailability = 'In Stock' | 'Low Stock' | 'Out of Stock';

export interface Product {
  id: number;
  title: string;
  sport: string;
  set: string;
  year: number;
  condition: CardCondition;
  grade: CardGrade;
  rarity: CardRarity;
  availability: CardAvailability;
  price: number;
  image: string;
  description: string;
  certificateNumber?: string;
  seller: string;
  quantity: number;
  featured?: boolean;
  category: string;
}

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
}

export interface OrderSummary {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Returned';
  total: number;
  tracking?: string;
  items: Product[];
}

export const categoryShortcuts = [
  { label: 'Baseball', icon: '⚾', count: 240 },
  { label: 'Basketball', icon: '🏀', count: 180 },
  { label: 'Football', icon: '🏈', count: 210 },
  { label: 'Hockey', icon: '🏒', count: 120 },
  { label: 'Soccer', icon: '⚽', count: 150 },
  { label: 'Pokemon', icon: '⚡', count: 310 },
  { label: 'Yu-Gi-Oh', icon: '🃏', count: 260 },
  { label: 'Vintage', icon: '🕰️', count: 90 }
];

export const products: Product[] = [
  {
    id: 101,
    title: '1986 Michael Jordan Rookie Card',
    sport: 'Basketball',
    set: 'Fleer',
    year: 1986,
    condition: 'Mint',
    grade: '10',
    rarity: 'Ultra Rare',
    availability: 'In Stock',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80',
    description: 'Gem mint rookie card featuring one of the most iconic athletes in basketball history.',
    certificateNumber: 'MJ-1986-FL-1042',
    seller: 'Northside Collectibles',
    quantity: 2,
    featured: true,
    category: 'rookie'
  },
  {
    id: 102,
    title: '1952 Mickey Mantle',
    sport: 'Baseball',
    set: 'Topps',
    year: 1952,
    condition: 'Near Mint',
    grade: '9',
    rarity: 'Legendary',
    availability: 'In Stock',
    price: 2399.00,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80',
    description: 'Classic vintage card with strong centering and excellent surface quality for collectors.',
    certificateNumber: 'MM-1952-TP-8831',
    seller: 'Heritage Vault',
    quantity: 1,
    featured: true,
    category: 'legend'
  },
  {
    id: 103,
    title: '2000 Tom Brady Autograph',
    sport: 'Football',
    set: 'Playoff Contenders',
    year: 2000,
    condition: 'Excellent',
    grade: '9.5',
    rarity: 'Rare',
    availability: 'Low Stock',
    price: 899.00,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80',
    description: 'Highly sought-after autograph card from the early career of the Hall of Fame quarterback.',
    certificateNumber: 'TB-2000-PC-2245',
    seller: 'Gridiron Gold',
    quantity: 3,
    featured: true,
    category: 'autograph'
  },
  {
    id: 104,
    title: '1993 Sidney Crosby Patch Card',
    sport: 'Hockey',
    set: 'Upper Deck',
    year: 1993,
    condition: 'Mint',
    grade: '10',
    rarity: 'Ultra Rare',
    availability: 'In Stock',
    price: 775.00,
    image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80',
    description: 'Early-career patch card featuring a promising future star of the NHL.',
    certificateNumber: 'SC-1993-UD-5188',
    seller: 'Ice Breaker Cards',
    quantity: 2,
    featured: false,
    category: 'patch'
  },
  {
    id: 105,
    title: '2016 Lionel Messi Barcelona',
    sport: 'Soccer',
    set: 'Panini Prizm',
    year: 2016,
    condition: 'Near Mint',
    grade: '9.5',
    rarity: 'Rare',
    availability: 'In Stock',
    price: 420.00,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80',
    description: 'Prizm issue featuring elite international brilliance in a high-grade finish.',
    certificateNumber: 'LM-2016-PP-9682',
    seller: 'Pitch & Print',
    quantity: 6,
    featured: false,
    category: 'modern'
  },
  {
    id: 106,
    title: '1969 Joe Namath',
    sport: 'Football',
    set: 'Topps',
    year: 1969,
    condition: 'Excellent',
    grade: '8',
    rarity: 'Common',
    availability: 'Low Stock',
    price: 245.00,
    image: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80',
    description: 'Steady vintage football card with attractive color and clear print detail.',
    certificateNumber: 'JN-1969-TP-3147',
    seller: 'The Collector Locker',
    quantity: 4,
    featured: false,
    category: 'vintage'
  },
  {
    id: 107,
    title: '1997 Kobe Bryant Finals',
    sport: 'Basketball',
    set: 'Skybox',
    year: 1997,
    condition: 'Mint',
    grade: '10',
    rarity: 'Rare',
    availability: 'In Stock',
    price: 640.00,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80',
    description: 'A premium collectible reflecting the early championship-era excellence of Kobe Bryant.',
    certificateNumber: 'KB-1997-SB-4551',
    seller: 'Court Side Finds',
    quantity: 2,
    featured: false,
    category: 'finals'
  },
  {
    id: 108,
    title: '2015 Connor McDavid RC',
    sport: 'Hockey',
    set: 'Upper Deck',
    year: 2015,
    condition: 'Good',
    grade: '7',
    rarity: 'Common',
    availability: 'Out of Stock',
    price: 118.00,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    description: 'A budget-friendly rookie card for fans looking to add a future superstar to their collection.',
    certificateNumber: 'CM-2015-UD-2510',
    seller: 'Blue Line Heritage',
    quantity: 0,
    featured: false,
    category: 'rookie'
  },
  {
    id: 109,
    title: '2000 Pikachu Holo',
    sport: 'Pokemon',
    set: 'Base Set',
    year: 2000,
    condition: 'Near Mint',
    grade: '9.5',
    rarity: 'Ultra Rare',
    availability: 'In Stock',
    price: 680.00,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    description: 'Classic holo card featuring one of the most recognizable Pokémon of all time.',
    certificateNumber: 'PK-2000-BS-1104',
    seller: 'Pocket Vault',
    quantity: 4,
    featured: true,
    category: 'pokemon'
  },
  {
    id: 110,
    title: '1999 Blue-Eyes White Dragon',
    sport: 'Yu-Gi-Oh',
    set: 'Legend of Blue Eyes White Dragon',
    year: 1999,
    condition: 'Mint',
    grade: '10',
    rarity: 'Legendary',
    availability: 'Low Stock',
    price: 1425.00,
    image: 'https://images.unsplash.com/photo-1600369160812-6f2d0acef4b0?auto=format&fit=crop&w=900&q=80',
    description: 'One of the cornerstone cards of the Yu-Gi-Oh franchise and a strong modern collector favorite.',
    certificateNumber: 'YG-1999-LBW-2190',
    seller: 'Dungeon Dispatch',
    quantity: 2,
    featured: true,
    category: 'yugioh'
  },
  {
    id: 111,
    title: '2001 Charizard Reverse Holo',
    sport: 'Pokemon',
    set: 'Team Rocket',
    year: 2001,
    condition: 'Excellent',
    grade: '9',
    rarity: 'Rare',
    availability: 'In Stock',
    price: 530.00,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80',
    description: 'A bold and highly desirable reverse holo featuring Charizard in classic early 2000s style.',
    certificateNumber: 'PK-2001-TR-3301',
    seller: 'PokeTrade Co.',
    quantity: 5,
    featured: false,
    category: 'pokemon'
  },
  {
    id: 112,
    title: '2002 Dark Magician',
    sport: 'Yu-Gi-Oh',
    set: 'Dark Beginning 1',
    year: 2002,
    condition: 'Mint',
    grade: '10',
    rarity: 'Ultra Rare',
    availability: 'In Stock',
    price: 890.00,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80',
    description: 'Iconic spellcaster card with strong collector demand and excellent eye appeal.',
    certificateNumber: 'YG-2002-DB1-4472',
    seller: 'Arcane Vault',
    quantity: 3,
    featured: false,
    category: 'yugioh'
  }
];

export const cartItems: CartItem[] = [
  { id: 1, product: products[0], quantity: 1 },
  { id: 2, product: products[2], quantity: 1 }
];

export const orderHistory: OrderSummary[] = [
  {
    id: 'INV-10422',
    date: '2026-09-12',
    status: 'Shipped',
    total: 1499.99,
    tracking: 'UPS 1Z 992 847 597 1016',
    items: [products[0]]
  },
  {
    id: 'INV-10411',
    date: '2026-08-28',
    status: 'Delivered',
    total: 420.00,
    tracking: 'FedEx 7842 991 110',
    items: [products[4]]
  },
  {
    id: 'INV-10390',
    date: '2026-08-04',
    status: 'Processing',
    total: 775.00,
    tracking: undefined,
    items: [products[3]]
  }
];

export const customerProfile = {
  name: 'Tyler Morgan',
  email: 'tyler.morgan@collectorpro.com',
  phone: '(555) 014-2048',
  memberSince: '2023',
  preferredSport: 'Basketball'
};

export const savedAddresses = [
  { label: 'Home', street: '1469 Willow Ridge Ave', city: 'Charlotte', state: 'NC', zip: '28202' },
  { label: 'Work', street: '820 Harbor View Drive', city: 'Charlotte', state: 'NC', zip: '28204' }
];

export const salesStats = [
  { label: 'Gross Sales', value: '$184.2K', delta: '+12.8%' },
  { label: 'Orders', value: '1,824', delta: '+7.4%' },
  { label: 'Avg. Order', value: '$98.70', delta: '+3.1%' },
  { label: 'Return Rate', value: '1.7%', delta: '-0.4%' }
];

export const inventoryAlerts = [
  { title: 'Low stock: 1986 Jordan', severity: 'warning', count: 2 },
  { title: 'Reorder flag: 2016 Messi', severity: 'neutral', count: 1 },
  { title: 'Grade mismatch: 1969 Namath', severity: 'danger', count: 1 }
];

export const returnsOverview = [
  { label: 'Pending', count: 12 },
  { label: 'Approved', count: 8 },
  { label: 'Completed', count: 21 }
];

export const adminReports = {
  sales: [12000, 17000, 16000, 21000, 24000, 25500, 28000],
  inventory: [90, 110, 105, 120, 118, 122, 130],
  returns: [8, 11, 7, 10, 12, 9, 13],
  highValue: [2300, 4200, 3900, 5200, 6100, 7100, 8900]
};
