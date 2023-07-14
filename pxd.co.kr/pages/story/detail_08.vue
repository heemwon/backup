<template>
  <div class="story-wrap">
    <StoryStorytitle :story="story" :google="GOOGLE_STORAGE" />
    <div class="section-detail index">
      <strong class="blind">UX Conference 후기 목록</strong>
      <ol>
        <li class="current">1편: UX Conference London 2019 후기 (1/2)</li>
        <li>
          <a href="https://story.pxd.co.kr/1401" target="_blank" title="새창 이동">
            <strong data-action="action-text"
              >2편: UX Conference London 2019 후기 (2/2)</strong
            >
          </a>
        </li>
      </ol>
    </div>
    <section class="section-detail story">
      <h4 class="art-1">들어가며</h4>
      <p class="desc-1">
        지난 2월 말에 런던의 디자인 뮤지엄에서 UX 컨퍼런스가 개최되었습니다. 매년 개최되는
        컨퍼런스로 작년에는 UX와 기술과 관련된 분들이 연사로 많이 초청된 반면 올해는 UX와
        마케팅 혹은 비즈니스 관점의 연사들이 많이 보였습니다. 주최 측의 확실한 의도는
        파악할 수 없지만 마케팅과 비즈니스도 오래전부터 사람과 사회 그 문화의 트랜드를
        고려하여 프로세스가 진행되기 때문에 UX 관점과 비슷하다는 이야기를 여러 연사가 이번
        컨퍼런스에서 하였습니다. 그중 세 가지 세션을 소개하고자 합니다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_08_01.png`" alt="" />
        <figcaption class="img-inform">UX Conference London 2019 후기</figcaption>
      </figure>
      <h4 class="art-1 en">UX &amp; Marketing - You're More Alike than You Think</h4>
      <span class="sub-head"
        >Martyn Reding (Head of Digital Experience at Virgin Atlantic)</span
      >
      <p class="desc-1">
        Martyn은 Virgin에서 UX와 마케팅을 연결하려는 시도를 하고 있습니다. 왜냐하면
        디자인과 마케팅은 하나의 동전의 양면과 같이 다르게 생겼지만 명백히 같은 목적을
        지녔기 때문이라고 말하며 자신의 경험을 공유하기 시작하였습니다.
        <strong class="strong-gr">"UX는 새로운 것이 아니라 아직 어린 것이다."</strong>
        UX 디자인은 오래전부터 여러 다른 학문, 책 디자인, 산업 디자인 등등으로부터 영향을
        받았고, 많은 지식이나 도구들을 사용하고 있으며 이를 통해 점차 성장하고 있습니다.
        또한 오늘날 마케팅, 기술, 오퍼레이션, 디자인 분야의 전문가들과 함께 UX를
        디자인하면서 UX 디자인이 더욱 강한 힘을 갖춰가고 있다고 Martyn은 주장합니다. 그는
        자신의 경험을 기반으로 오늘날 UX에서 이슈를 받는 토픽들이 과거의 마케팅 분야에서
        이미 활용된 개념이며 이러한 관점에서 볼 때 오늘날 이 이슈들이 어떻게 디자인
        분야에서 활용되어질 수 있을지 대해서 이야기합니다.
      </p>
      <h5 class="art-2 en">1. DesignOps = Studio Manager -&gt; Design Management</h5>
      <p class="desc-1">
        DesignOps는 오늘날 UX에서 매우 주목받는 단어 중 하나로 여러 분야의 전문가들을
        연결하여 새로운 혁신들을 만들어내는 것을 의미합니다. 이미 핀터레스트와
        에어비앤비와 같은 기업과 실리콘 밸리의 많은 기업이 스페셜리스트들이 모인
        그룹(Multidisciplinary group)을 만들어 운영하는 시도를 하고 있는데. 마케팅
        분야에서는 1966년 뉴욕에서 활동하는 Unimark 스튜디오가 다양한 분야에서 팀원을 뽑아
        팀을 운영하면서 이를 위해 다양한 프로세스, 툴, 라이브러리 등을 활용하였고,
        스튜디오 매니저가 여러 분야에서 사용하는 디자인 방법론을 활용함으로써, 근본적으로
        프로세스를 디자인하여 많은 혁신을 이루어 내었다고 합니다. 이는 오늘날 '디자인
        매니지먼트(Design Management)'라는 분야로 발전되어 왔으며 런던의 많은 학교에서
        이를 실제로 가르치고 많은 산업에서 이러한 능력을 지닌 인재를 찾고 있다고 설명하고
        있습니다.
      </p>
      <h5 class="art-2 en">
        2. UX Research = Motivational Researcher -&gt; Creative Strategist
      </h5>
      <p class="desc-1">
        UX 리서치(UX Research)는 디자인팀 그리고 이해관계자들이 사용자의 행동을 정량적
        그리고 정성적인 리서치 기술을 통해 이해하기 쉽게 하는 연구를 말하며 비슷한
        개념으로 마케팅 분야에서는 1952년 David Ogilvy가 어떻게 사람들이 광고에 영향을
        받는지 그리고 어떻게 사람들이 생각하고 행동하는지를 관찰하고 분석하는 연구를
        시행하였다고 합니다. 그의 저서에서는 "마케팅 분야의 사람들이 사용자를 연구하지
        않으며 이는 매우 위험한 행위"라고 이야기하며 이를 위한 행위를
        동기조사(Motivational Research)라고 언급하였습니다. 이는 오늘날 창의적인
        전략(Creative Strategy)을 위한 기반이라고 말할 수 있는데 그 이유는 창의적인 전략
        및 결정은 정성적/정량적 사용자 리서치를 통해 만들어지며 이를 통해, 통찰력, 방향성
        그리고 마켓에서의 기회를 포착할 수 있기 때문이라고 말합니다.
      </p>
      <h5 class="art-2 en">
        3. UX Writing = Art+Copy -&gt; Creative teams for design direction
      </h5>
      <p class="desc-1">
        UI가 사용자에게 더욱더 많은 정보를 제공할 수 있게 됨에 따라 콘텐츠가 UX에서 점점
        더 중요한 부분이 되어가고 있습니다. 마케팅 분야에서는 이미 BBDO의 Bill Bernbach가
        1949년 디자인(Art)과 콘텐츠(Copy)를 분리하고 이를 마케팅, 광고, 캠페인 등에서
        활용하는 방법에 대해서 연구하였다고 합니다. 이러한 흐름은 오늘날 UX 분야에서 UX
        Writing이라는 한 부분으로 스토리와 비주얼을 함께 강조하여 사용자 경험을 만들어내는
        분야로 발전해 나가고 있으며, 이를 위해서는 다양한 분야 간의 커뮤니케이션을 통해
        콘텐츠가 만들어지고 조화를 이루어 사용자에게 전달되어야 한다고 강조합니다. (UX
        Writing 관련 글은 pxd 블로그 이곳에서 더 자세히 읽어보실 수 있습니다.)
      </p>
      <a
        href="https://story.pxd.co.kr/1383"
        target="_blank"
        title="새창 이동"
        class="concurrent"
      >
        <strong data-action="action-text">이곳</strong>
      </a>
      <h5 class="art-2 en">4. Design System = Identity Manual -&gt; Brand Platform</h5>
      <p class="desc-1">
        디자인 시스템은 오늘날 UX 디자이너들이 매우 좋아하는 파트이며 효과적인 시스템을
        만들기 위해 많이 시도를 하고 있습니다. 마케팅 분야에서는 Gerald Barney가 1965년
        영국에서 기차의 사이니지를 디자인할 때 브랜드 언어를 통해 여러 컨택스트에서의
        사이니지에서 활용할 수 있게 여러 단계의 계층과 컨셉을 만들어 마켓에서의 포지션을
        구축하는 시도를 하였습니다. 이는 하나의 브랜드 아이덴티티를 통해 여러 분야에서
        사용할 수 있는 메뉴얼을 만든 것과 같다고 평가하고 있습니다. 이것이 오늘날 브랜드
        아이덴터티를 기반으로 브랜드 플랫폼을 만드는 것으로 발전되었다고 할 수 있습니다.
      </p>
      <p class="desc-1">
        이처럼 UX 디자인의 많은 부분이 과거의 다른 디자인 분야에서 활용되어지던 것들이
        접목되어 발전되어 보이는 것들이 많으며, 이러한 사례를 기반으로 앞으로 새로운 UX
        디자인을 시도함에 있어, 여러 다른 분야의 결과물들 그리고 과거의 사례들을 살펴보고
        활용할 필요가 있다고 말하며 프레젠테이션을 마쳤습니다.
      </p>
      <h4 class="art-1 en">Growing a business with UX, but not chasing money</h4>
      <span class="sub-head en"
        >Jessica Lovegood (AVP UX designer at Barclays, previously at Booking.com)</span
      >
      <p class="desc-1">
        <strong class="strong-gr"
          >“오늘날 좋은 비즈니스가 성공을 의미하지는 않습니다.<br />하지만 행복한
          소비자는<br />비즈니스의 성공을 만들어 낼 수 있습니다."</strong
        >
        Jessica는 본인의 경험을 기반으로 이를 설명하고 있습니다. 먼저 돈을 많이 버는
        방법은 여러 방법이 있지만 그녀가 이전에 일했던 Booking.com에서는 시간 혹은 수량
        제한과 같은 마케팅 기법을 통해 짧은 시간에 수익을 올리는 방법을 종종 사용하고
        있다고 합니다. 또 다른 측면으로는 돈을 아끼는 방법이 있는데, 이는 고용인원을
        줄이는 것입니다. 이 방법은 당장에 성과가 눈에 보일 수는 있지만. 장기적인 안목에서
        볼 때는 리스크가 매우 큰 방법입니다. 따라서, 성공적인 비즈니스를 위해서는 견고한
        전략이 필요합니다. 그럼 어떻게 성공적인 비즈니스를 위한 지속적인 성장을 만들어 낼
        수 있을까요?
      </p>
      <h5 class="art-2">1. 먼저 좋은 프로덕트가 필요합니다.</h5>
      <p class="desc-1">
        왜냐하면 구전효과는 여전히 마케팅의 가장 강력한 요소 중 하나이기 때문입니다.
        (Steve Swasey, Ex-VP of Communications at Netflix) 사람들은 자신들의 경험을 비슷한
        그룹의 사람들과 나누는데, 좋은 프로덕트의 경험 공유는 기업 입장에서 무료
        마케팅입니다.
      </p>
      <h5 class="art-2">
        2. 소비자들에 의해서 모든 비즈니스의 성공이 결정되는 것은 아닙니다.
      </h5>
      <p class="desc-1">
        좋은 프로덕트는 물론 중요합니다. 이는 효율적인 프로세스를 통해 만들어질 수 있음을
        잊어선 안 됩니다. 오늘날 많은 연구에 따르면 기업에서 일하는 사람 중 10%의 사람이
        행복하면 그 기업에서 나오는 제품을 쓰는 소비자 중 10%가 행복할 수 있다고 합니다.
        이는 소비자뿐만 아니라 기업에서 일하는 사람들도 고려되어야 한다는 것을 말합니다.
      </p>
      <h5 class="art-2">3. 마케팅 방법은 가능한 한 효율적일수록 좋습니다.</h5>
      <p class="desc-1">
        오늘날 많은 기업이 소셜 미디어 마케팅을 선택하고 있는데, 소셜 미디어 마케팅은 많은
        사람이 사용하고 있고 광고주가 가이드라인을 통해 광고를 보는 사람을
        타게팅(Micro-targeting)할 수 있기 때문이라고 보입니다.
      </p>
      <h4 class="art-1 en">It's not you, it's UX</h4>
      <span class="sub-head en">Anat Treanor (UX Lead at Ocado Technology)</span>
      <p class="desc-1">
        Ocado는 로봇을 사용하여 컨베이어 벨트가 없는 물류 시스템을 통해 물류 배송에 혁신을
        만든 영국 기반의 온라인 슈퍼마켓 기업입니다. Anat은 Ocado에서의 경험을 기반으로
        사용자와 프로덕트의 관계를 디자인하는 사람으로서 어떻게 사용자들과의
        마찰(friction)을 줄일 수 있는지에 관하여 이야기하였습니다. 오늘날 비즈니스는
        기존과 달리 구독을 기반으로 물건을 사거나 서비스를 받는 방향으로 흘러가고
        있습니다(Subscribe Economy). 이러한 구독 비즈니스 모델은 새로운 것이 아닙니다.
        이미 신문(1440), 전화(1876)를 통해 사용자는 구독이란 것을 경험하였었고 오늘날에는
        넷플릭스를 통해 주로 경험하고 있습니다(최근에 애플도 여러 구독 서비스들을
        시작하였다는 기사들을 접하셨을 겁니다). 하지만 이 방식은 사용자에게 쉽게 버려지기
        매우 쉬운 방식이기 때문에 구독 경제에서 UX 디자이너는 사용자들과의 마찰을 줄이는
        데에 초점을 맞출 필요가 있습니다.
      </p>
      <strong class="art-2">
        이를 위해 UX 디자이너는 아래의 네 가지를 디자인 과정에서 고려해야 합니다.
      </strong>
      <p class="desc-1">
        1. Agile: 작은 것을 바꾸고 이를 통해 결과를 측정하여 변화를 만들어가는 과정이
        고려되어야 합니다.<br />
        2. 이를 위해서는 최소한의 것(MVP)으로 시작하여야 합니다.<br />
        3. 하지만 이 과정에서 구독 모델에서 사용자가 구매자라는 생각은 매우 위험할 수
        있습니다.<br />
        4. 또한, UX 디자인에서 모든 사용자를 다 안다고 생각하는 것은 위험할 수 있습니다.
        왜냐하면 우리는 단 한 명의 유저를 볼 뿐이기 때문입니다.
      </p>
      <strong class="art-2">
        Anat은 사용자와의 마찰을 줄이기 위한 네 가지 솔루션도 함께 설명하였습니다.
      </strong>
      <h5 class="art-2 en">1. Avoid Friction</h5>
      <p class="desc-1">
        사용자가 스스로 고치고 솔루션을 찾을 수 있도록 관련 정보를 제공하는 것이
        중요합니다. 예를 들면, 정보입력창에서 정보가 잘못 입력된 부분을 설명하여 주거나
        배달 스케줄을 입력할 때 최적의 배달 시간을 알려줘서 선택을 하게 하는 방법이 있을
        수 있습니다. 사용자는 경험에서 무언가 문제가 발생되었을 때 이것을 해결 못 하면
        이탈하는 경우가 많은데, 이 방법은 매우 싸게 사용자와 마찰을 줄일 수 있는 방법 중
        하나입니다.
      </p>
      <h5 class="art-2 en">2. Make it Sticky and Add Delight</h5>
      <p class="desc-1">
        사용자가 즐겨찾기로 선택한 것들은 선택지의 앞쪽에 배치하여야 합니다. 또한,
        좋아하는 물건이 없는 사람에게는 반대로 물건의 판매자가 선택한 대상을 기반으로
        사용자가 좋아할 만한 물건을 먼저 제공하여야 합니다. 이러한 방법은 사용자에게
        기쁨을 줌으로써 사용자와 서비스 간의 마찰을 줄일 수 있습니다.
      </p>
      <h5 class="art-2 en">3. Everything Counts</h5>
      <p class="desc-1">
        사용자를 관리하기 위해 사용자를 조사하고 사용성을 테스트하여 개선점을 찾아야
        합니다. 또한 에러를 찾아내어 줄여야 합니다.
      </p>
      <h5 class="art-2 en">4. Listen but then act too</h5>
      <p class="desc-1">
        UX 디자인은 디자인 분야의 벤 다이어그램에 묘사되는 대로 중첩된 중앙에 위치한다고
        보기에는 무리가 있습니다. 왜냐하면 UX 디자이너는 사용자뿐만 아니라 관련된 모든
        분야의 것들을 이해하고 고려하여 사용자와의 마찰을 줄이기 위해 노력하여야 합니다.
      </p>
      <h4 class="art-1">마치며</h4>
      <p class="desc-1">
        오늘날 UX 디자인은 Anat이 언급한 것처럼 사용자와의 마찰을 줄이기 위해 관련된 모든
        제반 사항 그리고 이를 위해 Martyn이 말한 것처럼 많은 전문가와의 협업과 이를 위한
        다양한 프로세스의 개발이 필요한 분야임이 틀림없습니다. 그뿐만 아니라 Jessica가
        언급한 것처럼 UX 디자인을 함에 있어, 비즈니스의 성공을 위해서 장기적 관점에서의
        계획 또한 고려되어야 할 필요가 있을 것으로 생각됩니다.
      </p>
      <StoryStorybutton href="1395" />
    </section>
    <StoryStorytail :nexts="next" :google="GOOGLE_STORAGE" />
  </div>
</template>

<script>
import { makeMeta } from '~/static/seo'
import { stories } from '~/static/data/story/index.js'
import { GOOGLE_STORAGE, GOOGLE_STORAGE_GIF } from '~/static/utils'

export default {
  name: 'StoryDetail08',
  asyncData() {
    const story = stories.getWork('london2019')
    const next = stories.getNext('london2019')
    return { story, next, GOOGLE_STORAGE, GOOGLE_STORAGE_GIF }
  },
  head() {
    const seoMeta = {
      title: 'UX Conference London 2019 후기 (1/2)',
      description: '지난 2월 말에 런던의 디자인 뮤지엄에서 UX 컨퍼런스가 개최되었습니다.',
      url: `${this.$route.path}`,
      image: 'img_story_list_08.png',
    }
    return {
      title: 'UX Conference London 2019 후기 (1/2) > Story > pxd',
      meta: makeMeta(seoMeta),
    }
  },
}
</script>
