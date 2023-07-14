<template>
  <RecruitForm :form-title="'기본정보'" :sub-form-title="'사진은 .jpg로 첨부해주세요.'">
    <template #form>
      <ul>
        <li class="left">
          <label for="userPhoto" class="title">사진</label>
          <span class="form-content" style="height: 223px">
            <ValidationProvider
              v-slot="{ errors, validate, valid }"
              name="사진을 첨부"
              rules="ext:jpg,jpeg"
              tag="span"
              class="wrap-file"
            >
              <img
                :src="
                  photoPreviewSrc ? photoPreviewSrc : `${googleStorage}photo-preview.png`
                "
                alt=""
                class="photo-preview"
              />
              <input
                id="userPhoto"
                type="file"
                name="user_photo"
                accept=".jpg, .jpeg"
                :class="`is-${valid}`"
                @input="validate"
                @change="setPhoto"
              />
              <span class="error-message">{{ photoPreviewSrc ? errors[0] : '' }}</span>
            </ValidationProvider>
          </span>
          <input
            v-if="photoPreviewSrc"
            type="button"
            value="삭제"
            class="fileReset"
            @click="fileReset"
          />
        </li>
        <li>
          <label for="userName" class="title require">이름</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="이름을 입력"
              rules="required"
              tag="span"
              class="wrap-input"
            >
              <input
                id="userName"
                v-model="name"
                type="text"
                data-required
                aria-required="true"
                :class="`is-${valid}`"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-name"
              />
              <span id="error-name" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
        <li>
          <label for="userGroup" class="title">희망분야</label>
          <span class="form-content"
            ><span class="wrap-input">
              <input
                id="userGroup"
                type="text"
                disabled="disabled"
                class="group-text"
                :value="groupText"
              /> </span
          ></span>
        </li>
        <li>
          <label for="userCarrer" class="title require">경력</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="경력사항을 입력"
              rules="required"
              tag="span"
              class="wrap-input"
              aria-errormessage="error-name"
            >
              <input
                id="userCarrer"
                v-model="career"
                type="text"
                placeholder="ex) 인턴/신입/총 경력 0년 0개월"
                aria-required="true"
                :class="`is-${valid}`"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-career"
              />
              <span id="error-career" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
        <li>
          <label for="userBirth" class="title require">생년월일</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="생년월일을 입력"
              rules="required|birth"
              tag="span"
              class="wrap-input"
              ><input
                id="userBirth"
                v-model="birth"
                type="text"
                maxlength="10"
                placeholder="ex) 2000/01/01"
                data-required
                aria-required="true"
                class="input-birth"
                :class="`is-${valid}`"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-birth"
              />
              <span id="error-birth" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
        <li class="full">
          <strong class="title require">전화번호</strong>
          <div class="form-content">
            <div class="wrap-float-layout">
              <span class="wrap-select"
                ><label for="userNumberFront" class="blind">전화번호 앞 3자리</label>
                <select
                  id="userNumberFront"
                  v-model="phoneFirst"
                  data-required
                  aria-required="true"
                >
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="017">017</option>
                  <option value="016">016</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
              </span>
              <ValidationProvider
                v-slot="{ errors, valid }"
                name="전화번호 중간자리를 입력"
                rules="required|max:4|min:4"
                tag="span"
                class="wrap-input"
              >
                <label for="userNumberMiddle" class="blind">전화번호 중간 4자리</label>
                <input
                  id="userNumberMiddle"
                  v-model="phoneSecond"
                  type="number"
                  data-required
                  aria-required="true"
                  :class="`is-${valid}`"
                  :aria-invalid="String(!valid)"
                  aria-errormessage="error-phonesecond"
                />
                <span
                  id="error-phonesecond"
                  aria-live="assertive"
                  class="error-message"
                  >{{ errors[0] }}</span
                >
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                name="전화번호 끝자리를 입력"
                rules="required|max:4|min:4"
                tag="span"
                class="wrap-input"
              >
                <label for="userNumberLast" class="blind">전화번호 끝 4자리</label>
                <input
                  id="userNumberLast"
                  v-model="phoneThird"
                  type="number"
                  data-required
                  aria-required="true"
                  :class="`is-${valid}`"
                  :aria-invalid="String(!valid)"
                  aria-errormessage="error-phonethird"
                />
                <span id="error-phonethird" aria-live="assertive" class="error-message">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
          </div>
        </li>
        <li class="full">
          <label for="userMail" class="title require">E-Mail</label>
          <span class="form-content">
            <ValidationProvider
              v-slot="{ errors, valid }"
              name="이메일을 입력"
              rules="required|email"
              tag="span"
              class="wrap-input"
              ><input
                id="userMail"
                v-model="mail"
                type="text"
                placeholder="ex) pxdnewbie@email.com"
                name="user_mail"
                data-required
                aria-required="true"
                :class="`is-${valid}`"
                :aria-invalid="String(!valid)"
                aria-errormessage="error-mail"
              />
              <span id="error-mail" aria-live="assertive" class="error-message">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </span>
        </li>
        <li class="full">
          <!-- FED 그룹 활성화 시 -->
          <label v-if="groupId === 56" for="userUrl" class="title"
            >GitHub / Website / Blog</label
          >
          <!-- 1,2,3 그룹 활성화 시 -->
          <label v-else for="userUrl" class="title">Website / Blog</label>
          <span class="form-content">
            <ValidationProvider v-slot="{ valid }" name="url을 입력" class="wrap-input">
              <input
                id="userUrl"
                v-model="url"
                type="text"
                name="user_url"
                placeholder="ex) http://www.pxd.co.kr"
                :class="`is-${valid}`"
              />
            </ValidationProvider>
          </span>
        </li>
        <li class="full addr">
          <strong class="title require">거주지</strong>
          <span class="form-content">
            <span class="wrap-address-form">
              <ValidationProvider
                v-slot="{ errors, valid }"
                name="우편번호를 입력"
                rules="required"
                tag="span"
                class="wrap-input"
              >
                <label for="user_postcode" class="blind">우편번호</label>
                <input
                  id="user_postcode"
                  v-model="postcode"
                  type="number"
                  name="user_postcode"
                  placeholder="우편번호"
                  data-required
                  aria-required="true"
                  class="postcode"
                  :class="`is-${valid}`"
                  :aria-invalid="String(!valid)"
                  aria-errormessage="error-postcode"
                />
                <button
                  type="button"
                  name="user_searchAddr"
                  class="btn-search-addr"
                  title="새창 이동"
                  @click="searchAddr"
                >
                  주소 검색
                </button>
                <span id="error-postcode" aria-live="assertive" class="error-message">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <ValidationProvider
                v-slot="{ errors, valid }"
                name="주소를 입력"
                rules="required"
                tag="span"
                class="wrap-input"
              >
                <label for="user_address" class="blind">주소</label>
                <input
                  id="user_address"
                  v-model="address"
                  type="text"
                  name="user_address"
                  placeholder="주소"
                  :class="`is-${valid}`"
                  data-required
                />
                <span id="error-address" aria-live="assertive" class="error-message">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </span>
          </span>
        </li>
      </ul>
    </template>
  </RecruitForm>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapMutations } from 'vuex'

