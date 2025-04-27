import type { BannerItem } from '@/features/banner/types';
import type { CurationItem } from '@/features/curation/types';

export const BANNER_LIST: BannerItem[] = [
  {
    id: 1,
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전투표 진행',
    date: '2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)',
    image: 'https://i.postimg.cc/8zwbFp9K/IMG-0515-11zon.webp',
    link: 'https://velog.io/@xxziiko/posts',
  },
  {
    id: 2,
    title: '[무신사 브랜드 선호도 설문] 신발 브랜드 선호도 설문',
    date: '2025.04.20 09:00 ~ 2025.04.27 23:59 (KST)',
    image: 'https://i.postimg.cc/6QmL0H9C/IMG-0815-11zon.webp',
    link: 'https://findyourkicks.vercel.app/',
  },
  {
    id: 3,
    title: '[무신사 브랜드 선호도 설문] 신발 브랜드 선호도 설문',
    date: '2025.04.15 08:00 ~ 2025.04.30 20:00 (KST)',
    image: 'https://i.postimg.cc/bvJ91Xjz/IMG-4604-11zon.webp',
    link: 'https://github.com/xxziiko/',
  },
] as const;

const generateDummyData = (category: string, count: number): CurationItem[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: crypto.randomUUID(),
    title: `${category} Item ${index + 1}`,
    description: `${category} description for item ${index + 1}.`,
    image: 'https://i.postimg.cc/bvJ91Xjz/IMG-4604-11zon.webp',
  }));
};

export const CHART_DATA = generateDummyData('차트', 100);
export const WHOOK_DATA = generateDummyData('Whook', 100);
export const NEWS_DATA = generateDummyData('뉴스', 100);
export const STORE_DATA = generateDummyData('스토어', 100);
export const EVENT_DATA = generateDummyData('이벤트', 100);
export const CHARGING_DATA = generateDummyData('충전소', 100);
