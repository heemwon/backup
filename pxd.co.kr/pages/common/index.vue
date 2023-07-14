<template>
  <div id="wrap">
    <ul class="tab-list-wrap pagelist" role="tablist">
      <li class="tab-list">
        <button
          type="button"
          role="tab"
          data-value="0"
          aria-controls="0"
          aria-selected="true"
          tabindex="0"
          class="active"
        >
          Component
        </button>
      </li>
      <li class="tab-list">
        <button
          type="button"
          role="tab"
          data-value="1"
          aria-controls="1"
          aria-selected="false"
          tabindex="-1"
        >
          Page
        </button>
      </li>
    </ul>
    <ul class="tab-item-wrap pagelist">
      <!-- Component -->
      <li id="0" role="tabpanel" data-group="0" class="tab-item active">
        <div class="common">
          <strong class="font-heading6">Header</strong>
          <div class="item">
            <Header :title="$route.fullPath" />
          </div>
        </div>
        <div class="common">
          <strong class="font-heading6">Footer</strong>
          <div class="item">
            <Footer />
          </div>
        </div>
        <div class="common layout">
          <strong class="font-heading6">Card-type</strong>
          <div class="item">
            <CardType01
              card01-img="thumb_work_jsu.jpg"
              card01-title="제목입니다."
              card01-desc="내용입니다."
            />
            <CardType02
              card02-img="thumb_work_jsu.jpg"
              card02-title="제목입니다."
              card02-desc="내용입니다."
            />
          </div>
        </div>
        <div class="common">
          <strong class="font-heading6">page-visual</strong>
          <div class="item">
            <Title language>
              <template #title1>비즈니스와 기술에 대한 통찰력 있는</template>
              <template #title2>이해로부터 해법을 만듭니다.</template>
            </Title>
          </div>
        </div>
        <div class="common">
          <strong class="font-heading6">Button</strong>
          <div class="item">
            <Button />
          </div>
        </div>
      </li>
      <!-- Page -->
      <li id="1" role="tabpanel" data-group="1" class="tab-item">
        <div class="common">
          <strong class="font-heading6">Typography</strong>
          <div class="item">
            <div class="font-heading1">
              font-heading1/size: 80px/weight: bold/line-height: 1.1/letter-spacing:
              -1.4px
            </div>
            <div class="font-heading2">
              font-heading2/size: 68px/weight: bold/line-height: 1.24/letter-spacing:
              -1.24px
            </div>
            <div class="font-heading3">
              font-heading3/size: 56px/weight: 500/line-height: 1.43/letter-spacing: -2px
            </div>
            <div class="font-heading4">
              font-heading4/size: 36px/weight: bold/line-height: 1.33/letter-spacing:
              -0.2px
            </div>
            <div class="font-heading5">
              font-heading5/size: 28px/weight: 800/line-height: 1.43/letter-spacing:
              -0.2px
            </div>
            <div class="font-heading6">
              font-heading6/size: 24px/weight: 800/line-height: 1.5/letter-spacing: -0.1px
            </div>
            <div class="font-heading7">
              font-heading7/size: 22px/weight: bold/line-height: 1.64/letter-spacing:
              -0.2px
            </div>
            <div class="font-heading8">
              font-heading8/size: 20px/weight: bold/line-height: 1.4/letter-spacing:
              -0.2px
            </div>
            <div class="font-heading9">
              font-heading9/size: 16px/weight: bold/line-height: 1.43/letter-spacing:
              -0.1px
            </div>
            <div class="font-heading10">
              font-heading10/size: 14px/weight: bold/line-height: 1.5/letter-spacing:
              -0.1px
            </div>
          </div>
          <div class="item">
            <div class="font-body1">
              font-body1/size: 36px/line-height: 1.5/letter-spacing: -1.2px
            </div>
            <div class="font-body2">
              font-body2/size: 28px/weight: 500/line-height: 1.43/letter-spacing: -0.4px
            </div>
            <div class="font-body3">
              font-body3/size: 18px/line-height: 1.78/letter-spacing: -0.4px
            </div>
            <div class="font-body4">
              font-body4/size: 16px/line-height: 1.5/letter-spacing: -0.1px
            </div>
            <div class="font-body5">
              font-body5/size: 14px/line-height: 1.43/letter-spacing: -0.1px
            </div>
          </div>
        </div>
        <div class="common">
          <strong class="font-heading6">Tab</strong>
          <div class="item">
            <ul class="tab-list-wrap" role="tablist">
              <li class="tab-list">
                <button
                  type="button"
                  role="tab"
                  data-value="0"
                  aria-controls="0"
                  aria-selected="true"
                  tabindex="0"
                  class="active"
                >
                  All
                </button>
              </li>
              <li class="tab-list">
                <button
                  type="button"
                  role="tab"
                  data-value="1"
                  aria-controls="1"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Tab1
                </button>
              </li>
              <li class="tab-list">
                <button
                  type="button"
                  role="tab"
                  data-value="2"
                  aria-controls="2"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Tab2
                </button>
              </li>
              <li class="tab-list">
                <button
                  type="button"
                  role="tab"
                  data-value="3"
                  aria-controls="3"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Tab3
                </button>
              </li>
              <li class="tab-list">
                <button
                  type="button"
                  role="tab"
                  data-value="4"
                  aria-controls="4"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Tab4
                </button>
              </li>
              <li class="tab-list">
                <button
                  type="button"
                  role="tab"
                  data-value="5"
                  aria-controls="5"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Tab5
                </button>
              </li>
              <li class="tab-list">
                <button
                  type="button"
                  role="tab"
                  data-value="6"
                  aria-controls="6"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Tab6
                </button>
              </li>
              <li class="tab-list">
                <button
                  type="button"
                  role="tab"
                  data-value="7"
                  aria-controls="7"
                  aria-selected="false"
                  tabindex="-1"
                >
                  Tab7
                </button>
              </li>
            </ul>
            <ul class="tab-item-wrap">
              <li id="0" role="tabpanel" data-group="0" class="tab-item active">
                탭내용1
              </li>
              <li id="0 1" role="tabpanel" data-group="0 1" class="tab-item active">
                탭내용2
              </li>
              <li id="0 1 3" role="tabpanel" data-group="0 1 3" class="tab-item active">
                탭내용3
              </li>
              <li id="0 2" role="tabpanel" data-group="0 2" class="tab-item active">
                탭내용4
              </li>
              <li id="0 4 5" role="tabpanel" data-group="0 4 5" class="tab-item active">
                탭내용5
              </li>
              <li id="0 6 7" role="tabpanel" data-group="0 6 7" class="tab-item active">
                탭내용6
              </li>
            </ul>
          </div>
        </div>
        <div class="common">
          <strong class="font-heading6">Accordion</strong>
          <div class="item">
            <div
              class="wrap-accordion-group"
              data-role="accordion-group"
              accordion-option="toggle"
            >
              <button
                id="accordion-head-1"
                aria-level="2"
                aria-expanded="false"
                class="accordion-btn"
                aria-controls="accordion-region-1"
              >
                <span class="period">상시</span>
                <strong class="recruitment-title"
                  >[XC그룹] 그래픽 디자이너 (신입/경력)1</strong
                >
                <span class="close">채용시 마감</span>
              </button>
              <div
                id="accordion-region-1"
                class="wrap-accordion-contents"
                role="region"
                aria-labelledby="accordion-head-1"
                tabindex="0"
              >
                <div class="inner-accordion-contents">
                  <strong class="title">모집 분야</strong>
                  <p class="desc">그래픽 디자이너(신입 및 경력)</p>
                  <strong class="title">주요업무</strong>
                  <ul class="desc">
                    <li>서비스의 UI/UX에 어울리는 Graphic Asset 구축</li>
                    <li>
                      Symbol(아이콘, 픽토그램, 로고그래픽 등), illustration, Character
                      Design, Motion Design
                    </li>
                  </ul>
                </div>
              </div>
              <button
                id="accordion-head-2"
                aria-level="2"
                aria-expanded="false"
                class="accordion-btn"
                aria-controls="accordion-region-2"
              >
                <span class="period">상시</span>
                <strong class="recruitment-title"
                  >[XC그룹] 그래픽 디자이너 (신입/경력)2</strong
                >
                <span class="close">채용시 마감</span>
              </button>
              <div
                id="accordion-region-2"
                class="wrap-accordion-contents"
                role="region"
                aria-labelledby="accordion-head-2"
                tabindex="0"
              >
                <div class="inner-accordion-contents">
                  <div class="inner-accordion-contents">
                    <strong class="title">모집 분야2</strong>
                    <p class="desc">그래픽 디자이너(신입 및 경력)</p>
                    <strong class="title">주요업무</strong>
                    <ul class="desc">
                      <li>서비스의 UI/UX에 어울리는 Graphic Asset 구축</li>
                      <li>
                        Symbol(아이콘, 픽토그램, 로고그래픽 등), illustration, Character
                        Design, Motion Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                id="accordion-head-3"
                aria-level="2"
                aria-expanded="false"
                class="accordion-btn"
                aria-controls="accordion-region-3"
              >
                <span class="period">상시</span>
                <strong class="recruitment-title"
                  >[XC그룹] 그래픽 디자이너 (신입/경력)3</strong
                >
                <span class="close">채용시 마감</span>
              </button>
              <div
                id="accordion-region-3"
                class="wrap-accordion-contents"
                role="region"
                aria-labelledby="accordion-head-3"
                tabindex="0"
              >
                <div class="inner-accordion-contents">
                  <div class="inner-accordion-contents">
                    <strong class="title">모집 분야3</strong>
                    <p class="desc">그래픽 디자이너(신입 및 경력)</p>
                    <strong class="title">주요업무</strong>
                    <ul class="desc">
                      <li>서비스의 UI/UX에 어울리는 Graphic Asset 구축</li>
                      <li>
                        Symbol(아이콘, 픽토그램, 로고그래픽 등), illustration, Character
                        Design, Motion Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                id="accordion-head-4"
                aria-level="2"
                aria-expanded="false"
                class="accordion-btn"
                aria-controls="accordion-region-4"
              >
                <span class="period">상시</span>
                <strong class="recruitment-title"
                  >[XC그룹] 그래픽 디자이너 (신입/경력)4</strong
                >
                <span class="close">채용시 마감</span>
              </button>
              <div
                id="accordion-region-4"
                class="wrap-accordion-contents"
                role="region"
                aria-labelledby="accordion-head-4"
                tabindex="0"
              >
                <div class="inner-accordion-contents">
                  <div class="inner-accordion-contents">
                    <strong class="title">모집 분야4</strong>
                    <p class="desc">그래픽 디자이너(신입 및 경력)</p>
                    <strong class="title">주요업무</strong>
                    <ul class="desc">
                      <li>서비스의 UI/UX에 어울리는 Graphic Asset 구축</li>
                      <li>
                        Symbol(아이콘, 픽토그램, 로고그래픽 등), illustration, Character
                        Design, Motion Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { filterEvent } from '../../assets/js/tab'
import { accordion } from '../../assets/js/accordion'

export default {
  name: 'CommonIndex',
  mounted() {
    filterEvent()
    accordion()
  },
}
</script>
<style scoped>
.tab-list-wrap.pagelist {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 100;
  margin: 0 20px;
  width: 100%;
  transform: translate(-50%, 0);
  background-color: #fff;
  border-bottom: 1px solid #000;
}
.tab-list-wrap.pagelist li {
  padding-right: 0;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  border: 1px solid black;
  border-bottom: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
@media (max-width: 768px) {
  .tab-list-wrap.pagelist li {
    font-size: 20px;
  }
}
.common {
  margin-top: 20px;
  padding: 20px;
}
.common.layout {
  display: flex;
  flex-wrap: wrap;
}
.common.layout strong {
  width: 100%;
}
strong.font-heading2 {
  display: block;
  padding-bottom: 20px;
}
.item {
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #888;
}
header {
  position: relative;
}
/* [class*='card-type'] {
  width: 30%;
  border: 1px solid #888;
} */
.card-type2 {
  margin-top: 10px;
}
</style>
