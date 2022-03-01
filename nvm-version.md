## 구동전에 나의 node, npm 버전 확인하기

---

현재 블로그 환경은 아래 버전으로 셋팅 되어 있습니다.

```
 node: 15.14.0
 npm: 7.6.3
```

동일한 환경으로 원활한 작업을 위해 nvm을 사용합니다.

1. [nvm mac, linux](https://github.com/nvm-sh/nvm), [nvm window](https://github.com/coreybutler/nvm-windows)

- local에 nvm 설치가 되어있지 않다면 doc를 참고하여 nvm을 설치합니다.
- 2021/10 발견 이슈 : 혹시 nvm 설치 후 nvm use 사용 시 'exit status 5: Access is denied.' 와 같은 상태라면 설치 버전 확인을 해주세요. 1.1.8 설치 시 발생하는 문제이니 **1.1.7 버전을 설치**해주세요.

2. [nvm use](https://github.com/nvm-sh/nvm#nvmrc)

- .nvmrc 파일에 명시된 node 버전(15.14.0)을 다운로드하고 사용합니다.
- 터미널에서 `nvm use` 를 사용하시면 됩니다.

3. npm version 통일하기

- node 15.14.0은 default npm version이 7.7.6 입니다.
- npm을 아래 명령어로 재설치 해줍니다.
- `npm install npm@7.6.3 -g`
  **default npm 7.7.6에서 다운 그레이드 하는 이유가 궁금하신 분은 이슈 #14를 참고**

## ~~Lyket 환경변수 셋팅하기~~

~~[Discussion](https://github.com/pxd-xe-group/pxd-xe-group.github.io/discussions/64) 참고하여 .env 파일 셋팅해주세요!~~


2020.09 updated: [Lyket 삭제](https://github.com/pxd-xe-group/pxd-xe-group.github.io/commit/6c6e39f20b83b1bd25281440f3c6134198e0b44f)
## Firebase 설치

배포를 위해 Firebase CLI 설치와 로그인을 합니다.

1. [Firebase](https://firebase.google.com/docs/cli?hl=ko#setup_update_cli)

- Firebase doc 참고하여 설치 및 로그인 합니다.

2. 계정은 **구글 그룹계정(pxd4group)** 이며 로그인 성공 시 배포가 가능합니다.

- `firebase projects:list` 명령어로 계정 엑세스 여부를 확인할 수 있습니다.

## 로컬환경에서 구동하기

---

```
npm run dev
```

## 배포하기

---

```
npm run deploy
```