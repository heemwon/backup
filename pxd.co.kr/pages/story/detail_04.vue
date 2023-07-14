<template>
  <div class="story-wrap">
    <StoryStorytitle :story="story" :google="GOOGLE_STORAGE" />
    <section class="section-detail book">
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_04_01.png`"
          alt="인터페이스 없는 인터페이스 책의 표지"
        />
      </figure>
      <div class="about">
        <h4 class="title">인터페이스 없는 인터페이스</h4>
        <div class="writer">골든 크리슈나 지음 | 허유리, 진현정 역</div>
        <div class="inform">
          <span>[원서정보]</span>
          <p class="en">
            The Best Interface is No Interface : The Simple Path to Brilliant Technology -
            Golden Krishna
          </p>
        </div>
      </div>
    </section>
    <section class="section-detail story">
      <h4 class="art-1">훌륭한 인터페이스는 인터페이스가 없는 것이다</h4>
      <p class="desc-1">
        2012년 8월 The best interface is no interface라는 무척 흥미로운 글이 쿠퍼의
        블로그에 올라왔다. 피엑스디 내부에도 공유되어 많은 사람들이 저마다 한 마디씩
        의견을 냈다. 저자나 저자가 인용한 돈 노만의 말대로, 인터페이스는 언제나 우리가
        하려는 일에 대해 도움을 주는 것이지만, 그것의 존재가 때론 방해가 될 수 있기 때문에
        궁극의 인터페이스는 그것이 느껴지지 않는 것이어야 한다는 말은 맞는 말이고, 사실
        새로운 말이 전혀 아니다.
        <strong class="strong-gr">
          "잘 만든 인터페이스는<br />
          언제나 사람들이 그것을 느끼지 않게 만든다. "
        </strong>
      </p>
      <p class="desc-1">
        무언가 같은 일을 하는 불편한 인터페이스를 만났을 때야 비로소 사람들은 ‘아 지난번에
        이런 것이 매우 편해서 몰랐었는데…’라고 하며 인터페이스의 존재를 깨닫게 되는
        것이다. 없는 인터페이스(No Interface)라고 하든, 투명한/안 보이는
        인터페이스(Invisible Interface)라고 하든, 제로 UI라고 하든, 또 이 당시 유행했던
        용어대로 자연스러운 인터페이스(NUI, Natural User Interface)라고 하든 상관없이
        사람들은 항상 이런 것이 궁극의 인터페이스라고 생각했지만, 자동차용 앱이나 냉장고에
        붙어 있는 터치패널 등 당시에 있었던 여러 현상을 묶어서 뚜렷한 방향을 제시했던 이
        글은 피엑스디 사람들뿐만 아니라 많은 디자이너들에게 영향을 끼쳤던 것 같다. 이듬해
        2013년 4월 그가 SXSW에서 키노트 연설을 하고, 2015년 이 생각들을 모아 2015년 2월
        책을 발간하고, 2016년에 번역 리뷰를 실었을 때도 많은 한국 독자들이 관심을 표했다.
      </p>
      <a
        href="https://brunch.co.kr/@hmin0606/11"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">화면이 사라지는 시대의 UX - 신유민</strong>
      </a>
      <a
        href="https://www.youtube.com/watch?v=iFL4eR1pqMQ"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">키노트 연설</strong>
      </a>
      <p class="desc-1">
        저자는 인터페이스가 없는 것이 가장 좋은 인터페이스라는 점을 주장하면서, 우리가
        얼마나 기존의 ‘스크린 중심’ 사고에 빠져 있는지에 대해 낱낱이 비판을 한다. 무언가
        새로운 화면을 만들기 전에 사용자를 잘 관찰하고 그것을 (가능하면) 화면이나
        인터페이스 없이 해결할 수 있는지 살펴봐야 한다는 그의 주장 혹은 예견은 센서의
        발달과 상호작용의 고도화를 거쳐 오늘날 점점 더 중요하고 설득력 있는 사실이 되었다.
        인공지능과 음성인식 등의 발달로 너무 당연하게도 화면을 벗어난 인터페이스가 하나의
        큰 주류를 차지할 것이 분명해지는 이 시점에 인터페이스 디자이너라면 누구나 꼭 읽고
        생각해 보아야 할 주제가 되었다.
      </p>
      <a
        href="https://www.cooper.com/journal/2012/08/the-best-interface-is-no-interface"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text">The best interface is no interface</strong>
      </a>
      <h4 class="art-1">
        보이는 인터페이스와 보이지 않는 인터페이스는 각자의 역할을 찾을 것이다
      </h4>
      <p class="desc-1">
        “훌륭한 인터페이스는 인터페이스 자체가 없는 것이다”라고 했지만, 이는 단순히 모든
        결과물에서 인터페이스를 없애야 한다는 의미가 아니다. 최고의 결과물을 얻으려면
        인터페이스를 없애는 것이 가장 가능성 있는 방법이라는 뜻이다. 인터페이스를 없애는
        것만이 유일한 해결책이라 우기는 건 정말 멍청한 짓이다. (p244) 물론, 이것이 유일한
        해법은 아니다. 분명 미래에는 화면 인터페이스에도 중요한 역할이 있고, 보이지 않는
        인터페이스에도 중요한 역할이 있을 것이다. 우리는 각각이 무엇에 더 좋고, 더 나쁜지,
        그리고 둘을 어떻게 섞어서 사용해야 하는지에 대해 더 많이 알게 될 것이다. 그러나
        적어도 지금처럼 모든 문제를 화면에서 해결하려 하거나, 뭐든지 음성이나 대화형
        인터페이스로 만들려는 시도를 더 하지는 않기를 바란다.
      </p>
      <p class="desc-3">피엑스디에서도 이러한 변화에 대한 글들을 게재하고 있는데,</p>
      <a
        href="http://story.pxd.co.kr/1241"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">인풋 방식으로서의 버튼 vs 음성</strong>
      </a>
      <a
        href="http://story.pxd.co.kr/1250"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">챗봇이 주는 가치와 설계 시 고려할 점</strong>
      </a>
      <p class="desc-3">
        이러한 변화의 중심에는 ‘시간 위의 디자인’이라는 공통의 주제가 있다.
      </p>
      <a
        href="http://story.pxd.co.kr/1157"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">시간 위의 디자인</strong>
      </a>
      <p class="desc-1 ty2">
        우리는 앞으로도 계속 화면과 공간을 디자인하겠지만 지금 우리에게 더 필요한 것은
        시간 위에 디자인하는 기술이다. 언제 사용자에게 무엇으로 알릴지 등 시간의 흐름에
        사용자를 끌어들인 뒤, 시간 흐름에서 사용자와 대화하는 기술 등을 통해 사용자의
        경험을 설계해야 한다. 그러나 무엇이든 화면을 달고 인터랙션을 하려고 했던 시도가
        어색했던 것처럼, 무엇이든 채팅이나 대화형으로 만들려고 하는 시도 또한 어색하게
        느껴질 것이다. 당연히, 인터페이스가 보이지 않는다고 해서 인터페이스가 '없다'라고
        표현하는 건, 의미를 강조하기 위한 것이지 실제 인터페이스가 없다고 생각하는 건 아닐
        거라고 믿는다. 화면이든, 음성이든 사람들이 하려는 바를 자연스럽게 이루어주도록
        하여, 사람들이 인터페이스를 느끼지 못하게 하는 것이 목표이고 이를 위해 중요한 것은
        사람들을 연구하고 인터페이스의 특성을 잘 이해하는 것이다. 이를 위해 우리는
        사용자의 데이터를 분석하고, 음성 인터페이스나 대화형 인터페이스, 인공지능, 센서
        기술 등을 ‘활용’해야 한다. 기술을 ‘위해서’ 디자인하지 말고.
      </p>

      <article class="area-reference">
        <h4 class="title">[참고 자료]</h4>
        <strong class="en">No Interface</strong>
        <a
          href="https://www.cooper.com/journal/2012/08/the-best-interface-is-no-interface"
          title="새창 이동"
          target="_blank"
          class="reference"
        >
          <strong data-action="action-text">쿠퍼社 블로그</strong>
        </a>
        <strong>Invisible Interface</strong>
        <a
          href="https://www.lukew.com/ff/entry.asp?1947"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text">LukeW</strong>
        </a>
        <strong>제로 UI란 무엇인가?</strong>
        <a
          href="http://refreshstudio.tistory.com/entry/%EC%A0%9C%EB%A1%9C-UI%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%99%9C-%EB%AF%B8%EB%9E%98%EC%9D%98-%EB%94%94%EC%9E%90%EC%9D%B8%EC%97%90-%EC%A4%91%EC%9A%94%ED%95%9C%EA%B0%80"
          title="새창 이동"
          target="_blank"
          class="reference"
        >
          <strong data-action="action-text"
            >피요르드(Fjord) 그룹 이사 앤디 굿맨(Andy Goodman)</strong
          >
        </a>
        <span class="origin">(출처: 리프레시 스튜디오 Refresh Studio)</span>
      </article>

      <p class="desc-1">
        * 이 글은 추천사 작성용 번역 초고를 제공받아 작성되었고, 번역자들은 피엑스디
        구성원이다.<br />
        * 책 정보 보기 :
        <a
          href="http://book.naver.com/bookdb/book_detail.nhn?bid=13192360"
          title="새창 이동"
          target="_blank"
        >
          <strong data-action="action-text">인터페이스 없는 인터페이스</strong>
        </a>
      </p>
      <StoryStorybutton href="1254" />
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
  name: 'StoryDetail04',
  asyncData() {
    const story = stories.getWork('interface')
    const next = stories.getNext('interface')
    return { story, next, GOOGLE_STORAGE }
  },
  head() {
    const seoMeta = {
      title: '[독후감]인터페이스 없는 인터페이스',
      description:
        '2012년 8월 The best interface is no interface라는 무척 흥미로운 글이 쿠퍼의 블로그에 올라왔다.',
      url: `${this.$route.path}`,
      image: 'img_story_list_04.png',
    }
    return {
      title: '[독후감]인터페이스 없는 인터페이스 > Story > pxd',
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
