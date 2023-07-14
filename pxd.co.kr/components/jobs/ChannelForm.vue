<template>
  <RecruitForm :form-title="'채용정보 경로'" :form-type2="true">
    <template #form>
      <ul class="channel_list">
        <li v-for="(channel, index) in chnnelList" :key="index">
          <span :key="index" class="wrap-radio">
            <template v-if="index !== 10">
              <input
                :id="`channel${channel.id}`"
                v-model="channel.checked"
                :value="channel.value"
                type="radio"
                name="channel"
                @change="setRadioValue(index, $event.target.value)"
              />
              <label :for="`channel${channel.id}`">{{ channel.value }}</label>
            </template>
            <template v-else>
              <input
                :id="`channel${channel.id}`"
                v-model="channel.checked"
                :value="channel.value"
                type="radio"
                name="channel"
                @change="setRadioValue(index, $event.target.value)"
              />
              <label :for="`channel${channel.id}`">{{ channel.title }}</label>
              <ValidationProvider
                v-slot="{ errors, valid }"
                name="채용 정보 경로를 입력"
                :rules="`${required === 'channel_etc' ? 'required' : ''}`"
                tag="span"
                class="wrap-input"
              >
                <label for="channelEtc-text2" class="blind"
                  >채용 정보 경로 직접입력</label
                >
                <input
                  id="channelEtc-text2"
                  v-model="inputValue"
                  :class="`is-${valid}`"
                  type="text"
                  data-test-id="etc_input"
                  name="channel_etc"
                  placeholder="직접입력"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </ValidationProvider>
            </template>
          </span>
        </li>
      </ul>
    </template>
  </RecruitForm>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'ChannelForm',
  components: {
    ValidationProvider,
  },
  data() {
    return {
      required: '',
      chnnelList: [
        {
          id: 'Pxd',
          value: 'pxd 구성원 추천',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'Friend',
          value: '지인 소개',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'School',
          value: '학교/교수님 소개',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'PxdPage',
          value: 'pxd블로그, 홈페이지',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'Sns',
          value: '페이스북, 트위터, 인스타그램',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'Linkedin',
          value: '링크드인',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'Wanted',
          value: '원티드',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'Remember',
          value: '리멤버',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'Saramin',
          value: '사람인',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'JobKorea',
          value: '잡코리아',
          checked: this.$store.state.jobs.channel.channel_value,
        },
        {
          id: 'Etc-text',
          value: 'channel_etc',
          checked: this.$store.state.jobs.channel.channel_value,
          title: '기타(입력)',
        },
      ],
    }
  },
  mounted() {},
  computed: {
    // 기타입력 inputType text
    inputValue: {
      get() {
        return this.$store.state.jobs.channel.channel_etc
      },
      set(value) {
        this.$store.commit('jobs/channel/updateChannelText', value)
      },
    },
  },
  methods: {
    // 채널경로 선택
    setRadioValue(index, value) {
      this.required = value

      // 기타입력 inputText 초기화
      if (index !== 10) {
        this.inputValue = ''
      }
      this.$store.commit('jobs/channel/updateChannelRadio', value)
    },
  },
}
</script>

<style></style>
