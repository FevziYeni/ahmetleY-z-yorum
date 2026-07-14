import {
  Baby,
  CheckCircle2,
  Clock3,
  Compass,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Medal,
  Phone,
  ShieldCheck,
  Target,
  UserRound,
  UsersRound,
  Waves,
} from 'lucide-react';

export const contact = {
  phone: '0507 169 47 61',
  tel: '+905071694761',
  whatsapp: '905071694761',
  instagram: '@ahmetleyuzuyorumm',
  instagramUrl: 'https://www.instagram.com/ahmetleyuzuyorumm',
  email: 'ahmetonur611@gmail.com',
  region: 'İstanbul ve çevresi',
};

export const stats = [
  { value: 'Birebir', label: 'kişiye özel eğitim' },
  { value: 'Çocuk & Yetişkin', label: 'her yaş seviyesine uygun' },
  { value: 'Hedef Odaklı', label: 'düzenli gelişim takibi' },
];

export const lessons = [
  {
    title: 'Çocuk Yüzme Dersi',
    description:
      'Çocukların suya güvenle alışması, temel yüzme becerilerini doğru teknikle kazanması ve sporu sevmesi için sabırlı eğitim.',
    icon: Baby,
  },
  {
    title: 'Yetişkin Yüzme Dersi',
    description:
      'Yüzme bilmeyen veya tekniğini geliştirmek isteyen yetişkinler için sakin, anlaşılır ve hedefe yönelik özel dersler.',
    icon: UserRound,
  },
  {
    title: 'Özel Yüzme Dersi',
    description:
      'Birebir yüzme dersi formatında seviyenize, hedefinize ve öğrenme hızınıza göre hazırlanan profesyonel program.',
    icon: GraduationCap,
  },
  {
    title: 'Başlangıç Seviyesi Eğitim',
    description:
      'Su korkusunu azaltma, doğru nefes, ayak vuruşu, kayma ve temel koordinasyon çalışmalarıyla sağlam başlangıç.',
    icon: Waves,
  },
  {
    title: 'Teknik Geliştirme Dersleri',
    description:
      'Serbest, sırtüstü ve temel stil becerilerinde daha verimli, güçlü ve kontrollü yüzme için teknik analiz ve uygulama.',
    icon: Dumbbell,
  },
];

export const advantages = [
  {
    title: 'Kişiye özel eğitim programı',
    description: 'Her öğrencinin seviyesi, hedefi ve öğrenme ritmine göre net bir ders planı oluşturulur.',
    icon: Target,
  },
  {
    title: 'Güvenli eğitim ortamı',
    description: 'Dersler kontrollü, sakin ve öğrencinin kendini rahat hissedeceği bir düzende ilerler.',
    icon: ShieldCheck,
  },
  {
    title: 'Çocuklara uygun yaklaşım',
    description: 'Çocuklarda güven, disiplin ve motivasyon dengesi korunarak yüzme sevgisi desteklenir.',
    icon: HeartHandshake,
  },
  {
    title: 'Sabırlı ve profesyonel eğitim',
    description: 'Her aşama açıkça anlatılır, doğru tekrarlarla kalıcı öğrenme hedeflenir.',
    icon: CheckCircle2,
  },
  {
    title: 'Hedefe yönelik gelişim takibi',
    description: 'Ders sürecinde ilerleme gözlemlenir, teknik eksikler düzenli olarak iyileştirilir.',
    icon: Medal,
  },
];

export const faqs = [
  {
    question: 'Yüzme bilmeyenler ders alabilir mi?',
    answer:
      'Evet. Başlangıç seviyesindeki öğrenciler için suya alışma, nefes kontrolü ve temel yüzme becerileri adım adım öğretilir.',
  },
  {
    question: 'Çocuklar için kaç yaş uygundur?',
    answer:
      'Genel olarak çocuğun suya hazır oluşuna göre değerlendirme yapılır. İlk görüşmede yaş, fiziksel durum ve suyla ilişkisi birlikte ele alınır.',
  },
  {
    question: 'Dersler birebir mi grup mu?',
    answer:
      'Ana odak birebir yüzme dersi ve kişiye özel eğitimdir. Uygun koşullarda küçük grup seçenekleri ayrıca değerlendirilebilir.',
  },
  {
    question: 'Ne kadar sürede yüzme öğrenilir?',
    answer:
      'Süre öğrencinin yaşı, suya alışkanlığı, ders sıklığı ve hedeflerine göre değişir. Düzenli katılım öğrenme sürecini belirgin şekilde hızlandırır.',
  },
  {
    question: 'Ders ücretleri nasıl belirlenir?',
    answer:
      'Ücretler ders türü, ders sıklığı, seviye, konum ve program süresine göre netleştirilir. En doğru bilgi için ücretsiz ön görüşme yapılabilir.',
  },
];

export const quickTrustItems = [
  { label: 'Profesyonel yüzme eğitimi', icon: Medal },
  { label: 'Disiplinli ve güvenli süreç', icon: ShieldCheck },
  { label: 'İstanbul hizmet bölgesi', icon: Compass },
  { label: 'Esnek ders planlaması', icon: Clock3 },
  { label: 'Hızlı iletişim', icon: Phone },
];

