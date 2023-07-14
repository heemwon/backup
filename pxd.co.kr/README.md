## 개발 환경 설정하기

사전에 필요한 프로그램:

### mac
  - [docker](https://docs.docker.com/desktop/mac/install/)

### window
  - [docker](https://docs.docker.com/desktop/windows/install/)
  - [wsl](https://docs.microsoft.com/en-us/windows/wsl/install)

### vscode 확장팩
  - [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

## 개발 시작

**clone후 첫 실행 시** (아래 명령어를 실행하여 docker 이미지를 생성해야 합니다.)
```
npm run docker:start
```
**1번 실행 후 docker 이미지가 생성되었으면** 

- vscode 사이드바 remote-container를 통해 pxdcokr 이미지 실행 


## 명령어
1. 도커 컨테이너 시작
```
npm run docker:start
```
2. 도커 컨테이너 중지
```
npm run server:stop
```
3. npm package 설치 시 (**docker container 내부로 진입해야 합니다.**) 
```
npm run docker:bash // docker container 내부로 진입

npm install <package-name>
```
## 배포(운영 서버) netlify

1. preview 생성(**in local**)

 **docker container 내부가 아닌 본인 로컬 환경에서 명령어 실행해주세요.**

```
npm run deploy:preview
```

- Link this directory to an existing site 선택

![link](https://user-images.githubusercontent.com/37138701/148023065-dedbbf65-f81d-4be5-b535-902f040436a6.png)

- Choose from a list of your recently updated sites 선택

![choose](https://user-images.githubusercontent.com/37138701/148023238-3cdc84b4-df63-4a77-9688-f418e9c354b2.png)

- pxd 선택
 
![pxd](https://user-images.githubusercontent.com/37138701/148024004-fc7ef192-4619-409c-a544-79c641395b56.png)


2. production 배포
```
npm run deploy:prod
```
