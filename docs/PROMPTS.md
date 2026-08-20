# 🕊️ [SG] 석고방향제 감성 쇼핑몰 디자인 & AI 이미지 생성 프롬프트 마스터 가이드

본 문서는 **SG 폴더 전용 프리미엄 수제 석고방향제 쇼핑몰 (L'ARÔME BLANC / 라롬 블랑)** 을 위한 웹 디자인 시스템 명세서 및 Midjourney, DALL-E 3, Stable Diffusion에서 바로 복사하여 사용할 수 있는 **초고화질 AI 이미지 생성 프롬프트 컬렉션**입니다.

---

## 🎨 1. 브랜드 디자인 시스템 (Design System)

### 1.1 브랜드 무드 & 컨셉
- **브랜드명**: **L'ARÔME BLANC (라롬 블랑)** - *Pure Form, Timeless Scent*
- **컨셉 키워드**: French Natural Minimalism, Tactile Plaster Texture, Warm Sunlight, Organic Aesthetics, Serene Luxury
- **디자인 방향성**: 인위적인 화학 가공을 배제하고 순백의 덴탈 석고와 천연 에센셜 오일의 내추럴하고 우아한 감성을 전달하는 미니멀리즘 인터페이스

### 1.2 색상 팔레트 (Color Palette)
| 용도 | 색상명 | Hex Code | 분위기 & 설명 |
| :--- | :--- | :--- | :--- |
| **Main Background** | Warm Sand / Natural Ivory | `#F7F5F0` | 따뜻하고 차분한 린넨 & 석고 배경 |
| **Surface / Card** | Pure Plaster White | `#FFFFFF` | 제품을 돋보이게 하는 깨끗한 순백색 |
| **Sub Surface** | Soft Clay / Stone | `#EFECE6` | 자연스러운 도자기 흙 질감의 서브 배경 |
| **Primary Accent** | Warm Terracotta Brown | `#8C624E` | 고급스러운 가죽 및 브라운 보틀 액센트 |
| **Secondary Accent**| Muted Ochre | `#C48263` | 앤티크 왁스 실링 & 포인트 배지 |
| **Botanical** | Olive Moss Sage | `#7D8570` | 자연 식물과 에센셜 오일의 허벌 그린 |
| **Main Typography** | Deep Slate Charcoal | `#22211F` | 높은 가독성과 모던한 대비를 주는 차콜 |
| **Muted Text** | Pebble Grey | `#6E6B65` | 잔잔하고 부드러운 설명용 그레이 |

### 1.3 타이포그래피 (Typography)
- **영문 로고 & 헤더**: `Cormorant Garamond` (우아한 프렌치 세리프), `Playfair Display`
- **국문 헤더**: `Noto Serif KR` (단아하고 기품 있는 명조체)
- **본문 및 UI**: `Pretendard` (모던하고 시인성이 뛰어난 산세리프)

---

## 📸 2. 섹션별 AI 이미지 생성 프롬프트 (Midjourney & DALL-E 3)

> **💡 팁**: Midjourney 사용 시 프롬프트 뒤에 `--ar 16:9` (배너용), `--ar 1:1` (제품용), `--v 6.0 --style raw` 파라미터를 추가하시면 최상의 퀄리티를 얻을 수 있습니다.

---

### 1. 메인 히어로 배너 (Main Hero Banner)
- **장면 설명**: 따스한 아침 자연광이 쏟아지는 미니멀한 베이지 톤 인테리어 공간. 매끄러운 순백의 클래식 석고 오브제와 은은한 갈색 유리 프래그런스 오일 병, 린넨 패브릭 연출.

#### 📌 영문 프롬프트 (Midjourney v6 / DALL-E 3)
```text
Cinematic lifestyle commercial photo of a handcrafted white plaster aroma diffuser sculpture, set on a minimal raw travertine stone table, soft morning sunlight casting gentle window shadow, a small vintage amber glass dropper bottle of essential oil next to it, pure beige linen cloth texture, warm neutral aesthetic, Kinfolk magazine style, ultra-detailed 8k resolution, soft bokeh depth of field, photorealistic, elegant luxury interior --ar 16:9 --v 6.0 --style raw
```

#### 📌 한글 텍스트 카피 구성
- **메인 타이틀**: 공간을 채우는 순백의 감성, 그리고 *은은한 향기*
- **서브 타이틀**: 자연에서 온 순수한 석고와 최상급 에센셜 오일이 빚어낸 따뜻한 쉼. 오늘 당신의 일상에 잔잔한 여운을 선물해 보세요.
- **CTA 버튼**: [베스트 컬렉션 쇼핑하기], [1분 취향 향기 찾기]

---

### 2. 브랜드 스토리 (Brand Atelier & Craftsmanship)
- **장면 설명**: 아틀리에 공방에서 장인이 섬세하게 석고 반죽을 틀에 붓고 다듬는 수제 제작 공정. 따뜻하고 자연스러운 작업실 무드.

#### 📌 영문 프롬프트
```text
Artisan workspace close-up, delicate female hands pouring creamy white dental plaster mixture into an aesthetic silicone mold, fine plaster dust in sunbeams, ceramic bowls, wooden tools, pure natural materials, warm clay and wood atelier background, soft cozy lighting, cinematic editorial documentary photography, 8k, photorealistic --ar 4:5 --v 6.0
```

#### 📌 한글 텍스트 카피 구성
- **타이틀**: 시간을 들여 정성으로 빚는 *라롬 블랑의 진심*
- **핵심 메시지**: 석고는 미세한 기공을 통해 향을 서서히 머금고 가장 편안한 속도로 공기 중에 향기를 피워 올립니다. 72시간 저온 자연 건조와 IFRA 인증 파인 프래그런스의 결합.

---

### 3. 향기별 카테고리 4종 (Fragrance Categories)

#### ① 플로럴 & 화이트 가든 (Floral & Garden)
```text
Aesthetic studio still life of a pure white plaster tablet with relief carved botanical lily flowers, fresh white tuberoses and delicate dewy petals scattered around, soft beige marble background, airy bright morning daylight, clean minimal luxury, macro product photography --ar 1:1 --v 6.0
```
- **카피**: 이슬 머금은 튜베로즈와 순백의 은방울꽃이 전하는 우아한 설렘 (Notes: 백합 · 작약 · 화이트 머스크)

#### ② 우디 & 딥 포레스트 (Woody & Forest)
```text
Handmade matte white plaster stone diffuser resting on a piece of dark rustic cedar wood bark, dry green forest moss, cedar cones, soft moody forest lighting, calm meditative spa aesthetic, high texture detail, organic natural luxury --ar 1:1 --v 6.0
```
- **카피**: 안개 낀 편백나무 숲과 묵직한 샌달우드가 주는 깊은 내면의 휴식 (Notes: 시더우드 · 베티버 · 샌달우드)

#### ③ 시트러스 & 바질 허브 (Citrus & Herb)
```text
Minimalist smooth pebble stone plaster diffuser set on a beige ceramic plate, fresh sliced bergamot, green basil leaves, bright Mediterranean sunlight, refreshing airy breeze, clean crisp aesthetic, vibrant natural colors --ar 1:1 --v 6.0
```
- **카피**: 지중해의 햇살을 받은 베르가못과 싱그러운 바질이 주는 활기찬 리프레시 (Notes: 베르가못 · 라임 · 프레시 바질)

#### ④ 스컬프쳐 & 오브제 아트 (Sculpture & Art)
```text
Aesthetic classical Venus torso white plaster statue diffuser, placed on an architectural pedestal with arch background, artistic museum gallery lighting, soft dramatic shadows, neoclassical modern interior object, high-end design editorial --ar 1:1 --v 6.0
```
- **카피**: 조각 작품 같은 실루엣으로 공간의 품격을 높이는 인테리어 석고 타블렛 (Design: 클래식 토르소 · 아치 릴리프)

---

### 4. 베스트셀러 제품 단독 샷 (Product Hero Shots)

#### ① 까멜리아 차량용 송풍구 클립 (Car Air Vent Clip)
```text
High-end product photography of a pure white plaster camellia blossom car vent clip mounted on a luxury car interior AC vent, soft ambient light, warm leather dashboard background, crisp petals detail, refined elegant atmosphere --ar 1:1 --v 6.0
```

#### ② 테디베어 니트 텍스처 석고방향제 (Knit Bear Diffuser)
```text
Detailed macro shot of an adorable white plaster teddy bear diffuser with realistic knitted sweater texture, sitting on a round wooden saucer with a tiny glass fragrance dropper bottle, cozy Nordic home vibe --ar 1:1 --v 6.0
```

#### ③ 아치 릴리프 가죽 스트랩 타블렛 (Arch Hanging Ornament)
```text
Aesthetic arch-shaped white plaster hanging tablet with a natural tan leather strap, hanging gracefully on a wooden wardrobe knob, clean linen curtain background, soft focus, minimal serene lifestyle --ar 1:1 --v 6.0
```

---

### 5. 고객 리뷰 & 패키징 연출 (Packaging & Gift Box)

#### 📌 선물 패키징 프롬프트
```text
Unboxing experience of a luxury aroma diffuser gift set, textured sand-colored rigid gift box, natural raw beige linen pouch, wax sealed message card with botanical stamp, pure white plaster diffusers nestled in paper shreds, elegant ribbon, warm cozy tabletop setting --ar 16:9 --v 6.0
```

---

## 🛠️ 3. SG 폴더 실행 가이드

### 파일 구조
```
kyh/
└── SG/
    ├── index.html        # 시맨틱 구조의 반응형 랜딩 & 쇼핑몰 마크업
    ├── css/
    │   └── style.css     # 프렌치 미니멀 테마 CSS & 반응형 미디어 쿼리
    ├── js/
    │   └── main.js       # 장바구니, 위시리스트, 퀵뷰, 센트 퀴즈, 필터 인터랙션
    └── docs/
        └── PROMPTS.md    # 본 디자인 프롬프트 및 시스템 가이드
```

### 실행 방법
1. 파일 탐색기에서 `c:\Users\Student\Documents\kyh\SG\index.html` 파일을 더블 클릭하여 크롬/엣지 브라우저에서 실행합니다.
2. 실시간 장바구니 담기, 수량 조절, 무료배송 프로그레스 바, 취향 찾기 센트 퀴즈 모달, 카테고리 필터링이 모두 완벽하게 동작합니다.
