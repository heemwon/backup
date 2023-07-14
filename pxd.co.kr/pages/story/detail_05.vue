<template>
  <div class="story-wrap">
    <StoryStorytitle :story="story" :google="GOOGLE_STORAGE" />
    <section class="section-detail story">
      <p class="desc-1">
        서울시에서 서울 생활 인구 정보를 공개하여 누구나 활용할 수 있습니다.
      </p>
      <a
        href="https://data.seoul.go.kr/dataVisual/seoul/seoulLivingPopulation.do"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text"
          >서울 열린데이터 광장 생활인구 현황 보러가기</strong
        >
      </a>
      <p class="desc-1">
        생활 인구는 주민등록에 등록된 거주자가 아니라 특정 시간, 특정 지역에 실제 생활하는
        인구입니다. 사람을 한명 한명 셀 수는 없으니 전국민이 가진 휴대폰을 이용했습니다.
        KT 기지국과 휴대폰 간 통신 이력을 기반으로 서울시 인구통계정보를 이용해 추계했다고
        합니다. KT 고객이 아니거나 휴대폰이 꺼져있거나 휴대폰이 없는 사람(특히 미취학
        아동,고연령 층)은 이력에 남지 않으니 통계적으로 추정해 보정한 데이타입니다.<br />
        원자료는 날짜, 시간, 지역(행정동), 연령, 성별 각각 인구수로 구성되어 있는데요.
        통계 추정값이라 인구수가 막 소수점으로 적혀 있습니다. 1주일치 데이타가 90MB정도로
        엑셀이나 구글시트같은 스프레드시트로 열기에도 버겁습니다. 아래처럼 숫자만 빽빽히
        적혀 있어 이것만 보고는 의미를 찾기 어렵습니다. 이런 큰 데이타는 통계 전용
        소프트웨어를 이용해 처리 하는데, 정량적인 통계 분석을 하기 전에 뭘 알고 싶은지는
        알아야 하잖아요. 기본적으로 지역, 시간의 정보니 지도에 시각화해 보면
        좋겠습니다.<br />
        vwlab의 ' 나는 네가 지난 여름에 간 곳을 알고 있다 teammondrian의 ' 서울시 생활인구
        데이터 시각화 ' 를 읽고 서울시에서 이런 데이타를 공개하고 있다는 걸 알게
        되었는데요. 유동 인구의 시계열 변화를 직접 만지면서 눈으로 보고 싶었는데 3차원
        바로 나타내거나 시간을 하나씩 클릭하거나 하는 건 적합한 인터랙션은 아닌 것 같아서
        좀 아쉬웠습니다. 그래서 직접 만들어 보기로 했습니다.
      </p>
      <a
        href="https://www.vw-lab.com/61?category=574281"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">나는 네가 지난 여름에 간 곳을 알고 있다</strong>
      </a>
      <a
        href="https://seoulcensus.teammondrian.com/"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">서울시 생활인구 데이터 시각화</strong>
      </a>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_01.png`"
          alt="서울시 생활인구 데이터가 적혀있는 엑셀표 이미지"
        />
        <figcaption>서울시 생활인구 원 데이타</figcaption>
      </figure>
      <h4 class="art-1">애자일 디자인</h4>
      <p class="desc-1">
        현재는 이렇게 3개 도표로 구성되어 있습니다. 서울 지도는 현재 선택된
        시간대(오후1시) 거주자수 기준 생활 인구 수 변화로 붉은 색은 유입이 많고 푸른색은
        유출이 많은 지역입니다. 오른쪽 상단은 선택된 행정동의 성별, 연령별 인구수 입니다.
        30대 후반 남성이 확연히 많은 걸 보여줍니다. 하단은 시간 x 연령별인구수
        히트맵입니다. 20대에서 50대 사이 인구가 7시 출근 시간에 갑자기 유입되고 7시 퇴근
        후 확 빠져나가서 검푸른 점으로 보입니다. 새벽에도 35세와 70세 이상은 선으로
        남아있는데 이 연령대가 여의도 주 거주자임을 보여줍니다. 처음부터 이런 디자인
        계획을 세우고 시작한게 아니라 가장 핵심 기능을 만들어 돌아가게 한 후 그 다음
        중요한 부분을 만들어 보는 식으로 크게 일곱 단계로 디자인을 반복 했습니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_02.png`"
          alt="데이터가 표시되는 3개 도표 이미지"
        />
        <figcaption>서울시 생활 인구 시각화</figcaption>
      </figure>
      <h5 class="art-1">1. 행정동별 인구수 코로플레스 맵 만들기</h5>
      <p class="desc-1">
        지도에 통계 데이타를 표시할 때 지도가 가장 중요한 시각 요소인 상하 좌우 공간을
        사용해버렸으니 값은 색상 단계로 표현하는데 이런 맵을 choropleth map (단계구분도)
        라고 합니다. 선거 개표 방송에서 이런 그래프를 많이 사용해서 익숙하실거에요. 어떻게
        만들까 찾아보니 지도에 시각화하는 방법은 R과 d3 라이브러리 사용이 대세인데
        인터랙션을 붙이기에 자바스크립트가 나을 것 같아 저는 d3를 선택했습니다. 하지만
        문제는 제가 d3를 모른다는거 였는데요. "d3+지도+시각화" 로 검색해서 맨 처음 나온
        lucy park 님의 글을 보고 공부해서 많은 도움을 받았습니다.
      </p>
      <a
        href="https://www.lucypark.kr/blog/2015/06/24/seoul-matzip-mapping/"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text">D3를 이용한 서울시내 맛집 시각화 정보글</strong>
      </a>
      <p class="desc-1">
        코드를 복사해서 내가 하고 싶은 부분만 고치고 돌아가는지 테스트 하고 안되면 다시
        검색해서 코드를 가져와서 붙이는 애자일스러운 방법으로 코딩 + 공부 했습니다. 빠르게
        결과물을 만들어 보고 흥미를 느끼기에 좋은 방법인데요. 공부하는 데 꼼수는 통하지
        않습니다. 체계적으로 책도 읽고 d3js.org 공식 문서도 보면서 기본 실력을 같이 키우면
        좋겠습니다. 행정동을 표시하는 지도 데이타는 vuski 님의 github
        https://github.com/vuski/admdongkor 에서 geojson 파일을 받아 서울시 부분을
        추출하고 https://mapshaper.org/ 에서 topojson 형식으로 변환했습니다. d3에서 지도
        데이타를 geojson과 topojson 형식을 사용할 수 있는데 후자가 용량이 훨씬 적어
        효율적입니다. 서울 생활 인구 데이타 CSV 파일을 불러 오는데 파일이 너무 커서
        로딩하는데 지연이 많았습니다. 어차피 추정값이니까 반올림으로 소수점 아래를 버려서
        파일 크기를 반으로 줄였습니다. 코로플레스 맵은 지도 위에 색을 칠해 값을 나타내는
        방법이니 컬러맵 선택이 중요합니다. d3 라이브러리에 잘 만들어진 컬러맵이 제공되니
        용도에 맞게 잘 골라 사용하면 됩니다.
      </p>
      <a href="http://d3js.org/" target="_blank" title="새창 이동" class="concurrent en">
        <strong data-action="action-text">d3js 공식홈페이지</strong>
      </a>
      <a
        href="https://github.com/d3/d3-scale-chromatic"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text">d3-scale-chromatic 깃헙페이지 방문하기</strong>
      </a>
      <a
        href="https://github.com/vuski/admdongkor"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text">admdongkor 깃헙페이지 방문하기</strong>
      </a>
      <a
        href="https://mapshaper.org/"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text">mapshaper 홈페이지 방문하기</strong>
      </a>
      <h6 class="art-2">순차적 값에 적합한 컬러 스킴</h6>
      <p class="desc-1">
        인구수는 크고 작음을 비교하니 색이 순차적으로 변하는 sequential 중에서 고릅니다.
        처음에는 요즘 많이 사용하는 보라 초록 노랑 그라데이션으로 만들어진 viridis를
        사용했습니다. 하지만 이건 특이값을 도드라지게 보여주는데 적합하여서 좀 더 단순하게
        선형적으로 변화하는 노랑 초록 파랑 schemeYlGnBu를 선택했습니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_03.png`"
          alt="그라데이션으로 표시되어있는 스펙트럼"
        />
      </figure>
      <p class="desc-1">
        우리한테는 보통 jet 무지개 스킴이 익숙한데요. Matlab같은 통계 시각화 프로그램에
        초기 설정으로 제공되어 여러 논문이나 히트맵에 많이 사용되어 왔기 때문입니다. 알록
        달록 대비가 커서 뭐가 그럴듯해 보이지만 이렇게 너무 많은 색상을 사용한 색배열은
        순차적인 값의 관계를 보여주는데는 적합하지 않습니다. 인지적으로도 명도가 균질하게
        선형적인 배열이 아닙니다. 순차적인 값을 비교하는 거라면 가급적 무지개 스킴은
        사용하지 않는게 좋습니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_04.png`"
          alt="지형 높이를 나타내는 레인보우 컬러맵 이미지"
        />
        <figcaption class="en">jet rainbow color map</figcaption>
      </figure>
      <h6 class="art-2">음양 변화 비교에 적합한 컬러 스킴</h6>
      <p class="desc-1">
        나중에 거주자 기준으로 인구수 변화를 나타내도록 바꾸고나서는 증가했는지 감소했는지
        양방향 차이가 드러나야 하니까 diverging 스킴으로 바꿨습니다. 노란색을 중심으로
        증가는 빨강, 감소는 파랑으로 나뉘도록 schemeRdYlBu 를 골랐습니다. 사실 빨강이
        양인지 음인지 정해진 게 아니라 맥락과 문화에 따라 다를텐데요. (한국과 미국 주가
        등락 색상 차이) 사람이 많이 몰리면 더우니까 빨강을 증가 쪽으로 했습니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_05.png`"
          alt="그라데이션으로 표시되어있는 스펙트럼"
        />
      </figure>
      <h5 class="art-1">2. 시계열 인구 변화 보기</h5>
      <p class="desc-1">
        시간에 따른 인구 변화를 보려고 슬라이더를 추가했습니다. 처음부터 시간에 따른
        인구수 변화를 지도에서 보고 싶었거든요. 슬라이더를 잡고 이동하면서 바로 변화를 볼
        수 있어 재밌는데 저녁에서 새벽으로 볼 수 없어 아쉬웠습니다. 그래서 키보드의 좌우
        키를 이용해 저녁 11시 다음에 새벽 12시대로 시간을 이동하게 했습니다. 가급적 직접
        이동과 상대적 이동이 모두 가능하면 좋습니다. 자동 애니메이션도 있으면 좋겠지만
        방향키를 누르고 있으면 되니 따로 만들지 않았습니다. 일주일치 자료가 공개되어
        있는데 주말에 사람이 어디로 몰리는지 궁금해서 금요일을 골랐는데요. 그래서 저녁
        11시에서 새벽으로 넘어갈 때 주말 저녁에서 평일 새벽으로 돌아가서 부자연스럽게 튀는
        문제가 있습니다. 변화를 보여주는 곳에는 가급적 애니메이션을 적용했습니다. 새로운
        정보가 많으면 변화 차이를 모두 인지하기 어려운데 움직임이 있으면 변화를 찾는데
        수월합니다. 색상 변화나 그래프 변화도 가급적 연속적으로 애니메이션 되게 했습니다.
        이 기능은 d3에서 기본 제공되니 필요한 부분에는 적극적으로 사용하면 좋습니다.
      </p>
      <div class="ly-video" aria-hidden="true">
        <iframe
          src="https://www.youtube.com/embed/Y-fBb1gZ9NA?rel=0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          title="서울 생활 인구 시각화 시연 영상"
        >
        </iframe>
      </div>
      <h5 class="art-1">3. 거주자 수 기준 유출입 인구 변화 보여주기</h5>
      <p class="desc-1">
        단순히 시간대별 인구수를 보여줘서는 유출입 변화가 잘 보이지 않습니다. 거주자 수를
        기준으로 시간대에 따라 얼마나 유입, 유출이 많은지를 보여주면 더 명확할 것
        같았습니다. 그래서 행정 단위별 인구수 자료를 찾아서 계산해 주려고 했는데요.
        슬라이드를 움직이다 보니 새벽 시간에 인구수 변화가 거의 없더라구요. 새벽에는 다들
        집에 가서 자고 있을테니까요. 새벽 3시 전후로 가장 변화가 적어서 이를 기준 인구수로
        정했습니다. 이렇게 바꾸고 보니 낮 근무 시간에 사람이 몰리는 업무 지역와 출근하고
        사람이 빠지는 주거 지역이 확연히 드러났습니다.
      </p>
      <h5 class="art-1">4. 행정동 단위 성별 연령대별 인구수 그래프</h5>
      <p class="desc-1">
        선택된 행정동의 성별 연령대별 인구수 그래프를 추가했습니다. 다른 연령대 구간은 5살
        단위로 데이타가 있는데 10살 미만과 70대 이상은 휴대폰 사용자 수가 적어 정확한
        통계를 내기 어려워서 한 그룹으로 묶여 있습니다. 그래서 그 구간이 그래프에서 툭
        튀어 나오게 됩니다. 인구 통계를 보니 5살 미만과 5-10살 은 거의 비슷하고 정확한
        수치를 알고 싶은게 아니기 때문에 반 반씩 두 구간으로 나눠 다른 연령대와 같은
        스케일로 자연스럽게 이어지게 했습니다. 70대 이상은 120대 까지 폭이 넓고 행정동별
        편차도 크기 때문에 단순히 보정할 수 없어서 처음에는 그대로 두었는데요. 아무래도
        다른 연령 구간을 보는데도 신경이 쓰여서 우선은 적당히 자연스러운 높이가 되도록
        보정했습니다. 어떻게 표시하면 좋을지 좀 더 고민이 필요합니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_06.png`"
          alt="연련별 인구수를 나타내는 라인그래프 이미지"
        />
        <figcaption>
          왼쪽 성별 연령별 인구수, 오른쪽 거주인구수 기준 range area chart + 70세 이상
          인구수 보정
        </figcaption>
      </figure>
      <p class="desc-1">
        처음에는 현 시각 인구수를 표시하다가 지도에서 처럼 유출입 변화를 보기 쉽도록 기준
        인구를 표시했습니다. 지도에서 두 인구 차만을 나타내면 2가지 정보를 잃게 되니 Range
        Area 차트로 현재 인구, 기준 인구, 변화량 3가지 정보가 모두 보이게 했습니다. 현재
        방식의 문제는 차가 음의 영역으로 바뀔때 구분이 되지 않는데요. 날씨 그래프를 그릴
        때 처럼 외곽선 두께를 다르게 하거나 하는 방법으로 보완할 수 있을 것 같아요.
      </p>
      <a
        href="https://story.pxd.co.kr/683"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text"
          >[정보디자인] 에드워드 터프티를 위한 날씨앱 보러가기</strong
        >
      </a>
      <h5 class="art-1">5. 시계열 인구수를 한 눈에 볼 수 있는 히트맵 그리기</h5>
      <p class="desc-1">
        매번 슬라이더를 움직여서 (stacked in time) 변화를 보기는 번거러우니 시계열 변화를
        한번에 볼 수 있는 (adjacent in space) 그래프를 보고 싶었습니다. 연령대 변화도 보고
        싶어서 두 차원은 시간,연령으로 하고 인구수는 색상으로 한 히트맵을 만들었습니다. 이
        그래프만으로 기본적인 지역 특성이 드러납니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_07.png`"
          alt="슬라이더를 이용해 단위조절이 가능한 히트맵 이미지"
        />
        <figcaption>대학가 / 업무 지역 / 주택지구</figcaption>
      </figure>
      <p class="desc-1">
        대학 주변은 학생들이 기숙사에 살거나 근처에서 자취하고 있어 20대 초반 인구 비율이
        높게 나타납니다. 집과 학교만 왔다갔다하고, 노는 것도 학생을 상대로 한 주변
        상권에서 생활하니 유출입이 거의 없이 진한 띠를 보여줍니다. 회사가 몰려 있는 업무
        지역에는 30,40대를 중심으로 한 직장인이 출근 시간에 몰려왔다 퇴근 후 빠져나갑니다.
        주거 지역은 반대로 30,40대 직장인들이 출근하면 인구가 빠져나갔다가 저녁에
        들어옵니다.
      </p>
      <a
        href="https://story.pxd.co.kr/539 "
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text">adjacent in space</strong>
      </a>
      <h5 class="art-1">6. 성별,연령 필터 만들기</h5>
      <p class="desc-1">
        행정동 별로 성별, 연령별 차이가 난다는 걸 알고 난 후 특정 조건을 한번에 비교해 볼
        수 있는 지도가 있으면 좋겠다고 생각했습니다. 그러기 위해 필터가 필요한데, 처음에는
        연령을 구간 슬라이더로 선택하고 성별은 체크 박스를 사용하려고 생각했습니다. 조작이
        많아지는게 귀찮아서 한번의 드래그로 선택할 수 있는 커스텀 UI 필터를 만들었습니다.
      </p>
      <div class="ly-video" aria-hidden="true">
        <iframe
          src="https://www.youtube.com/embed/IOhh7Np9cnk"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
          title="서울 생활 인구 시각화 필터 시연 영상"
        >
        </iframe>
      </div>
      <h4 class="art-1">시각화로 정보 읽기</h4>
      <p class="desc-1">
        숫자로는 보이지 않던 정보들이 시각화로 더 잘 보이게 됩니다. 회사가 밀집한
        종로,여의도,가산동,삼성동도 각각 특징이 보입니다. 우선 연령대가 종로쪽이 가장
        두텁고 삼성동은 젊은 편입니다. 종로와 삼성은 전용 업무 지역으로 새벽엔 사람이
        대부분 빠져나가지만 여의도와 가산동은 주거 지역도 함께 있어서 새벽에 선은 일정한
        선을 남깁니다. 여의도는 3,40대 가산동은 2,30대 거주자 위주로 차이가 보입니다.
        꼬리가 길어지는건 야근과 회식이겠고요.
      </p>
      <div class="ly-img-ty1">
        <figure>
          <img
            :src="`${GOOGLE_STORAGE}img_story_05_08.png`"
            alt="시간별 연령별 성별 별로 지역분포도를 나타내는 라인그래프,도트맵 이미지"
          />
          <figcaption>업무 지역</figcaption>
        </figure>
        <figure>
          <img
            :src="`${GOOGLE_STORAGE}img_story_05_09.png`"
            alt="시간별 연령별 성별 별로 지역분포도를 나타내는 라인그래프,도트맵 이미지"
          />
          <figcaption>업무와 주거 복합 지역</figcaption>
        </figure>
      </div>
      <p class="desc-1">
        업무 밀집 지역 성별 연령대 분포를 보면 고용의 성별 격차가 보입니다. 대부분의
        지역에서 남성의 유입은 30대 후반을 중심으로 정규분포에 가까운 모습인데 반해 여성은
        비대칭적입니다. 20대에서는 남녀가 비슷하지만 3,40대 이후 여성이 급격히
        낮아지는데요. 기업의 경력, 고위직에서 여성 비율이 현격히 낮기 때문일 듯 합니다.
        지역별 업종의 특성에 따라 이런 성별 격차가 매우 크게 나타나는 것 같습니다.
        여의도는 30대 초반까지도 유입 인구의 성비가 비슷하지만 40대 후반에서는 남성이
        여성의 3배가 됩니다. 지역 안에 여러 업종이 희석되어 그렇지 실제 업종별로 보면 이
        격차가 훨씬 두드러질 것 같습니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_10.png`"
          alt="시간별 연령별 성별 별로 지역분포도를 나타내는 라인그래프,도트맵 이미지"
        />
        <figcaption>지역 업종 특성에 따른 성별 격차</figcaption>
      </figure>
      <p class="desc-1">
        여의도가 가장 출근이 빠르고 퇴근도 늦습니다. 금융 업종이 밀집한 특성 때문일까요?
        그런데 그 보다 먼저 하루를 시작하는 건 60대 이상 여성입니다. 회사 퇴근 후, 출근
        전에 청소 용역을 하시는 노동자 분이 아닐까 싶습니다. 그래프에는 작아보이지만 보통
        직장인이 출근하기 전 새벽에 이미 대략 4000여명이 여의도로 먼저 출근하고 계십니다.
        또 특이하게 다른 지역과 다르게 남성 40대 초반 인구가 30대 후반, 40대 후반보다 낮아
        흡사 낙타 등처럼 보이는데요. 이게 업무 특성상 정년이 낮고 또 다른 업종의 인구가
        겹쳐있기 때문이 아닐까 싶습니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_11.png`"
          alt="데이터가 표시되는 3개 도표 이미지"
        />
        <figcaption>가장 출근이 빠른 여의도</figcaption>
      </figure>
      <figure class="fit-1">
        <img
          :src="`${GOOGLE_STORAGE_GIF}img_story_05_12.gif`"
          alt="슬라이드에 따라 데이터가 표시되는 그래프 이미지"
        />
        <figcaption>가장 먼저 아침을 시작하는 건 60대 이상 여성</figcaption>
      </figure>
      <p class="desc-1">
        70세 이상 인구 여성 비율이 훨씬 높음에도 종로에만 특히 남성 노인 비율이 높습니다.
        유입 인구만 보면 70세 이상 남성이 약 1만명, 여성이 약 6천명 정도입니다. 노령
        인구가 몇몇 지역으로 집중되는 게 보이는데요. 노인을 위한 보다 많은 공간이
        지자체에서 마련 되어야겠습니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_13.png`"
          alt="데이터가 표시되는 3개 도표 이미지"
        />
      </figure>
      <p class="desc-1">
        특이하게 10대 유입이 두드러지는 곳은 대치동입니다. 학교가 끝나고 학생들은 대치동
        학원으로 모입니다. 늦게는 자정까지 학원에 남아있다 집으로 돌아갑니다. 대치동은
        주거인 연령 분포가 넓은 다른 주변 지역과 다르게 10대 후반 자녀와 40대 후반 부모
        띠가 두드러집니다. 아이가 중고등학생이 되면 대치동으로 이사하나 봐요. 맹자
        엄마처럼. 학원보내려고.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_05_14.png`"
          alt="데이터가 표시되는 3개 도표 이미지"
        />
      </figure>
      <p class="desc-1">불금을 즐기는 홍대와 강남역은 성별과 연령대 차이가 있습니다.</p>
      <div class="ly-img-ty1">
        <figure>
          <img
            :src="`${GOOGLE_STORAGE}img_story_05_15.png`"
            alt="연령별 데이터를 나타내는 라인그래프 이미지"
          />
        </figure>
        <figure>
          <img
            :src="`${GOOGLE_STORAGE}img_story_05_16.png`"
            alt="연령별 데이터를 나타내는 라인그래프 이미지"
          />
        </figure>
      </div>
      <p class="desc-1">
        홍대의 20대 초반 남자 인구는 새벽 3시 이후에도 6시까지 계속 줄어들다가 7시
        이후에나 늘어납니다. 무슨 의미냐면 지하철 첫차 올 때까지 계속 술 먹고 있다는 거죠.
        새벽 3시에는 다들 집에 돌아가 주거 인구만 남아 있을 거라는 가정이 홍대에서는
        틀렸습니다.
      </p>
      <figure class="fit-2">
        <img
          :src="`${GOOGLE_STORAGE_GIF}img_story_05_17.gif`"
          alt="슬라이드에 따라 데이터가 표시되는 라인그래프. 도트맵 이미지"
        />
        <figcaption>첫차를 기다리는 젊은 영혼</figcaption>
      </figure>
      <p class="desc-1">
        lab pxd 홈페이지 서울시 생활 인구 코로플레스 맵에서 직접 시간과 행정동 선택을
        바꿔가며 서울 생활 인구 변화를 확인 할 수 있습니다. 좀 더 추가하고 싶은 기능은
        많으나 너무 미뤄질 것 같아 현재 진행 상황을 먼저 공개합니다. 서울시 생활 인구에서
        흥미로운 발견을 하시거나 시각화 기능 제안이 있으면 의견 남겨 주세요.
      </p>
      <a
        href="http://lab.pxd.co.kr/seoul_map/"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text">서울시 생활 인구 코로플레스맵 보러가기</strong>
      </a>
      <StoryStorybutton href="1408" />
    </section>
    <StoryStorytail :nexts="next" :google="GOOGLE_STORAGE" />
  </div>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { headerpoint } from '~/assets/js/headerColor.js'
import { stories } from '~/static/data/story/index.js'
import { GOOGLE_STORAGE, GOOGLE_STORAGE_GIF } from '~/static/utils'

export default {
  name: 'StoryDetail05',
  asyncData() {
    const story = stories.getWork('choroplethmap')
    const next = stories.getNext('choroplethmap')
    return { story, next, GOOGLE_STORAGE, GOOGLE_STORAGE_GIF }
  },
  head() {
    const seoMeta = {
      title: '서울시 생활 인구 코로플레스맵 시각화',
      description:
        '생활 인구는 주민등록에 등록된 거주자가 아니라 특정 시간, 특정 지역에 실제 생활하는 인구입니다.',
      url: `${this.$route.path}`,
      image: 'img_story_list_05.png',
    }
    return {
      title: '서울시 생활 인구 코로플레스맵 시각화 > Story > pxd',
      meta: makeMeta(seoMeta),
    }
  },
  mounted() {
    this.headerColor()
  },
  methods: {
    headerColor() {
      headerpoint(this.story.headerType)
    },
  },
}
</script>
