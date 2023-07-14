<template>
  <main id="wrap">
    <section class="content job-detail">
      <div class="margin section-grid">
        <h3 class="section-title">Recruitment</h3>
        <div id="recruitment" class="section-contents">
          <client-only>
            <ValidationObserver
              id="skipcontent"
              ref="form"
              v-slot="{ handleSubmit }"
              tag="div"
            >
              <form
                id="recruitment-form"
                @submit.prevent="handleSubmit(onSubmit($event))"
              >
                <div class="tab-sorting-container">
                  <JobsUserForm
                    :group-id="groupId"
                    :google-storage="GOOGLE_STORAGE"
                    :group-text="filteredGroupText"
                  />
                  <client-only>
                    <JobsExperienceForm :group-id="groupId" />
                  </client-only>
                  <JobsHopeConditionForm />
                  <JobsIntroduceForm />
                  <JobsPortfolioForm />
                  <JobsChannelForm />
                  <JobsAgreeForm />
                </div>
                <div class="wrap-btn-submit">
                  <button type="button" class="btn-border-lg" @click.stop="onFormSave">
                    임시저장
                  </button>
                  <button class="btn-border-lg submit" @click.once="onSubmit($event)">
                    지원하기
                  </button>
                  <button type="button" class="btn-border-lg" @click="onCancel">
                    취소
                  </button>
                </div>
                <input type="hidden" name="user_applicate" />
              </form>
            </ValidationObserver>
          </client-only>
        </div>
        <div v-if="loading" class="loading">
          <img :src="`${GOOGLE_STORAGE_ICO}ico_loading_p.png`" alt="p" class="p" />
          <img :src="`${GOOGLE_STORAGE_ICO}ico_loading_x.png`" alt="x" class="x" />
          <img :src="`${GOOGLE_STORAGE_ICO}ico_loading_d.png`" alt="d" class="d" />
        </div>
      </div>
      <div class="margin section-grid">
        <div class="section-title-wrap">
          <h3 class="section-title" data-action="fixed-title">Related Articles</h3>
        </div>
        <div class="section-contents">
          <p class="h4-desc type-large">
            pxd는 어떤 회사인지, 무슨 일을 하는지 설명하는 글입니다. 입사 지원하기 전에 꼭
            읽어보시기 바랍니다.
          </p>
          <ul class="card-wrap1 tab-item-wrap">
            <li
              v-for="(story, index) in blogData"
              :key="index"
              data-action="reveal-content"
              class="card-type1 tab-item active"
            >
              <CardType03
                tag-type="button"
                :outer-link="true"
                :out-route="story.route"
                :open-frame="keyFrame"
                :card01-img="`img_jobs_0${[index + 1]}.png`"
                :card01-title="story.title"
                :card01-desc="story.desc"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="margin">
        <p class="t-type1">
          모든 질문 사항은
          <a href="mailto:info@pxd.co.kr" title="메일 보내기">job@pxd.co.kr</a>로
          보내주시기 바랍니다.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex'
import { ValidationObserver } from 'vee-validate'
import { makeMeta } from '~/static/seo'
import { textAction } from '~/assets/js/textAction.js'
import { GOOGLE_STORAGE, GOOGLE_STORAGE_ICO } from '~/static/utils'

