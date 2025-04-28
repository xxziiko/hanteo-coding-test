# hanteo
### 요구사항

- 카테고리 간 이동은 좌, 우 슬라이드와 상단의 탭 메뉴 클릭만 가능하다.
- 카테고리에 속한 콘텐츠는 리스트형 뷰로 구성되며 무한스크롤이 가능한 형태이다.
- 중단의 배너 영역은 슬라이드형이며, 최소 3개의 배너로 구성한다.
- 중단의 배너는 무한루프로 동작해야하며 외부 링크 이동이 가능해야 한다.
- 서비스의 사이즈는 429\*900이다.

### 기능 명세

- 상단 탭을 눌렀을때 해당하는 슬라이드로 이동한다.
- 큐레이션의 슬라이드를 이동했을 때 해당하는 상단 탭으로 이동한다.
- 중단의 배너는 최소 3개의 슬라이드를 구성하며, 무한 루프로 동작한다.
- 배너를 클릭했을 때 외부 링크로 이동한다.
- 큐레이션의 리스트는 무한스크롤 형태로 30개씩 불러온다.

<br/>

## 기술 스택

- Frontend: React, TypeScript, SCSS, swiper
- State Management: Tanstack Query(React Query), jotai
- Development / Build Tools: Vite, msw, yarn

<br/>

## 기술 스택 선정 이유

#### React

Next.js와의 트레이드오프를 고려했습니다.
과제의 구현 규모와 기능 요구사항을 봤을 때 Next.js는 적절하지 않다고 생각했습니다. <br/>
이유는 다음과 같습니다.

1. Next.js는 서버 컴포넌트를 통한 SSR 기반 렌더링과 클라이언트-서버 분리라는 철학을 중심으로 설계된 프레임워크입니다. <br/>
   하지만 본 과제의 요구사항은 사용자 상호작용 중심의 CSR 기반 슬라이드 기능이 주된 흐름이었기 때문에, SSR의 이점을 충분히 살릴 수 있는 구조가 아니라고 판단했습니다.
2. 구현해야할 기능의 규모와 동작이 CSR 기반 렌더링이 적절하다고 판단했습니다. 슬라이드 기능은 싱글 페이지에서 렌더링을 최소화하는 전략이 더 적절하다고 판단했습니다. <br/>
   따라서 Vite 기반의 React로 프로젝트를 구축했습니다.

#### TypeScript

타입스크립트는 런타임 언어인 자바스크립트를 빌드 타임에 정적으로 검사함으로써 코드의 안정성을 높여줍니다. <br/>
타입스크립트로 런타임에서 휴먼에러를 방지할 뿐만 아니라 코드의 예측 가능성을 높여 DX의 관점에서도 안정적인 개발을 진행할 수 있습니다.

#### SCSS

최근 혼자 진행하고 있는 토이프로젝트에서 SCSS를 사용하고 있어서 비교적 익숙합니다. <br/>
구축한 프로젝트가 CSR 기반이기 때문에 자바스크립트 번들 크기를 고려하는 것이 중요하다고 생각하는데, SCSS는 빌드시 별도의 CSS 파일로 분류되기 때문에 번들 크기에 영향을 주지 않아 해당 부분에서 이점이 있다고 생각했습니다. <br/>
CSS Module과 함께 사용하여 스타일 스코프를 고려하고, 컴포넌트 단위로 코드 스플리팅함으로써 Vite 환경에 맞는 최적화를 의도했습니다.

#### Tanstack Query

실제 서버가 구축되지 않은 상황에서도 서버 상태 관리 흐름을 자연스럽게 구현하기 위해 msw를 적용했습니다. 이에 실제 프로젝트 상황을 고려한다면 서버 상태 관리가 필요하다고 생각했습니다. <br/>
React의 Suspense와 호환성이 높고, queryKey 팩토리 패턴으로 효율적인 키 관리와 선언적으로 사용할 수 있어 DX와 UX 모두 적절하다고 판단했습니다.

#### Jotai

React의 useState와 유사한 방식으로 동작하여 자연스럽고, 상태를 선언적으로 구성할 수 있어 Jotai를 선택했습니다. <br/>
NavigationTab 컴포넌트와 ContentSlices 컴포넌트 간의 불필요한 props drilling을 방지하고 컴포넌트 간 결합도를 낮추기 위해 사용했습니다.

<br/>

## 설치 및 실행 방법

```bash

yarn install
yarn dev
```
<br/>

## 디렉토리 구조
```
📦src
 ┣ 📂features  
 ┃ ┣ 📂banner  
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜queries.ts
 ┃ ┃ ┗ 📜types.ts
 ┃ ┗ 📂curation
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜queries.ts
 ┃ ┃ ┗ 📜types.ts
 ┣ 📂mocks
 ┣ 📂pages
 ┣ 📂shared
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂card
 ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┣ 📂loading
 ┃ ┣ 📂constants
 ┃ ┣ 📂styles
 ┃ ┣ 📂types
 ┃ ┣ 📂utils
 ┃ ┗ 📜apis.ts
 ┣ 📜App.tsx
 ┣ 📜Providers.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

