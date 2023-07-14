<template>
  <div class="story-wrap">
    <StoryStorytitle :story="story" :google="GOOGLE_STORAGE" />
    <div class="section-detail index">
      <strong class="blind">디자인 시스템 연재 목록</strong>
      <span class="inform">※ 디자인 시스템은 총 8편으로 연재될 예정입니다.</span>
      <ol>
        <li class="current">
          1편 - 디자인 가이드라인/디자인 시스템은 왜 필요한가 (현재글)
        </li>
        <li>
          <a href="https://story.pxd.co.kr/1435" target="_blank" title="새창 이동">
            <strong data-action="action-text"
              >2편 - 디자인 가이드라인/디자인 시스템의 종류</strong
            >
          </a>
        </li>
        <li>
          <a href="https://story.pxd.co.kr/1437" target="_blank" title="새창 이동">
            <strong data-action="action-text"
              >3편 - 디자인 가이드라인/디자인 시스템의 운영</strong
            >
          </a>
        </li>
        <li>
          <a href="https://story.pxd.co.kr/1451" target="_blank" title="새창 이동">
            <strong data-action="action-text"
              >4편 - 디자인 가이드라인/시스템 작업 프로세스 및 유의할 점</strong
            >
          </a>
        </li>
        <li>
          <a href="https://story.pxd.co.kr/1457" target="_blank" title="새창 이동">
            <strong data-action="action-text">5편 - GUI 디자인 리서치</strong>
          </a>
        </li>
        <li>
          <a href="https://story.pxd.co.kr/1467" target="_blank" title="새창 이동">
            <strong data-action="action-text"
              >6편 - 기본 시각 요소 설계 시 알아 두어야 할 것들</strong
            >
          </a>
        </li>
        <li>
          <a href="https://story.pxd.co.kr/1470" target="_blank" title="새창 이동">
            <strong data-action="action-text"
              >7편 - 컴포넌트를 디자인할 때 고려해야 할 것들</strong
            >
          </a>
        </li>
      </ol>
    </div>
    <section class="section-detail story">
      <h4 class="art-1">들어가며</h4>
      <p class="desc-1">
        2014년 6월 구글이 머티리얼 디자인 시스템을 공개한 후, 많은 회사들이 고유 디자인
        시스템을 구축하고 공유하고 있습니다. 구글, 애플처럼 운영 체제를 관리하는 기업뿐
        아니라, IBM, Shopify 등의 플랫폼, Audi, Uber과 같은 모빌리티 회사, 금융, 스타트업
        등 도메인과 회사 규모를 가리지 않는 트렌드입니다. 속내를 들여다보면 디자인
        시스템이 스쳐가는 유행이 아니라, 우리가 함께 맞고 있는 변화에 대처하는 해결
        방식이라는 것을 알 수 있습니다. 디자인 시스템이 큰 화두임에도, 여러 디자인
        시스템을 보면서 저는 무언가 빠졌다는 느낌을 지울 수 없었습니다. 디자인이
        인터페이스 설계에서 서비스 경험까지 확장되고 있음에도 디자인 시스템은 인터페이스와
        개발에 집중하고 있기 때문입니다. 브랜드 철학과 사용자 경험, 화면 단위의 구성요소가
        하나의 흐름으로 부드럽게 이어진다는 느낌을 받기는 어려웠습니다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_01_01.png`" alt="" />
        <figcaption class="img-inform">
          디자인 개념의 확장
          <ol class="blind">
            <li>
              Symbols
              <ol>
                <li>VisualDesign</li>
              </ol>
            </li>
            <li>
              Interactions
              <ol>
                <li>UI Design</li>
                <li>Interaction Design</li>
              </ol>
            </li>
            <li>
              Experience
              <ol>
                <li>UX Design</li>
                <li>Product Design</li>
              </ol>
            </li>
            <li>
              Eco-system
              <ol>
                <li>Service Design</li>
                <li>Business Design</li>
                <li>Organizational Design</li>
              </ol>
            </li>
          </ol>
        </figcaption>
      </figure>
      <p class="desc-1">
        이러한 한계는 UI 패턴에서 출발한 디자인 시스템의 역사를 보면 자연스러운 것일지
        모릅니다. 디자인 시스템의 역사를 간단하게 보면, 1977년 Christopher Alexander가 쓴
        &lt;A Pattern Language&gt;에 영향을 받아 2000년대 초반 UI 패턴 라이브러리가
        만들어지기 시작했습니다. 2005년 Jennifer Tidwell은 &lt;Designing
        Interfaces&gt;에서 중요한 UI 패턴을 예시와 함께 정리했습니다. 2016년 Brad Frost가
        &lt;Atomic Design&gt; 책을 출간하면서, 컴포넌트 단위의 사고방식은 Figma, Sketch
        디자인 툴에 힘을 받아 체계적인 시스템으로 정리되었습니다. 이러한 컴포넌트 기반의
        디자인은 기존 페이지 기반보다 빠르게 다양한 스크린을 디자인하도록 돕고, 업데이트와
        유지 보수를 손쉽게 해주었습니다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_01_02.png`" alt="" />
        <figcaption class="img-inform">
          디자인 시스템의 역사
          <ol class="blind">
            <li>page-based design</li>
            <li>component-based design</li>
            <li>1977 a pattern language christopher alexander</li>
            <li>2005 Designing interfaces jennifer tidwell</li>
            <li>2014 meterial design google</li>
            <li>2016 atomic design brad frost</li>
            <li>design tools launched...</li>
            <li>2010 sketch</li>
            <li>2014 zeplin</li>
            <li>2015 abstract</li>
            <li>2016 figma</li>
          </ol>
        </figcaption>
      </figure>
      <p class="desc-1">
        이제는 원자를 결합해 요소를 만드는 Bottom-Up 방식의 접근에서 비즈니스, 전략,
        서비스 경험으로 이어지는 Top-Down 접근을 동시에 고민하는 시기가 될 것입니다.
        이번에 제가 참여한 프로젝트에서는 디자인 시스템의 뼈대가 되는 가이드라인을
        작성하고 UI 컴포넌트를 정리하여 툴킷으로 제작하였는데요. 자동차라는 특수
        도메인에서 4개국 사용자 조사를 진행하고, 결과물을 토대로 사용자 경험, 비지니스와
        UX 전략 측면에서 디자인 가이드라인을 만들며 배운 점을 공유하려 합니다.
      </p>
      <h4 class="art-1">디자인 가이드라인/디자인 시스템은 무엇인가?</h4>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_01_03.png`"
          alt="UI 가이드라인 vs UX 가이드라인"
        />
        <figcaption class="img-inform">UI 가이드라인 vs UX 가이드라인</figcaption>
      </figure>
      <h5 class="art-2">1. UI 가이드라인</h5>
      <p class="desc-1">
        UI 가이드라인의 주 목적은 UI를 표준화하고 화면 간 일관성을 확보하는 것입니다. 주요
        화면에서 사용 되는 공통 UI 패턴과 주요 컴포넌트를 추출해 정의하고 상세 속성을
        규정하여, UI/GUI 디자이너와 개발자가 정해진 기준에 따라 UI 설계를 할 수 있도록
        합니다.
      </p>
      <h5 class="art-2">2. UX 가이드라인</h5>
      <p class="desc-1">
        UX 가이드라인은 서비스와 브랜드 측면에서 사용자가 일관적이고 차별화된 경험을
        하도록 합니다. 컨텐츠, 기능 별 사용자의 행동과 니즈를 반영해서 UX 원칙을
        도출합니다. 해당 브랜드가 채널을 통해 전달해야 하는 차별화된 가치를 바탕으로
        서비스 전략을 정의합니다. 사용자 컨텍스트를 재구성하여 사용자 입장에서 서비스를
        설계하도록 가이드라인을 구성합니다. 브랜드 측면에서는 해당 브랜드의 정체성이나
        색깔을 일관되게 전달하도록 하는 기능 정의, 네이밍, 어투, UI/GUI적 요소를
        정의합니다.
      </p>
      <h5 class="art-2">3. 디자인 시스템</h5>
      <p class="desc-1">
        디자인 시스템은 디자인 원칙, 규격, 다시 사용할 수 있는 UI 패턴과 컴포넌트, 코드를
        포괄하는 종합 세트입니다. 정의 상으로 디자인 시스템이 UI, UX 가이드라인을 포괄하고
        있지만 실제 사례를 보면 디자인 시스템 마다 포괄하는 범위가 다릅니다. 단순 스타일
        가이드, 패턴 라이브러리 역할만 하는 디자인 시스템도 있고 브랜드 원칙, UX 원칙에
        이르기까지 하나의 철학을 구성하는 시스템도 있습니다.
      </p>
      <h4 class="art-1">디자인 가이드라인/디자인 시스템은 왜 필요한가?</h4>
      <h5 class="art-2">1. 공동의 디자인 자산 확충</h5>
      <p class="desc-1">
        디자인 가이드라인/디자인 시스템의 핵심은 공동의 지식 자산을 쌓고 그 규모를
        확장하는 것입니다. 구성원이 많지 않을 때는 의사 결정을 함께 하면서 공동의 이해가
        쌓입니다. 우리가 어떤 컴포넌트, 스타일을 사용하고 있고, 어디에서 파일을 찾으면
        되는지 알기 쉽습니다. 모르면 옆 팀원에게 물어보면 됩니다. 팀의 규모가 커질수록
        공동 지식을 유지하는 게 어려워집니다. 미팅과 이메일도 잦아지고, 싱크 맞추는 데
        노력이 필요합니다. 디자인 가이드라인과 시스템은 문서 형태이든, 툴킷 형태이든 공동
        지적 자산과 이해도의 싱크를 맞추는 역할을 합니다.
      </p>
      <h5 class="art-2">2. 일관된 브랜드 정체성과 높은 사용성 유지</h5>
      <p class="desc-1">
        다양한 채널에 걸쳐 브랜드 아이덴티티를 일관되게 전달하고, 높은 수준의 사용성을
        유지하려는 목적도 있습니다. 일관성은 왜 중요한 걸까요? 사람들은 디지털, 물리적
        채널에 걸쳐서 같은 수준의 브랜드 경험을 기대하기 때문입니다. 제품 중심의 브랜드라
        하더라도 사용자가 제품을 샀을 때는 제품을 둘러싼 물리적, 디지털 서비스에 대한
        가격도 지불했다고 인식합니다. 돈을 많이 지불한 럭셔리 브랜드의 경우 특히 더
        그렇습니다. 디지털 서비스가 그 수준에 도달하지 못하거나 다른 터치포인트와 일관성이
        깨지는 경험을 하면 디지털 서비스를 사용하지 않는다거나 브랜드에 로열티가 떨어질 수
        있습니다. 저희가 조사한 한 사용자는 B 브랜드 자동차를 타면서도 브랜드의 커넥티비티
        앱을 사용하지 않고 있었는데요. 해당 브랜드의 앱이라는 일관적인 느낌이 안 들어서
        신뢰가 안 가고, 심지어 이 앱을 쓰면 차량이 해킹당할 것 같다고 응답했습니다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_01_04.png`" alt="" />
        <figcaption>
          여러 채널과 서비스에서 일관성을 유지
          <span class="blind">
            자동차의 advertisement부분, carinerior부분, brochure부분, carexterior부분,
            mobileapp부분, dealership부분, 각각분야의 일관성 있는 디자인을 전달하는 이미지
          </span>
        </figcaption>
      </figure>
      <h5 class="art-2">3. 커뮤니케이션 기준 마련</h5>
      <p class="desc-1">
        디자인 시스템은 여러 부서나 팀 간에 언어와 기준을 공유해 커뮤니케이션에 있어
        오해를 줄여줍니다. 기업이 커지면 이해관계자도 늘어나고, 부서도 세분화됩니다. 부서
        별 목적이나 방향성이 다르다 보니 내부에서 협의할 기준이 필요합니다. 제품 관련
        의사결정 단계도 많아집니다. 글로벌 시장으로 진출하면 해외 법인, 외주 업체 등 협력
        대상이 늘어납니다. 물리적 거리와 문화적 차이는 커뮤니케이션과 협의를 어렵게 할 수
        있습니다. 디자인 가이드와 시스템을 디자인 근거 자료 및 검증 도구로 사용하며,
        실무자는 본인의 디자인을 자가 점검해 완성도를 높이는 도구로 활용할 수 있습니다.
      </p>
      <h4 class="art-1">디자인 가이드라인은 어느 시점에 만드는가?</h4>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_01_05.png`" alt="" />
        <figcaption>
          디자인 가이드라인이 필요해지는 시점
          <ul class="blind">
            <li>
              제품군 그리고 기능확장 카카오톡 안에 카카오맵,카카오스타일, 카카오tv,
              카카오페이, 카카오뮤직이 속해있는 이미지
            </li>
            <li>
              새로운 그리고 시장 진출 한국안에 미국 캐나다 영국 중국 독일이 속해있는
              이미지
            </li>
            <li>
              채널 그리고 매개체 확장 모바일안에 웨어러블 pc 스마트스피커가 속해있는
              이미지
            </li>
          </ul>
        </figcaption>
      </figure>
      <p class="desc-1">
        크게 3가지 시점에 가이드라인이나 시스템 구축을 고민하게 되는데요. 우선 제품의
        기능이 확장되고, 제품과 서비스 군이 늘어날 때 기준이 없으면 점차 일관성이 깨지게
        됩니다. 단적인 예로 런치 아이콘과 스플래쉬 스크린이 있습니다. 안에 글씨를 넣을
        것인지, 어떤 스타일로 아이콘을 통일할 것인지, 앱 이름은 어떻게 지을 것인지에 대한
        일관된 기준이 필요합니다. 두번째는 새로운 시장으로 진출할 때인데요. 다양한 국가의
        상황에 유연하게 대응하면서도 일관적으로 보이도록 하는 방법을 고민합니다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_01_06.png`" alt="" />
        <span class="blind">
          상단 언어에 따라 단어길이를 고려하는 이미지 하단 언어에 따라 읽는 방향을
          고려하는 이미지
        </span>
        <figcaption>
          Material Design System에서 다른 언어에 대응하는 가이드를 제공하고 있습니다
        </figcaption>
      </figure>
      <p class="desc-1">
        시간, 날짜를 표기하는 방식이 국가별로 다를 수도 있고, 언어를 읽는 방향이 다를 수도
        있는데 이에 대한 기준을 제시합니다. 마지막으로 서비스 채널이 확장될 때입니다.
        오프라인 채널이 온라인으로 확장할 수도 있고 같은 앱을 웨어러블, PC에서도 제공하게
        되는 경우일 수도 있습니다. 이 때는 채널이나 디바이스의 특성, 호환성을 우선적으로
        고려하게 됩니다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_01_07.png`" alt="" />
        <figcaption>
          SAP에서는 대화형 UX 채널이 증가함에 따라, 해당 가이드라인을 추가했습니다.
          <ul class="blind">
            <li>sap fiori for android</li>
            <li>sap fiori for ios</li>
            <li>sap fiori</li>
            <li>conversational-ux</li>
          </ul>
        </figcaption>
      </figure>
      <h4 class="art-1">좋은 디자인 가이드라인은 무엇인가?</h4>
      <h5 class="art-2">1. 내용이 좋은 가이드라인</h5>
      <p class="desc-1">
        당연한 이야기지만, 컨텐츠가 좋다는 건 무슨 뜻일까요? 가이드라인을 읽는 사람이
        분명한 인사이트를 얻을 수 있어야 합니다. 해당 플랫폼, 디바이스, 브랜드만의 명확한
        관점을 제공해야 합니다. 어디서나 볼 수 있고 당연한 이야기를 한다면 굳이 새로운
        가이드라인을 만들 필요가 있을까요. 우리 브랜드이기 때문에, 우리 도메인이기 때문에
        지켜야 하는 원칙을 제시해야 합니다. 실무진의 인풋과 사용자 연구가 바탕이 되었을 때
        우리 제품의 철학, 형태, 기술에 근거한 내용이 나올 수 있습니다. 또한 추상적 원칙만
        나열하는 것이 아니라, 구체적인 요소까지 하나의 흐름으로 연결되어 원칙을 어떻게
        적용할지 그림을 그릴 수 있어야 합니다.
      </p>
      <h5 class="art-2">2. 탐색이 편리한 가이드라인</h5>
      <p class="desc-1">
        내용이 아무리 좋더라도 내가 원하는 것을 찾기 어렵다면 활용하지 않게 됩니다. 목차
        구성이 탐색에 큰 역할을 하는데요. 좋은 목차는 한눈에 전체 맥락을 이해하고, 내용을
        대략 예측할 수 있어야 합니다. 목차에서 챕터, 제목, 부제목 등 단계가 있는데요. 단계
        별로 내용의 수준이 일률적이야 합니다. 추상적인 개념과 구체적인 디테일을 분리하여
        독자가 지금 어디를 읽고 있는지 혼란을 겪지 않아야 합니다.
      </p>
      <figure>
        <img
          :src="`${GOOGLE_STORAGE}img_story_01_08.png`"
          alt="챕터, 대제목, 소제목을 추상적인 개념과 구체적인 디테일을 분리"
        />
      </figure>
      <p class="desc-1">
        예를 들어 Material Design System에서는 크게 System, Foundation, Guideline으로 큰
        챕터를 구분하여, 서서히 상세한 내용으로 찾아들어갈 수 있게 구조를 설계했습니다. 각
        레벨에 해당하는 제목은 같은 수준에서 결정하고, 담겨있는 내용을 같은 수위에서
        제공하도록 합니다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_01_09.png`" alt="" />
        <figcaption>
          Material design system 목차 구조
          <ol class="blind">
            <li>레벨1 material system,material foundation, material guidelines</li>
            <li>레벨2 environment layout navigation typography</li>
            <li>
              레벨3 environment 관련 surfaces,elevation, light and shadows layout 관련
              understanding layout,pixel density,responsive layout grid navigation 관련
              component behavior typography 관련 applying density
            </li>
          </ol>
        </figcaption>
      </figure>
      <h5 class="art-2">3. 정체성이 있는 가이드라인</h5>
      <p class="desc-1">
        가이드라인마다 색깔, 목소리가 다릅니다. 어떤 가이드라인은 잘 정리된 교과서
        느낌으로 사실과 원칙을 객관적이고 신뢰도 높게 전달합니다. 어떤 가이드라인은 편한
        동료와 이야기하는 느낌으로 친근하고 이해하기 쉽게 내용을 전달합니다. 브랜드, 독자,
        콘텐츠를 고려하여 정체성을 불어넣으면 더욱 사용하고 싶은 가이드라인이 될 것입니다.
        Shopify의 Polaris Design System은 내용을 설명하는 방식, 어투에서부터 캐주얼하고
        친근한 느낌을 줍니다. Apple의 Human Interface Guidelines는 첫 화면에서부터
        테크니컬하고 상세한 내용이 담길 것이라 암시합니다.
      </p>
      <figure>
        <img :src="`${GOOGLE_STORAGE}img_story_01_10.png`" alt="" />
        <figcaption>
          3가지 가이드라인의 성격
          <span class="blind">
            polaris design system, human interface guidelines, fluent design system 를
            각각 비교한 이미지
          </span>
        </figcaption>
      </figure>
      <h5 class="art-2">4. 적용할 준비가 된 가이드라인</h5>
      <p class="desc-1">
        가이드라인을 잘 구축해도 관리 부실로 유명무실해 지거나, 업데이트가 되지 않아
        실무에서 활용하지 못하는 상황이 많습니다. 이를 피하기 위해 어떤 주체가 어떤
        프로세스로 가이드/시스템을 관리하고 업데이트할 것인지 정의가 필요합니다. 어떤
        기준으로 새로운 내용을 추가하거나 삭제할 것인지, 어떤 과정을 거쳐서 수정 내용을
        검수할 것인지 계획이 있어야 합니다. 예전에는 각 부서에서 함께 라이브러리를
        구축하고 관리했다면, 디자인 시스템 팀을 만들어 단독으로 담당하는 추세라 합니다.
        개발한 가이드라인을 어떤 프로젝트에 단계적으로 적용을 할 것인지 계획도 필요합니다.
        실제 사례에 적용하면서 가이드가 수정하고 보완될 수 있습니다. 브랜드 가이드라인,
        콘텐츠 가이드라인, 각 국가 별 기준이 조금씩 다를 수 있는데 이런 상황에서 여러
        가이드라인 간에 위계가 어떻게 될 것인지 정의해야 합니다. 자세한 내용은 시리즈
        4편에서 다룰 예정입니다.
      </p>
      <h4 class="art-1">마치며</h4>
      <p class="desc-1">
        이번 글에서는 디자인 시스템과 UI/UX 가이드라인은 무엇이고 왜 필요한지, 좋은 디자인
        시스템은 무엇인지에 대해 알아보았습니다. 디자인 시스템/가이드라인도 업무 프로세스
        최적화의 일부로, UX가 고객뿐만 아니라 내부 직원, 협업하는 외부 개발자를 향해 가는
        점이 재미있었습니다. 다음 글에서는 시중에 공개되어 있는 다양한 디자인 시스템을
        분류하고 소개해 보겠습니다. 작성에 도움을 주신 이준 선임님과 디자인 가이드
        프로젝트 팀원들 감사합니다.
      </p>
      <div class="area-from">
        <strong>이 글은 박재현 모니카의 브런치에 동시 발행됩니다.</strong>
        <a
          href="https://brunch.co.kr/@jaehyun-design"
          target="_blank"
          title="새창 이동"
          class="concurrent"
        >
          <strong data-action="action-text">박재현 모니카의 브런치</strong>
        </a>
      </div>

      <article class="area-reference">
        <h4 class="title">[참고 자료]</h4>
        <a
          href="https://www.designsystems.com/the-spectrum-of-maturity-for-design-systems/"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text"
            >The spectrum of maturity for design systems, Nikolas Klein</strong
          >
        </a>
        <a
          href="https://www.designsystems.com/why-we-build-design-systems-an-agencys-perspective/"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text"
            >Why we build design systems: an agency's perspective, Team Spirit</strong
          >
        </a>
        <a
          href="http://icunow.co.kr/design-system/"
          title="새창 이동"
          target="_blank"
          class="reference"
        >
          <strong data-action="action-text"
            >국내 스타트업들의 디자인 시스템은? 그리고 디자인 시스템에 대한 사례 확인과
            공부, zagmaster</strong
          >
        </a>
        <a
          href="https://seonjinlee.com/design-system.html"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text">RIDI Design System, Seonjin Lee</strong>
        </a>
        <a
          href="https://www.invisionapp.com/inside-design/guide-to-design-systems/"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text"
            >A comprehensive guide to design systems, Will Fanguy</strong
          >
        </a>
        <a
          href="https://designsystemsrepo.com/design-systems/"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text">Design systems repo, Jad Limcaco</strong>
        </a>
        <a
          href="https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text"
            >Everything you need to know about design systems, Audrey Hacq</strong
          >
        </a>
        <a
          href="https://www.invisionapp.com/inside-design/3-lessons-learned-history-design-systems/"
          title="새창 이동"
          target="_blank"
          class="reference en"
        >
          <strong data-action="action-text"
            >3 lessons learned from the history of design systems, Will Fanguy</strong
          >
        </a>
        <a
          href="https://sysnet4admin.blogspot.com/2018/11/blog-post_26.html#.XUkRKJMzaL4"
          title="새창 이동"
          target="_blank"
          class="reference"
        >
          <strong data-action="action-text"
            >[책쓰기] 목차는 어떻게 작성할까요?, SysNet4Admin</strong
          >
        </a>
      </article>
      <StoryStorybutton href="1434" />
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
  name: 'StoryDetail01',
  components: {},
  asyncData() {
    const story = stories.getWork('design')
    const next = stories.getNext('design')
    return { story, next, GOOGLE_STORAGE }
  },
  head() {
    const seoMeta = {
      title: '디자인 시스템 1편 - 디자인 가이드/디자인 시스템은 왜 필요한가',
      description: '2014년 6월 구글이 머티리얼 디자인 시스템을 공개한 후, 많은 회사들이 고유 디자인 시스템을 구축하고 공유하고 있습니다.',
      url: `${this.$route.path}`,
      image: 'img_story_list_01.png'
    }
    return {
      title: '디자인 시스템 1편 - 디자인 가이드/디자인 시스템은 왜 필요한가 > Story > pxd',
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