export default {
  name: 'JobsId',
  components: {
    ValidationObserver,
  },
  asyncData() {
    return { GOOGLE_STORAGE, GOOGLE_STORAGE_ICO }
  },
  head() {
    const seoMeta = {
      title: `${this.filteredGroupText ? this.filteredGroupText : ''}`,
      description: `pxd 채용 - ${this.filteredGroupText ? this.filteredGroupText : ''}`,
      url: `/jobs/${this.groupId}`,
    }
    return {
      title: `${
        this.filteredGroupText ? this.filteredGroupText : ''
      } 지원하기 > Jobs > pxd`,
      meta: makeMeta(seoMeta),
    }
  },
  data() {
    return {
      groupId: +this.$route.params.id,
      loading: false, // loading
      // related articles 관련
      keyFrame: '_blank', // 새창 띄우기
      saveInterval: 0,
      blogData: [
        {
          route: 'https://story.pxd.co.kr/696?category=158764',
          title: '디자인 비전공자로 UX하기',
          desc: 'UI 가벼운 이야기・May 28. 2013',
        },
        {
          route: 'https://story.pxd.co.kr/1266?category=158765',
          title: 'pxd에서 GUI 디자이너로 일하기',
          desc: 'GUI 가벼운 이야기・Oct 25. 2017',
        },
        {
          route: 'https://story.pxd.co.kr/1295?category=158772',
          title: 'HCI KOREA 2018 참관 후기 (2/3)',
          desc: 'pxd 다이어리 & 소소한 이야기・Feb 9. 2018',
        },
        {
          route: 'https://story.pxd.co.kr/388',
          title: '키스크린(Key Screens)이 나오기까지의 과정',
          desc: 'pxd 다이어리 & 소소한 이야기・Jun 30. 2011',
        },
        {
          route: 'https://story.pxd.co.kr/1035',
          title: 'pxd Annual Essay 2014 제작',
          desc: 'pxd 다이어리 & 소소한 이야기・Mar 18. 2015',
        },
        {
          route: 'https://story.pxd.co.kr/651',
          title: 'pxd ANNUAL STORY 제작기',
          desc: 'pxd 다이어리 & 소소한 이야기・Feb 28. 2013',
        },
      ],
      snapshotState: false,
    }
  },
  computed: {
    filteredGroupText() {
      const list = this.$store.state.jobs.lists
      const result = list.filter((l) => l.id === this.groupId)
      if (result.length === 0) return undefined
      return result[0].title
    },
  },
  mounted() {
    // 데이터 리로드
    this.saveInterval = setInterval(this.setDate, 60 * 1000)

    // XE그룹 skills 초기화 or 기본값 세팅
    let xeGroup
    let value

    if (this.groupId === 56) {
      xeGroup = true
    }
    if (xeGroup) {
      value = '1'
      this.setXeSkills(value)
    } else {
      value = ''
      this.setXeSkills(value)
    }
    // stikyTitle()
    // 메인 타이틀 애니메이션
    textAction('load', null)
    // 블로그 글 목록 애니메이션
    window.addEventListener('scroll', function () {
      const scrollPosition = window.pageYOffset
      textAction('scroll', scrollPosition)
    })
    this.getLists()
  },
  created() {
    this.temporaryData()
  },
  methods: {
    ...mapActions({
      getLists: 'jobs/getLists',
    }),
    // localStorage 저장
    setDate() {
      localStorage.setItem('recruitmentInfoTemp', JSON.stringify(this.$store.state.jobs))
    },
    // localStorage 삭제
    removeData() {
      localStorage.removeItem('recruitmentInfoTemp')
      clearInterval(this.saveInterval)
    },
    // 임시 저장 데이터
    temporaryData() {
      // localStorage 불러오기
      if (!process.client) return
      const saveData = JSON.parse(localStorage.getItem('recruitmentInfoTemp'))

      // state setup
      if (saveData) {
        this.$store.commit('jobs/user/setUserStorage', saveData.user)
        this.$store.commit('jobs/experience/setExperienceStorage', saveData.experience)
        this.$store.commit('jobs/hope/setHopeStorage', saveData.hope)
        this.$store.commit('jobs/introduce/setIntroduceStorage', saveData.introduce)
        this.$store.commit('jobs/channel/setChannelStorage', saveData.channel)
      }
    },
    // 지원하기
    onSubmit(event) {
      event.preventDefault()
      // #243 임시 작업 중
      // const addMessage = this.$fire.functions.httpsCallable('helloWorld')
      // const data = {
      //   jobs: this.$store.state.jobs
      // }
      // addMessage(data).then((result) => {
      //   // Read result of the Cloud Function.
      //   console.log(result)
      // })
      // #243 임시 작업 중

      const isValid = this.$refs.form.validate()
      isValid.then((success) => {
        if (success) {
          this.loading = true
          this.uploadPortpolio(() => this.uploadFormData())
        } else {
          alert('입력사항을 확인해주세요.')
        }
      })
    },
    makeFormData() {
      const formData = new FormData()
      formData.append('user_name', this.$store.state.jobs.user.name)
      formData.append('user_applicate', this.$store.state.jobs.user.applicate)
      formData.append('user_group', this.$store.state.jobs.user.group)
      formData.append('user_career', this.$store.state.jobs.user.career)
      formData.append('user_photo', this.$store.state.jobs.user.photo)
      formData.append('user_birth', this.$store.state.jobs.user.birth)
      formData.append('user_phone0', this.$store.state.jobs.user.phoneFirst)
      formData.append('user_phone1', this.$store.state.jobs.user.phoneSecond)
      formData.append('user_phone2', this.$store.state.jobs.user.phoneThird)
      formData.append('user_mail', this.$store.state.jobs.user.mail)
      formData.append('user_url', this.$store.state.jobs.user.url)
      formData.append('user_postcode', this.$store.state.jobs.user.postcode)
      formData.append('user_address', this.$store.state.jobs.user.address)
      formData.append('hope_role', this.$store.state.jobs.hope.role)
      formData.append('hope_pay', this.$store.state.jobs.hope.pay)
      formData.append('channel', this.$store.state.jobs.channel.channel_value)
      formData.append('channel_etc', this.$store.state.jobs.channel.channel_etc)
      formData.append('experience', JSON.stringify(this.$store.state.jobs.experience))
      formData.append('introduce', JSON.stringify(this.$store.state.jobs.introduce))
      return formData
    },
    uploadPortpolio(callback) {
      const file = this.$store.state.jobs.portpolio.file
      if (file) {
        const storageRef = this.$fire.storage.ref('pdf')
        const imageNameRef = storageRef.child(file.name)
        const uploadTask = imageNameRef.put(file)

        uploadTask.on(
          'state_change',
          (snapshot) => {},
          (error) => {
            alert('파일 업로드 중 오류가 발생했습니다. 잠시 후에 다시 시도해 주세요.')
            console.log(error)
          },
          () => {
            callback()
          },
        )
      } else {
        callback()
      }
    },
    uploadFormData() {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: this.makeFormData(),
        url:
          process.env.NODE_ENV === 'development'
            ? 'http://localhost:4000/upload'
            : process.env.serverUrl + 'upload',
      }
      this.$axios(options)
        .then((res) => {
          if (res.status === 200) {
            this.loading = false
            alert(
              '지원신청이 완료되었습니다. 지원 완료 메일을 확인해주세요.\n메일을 받지 못했을 경우 job@pxd.co.kr로 문의 바랍니다.',
            )
            window.location.href = '/jobs'
            this.removeData()
          }
        })
        .catch((err) => {
          this.loading = false
          alert('오류가 발생하였습니다.<br/>잠시 후 다시 시도해주세요.')
          console.log(err)
        })
    },
    // 임시 저장
    onFormSave() {
      this.setDate()
      alert('임시 저장되었습니다.')
    },
    // 취소
    onCancel() {
      window.history.back()
    },
    // XE그룹 스킬 분류
    setXeSkills(value) {
      const notUsedSkillList = [
        'html_css',
        'javascript',
        'a11y',
        'cross',
        'motion',
        'spa',
      ]

      const skillsValue = this.$store.state.jobs.experience.skills
      const keys = Object.keys(skillsValue)

      keys.forEach((skill, index) => {
        const notUsedSkills = notUsedSkillList.includes(skill)

        if (notUsedSkills) {
          this.$store.commit('jobs/experience/updateSkillsXe', { index, value })
        }
      })
    },
  },
}
</script>

<style>
@media all and (-ms-high-contrast: none) {
  *::-ms-backdrop,
  #html-ability,
  #javascript-ability,
  #a11y-ability,
  #cross-ability,
  #motion-ability,
  #spa-ability {
    margin: 0;
    padding: 0;
    width: 80%;
  } /* IE11 */
}
</style>
