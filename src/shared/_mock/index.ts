export interface CardItem {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
}

export const CAROUSEL_LIST: CardItem[] = [
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
];
