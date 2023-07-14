export default {
  /**
   * @description 학력사항
   * @param {*} state
   * @param {*} payload Object
   */
  addEducationRow(state) {
    const newRow = {
      period: '',
      name: '',
      type: '졸업',
      point: '',
    }
    state.education = [...state.education, newRow]
  },
  removeEducationRow(state, index) {
    const copyEducations = [...state.education]
    copyEducations.splice(index, 1)
    state.education = copyEducations
  },
  updateEducationPeriod(state, payload) {
    state.education[payload.index].period = payload.value
  },
  updateEducationName(state, payload) {
    state.education[payload.index].name = payload.value
  },
  updateEducationType(state, payload) {
    state.education[payload.index].type = payload.value
  },
  updateEducationPoint(state, payload) {
    state.education[payload.index].point = payload.value
  },

  /**
   * @description 경력사항
   * @param {*} state
   * @param {*} payload Object
   */
  addCareerRow(state) {
    const newRow = {
      period: '',
      name: '',
      position: '',
      reason: '',
    }
    state.career = [...state.career, newRow]
  },
  removeCareerRow(state, index) {
    const copyCareers = [...state.career]
    copyCareers.splice(index, 1)
    state.career = copyCareers
  },
  updateCareerTerm(state, payload) {
    state.career[payload.index].period = payload.value
  },
  updateCareerCompany(state, payload) {
    state.career[payload.index].name = payload.value
  },
  updateCareerPosition(state, payload) {
    state.career[payload.index].position = payload.value
  },
  updateCareerReason(state, payload) {
    state.career[payload.index].reason = payload.value
  },

  /**
   * @description 주요 수행 프로젝트
   * @param {*} state
   * @param {*} payload Object
   */
  addProjectRow(state) {
    const newRow = {
      period: '',
      name: '',
      position: '',
      reason: '',
    }
    state.project = [...state.project, newRow]
  },
  removeProjectRow(state, index) {
    const copyProjects = [...state.project]
    copyProjects.splice(index, 1)
    state.project = copyProjects
  },
  updateProjectTerm(state, payload) {
    state.project[payload.index].period = payload.value
  },
  updateProjectName(state, payload) {
    state.project[payload.index].name = payload.value
  },
  updateProjectPosition(state, payload) {
    state.project[payload.index].position = payload.value
  },

  /**
   * @description 수상경력/관련 교육 이력/자격 면허
   * @param {*} state
   * @param {*} payload String
   */
  updateLicense(state, license) {
    state.license = license
  },
  /**
   * @description 능력 (XE 그룹)
   * @param {*} state
   * @param {*} payload Object
   */
  updateSkillsXe(state, payload) {
    switch (payload.index) {
      case 0:
        state.skills.html_css = payload.value
        return state.skills.html_css
      case 1:
        state.skills.javascript = payload.value
        return state.skills.javascript
      case 2:
        state.skills.a11y = payload.value
        return state.skills.a11y
      case 3:
        state.skills.cross = payload.value
        return state.skills.cross
      case 4:
        state.skills.motion = payload.value
        return state.skills.motion
      case 5:
        state.skills.spa = payload.value
        return state.skills.spa
      default:
        break
    }
  },
  /**
   * @description 능력 (XC, XD 그룹)
   * @param {*} state
   * @param {*} payload Object
   */
  updateAbilityValue(state, payload) {
    // inputType radio change 이벤트
    switch (payload.indexTitle) {
      case 0:
        switch (payload.indexRadio) {
          case 0:
            state.skills.sketch = payload.value
            return state.skills.sketch
          case 1:
            state.skills.sketch = payload.value
            return state.skills.sketch
          case 2:
            state.skills.sketch = payload.value
            return state.skills.sketch
          default:
            break
        }
        return state.skills.sketch
      case 1:
        switch (payload.indexRadio) {
          case 0:
            state.skills.framer = payload.value
            return state.skills.framer
          case 1:
            state.skills.framer = payload.value
            return state.skills.framer
          case 2:
            state.skills.framer = payload.value
            return state.skills.framer
          default:
            break
        }
        return state.skills.framer
      case 2:
        switch (payload.indexRadio) {
          case 0:
            state.skills.xd = payload.value
            return state.skills.xd
          case 1:
            state.skills.xd = payload.value
            return state.skills.xd
          case 2:
            state.skills.xd = payload.value
            return state.skills.xd
          default:
            break
        }
        return state.skills.xd
      case 3:
        switch (payload.indexRadio) {
          case 0:
            state.skills.excel = payload.value
            return state.skills.excel
          case 1:
            state.skills.excel = payload.value
            return state.skills.excel
          case 2:
            state.skills.excel = payload.value
            return state.skills.excel
          default:
            break
        }
        return state.skills.excel
      case 4:
        switch (payload.indexRadio) {
          case 0:
            state.skills.tools_value = payload.value
            return state.skills.tools_value
          case 1:
            state.skills.tools_value = payload.value
            return state.skills.tools_value
          case 2:
            state.skills.tools_value = payload.value
            return state.skills.tools_value
          default:
            break
        }
        return state.skills.tools_value
      default:
        break
    }
  },
  updateAbilityTool(state, payload) {
    // inputType text 개수에 따라 라디오 기본 체크값(잘함)) || 체크 해지 설정
    if (payload.value.length <= 1) {
      state.skills.tools_value = payload.value
    } else {
      state.skills.tools_value = '잘함'
    }

    switch (payload.indexTitle) {
      case 4:
        state.skills.tools_name = payload.value
        return state.skills.tools_name
      default:
        break
    }
  },
  /**
   * @description 언어 활용능력
   * @param {*} state
   * @param {*} payload Object
   */
  updateLanguage(state, payload) {
    switch (payload.indexText) {
      case 0:
        state.language.other1 = payload.value
        break
      case 1:
        state.language.other2 = payload.value
        break
      default:
        break
    }
  },
  updateLanguageLevel(state, payload) {
    // inputType text 개수에 따라 라디오 기본 체크값(잘함)) || 체크 해지 설정
    if (payload.value.length <= 1) {
      switch (payload.indexText) {
        case 0:
          state.language.other1_value = payload.value
          break
        case 1:
          state.language.other2_value = payload.value
          break
        default:
          break
      }
    } else {
      switch (payload.indexText) {
        case 0:
          state.language.other1_value = '잘함'
          break
        case 1:
          state.language.other2_value = '잘함'
          break
        default:
          break
      }
    }

    // inputType radio change 이벤트
    switch (payload.indexText) {
      case 0:
        switch (payload.indexRadio) {
          case 0:
            state.language.other1_value = payload.value
            break
          case 1:
            state.language.other1_value = payload.value
            break
          case 2:
            state.language.other1_value = payload.value
            break
          default:
            break
        }
        return state.language.other1_value
      case 1:
        switch (payload.indexRadio) {
          case 0:
            state.language.other2_value = payload.value
            break
          case 1:
            state.language.other2_value = payload.value
            break
          case 2:
            state.language.other2_value = payload.value
            break
          default:
            break
        }
        return state.language.other2_value
      default:
        break
    }
  },
  /**
   * @description 임시저장
   * @param {*} state
   * @param {*} payload Object
   */
  setExperienceStorage(state, payload) {
    state.education = []
    payload.education.forEach((education) => {
      const storageObject = {}

      storageObject.period = education.period
      storageObject.name = education.name
      storageObject.type = education.type
      storageObject.point = education.point

      state.education = [...state.education, storageObject]
    })

    state.career = []
    payload.career.forEach((career) => {
      const storageObject = {}

      storageObject.period = career.period
      storageObject.name = career.name
      storageObject.position = career.position
      storageObject.reason = career.reason

      state.career = [...state.career, storageObject]
    })

    state.project = []
    payload.project.forEach((project) => {
      const storageObject = {}

      storageObject.period = project.period
      storageObject.name = project.name
      storageObject.position = project.position

      state.project = [...state.project, storageObject]
    })

    state.license = payload.license

    state.skills.html_css = payload.skills.html_css
    state.skills.javascript = payload.skills.javascript
    state.skills.a11y = payload.skills.a11y
    state.skills.cross = payload.skills.cross
    state.skills.motion = payload.skills.motion
    state.skills.spa = payload.skills.spa
    state.skills.r = payload.skills.r
    state.skills.python = payload.skills.python
    state.skills.sketch = payload.skills.sketch
    state.skills.framer = payload.skills.framer
    state.skills.xd = payload.skills.xd
    state.skills.excel = payload.skills.excel
    state.skills.develop_etc_name = payload.skills.develop_etc_name
    state.skills.develop_etc_value = payload.skills.develop_etc_value
    state.skills.tools_name = payload.skills.tools_name
    state.skills.tools_value = payload.skills.tools_value

    state.language.other1 = payload.language.other1
    state.language.other1_value = payload.language.other1_value
    state.language.other2 = payload.language.other2
    state.language.other2_value = payload.language.other2_value
  },
}