export default {
  name:'UserForm',
  components: {
    ValidationProvider,
  },
  props: {
    groupId: {
      type: Number,
      default() {
        return undefined
      },
    },
    groupText: {
      type: String,
      default() {
        return undefined
      },
    },
    googleStorage: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      photoPreviewSrc: '',
      phoneNumMaxLength: 4,
    }
  },
  computed: {
    // 이름
    name: {
      get() {
        return this.$store.state.jobs.user.name
      },
      set(value) {
        this.$store.commit('jobs/user/updateName', value)
      },
    },
    photo: {
      get() {
        return this.$store.state.jobs.user.photo
      },
      set(value) {
        this.$store.commit('jobs/user/updatePhoto', value)
      },
    },
    // 경력
    career: {
      get() {
        return this.$store.state.jobs.user.career
      },
      set(value) {
        this.$store.commit('jobs/user/updateCareer', value)
      },
    },
    // 생년월일
    birth: {
      get() {
        return this.$store.state.jobs.user.birth
      },
      set(value) {
        this.$store.commit('jobs/user/updateBirth', value)
      },
    },
    // 전화번호 첫자리
    phoneFirst: {
      get() {
        return this.$store.state.jobs.user.phoneFirst
      },
      set(value) {
        this.$store.commit('jobs/user/updatePhoneFirst', value)
      },
    },
    // 전화번호 중간자리
    phoneSecond: {
      get() {
        return this.$store.state.jobs.user.phoneSecond
      },
      set(value) {
        this.$store.commit('jobs/user/updatePhoneSecond', value)
      },
    },
    // 전화번호 끝자리
    phoneThird: {
      get() {
        return this.$store.state.jobs.user.phoneThird
      },
      set(value) {
        this.$store.commit('jobs/user/updatePhoneThird', value)
      },
    },
    // 이메일
    mail: {
      get() {
        return this.$store.state.jobs.user.mail
      },
      set(value) {
        this.$store.commit('jobs/user/updateMail', value)
      },
    },
    // 첨부 url
    url: {
      get() {
        return this.$store.state.jobs.user.url
      },
      set(value) {
        this.$store.commit('jobs/user/updateUrl', value)
      },
    },
    // 주소 - 우편번호
    postcode: {
      get() {
        return this.$store.state.jobs.user.postcode
      },
      set(value) {
        this.$store.commit('jobs/user/updatePostCode', value)
      },
    },
    // 주소
    address: {
      get() {
        return this.$store.state.jobs.user.address
      },
      set(value) {
        this.$store.commit('jobs/user/updateAddress', value)
      },
    },
  },
  watch: {
    photo() {
      const reader = new FileReader()
      reader.onloadend = () => {
        this.photoPreviewSrc = reader.result
      }
      if (this.photo) {
        reader.readAsDataURL(this.photo)
      }
    },
  },
  mounted() {
    this.updateGroup(this.groupId)
  },
  methods: {
    ...mapMutations({
      updateGroup: 'jobs/user/updateGroup',
    }),
    ...mapMutations({
      updatePostCode: 'jobs/user/updatePostCode',
    }),
    ...mapMutations({
      updateAddress: 'jobs/user/updateAddress',
    }),
    setPhoto(e) {
      // TODO: axios 보낼때 file형식 확인
      const file = e.target.files[0]
      if (file) {
        this.photo = file
      }
      const input = document.getElementById('userPhoto')
      if (input.files.length === 0) {
        this.photoPreviewSrc = ''
      }
    },
    fileReset() {
      const input = document.getElementById('userPhoto')
      this.photoPreviewSrc = ''
      input.value = ''
      // document.querySelector('.wrap-file .error-message').innerText = ''
    },
    // 주소 검색
    searchAddr() {
      const _this = this
      new window.daum.Postcode({
        oncomplete(data) {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

          // 각 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          // 주소 변수
          let addr = ''
          // 참고항목 변수
          let extraAddr = ''

          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              extraAddr += data.bname
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (extraAddr !== '') {
              extraAddr = ' (' + extraAddr + ')'
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            // document.getElementById("user_extraAddress").value = extraAddr;
          } else {
            // document.getElementById("user_extraAddress").value = '';
          }

          // 우편번호와 주소 정보를 해당 필드에 넣는다.
          _this.updatePostCode(data.zonecode)
          _this.updateAddress(addr)
        },
      }).open()
    },
  },
}
</script>

<style></style>
