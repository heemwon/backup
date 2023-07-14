<template>
  <div class="story-wrap">
    <StoryStorytitle :story="story" :google="GOOGLE_STORAGE" />
    <section class="section-detail story">
      <h4 class="art-1">무엇이 중헌디?</h4>
      <p class="desc-1">
        지도 조작을 위한 내비게이션은 보편성을 고려하는 게 유리합니다. 아무래도 그동안
        형성된 멘탈모델을 따르는 것이 오동작을 방지할 수 있으니까요. 키보드와 마우스를
        동시에 사용하는 콤보 기술을 제공하면 미세미세 덕후들이 아주 좋아할 겁니다. 마우스
        제스처는 휠 클릭이 불가한 상황에 대한 대책을 마련하는 것이 좋겠습니다. 로지텍
        마우스처럼 휠 클릭이 기계적으로 스크롤 모드 변환으로 사용되는 경우도 있으니까요.
        그리고 정말 중요한 것은 각 액션에 대한 명확한 피드백을 제공하여 현재 돌아가는
        상황을 인지하기 쉽게 해주면 꽤 친절해 보일 수 있습니다. 피드백을 주는 방법으로
        가장 쉬운 것은 상황에 따라 제공하는 포인터가 되겠습니다.
      </p>
      <h4 class="art-1">우리 땐 말이지</h4>
      <p class="desc-1">
        어릴 적 명절을 맞이하여 시골에 내려갈 때면 아버지는 전국 도로가 나와 있는 종이
        지도를 챙기셨습니다. 그 지도에는 지역별로 고속도로와 국도가 나와 있었고 신문처럼
        접을 수 있는 낱장부터 잡지 정도 두께의 책까지 다양한 형태였습니다. 중간에 길이
        헷갈리면 보조석에 앉아 계신 어머니가 지도를 보고 알려주거나 휴게소에 들러 지도를
        다시 펼쳐봐야 했습니다. 2019년 현재. 길을 찾기 위한 지도는 길을 알려주는 앱이
        되었고, 장소 지각을 위해 더 편리한 도구가 되었습니다. 목적지의 상세 정보뿐만
        아니라 사용자가 원하는 시점에서 3D로 둘러 볼 수도 있게 되었습니다. 운전뿐만 아니라
        약속 장소를 찾아 갈 때도, 주말에 가볼 맛집을 정할 때도 언제 어디서든 지도 앱을
        사용하니 손에 쥔 신발 같은 존재가 되었습니다. 고도화된 지리정보시스템 (geographic
        information system, GIS)은 다양한 분야에서 활용되어 대중이 쉽게 접근할 수 있는
        디지털 정보가 되었습니다. 종이 지도는 현실에 있는 표지판이나 도로명, 주소, 번호
        등을 지도에서 찾은 뒤 점을 찍고 훑어가는 방식으로 사용했습니다. 반면 오늘날 디지털
        지도는 GPS가 현재 위치를 먼저 보여주며, 탐색 가능한 공간이 전 세계로 확대되었기
        때문에 스크린 속 지도를 빠르고 효율적으로 이동하는 것 자체가 중요하다고 볼 수
        있습니다. 평소에 많이 사용하는 N사 D사의 지도 앱도 있지만, PC 웹 기반에서는 훨씬
        다양한 고품질의 3차원 지도 서비스를 접할 수 있습니다. 예를 들자면 구글 지도, 구글
        어스 같은 것이죠. 이런 지도를 조작하고 이동하려면 어떤 제스처를 취해야 할까요?
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_02_01.jpg`" alt="" />
        <span class="blind">하늘에서 바라본 마을 이미지</span>
      </figure>
      <h4 class="art-1">3D GIS 서비스의 내비게이션 제스처</h4>
      <p class="desc-1">
        본 글은 지도 서비스의 정보 체계, 구성요소, 피드백 등을 분석하고 휴리스틱 평가,
        문제점 진단과 인터페이스 개선 포인트 도출을…. 안 합니다!!! (그런 건
        프로젝트에서...) 다 배제하고 오로지 내비게이션을 위한 제스처가 무엇인지만 살펴
        보겠습니다. 대상은 특색있는 아래 다섯 개로 추려보았습니다. <br />
        ※ 아래 이미지는 PC에서 보길 권장합니다. 실외 지도 환경에서의 조작 방법만을
        표기하였습니다.
      </p>
      <div class="area-comment">
        <strong class="title">&lt;Rotate와 Tilt의 차이&gt;</strong>
        <p>
          Rotate와 Tilt는 지도나 객체를 회전하면서 현시점과 다른 방향에서 볼 수 있게
          합니다. 고개를 좌우로 돌리는 것은 rotate, 위아래로 끄덕이는 것은 tilt로 이해하면
          됩니다.
        </p>
      </div>
      <h5 class="art-1">1. Google Earth</h5>
      <a
        href="https://www.google.co.kr/intl/ko/earth/"
        title="새창 이동"
        target="_blank"
        class="site en"
      >
        <strong data-action="action-text">구글 어스 페이지 방문하기</strong>
      </a>
      <p class="desc-1">
        각 액션 도중에 나타나는 포인터가 특징입니다. 액션을 멈추면 다시 일반적인 화살표
        포인터로 돌아가는데 이러한 방식은 3D 모델링 프로그램에서 많이 찾아볼 수 있습니다.
        이처럼 프로그램 내에서 수행 가능한 액션의 종류가 많고 정교한 작업이 필요한 경우
        포인터를 적극 활용할 수 있습니다.
      </p>
      <figure class="space-ty2">
        <img :src="`${GOOGLE_STORAGE}img_story_02_02.png`" alt="" />
        <figcaption>
          <table class="blind">
            <thead>
              <tr>
                <th scope="col">action</th>
                <th scope="col">pointer</th>
                <th scope="col">gesture1</th>
                <th scope="col">gesture2</th>
                <th scope="col">gesture3</th>
                <th scope="col">gesture4</th>
                <th scope="col">gesture5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">선택 대기</th>
                <td>검지만 펴진 손모양 마우스포인터</td>
                <td>커서 롤오버</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 확대</th>
                <td>커서 포인터</td>
                <td>휠 Up</td>
                <td>L 더블 클릭</td>
                <td>R 클릭 + Drag down</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 축소</th>
                <td>커서 포인터</td>
                <td>휠 Down</td>
                <td>R 더블 클릭</td>
                <td>R 클릭 + Drag up</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Pan 이동</th>
                <td>커서 포인터</td>
                <td>L 클릭 + Drag</td>
                <td>키보드 방향키</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Rotate</th>
                <td>커서 포인터</td>
                <td>Shift + L 클릭 + Drag</td>
                <td>Shift + 키보드 좌우 방향키</td>
                <td>휠 클릭 + Drag</td>
                <td>Ctrl + L클릭 + Drag</td>
                <td>Alt + 키보드 좌우 방향키</td>
              </tr>
              <tr>
                <th scope="row">Tilt</th>
                <td>커서 포인터</td>
                <td>Shift + L 클릭 + Drag</td>
                <td>Shift + 키보드 상하 방향키</td>
                <td>휠 클릭 + Drag</td>
                <td>Ctrl + L클릭 + Drag</td>
                <td>Alt + 키보드 상하 방향키</td>
              </tr>
            </tbody>
          </table>
        </figcaption>
      </figure>
      <h5 class="art-1">2. NASA World Wind</h5>
      <a
        href="http://explorer.worldwind.earth/"
        title="새창 이동"
        target="_blank"
        class="site en"
      >
        <strong data-action="action-text">나사 월드 윈드 페이지 방문하기</strong>
      </a>
      <p class="desc-1">
        나사 월드 윈드의 제스처는 단순합니다. 그리고 지도 정 가운데에 원점 포인터를 고정
        제공합니다. 이것은 지리 정보의 측정과 로테이션, 틸트, 확대, 축소 등의 기준점으로
        작동하기 때문에 커서의 위치는 아무 상관이 없게 됩니다. 또, 숨겨진 기능으로는 자동
        pan 이동이 있는데, 커맨드 + 방향키 선택 시 해당 방향으로 pan 이동이 지속됩니다.
        (방향키를 누르는 횟수만큼 이동 속도가 빨라지는….)
      </p>
      <figure class="space-ty2">
        <img :src="`${GOOGLE_STORAGE}img_story_02_03.png`" alt="" />
        <figcaption>
          <table class="blind">
            <thead>
              <tr>
                <th scope="col">action</th>
                <th scope="col">pointer</th>
                <th scope="col">gesture1</th>
                <th scope="col">gesture2</th>
                <th scope="col">gesture3</th>
                <th scope="col">gesture4</th>
                <th scope="col">gesture5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">선택 대기</th>
                <td>검지만 펴진 손모양 마우스포인터</td>
                <td>커서 롤오버</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 확대</th>
                <td>커서 포인터</td>
                <td>휠 Up</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 축소</th>
                <td>커서 포인터</td>
                <td>휠 Down</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Pan 이동</th>
                <td>커서 포인터</td>
                <td>L 클릭 + Drag</td>
                <td>키보드 방향키</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Rotate</th>
                <td>커서 포인터</td>
                <td>R 클릭 + Drag</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Tilt</th>
                <td>커서 포인터</td>
                <td>R 클릭 + Drag</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </figcaption>
      </figure>
      <h5 class="art-1">3. 서울시 3차원 GIS</h5>
      <a
        href="https://smap.seoul.go.kr/"
        title="새창 이동"
        target="_blank"
        class="site en"
      >
        <strong data-action="action-text">서울시 에스맵 페이지 방문하기</strong>
      </a>
      <p class="desc-1">생각보다 많은 기능을 제공하고 꾸준히 업데이트되는 맵입니다.</p>
      <figure class="space-ty2">
        <img :src="`${GOOGLE_STORAGE}img_story_02_04.png`" alt="" />
        <figcaption>
          <table class="blind">
            <thead>
              <tr>
                <th scope="col">action</th>
                <th scope="col">pointer</th>
                <th scope="col">gesture1</th>
                <th scope="col">gesture2</th>
                <th scope="col">gesture3</th>
                <th scope="col">gesture4</th>
                <th scope="col">gesture5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">선택 대기</th>
                <td>검지만 펴진 손모양 마우스포인터</td>
                <td>커서 롤오버</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 확대</th>
                <td>커서 포인터</td>
                <td>휠 Up</td>
                <td>Ctrl + 키보드 상 방향</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 축소</th>
                <td>커서 포인터</td>
                <td>휠 Down</td>
                <td>Ctrl + 키보드 하 방향</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Pan 이동</th>
                <td>커서 포인터</td>
                <td>L 클릭 + Drag</td>
                <td>휠 클릭 + Drag</td>
                <td>키보드 상하좌우</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Rotate</th>
                <td>커서 포인터</td>
                <td>R 클릭 + Drag</td>
                <td>Shift + L 클릭 + Drag</td>
                <td>Shift + 휠 클릭 + Drag</td>
                <td>Shift + 키보드 좌우</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Tilt</th>
                <td>커서 포인터</td>
                <td>R 클릭 + Drag</td>
                <td>Shift + L 클릭 + Drag</td>
                <td>Shift + 휠 클릭 + Drag</td>
                <td>Shift + 키보드 상하</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </figcaption>
      </figure>
      <h5 class="art-1">4. V World</h5>
      <a
        href="http://www.vworld.kr/index.jsp"
        title="새창 이동"
        target="_blank"
        class="site en"
      >
        <strong data-action="action-text">브이월드 홈페이지 방문하기</strong>
      </a>
      <p class="desc-1">(2018년 9월 기준)</p>
      <figure class="space-ty2">
        <img :src="`${GOOGLE_STORAGE}img_story_02_05.png`" alt="" />
        <figcaption>
          <table class="blind">
            <thead>
              <tr>
                <th scope="col">action</th>
                <th scope="col">pointer</th>
                <th scope="col">gesture1</th>
                <th scope="col">gesture2</th>
                <th scope="col">gesture3</th>
                <th scope="col">gesture4</th>
                <th scope="col">gesture5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">선택 대기</th>
                <td>검지만 펴진 손모양 마우스포인터</td>
                <td>커서 롤오버</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 확대</th>
                <td>커서 포인터</td>
                <td>휠 Up</td>
                <td>키보드 Home</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 축소</th>
                <td>커서 포인터</td>
                <td>휠 Down</td>
                <td>키보드 End</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Pan 이동</th>
                <td>커서 포인터</td>
                <td>L 클릭 + Drag</td>
                <td>휠 클릭 + Drag</td>
                <td>키보드 상하좌우</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Rotate</th>
                <td>커서 포인터</td>
                <td>R 클릭 + Drag(역방향)</td>
                <td>키보드 Insert, Delete</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Tilt</th>
                <td>커서 포인터</td>
                <td>R 클릭 + Drag</td>
                <td>키보드 Page Up, Page Down</td>
                <td>Shift + L 클릭 + Drag</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </figcaption>
      </figure>
      <h5 class="art-1">5. HELSINKI</h5>
      <a
        href="https://kartta.hel.fi/3d/"
        title="새창 이동"
        target="_blank"
        class="site en"
      >
        <strong data-action="action-text">헬싱키 페이지 방문하기</strong>
      </a>
      <figure class="space-ty2">
        <img :src="`${GOOGLE_STORAGE}img_story_02_06.png`" alt="" />
        <figcaption>
          <table class="blind">
            <thead>
              <tr>
                <th scope="col">action</th>
                <th scope="col">pointer</th>
                <th scope="col">gesture1</th>
                <th scope="col">gesture2</th>
                <th scope="col">gesture3</th>
                <th scope="col">gesture4</th>
                <th scope="col">gesture5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">선택 대기</th>
                <td>검지만 펴진 손모양 마우스포인터</td>
                <td>커서 롤오버</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 확대</th>
                <td>커서 포인터</td>
                <td>휠 Up</td>
                <td>R 클릭 + Drag down</td>
                <td>키보드 +</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">지도 축소</th>
                <td>커서 포인터</td>
                <td>휠 Down</td>
                <td>R 클릭 + Drag up</td>
                <td>키보드 -</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Pan 이동</th>
                <td>커서 포인터</td>
                <td>L 클릭 + Drag</td>
                <td>키보드 상하좌우</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Rotate</th>
                <td>커서 포인터</td>
                <td>휠 클릭 + Drag</td>
                <td>키보드 Home, End</td>
                <td>Shift + L 클릭 + Drag</td>
                <td>Ctrl + L 클릭 + Drag</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Tilt</th>
                <td>커서 포인터</td>
                <td>휠 클릭 + Drag</td>
                <td>Ctrl + L 클릭 + Drag</td>
                <td>Shift + L 클릭 + Drag</td>
                <td>키보드 Page Up, Page Down</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </figcaption>
      </figure>
      <h6 class="art-2">Q. 단순한 조작을 여러 방식으로 제공하는 이유는 무엇일까?</h6>
      <p class="desc-1">
        바로, 배율과 이동 방식을 다르게 구현하기 때문입니다. 예를 들어 구글의 확대/축소는
        휠 조작이 가장 적은 폭으로 배율이 바뀌고 더블 클릭과 드래그는 이보다 더 큰 배율로
        빠르게 움직입니다. 서울시 맵의 경우는 키보드, 휠, 버튼 조작 순으로 배율 변화가
        큽니다. 기준점으로부터 이동하는 거리와 상황에 맞게 적절히 사용할 수 있겠습니다.
        회전 방식에도 큰 차이가 있습니다. 구글의 로테이트/틸트로 예를 들자면, 마우스 조작
        시 클릭한 원점을 손바닥으로 누르고 다른 손으로 마우스 방향대로 지도를 잡아당기는
        움직임을 제공합니다. 제스처 진행 방향으로 지도가 이동하는 것입니다. 그러나
        키보드로 조작할 때는 지도가 아닌 카메라 자체의 움직임 방향과 키 방향이 맵핑되어
        있습니다. 구글처럼 서로 다른 방식을 모두 제공하는 지도가 있는 한편, 한 가지
        방식만을 제공하는 지도도 있습니다.
      </p>
      <h6 class="art-2">Q. 서로 다른 제스처 방식의 차이는 무엇일까?</h6>
      <p class="desc-1">
        마우스 포인터의 위치를 중심축으로 카메라가 움직이는 것은 A. 제자리에서 카메라의
        방향이 바뀌는 방식은 B라고 해 봅시다. 포인터를 중심으로 움직이는 방식(A)은
        버드뷰나 방향 전환이 크게 필요한 상황에서 용이하고, 지상 시점이나 실내 뷰와 같이
        보다 세밀한 조작이 필요한 상황에서는 제자리에서 카메라의 방향이 바뀌는(B) 방식이
        유용합니다. 만약, 지도를 확대하여 팬 이동으로 골목을 따라가다가 왼쪽을 보려고
        했는데 A 방식만 제공된다면 카메라는 포인터 중심축으로 이동을 해버려 어느 순간
        유령이 되어 건물을 통과하고 전혀 다른 곳에 도착하고 맙니다.
      </p>
      <h6 class="art-2">Q. 지도 인터페이스를 설계한다면?</h6>
      <p class="desc-1">
        실내 공간 정보에 특화된 BIM (building information modeling)이나 라이노, 맥스,
        스케치업과 같은 모델링 툴로 넘어가면서도 미세한 차이가 있습니다. 특히 버드뷰가
        아닌 구글 스트리트 뷰처럼 전진, 후진의 개념이 들어가기 때문에 Pan 이동과 Rotate,
        Tilt의 차이를 알아야 하고 3차원 공간 좌표계에 대한 이해가 선행되어야 합니다. (FPS
        게임을 떠올려 보세요) 회전축이 카메라인지 포인터인지에 따라 완전히 다른 움직임을
        제공하기 때문에 지도상의 객체와 대상에 무엇이 더 유리한 조작인지 판단해야 합니다.
        그리고 이 모든 제스처를 사용자가 쉽게 익히고 사용할 수 있어야 합니다. 여담으로
        지도 서비스의 제스처가 생각보다는 이슈가 있는 것 같습니다. 블로깅 할 소재를 찾다가
        작년 9월에 진행한 조사를 그대로 작성했었는데 혹시나 해서 최근에 다시 보니, 새로
        추가된 제스처도 많고 동작 방식이 바뀐 것도 있었습니다. 이 글이 공개될 때는 또
        어떻게 바뀌어 있을지 모르겠네요.
      </p>
      <div class="area-from">
        <strong>이 글은 브런치에서도 볼 수 있습니다 - @uxstar</strong>
        <a
          href="https://brunch.co.kr/@uxstar/24"
          target="_blank"
          title="새창 이동"
          class="concurrent"
        >
          <strong data-action="action-text">문한별 브런치</strong>
        </a>
      </div>
      <StoryStorybutton href="1399" />
    </section>
    <StoryStorytail :nexts="next" :google="GOOGLE_STORAGE" />
  </div>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { stories } from '~/static/data/story/index.js'
import { GOOGLE_STORAGE } from '~/static/utils'

export default {
  name: 'StoryDetail02',
  asyncData() {
    const story = stories.getWork('navigation')
    const next = stories.getNext('navigation')
    return { story, next, GOOGLE_STORAGE }
  },
  head() {
    const seoMeta = {
      title: '3D 지도의 내비게이션 제스쳐',
      description: '지도 조작을 위한 내비게이션은 보편성을 고려하는 게 유리합니다.',
      url: `${this.$route.path}`,
      image: 'img_story_list_02.png',
    }
    return {
      title: '3D 지도의 내비게이션 제스쳐 > Story > pxd',
      meta: makeMeta(seoMeta),
    }
  },
  mounted() {},
}
</script>
