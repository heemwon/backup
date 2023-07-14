<template>
  <div class="story-wrap">
    <StoryStorytitle :story="story" :google="GOOGLE_STORAGE" />
    <section class="section-detail story">
      <p class="desc-1">
        pxd의 Visual Designer들을 위한, 그리고 UX 기획자들의 GUI 작업에 대한 이해를 도울
        실무 참고서가 필요하여 장기간 내용을 정리했고, 사내에 유인물처럼 돌아다니던 것을
        이번에 인쇄하게 되었다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_09_01.png`"
          alt="pxd gux 디자인 실무 참고서 책 이미지"
        />
      </figure>
      <p class="desc-1">
        주로 신입 디자이너들을 대상으로 한 내용이고, 경력 디자이너라면 가볍게 훑어보며
        자신의 직무에 대해 생각을 정리해보는 시간을 가질 수 있도록 작성했다. 이 참고서는
        GUI 디자인 실무에 관한 것이며, 디자인 업무 영역 확장을 지향한다는 의미에서 GUX
        Design(Graphical User eXperience Design)이라는 용어를 만들어 참고서 제목으로
        삼았다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_09_02.png`" alt="" />
      </figure>
      <p class="desc-1">
        필자가 평소에 말로 하던 얘기들을 몇 년 전부터 틈틈이 생각나는 대로 쓰다 보니 관련
        지식, 정보, 실무 팁, 잡다한 생각과 조언들이 뒤엉켜 있었다. 주제들을 그룹 짓고
        참고서의 구성 콘셉트를 설정한 후 내용을 정리하다 보니 어느새 한 권의 분량이
        되었다.
      </p>
      <div class="area-comment">
        <strong class="title"
          >*본 도서는 내부 교육을 목적으로 소량 제작되었습니다.</strong
        >
        <p>
          블로그 공개 후 많은 분들이 관심을 주셔서 여러분들이 책을 접하실 수 있는 방법을
          고민중입니다. 이 후 결정되는 부분이 있으면 블로그를 통해 공지드리겠습니다.
          감사합니다. <br />-저자 올림
        </p>
      </div>
      <h4 class="art-1">시작</h4>
      <p class="desc-1">
        몇 년 전, pxd UI 그룹에서 'UX/UI Design 방법론과 업무 프로세스를 정리하여 인쇄할
        계획이니, GUI 그룹도 비주얼 디자인 업무와 관련한 내용을 같이 준비하면 좋겠다'는
        이야기를 들은 이후 틈틈이 쓰기 시작했다. 내용이 어느 정도 정리된 2017년 초, 사내
        비주얼 디자이너들에게 참고서의 내용과 구성 콘셉트를 공유했다. 출간하는 게
        어떻겠냐는 의견이 있어 출판사들을 접촉했지만, 필자의 생각을 온전히 담아 출간하는
        일은 쉽지 않았다. 그렇게 결실 없이 1년을 보내다가 이번에 간단하게 편집하여
        인쇄하게 된 것이다.
      </p>
      <h4 class="art-1">책의 구성 콘셉트: 반독완독(半讀完讀)</h4>
      <p class="desc-1">
        반독완독(半讀完讀, VahnDocWahnDoc): ‘책 절반을 읽은 것이 책 전부를 읽은 것과
        같다.ʼ라는 뜻의 조어이다.<br />
        참고서 서두에 밝힌 내용인데, pxd 사무실 책상들을 관찰해 보면 보통 아래 아이콘의
        모습과 같이 읽다 만 책들을 많이 볼 수 있다.
      </p>
      <figure class="space-ty1 fit-3">
        <img :src="`${GOOGLE_STORAGE}img_story_09_03.png`" alt="책장 이미지" />
      </figure>
      <p class="desc-1">
        책갈피는 책의 중간쯤 끼워져 있고 책 주인은 끝까지 읽지 못했다는데, 그 이유를
        물어보면 ‘봐야 할 다른 책들이 계속 생기기도 하거니와 절반 정도 읽다 보면 그 책에
        대한 완독 의지도 꺾여서...ʼ라고 한다. 하지만 다 읽지 못한 것에 대한 자책과
        언젠가는 다 읽을 것이라는 다짐을 함께 얘기한다. 그래서 독자가 스트레스를 받아가며
        굳이 완독하지 않아도 되는 책을 만들 수 있을까 고민하게 되었다.<br />
        사실, 완독했다고 그 책 내용을 잘 이해했다고는 볼 수 없다. 책 일부만 읽었더라도 그
        책을 통해 독자가 얻는 것이 하나라도 있고 스스로 고찰해 볼 기회를 가지면서 자신의
        생각을 만들어 가는 것이 중요하다고 판단했다. 지식과 정보를 전달하는 것과 함께
        독자에게 고찰할 기회를 주는 것도 학습서/참고서의 덕목이라고 생각했다.<br />
        이런 생각들을 담아 책의 절반만 읽더라도 충분히 고민한 독자들이라면 완독한 것과
        같음을 저자가 인정하겠다는 의미에서 ‘반독완독ʼ이라는 단어를 만들었고 이는 본
        참고서의 구성 콘셉트다.<br />
        디자인 실무자들은 프로젝트를 수행하느라 전공 분야에 대한 학습을 연속적으로
        이어가기 힘들다. 책의 전체 내용을 빠르게 파악하고 큰 줄기의 고민을 먼저 한 후 책을
        자세히 읽는 구조라면 학습에 효과적일 것으로 생각했다. 또한, 순서와 관계없이 어느
        부분을 펼쳐 읽더라도 학습 효과가 있어야 한다고 생각했다.<br />
        그래서 ‘상위 주제-하위 부제 방식ʼ의 긴 설명보다는 ‘펼친 면 - 주제 하나ʼ, ‘왼쪽 면
        요약-오른쪽 면 상세설명ʼ으로 구성하는 것이 좋겠다고 생각했고 내용 요약인 왼쪽
        페이지들만 다 읽어도 완독한 것으로 저자가 인정해 주겠다고 썼다. 정작 독자 본인이
        인정할지는 모르겠지만...^^;
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_09_04.png`" alt="" />
      </figure>
      <h4 class="art-1">제본과 참고서의 크기</h4>
      <p class="desc-1">
        학습하려고 책을 펼쳤다면 잘 펴지고 또 펼쳐진 상태를 유지할 수 있어야 한다고
        생각했다.<br />
        가끔이나마 솟구친 학구열에 책을 펼쳤는데 제본방식 때문에 저항이 생겨 저절로 덮이는
        책은 독자의 학습 의지도 덮게(?) 하는 데에 일조할 것으로 생각했다.<br />
        성경책이나 사전이 펴졌을 때 그 상태가 잘 유지되게 만든 것은 독자의 심신을 안정된
        상태로 유지시켜 신앙심이나 학습집중력에 영향을 주지 않기 위함도 있을 것이라 필자는
        생각한다. 성경책이 일명 떡제본이나 무선제본으로 되어 있다고 상상해 보라.
        예배시간에 여기저기에서 책 중간을 비벼 누르는 행위와 소리로 어수선해질 것이다.<br />
        이야기가 좀 옆으로 샜다. 어쨌든, 완전하게 펼쳐지는 실제본에 책표지를 덧대는
        오타바인딩 PUR 방식으로 제본했다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_09_05.png`" alt="" />
      </figure>
      <p class="desc-1">
        소지하고 다니기에도 부담이 없도록 핸드북 크기(210mm*130mm)로 제작했고, 이는 2014년
        pxd Annual Essay(http://story.pxd.co.kr/1035)와 pxd
        스케줄러(http://story.pxd.co.kr/866)와도 같은 크기이다.
      </p>
      <a
        href="http://story.pxd.co.kr/1035"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text"
          >정보글 pxd Annual Essay 2014 제작 보러가기</strong
        >
      </a>
      <a
        href="http://story.pxd.co.kr/866"
        target="_blank"
        title="새창 이동"
        class="concurrent en"
      >
        <strong data-action="action-text"
          >정보글 pxd Weekly Desk Scheduler v.1.618 제작 보러가기</strong
        >
      </a>
      <p class="desc-1">
        책 표지 날개 부분에 주름을 넣어 날개 자체를 간지로 쓰기 쉽게 만들어 보았는데
        제본소에서 이 작업에 난색을 표한 것을 보면 적어도 국내 출판계 최초의 시도이지
        않을까 싶다. ^^<br />
        이 주름을 사용하면 책 표지의 매무새가 깔끔해지지 않을 수도 있지만, 책이란 읽을수록
        낡아져야 제맛 아니겠는가. 책표지의 깔끔함을 유지하고 싶어서 이 부분을 쓰고 싶지
        않다면 안 쓰면 된다.
      </p>
      <figure class="space-ty3">
        <img
          :src="`${GOOGLE_STORAGE}img_story_09_06.png`"
          alt="책 책표지에 좌측 주름들을 이용하면 책표지 날개인 이부분을 간지로 사용 가능 문구"
        />
        <img
          :src="`${GOOGLE_STORAGE}img_story_09_07.png`"
          alt="책 책표지에 우측 주름들을 이용하면 책표지 날개인 이부분을 간지로 사용 가능 문구"
        />
        <img :src="`${GOOGLE_STORAGE}img_story_09_08.png`" alt="" />
      </figure>
      <h4 class="art-1">참고서 내용</h4>
      <p class="desc-1">
        무엇보다 참고서의 내용이 중요한데 사설이 너무 길었다.<br />
        내용을 크게 3개의 장으로 구성했다.
      </p>
      <p class="desc-1">
        1. Warming up: 비주얼 디자인 작업을 위한 준비 사항과 생각해볼 만한 문제들에 대해
        기술<br />
        2. Basics: 비주얼 디자인에 관한 기본 지식에 대해 기술<br />
        3. GUX Design: GUX 디자인 실무 프로세스와 상세 업무 내용에 대해 기술
      </p>
      <figure class="space-ty3">
        <img :src="`${GOOGLE_STORAGE}img_story_09_09.png`" alt="" />
        <img :src="`${GOOGLE_STORAGE}img_story_09_10.png`" alt="" />
        <img :src="`${GOOGLE_STORAGE}img_story_09_11.png`" alt="" />
      </figure>
      <p class="desc-1">
        실무 참고서나 강의가 갖춰야 할 요소를 세 가지(3I)로 정리하고 이에 맞춰 쓰려고 나름
        노력했다.
      </p>
      <p class="desc-1">
        A. Information: 관련 지식과 정보 전달<br />
        B. Inspiration: 동기 부여, 지적 자극, 감 → 실행 욕구(해보고 싶다), 자신감(할 수
        있겠다)<br />
        C. Instruction: (업과 업을 대하는 자세에 대해) 전반적인 방향 제시
      </p>
      <h4 class="art-1">참고서 보는 방법</h4>
      <p class="desc-1">
        독자가 보고 싶은 대로 보면 되는데 굳이 보는 방법을 소개하자면 아래와 같다.
      </p>
      <p class="desc-1">
        - 책 내용을 전체적으로 빠르게 훑어보고 싶다면 왼쪽 페이지만 보면 된다.<br />
        - 왼쪽 페이지들만 다 봐도(반독) 책을 완독한 것으로 인정한다. 누가? 저자가.<br />
        - 생각할 거리에 대해서는 자신의 의견을 정리해 본다. 어디에? 페이지 여백에.<br />
        - 시간이 나면, 또는 관심 있는 주제라면 오른쪽 페이지도 읽어 본다.<br />
        - 하나의 주제마다 한 면(2페이지)으로 구성되어 있다.<br />
        - 내용 정리와 생각할 거리들(왼쪽 페이지)-상세 설명(오른쪽 페이지) 구성이다.<br />
        - 순서와 관계없이 읽을 수 있다.<br />
        - 읽은 페이지는 하단 페이지 수 옆의 네모 박스에 V 체크 표시한다. 그 페이지를
        읽었는지 알 수 있고 두 번 읽어 체크하면 VV 모양이 되어, ‘반독완독ʼ를 의미하는
        Double V 마크가 된다.
      </p>
      <figure class="space-ty1 fit-4">
        <img :src="`${GOOGLE_STORAGE}img_story_09_12.png`" alt="Double V 마크" />
      </figure>
      <p class="desc-1">
        이상으로, 이번에 인쇄한 pxd GUX 디자인 실무 참고서에 대한 소개를 마칠까 한다. 여러
        형편상 편집 디자인에 신경을 쓰지 못한 것과 실사례들을 많이 싣지 못한 것이
        아쉬움으로 남는다. UX 디자인 대행사의 디자이너 입장에서 쓴 글들이 있는데 인하우스
        디자이너라도 내부 의사 결정권자를 클라이언트라고 본다면 나름대로 인사이트를 얻을
        수 있을 것으로 생각한다. 이 참고서는 사실 도서 판매를 목적으로 작성된 것은 아니다.
        pxd의 본업인 디자인 컨설팅에 더 집중하기 위해 참고서를 만든 것이다. 하지만
        ISBN(국제 표준 도서 번호)을 넣어 국립중앙도서관에 납본하고 싶어서 몇 가지 행정적인
        절차를 거쳤다. 이 자리를 빌려, 그 행정 업무들을 잘 처리해 준 pxd 경영지원팀 이욱희
        팀장에게, 그리고 깔끔한 인쇄를 위해 애써 주신 정원프로세스 이종해 대표님에게도
        감사의 인사를 드린다.
      </p>
      <StoryStorybutton href="1326" />
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
  name: 'StoryDetail09',
  asyncData() {
    const story = stories.getWork('pxdguxdesign')
    const next = stories.getNext('pxdguxdesign')
    return { story, next, GOOGLE_STORAGE, GOOGLE_STORAGE_GIF }
  },
  head() {
    const seoMeta = {
      title: 'GUX Design : pxd GUX 디자인 실무 참고서 제작기',
      description:
        'pxd의 Visual Designer들을 위한, 그리고 UX 기획자들의 GUI 작업에 대한 이해를 도울 실무 참고서가 필요하여 장기간 내용을 정리했고, 사내에 유인물처럼 돌아다니던 것을 이번에 인쇄하게 되었다.',
      url: `${this.$route.path}`,
      image: 'img_story_list_09.png',
    }
    return {
      title: 'GUX Design : pxd GUX 디자인 실무 참고서 제작기 > Story > pxd',
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
