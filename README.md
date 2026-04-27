# Discounter Zen (할인율 마스터) 🥬🥚🌿🐟🥩

**Discounter Zen**은 대형 마트 및 식료품 매장에서 근무하는 담당자들을 위한 **프리미엄 소비기한 기반 할인율 계산기**입니다. 복잡한 품목별 할인 기준을 수동으로 계산할 필요 없이, 소비기한만 입력하면 즉시 최적의 할인율을 제안합니다.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Platform](https://img.shields.io/badge/platform-Chrome%20Extension%20%2F%20Web-orange.svg)

## ✨ 주요 기능

- **5대 핵심 카테고리 지원**: 두채류, 계란, 스테비아, 수산, 축산 등 각 품목별 특화된 할인 로직 탑재.
- **원터치 날짜 조절**: `-` / `+` 버튼을 통해 소비기한을 하루 단위로 간편하게 조절 가능.
- **실시간 상태 배지**: '당일 폐기', '할인 중', '정상 판매' 등 제품의 상태를 시각적으로 즉시 확인.
- **통합 할인 기준표**: 하단에 전체 품목의 할인/폐기 기준을 표 형태로 제공하여 작업 신뢰도 향상.
- **모바일 최적화**: 현장에서 한 손으로 조작하기 쉬운 대형 버튼과 직관적인 UI/UX 설계.

## 📊 할인 기준 (Standard Rules)

| 품목 | 20% 할인 | 40% 할인 | 폐기 기준 |
| :--- | :--- | :--- | :--- |
| **두채류** | D-2 | D-1 | 당일(D-0) 폐기 |
| **계란** | D-6 | D-5 ~ D-1 | 당일(D-0) 폐기 |
| **스테비아** | D-6 ~ D-5 | D-4 ~ D-0 | 익일(D+1) 폐기 |
| **수산** | D-1 | 당일(D-0) | 익일(D+1) 폐기 |
| **축산** | D-2 | D-1 ~ D-0 | 익일(D+1) 폐기 |

## 🚀 시작하기

### 웹에서 사용하기
1. 이 저장소를 클론하거나 다운로드합니다.
2. `index.html` 파일을 브라우저로 엽니다.

### 크롬 확장 프로그램으로 사용하기
1. 크롬 브라우저에서 `chrome://extensions/`에 접속합니다.
2. 우측 상단의 '개발자 모드'를 활성화합니다.
3. '압축해제된 확장 프로그램을 로드' 버튼을 누르고 프로젝트 폴더를 선택합니다.

## 🛠 기술 스택

- **Frontend**: HTML5, Vanilla JavaScript
- **Styling**: Vanilla CSS (Glassmorphism, Mobile First Design)
- **Design System**: Huashu Design Framework 기반

## 📄 라이선스

이 프로젝트는 MIT 라이선스에 따라 자유롭게 수정 및 배포가 가능합니다.

---
**Developed by 제팀장 (Team Leader Je)**  
*대표님의 성공적인 매장 운영을 응원합니다!*
