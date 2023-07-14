<template>
  <div class="story-wrap">
    <StoryStorytitle :story="story" :google="GOOGLE_STORAGE" />
    <section class="section-detail story">
      <p class="desc-1">
        가끔 UX에 관련한 토론회 같은데 가면 사람들이 "UX의 미래는 무엇일까요?" 같은 황당한
        질문을 한다. 내가 어떻게 알겠는가? 그리고 사실 별로 궁금하지도 않다. 그것보다는
        "내 미래는 어떻게 될까"가 훨씬 궁금하고 알고 싶다. 그래도 전문가로서 불려갔으니
        "하나도 안 궁금하고, 내 미래가 진짜 궁금함" 이렇게 답변할 수는 없다. 그래서 항상
        그런 종류의 질문에 답변을 준비해 간다. UX의 미래는 어디에 있을까?
      </p>
      <h4 class="art-1">영화속 미래 UX와 AI</h4>
      <p class="desc-1">
        UX의 미래라면 어떤 그림이 떠오르는가? 많은 사람들이 마이너리티 리포트의 한 장면을
        떠올린다. 그러나 실제로 전문가들이 생각하는 UX의 미래는 이런 것과는 거리가 멀다.
        그렇다면 어떤 방향일까? <br />
        얼마전 ZDNet에는 "AI는 새로운 UI다"라는 기사가 실렸다. 엑센츄어의 기술트렌드
        보고서를 인용한 기사에서는, 인공지능(AI)기술의 저변이 늘어나게 된 핵심 이유 중
        하나가 이들이 사용자들과 직접 맞닿아 있는 사용자 인터페이스(UI)로서 새로운 사용자
        경험(UX)을 제공하고 있기 때문이라는 분석을 인용했다. 먼저 5년 내 절반 이상
        사용자들이 기업들의 전통적인 서비스 대신 AI 기반 서비스를 선택하게 될 것이다. 또
        7년 내에 대부분 인터페이스가 화면을 갖지 않게 되고 일상 업무와 통합될 것이다.
        끝으로 10년 뒤에는 디지털비서가 전면적으로 보급돼 임직원들이 365일/7일/24시간
        생산성을 유지하도록 지원할 것으로 전망된다. 사실 대부분의 인터페이스가 화면을 갖지
        않게 될 것이라는 전망은 동의하지 않는다. 화면 인터페이스는 화면 인터페이스대로
        자기가 가장 잘 하는 분야로서 자리를 찾을 것이다. 어쨌든 형태도 많이 바뀔 것이고
        비중도 지금보다 심각하게 줄어들 것임은 틀림없다. 그런데 이런 예측은 이제 막 나온
        애기는 아니다.
      </p>
      <a
        href="http://www.zdnet.co.kr/news/news_view.asp?artice_id=20170911072458"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">AI는 새로운 UI다</strong>
      </a>
      <h4 class="art-1">픽셀의 종말</h4>
      <p class="desc-1">
        2016년 1월 Fabricio Teixeira와 그의 팀은 2016년에 유행할 UX 트렌드에 대해서
        발표하면서 그 첫 번째 특징으로 픽셀의 종말에 대해서 이야기했다.
      </p>
      <a
        href="https://uxdesign.cc/the-state-of-ux-in-2016-4a87799647d8"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text">The State of UX in 2016</strong>
      </a>
      <p class="desc-1">
        우리는 지금도 열심히 UX 디자인을 하고 있지만 Flat 디자인이라는 트렌드와,
        모바일이라는 플랫폼, 그리고 결국 모두 비슷한 시각 언어를 사용하는 탓에 거의 모든
        디자인이 서로 비슷해 보인다는 점을 지적하면서, 화면에는 더 이상 디자인할 것이 많지
        않다고 주장했다. 어쩌면 우리가 알고 있는 어플(앱 App)이라는 것도 사라질지 모르고,
        우리는 대화형 인터페이스나 다른 종류의 방식을 통해서 더 이상 픽셀을 디자인하지
        않는 시대에 살지 모른다는 주장이다.<br />
        특히 그는 세 번째 특징에서 "Designing Around Time"을 주장하면서, 우리는 더 이상
        공간상에 디자인하기 보다는 시간상에 디자인을 한다고 말한다. 길에 서면 택시를
        부르는 인터페이스를 띄우고, 드라이버를 기다릴 땐 드라이버 정보를 보여주며, 여정이
        끝나면 기사에 대해 평가하고 결제하는 우버의 인터페이스처럼, 우리는 시간의 흐름에
        맞는 인터페이스를 보여주어 자연스러운 UX를 만드는 것이, 공간을 배치하는 것보다
        훨씬 중요한 시대에 살고 있다.<br />
        예전에는 앱을 처음 만든다든지 개편한다든지 하면 '메인 화면을 어떻게 만드느냐'에
        집중했다면, 이제 UX 디자이너들은 첫 일주일을 어떻게 만드느냐를 고민해야 한다. 처음
        사용자들이 우리 앱에 들어와서 어떤 정보를 접하고, 나가야 하며, 언제/왜 두 번째
        방문을 하도록 설계해야하고, 그렇게 첫 일주일을 우리 앱의 가치를 느끼면서 쓸 수
        있도록 해야 우리의 고객이 되기 때문이다.<br />
        특히 시간에 대한 설계에서는 대화형 커머스라든지, 빅데이터에 의한 맞춤형
        제안이라든지, 사용자의 주요 상황에 따른 적절한 푸시 노티피케이션 같은 부분들이
        중요해지므로, 인공지능이나 데이터 분석이 더욱 중요해 지게 된다. 그런데 이런 얘기를
        하면, 사람들은 여전히 'UX의 미래'라면 뭔가 굉장히 첨단스러운 것, 뭔가 굉장히
        미래스러운 것을 생각하게 된다. 하지만 내 생각은 다르다.
      </p>
      <h4 class="art-1">스마트폰의 다음 세대</h4>
      <p class="desc-1">
        2017년 8월 Wall Street Journal에서는 지금까지 우리가 스마트폰을 대략 10억대 쯤
        만들고 팔았는데, 앞으로 다음 10억대는 누구에게 팔 건가?라는 질문을 던지면서 다음과
        같은 기사를 내 놓았다.
      </p>
      <a
        href="https://www.wsj.com/articles/the-end-of-typing-the-internets-next-billion-users-will-use-video-and-voice-1502116070"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text"
          >The End of Typing: The Next Billion Mobile Users Will Rely on Video and
          Voice</strong
        >
      </a>
      <p class="desc-1">
        지금까지는 가난과 낮은 교육 수준으로 문맹률이 높은 사람들은 인터넷 사용과 거리가
        멀었는데, 저가 스마트폰의 보급, 저렴한 데이터 요금제 출시 덕분에 인터넷을 태어나서
        처음으로 사용할 수 있게 되었고 여기에 중요한 것은 직관적인 UX를 가진 앱들이다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_03_01.png`" alt="기사 배너" />
      </figure>
      <p class="desc-1">
        지금까지 스마트폰을 구입했던 이전 10억명과 달리 앞으로 10억명의 인터넷 이용 행태는
        타이핑, 이메일 등 문자가 아니라, 음성, 영상, 그리고 그림으로 소통하는 것이다.
        검색하고 통화할 때 뿐만 아니라, 소셜 서비스나 상거래 서비스까지도 모두 이러한
        방식이 주류를 이루게 될 것이다. 아니 그럴 수 밖에 없다. 글을 모르기 때문에.<br />
        예를 들어 인도의 인구는 13억 명이지만, 이중 4억이 스마트폰을 사용하고 있다.
        2015년부터 10-30만원대의 스마트폰이 쏟아져 나오면서 이들은 처음 IT 기기라는 걸
        사용해 보고 있다. 매달 2천만명이 인생에서 처음으로 스마트폰을 구입하고 거기서
        유투브로 동영상을 보고, 셀카(Selfie)를 찍고, 통화를 하고, 음성으로 검색을 한다.
        우리가 처음 이런 일들을 하던 때의 경이로움을 생각하면, 이들이 돈이 없을 때 콜라를
        사는 대신 통신 요금을 더 지불하는 것이 이해가 간다.
      </p>
      <a
        href="http://economictimes.indiatimes.com/articleshow/53163098.cms"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text"
          >Rural India cuts down on discretionary spends to save for internet and mobile
          talk-time packs</strong
        >
      </a>
      <p class="desc-1">
        위 WSJ 기사에서는 구글이 제공하는 기차역 주변의 무료와이파이를 이용하여 철도 주변
        노동자들이 스마트폰을 즐기고 있으며, 아울러 이런 사람들이 편리하게 일용직을 찾을
        수 있는 스마트폰 앱도 보급되고 있다고 전한다. 이런 사람들이 앞으로 10억명이고,
        따라서
        <strong class="strong-gr">지금보다 훨씬 단순한 이미지 중심 UX,</strong>
        <strong class="strong-gr"
          >화면이나 공간에 펼쳐지는 UX가 아닌<br />시간에 펼쳐지는 UX, 그리고</strong
        >
        <strong class="strong-gr"
          >글자 중심이 아닌<br />음성/비디오 중심으로 이루어진 UX</strong
        >
        가 이들에게 핵심이 될 것이다. 대화형 UX라든지, AI UX라든지 하는 것들이 선진국
        사용자, 텍스트 중심의 사용자들에게 주는 이득은 있기는 하겠지만 매우 적다. 이미
        현재의 화면에서도 크게 불편함을 느끼지 않기 때문에 이러한 미래형 UX는 선진국에서는
        실험실의 장난감을 벗어나기 힘들다. 하지만 글을 읽지 못 하는 다음 10억명의 스마트폰
        사용자들은 이런 UX가 아니면 쓸 수가 없을 것이기 때문에 이런 '미래형 UX'는
        남아시아의 나라들에서 꽃이 필 확률이 매우 크다. UX의 미래는 SF 영화에 있는 것도
        아니고, 선진국 실험실에 있는 것도 아니다. 톰 크루즈의 손에 있는 것이 아니라 인도
        철도 노동자의 손에 있다.
      </p>
      <h4 class="art-1">한국에서는?</h4>
      <p class="desc-1">
        한국에서도 여전히 더 쉬운 UX를 필요로하는 다양한 계층이 있다. 대표적으로 50대
        이상의 노안 소비자들인데, 이들은 작은 화면의 텍스트를 불편해하기 때문에 TV
        홈쇼핑을 즐긴다. 굳이 읽지 않아도 비디오로 보여주는 형태는 사실 노안 소비자들이
        아닌 사람들도 해 보면 편리할 수 있는 방식이지만, 그런 사람들에게 줄 수 있는 이득은
        작은 반면 글자를 읽기 괴로운 사람들에게 줄 수 있는 이득은 매우 크다. 앞으로 모든
        쇼핑이 모바일로 넘어간다면, 그리고 젊은 세대들이 그렇듯이 이들도 더 이상 '실시간형
        TV'를 보지 않게 된다면 이들은 어떤 식으로 쇼핑을 할까? 기사에 따르면 2015년부터
        40-50대의 모바일 쇼핑 이용률이 계속 높은 성장을 하고 있다. 많은 사람들에게 쉬운
        비디오로 설득하는 매력적인 판매 방식을 가진 커머스 UX야 말로, 'TV 홈쇼핑'을
        대체하는 미래의 UX일지 모른다.
      </p>
      <a
        href="http://www.ddaily.co.kr/news/article.html?no=129151"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text"
          >모바일 쇼핑, 40~50대 이용률↑…2차 대전 예고 (2015.4)</strong
        >
      </a>
      <a
        href="http://corp.ticketmonster.co.kr/?p=1119"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text"
          >티몬, 40대이상 고객 비중 20대 추월 (2016.3)</strong
        >
      </a>
      <a
        href="http://www.sedaily.com/NewsView/1OL4L5QM1I/GD02"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text"
          >티몬, 실시간 영상 보며 쇼핑하는 ‘라이브 방송’ 정식 오픈 (2017.8)</strong
        >
      </a>

      <article class="area-reference">
        <h4 class="title">[참고 자료]</h4>
        <strong class="en">Featured Collection: UX for the Next Billion Users</strong>
        <a
          href="https://design.google/library/ux-next-billion-users/"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text">UX for Next Billion Users by Google</strong>
        </a>
        <strong>문맹자들도 쓸 수 있는 쉬운 금융앱 UX</strong>
        <a
          href="http://myoralvillage.org/"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text">My Oral Village, Inc.</strong>
        </a>
        <strong>인도네시아에서 앱으로 교통비 바가지 면하기</strong>
        <a
          href="http://story.pxd.co.kr/1213"
          title="새창 이동"
          target="_blank"
          class="reference"
        >
          <strong data-action="action-text"
            >인도네시아에서 앱으로 교통비 바가지 면하기</strong
          >
        </a>
        <strong>박성연의 비영리를 위한 혁신</strong>
        <a
          href="http://www.econovill.com/news/articleView.html?idxno=322119"
          title="새창 이동"
          target="_blank"
          class="reference"
        >
          <strong data-action="action-text"
            >생존을 위한 MP3 백과사전, 유리두(URIDU)</strong
          >
        </a>
      </article>
      <StoryStorybutton href="1261" />
    </section>
    <StoryStorytail :nexts="next" :google="GOOGLE_STORAGE" />
  </div>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { headerpoint } from '~/assets/js/headerColor.js'
import { stories } from '~/static/data/story/index.js'
import { GOOGLE_STORAGE } from '~/static/utils'

export default {
  name: 'StoryDetail03',
  asyncData() {
    const story = stories.getWork('uxfuture')
    const next = stories.getNext('uxfuture')
    return { story, next, GOOGLE_STORAGE }
  },
  head() {
    const seoMeta = {
      title: 'UX의 미래는 여기에 있다 - UX for Next Billion Users',
      description:
        '가끔 UX에 관련한 토론회 같은데 가면 사람들이 "UX의 미래는 무엇일까요?" 같은 황당한 질문을 한다.',
      url: `${this.$route.path}`,
      image: 'img_story_list_03.png',
    }
    return {
      title: 'UX의 미래는 여기에 있다 - UX for Next Billion Users > Story > pxd',
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
