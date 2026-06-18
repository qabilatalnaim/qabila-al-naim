export interface SearchItem {
  title: string
  description: string
  url: string
  category: string
  keywords: string[]
  icon: string
}

// فهرس البحث في كل محتوى الموقع
export const searchIndex: SearchItem[] = [
  {
    title: 'النسب والتاريخ',
    description: 'سلسلة النسب الهاشمي لقبيلة السادة النعيم من الإمام الحسين. البطون الأربعة: الفخر، المحمدية، الحزومين، البو طارق.',
    url: '/history',
    category: 'التاريخ',
    keywords: ['نسب', 'تاريخ', 'هاشمي', 'حسين', 'بطون', 'فخر', 'محمدية', 'حزومين', 'بو طارق', 'الإمام', 'الشرف'],
    icon: '📖',
  },
  {
    title: 'بلدة عز الدين',
    description: 'موطن قبيلة السادة النعيم التاريخي. قصة التسمية بالشيخ عز الدين أبو حمرة، معالم البلدة ودورها الاجتماعي.',
    url: '/town',
    category: 'التاريخ',
    keywords: ['بلدة', 'عز الدين', 'أبو حمرة', 'موطن', 'البلدة', 'تسمية', 'معالم', 'انتماء', 'جذور'],
    icon: '🏘️',
  },
  {
    title: 'الإبل - أهل الصفرا',
    description: 'تربية الإبل عند قبيلة النعيم. سلالات الإبل الصفراء الأصيلة، الرعي في البادية، مكانة الإبل في التراث.',
    url: '/camels',
    category: 'التراث',
    keywords: ['إبل', 'صفرا', 'سلالات', 'رعي', 'بادية', 'هجن', 'جمال', 'ناقة', 'بعير'],
    icon: '🐪',
  },
  {
    title: 'الخيل والفروسية',
    description: 'الفروسية العربية الأصيلة. سلالات الخيل، فنون الفروسية، الرماية على الخيل، سباقات الخيل.',
    url: '/horses',
    category: 'التراث',
    keywords: ['خيل', 'فروسية', 'حصان', 'خيول', 'رماية', 'فارس', 'عربية', 'اصيل', 'سباق'],
    icon: '🐎',
  },
  {
    title: 'الغنم',
    description: 'تربية الغنم عند قبيلة النعيم. سلالات الغنم الأصيلة، العناية والرعي، أصالة السلالة.',
    url: '/sheep',
    category: 'التراث',
    keywords: ['غنم', 'أغنام', 'خروف', 'نعجة', 'رعي', 'سلالة', 'صوف', 'لحم', 'حليب'],
    icon: '🐑',
  },
  {
    title: 'الوسم (رمز ٥١٥)',
    description: 'رمز ٥١٥ عند قبيلة السادة النعيم. تاريخ الوسم، دلالة الانتماء، كيفية وسم الإبل والأغنام.',
    url: '/wasm',
    category: 'التراث',
    keywords: ['وسم', '٥١٥', '515', 'رمز', 'هوية', 'انتماء', 'علامة', 'إبل', 'غنم'],
    icon: '✒️',
  },
  {
    title: 'الشعر النبطي',
    description: 'قصائد الفخر عند قبيلة النعيم. أهل الصفرا، المدائح والأرجاز، أشعار القبيلة وأمجادها.',
    url: '/poetry',
    category: 'الأدب',
    keywords: ['شعر', 'نبطي', 'قصائد', 'فخر', 'مدائح', 'أرجاز', 'أشعار', 'شاعر', 'بيت'],
    icon: '📜',
  },
  {
    title: 'القهوة العربية',
    description: 'الدلة وطقوس الضيافة العربية. فناجين الضيافة، كرم العرب، تقاليد إعداد القهوة.',
    url: '/coffee',
    category: 'التراث',
    keywords: ['قهوة', 'دلة', 'فناجين', 'ضيافة', 'كرم', 'عرب', 'تقاليد', 'بن', 'محمرة'],
    icon: '☕',
  },
  {
    title: 'بيت الشعر (الخيمة)',
    description: 'بيت الشعر البدوي. الأقسام، الأجزاء، الحبال، دخلة البادية، كرم الضيافة في الخيمة.',
    url: '/tent',
    category: 'التراث',
    keywords: ['بيت شعر', 'خيمة', 'بداوة', 'بادية', 'خيام', 'شعر', 'ضيافة', 'كرم', 'دخلة'],
    icon: '⛺',
  },
  {
    title: 'العادات والتقاليد',
    description: 'الكرم والضيافة العربية، المجالس والأمجاد، أعراف القبيلة وتقاليدها الأصيلة.',
    url: '/traditions',
    category: 'التراث',
    keywords: ['عادات', 'تقاليد', 'كرم', 'ضيافة', 'مجالس', 'أمجاد', 'اعراف', 'قيم', 'اخلاق'],
    icon: '🏕️',
  },
]

// دالة البحث
export function search(query: string): SearchItem[] {
  if (!query || query.trim().length < 2) return []

  const normalizedQuery = query.trim().toLowerCase()

  return searchIndex
    .map((item) => {
      let score = 0

      // Title match (highest weight)
      if (item.title.toLowerCase().includes(normalizedQuery)) {
        score += 10
      }

      // Description match
      if (item.description.toLowerCase().includes(normalizedQuery)) {
        score += 5
      }

      // Category match
      if (item.category.toLowerCase().includes(normalizedQuery)) {
        score += 3
      }

      // Keywords match
      for (const keyword of item.keywords) {
        if (keyword.toLowerCase().includes(normalizedQuery)) {
          score += 2
        }
      }

      return { item, score }
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.item)
}
