# 웹퍼블리싱 가이드

## 프로젝트 환경

- 모바일 웹앱 (WebView)
- 대상 OS
  - iOS : 10+
  - Android : 4.4+
- 문서타입 및 인코딩
  ```
  <!DOCTYPE html>
  <meta charset="utf-8">
  ```

### 폴더 구조 및 설명

- assets (리소스)
  - fonts (웹폰트)
    - SpoqaHanSansNeo
  - images (이미지 리소스)
    - icon (아이콘)
    - image (이미지)
  - js (자바스크립트 리소스)
    - libs (자바스크립트 라이브러리)
    - app.js
  - styles (CSS)
    - style.css
- pages (HTML 페이지)
  - AB (자산/뱅킹)
  - C (인증센터)
  - common (공통)
  - CS (고객서비스)
  - FP (금융상품)
  - GUIDE (안내 가이드)
  - S (환경설정)
  - T (트레이딩)

### 사용 라이브러리

- bodyScrollLock
  - Scroll Lock 라이브러리
  - Modal Popup 화면이 나올때 뒷 배경의 스크롤이 움직이지 않게 적용
  - [https://github.com/willmcpo/body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)