export const trainingFormats = [
  {
    title: 'Bireysel Yüzme Dersleri',
    description:
      'Öğrencinin seviyesine, suya alışkanlığına ve hedeflerine göre tamamen kişiye özel ilerleyen birebir dersler.',
    image: '/images/gallery/baby-private-lesson.jpg',
    alt: 'Ahmet Onur ile bireysel çocuk yüzme dersi',
    icon: UserRound,
    tags: ['Birebir takip', 'Güvenli başlangıç', 'Hızlı ilerleme'],
  },
  {
    title: 'Grup Derslerimiz',
    description:
      'Çocukların motivasyonunu artıran, sosyal etkileşimi destekleyen ve kontrollü kulvar düzeninde yapılan grup çalışmaları.',
    image: '/images/gallery/group-children-mba.jpg',
    alt: 'Çocuklar için grup yüzme dersi',
    icon: UsersRound,
    tags: ['Çocuk grupları', 'Kulvar düzeni', 'Motivasyon'],
  },
  {
    title: 'Teknik Gelişim ve Kondisyon',
    description:
      'Nefes, ayak vuruşu, su pozisyonu, dayanıklılık ve stil tekniğini geliştirmeye yönelik hedefli çalışmalar.',
    image: '/images/gallery/adult-technique-york.jpg',
    alt: 'Yetişkin ve teknik gelişim yüzme çalışması',
    icon: Waves,
    tags: ['Teknik analiz', 'Dayanıklılık', 'Stil gelişimi'],
  },
];

export const lessonLocations = [
  {
    name: 'Elitegarden Başakşehir',
    region: 'Başakşehir',
    image: '/images/gallery/elitegarden-basaksehir.jpg',
    alt: 'Elitegarden Başakşehir kapalı yüzme havuzu',
    note: 'Sakin, kontrollü ve özel derslere uygun kapalı havuz ortamı.',
  },
  {
    name: 'York Athletic Club',
    region: 'İstanbul',
    image: '/images/gallery/york-athletic-club.jpg',
    alt: 'York Athletic Club yüzme havuzu',
    note: 'Çocuk ve yetişkin dersleri için düzenli kullanılan kulvarlı havuz.',
  },
  {
    name: 'Birikim Okulları Başakşehir Kampüsü',
    region: 'Başakşehir',
    image: '/images/gallery/birikim-basaksehir.jpg',
    alt: 'Birikim Okulları Başakşehir Kampüsü havuzu',
    note: 'Başlangıç ve teknik gelişim çalışmaları için uygun eğitim alanı.',
  },
  {
    name: 'Era Koleji Florya',
    region: 'Florya',
    image: '/images/gallery/era-koleji-florya.jpg',
    alt: 'Era Koleji Florya yüzme havuzu',
    note: 'Kulvar çalışmaları ve teknik eğitim için temiz, düzenli havuz ortamı.',
  },
];

export const galleryImages = [
  {
    src: '/images/gallery/coach-mba.jpg',
    alt: 'Ahmet Onur yüzme hocası havuz başında',
    title: 'Profesyonel Eğitim Ortamı',
    category: 'Eğitmen',
    featured: true,
  },
  {
    src: '/images/gallery/child-technique-board.jpg',
    alt: 'Çocuk yüzme dersinde teknik tahta çalışması',
    title: 'Teknik Destekli Çalışma',
    category: 'Çocuk dersi',
  },
  {
    src: '/images/gallery/underwater-child.jpg',
    alt: 'Su altında rahat hareket eden çocuk öğrenci',
    title: 'Suya Güven Kazanımı',
    category: 'Başlangıç',
  },
  {
    src: '/images/gallery/child-confidence-pool.jpg',
    alt: 'Havuz kenarında mutlu çocuk yüzücü',
    title: 'Çocuklarda Özgüven',
    category: 'Çocuk dersi',
  },
  {
    src: '/images/gallery/baby-private-lane.jpg',
    alt: 'Birebir bebek ve çocuk yüzme dersi',
    title: 'Birebir Yaklaşım',
    category: 'Özel ders',
  },
  {
    src: '/images/gallery/york-family-lesson.jpg',
    alt: 'York Athletic Club havuzunda aile ve çocuk yüzme dersi',
    title: 'Aile Katılımlı Eğitim',
    category: 'Özel ders',
  },
  {
    src: '/images/gallery/pool-training-lane.jpg',
    alt: 'Kulvar içinde yüzme teknik çalışması',
    title: 'Kulvar Çalışmaları',
    category: 'Teknik gelişim',
  },
  {
    src: '/images/gallery/student-progress-collage.jpg',
    alt: 'Yüzme derslerinden öğrenci gelişim kolajı',
    title: 'Gelişim Anları',
    category: 'Galeri',
  },
];

export const galleryHighlights = [
  { value: '4+', label: 'aktif ders havuzu' },
  { value: 'Birebir & Grup', label: 'esnek ders formatı' },
  { value: 'Çocuk Odaklı', label: 'güvenli ve sabırlı yaklaşım' },
  { value: 'Teknik Takip', label: 'hedefe yönelik gelişim' },
];
