export default {
  data() {
    return {
      callPopupFocus: null,
      onPopup: false,
    }
  },
  methods: {
    togglePopup() {
      this.onPopup = !this.onPopup
      if(!this.onPopup && this.callPopupFocus !== null) this.callPopupFocus.focus()
    },
    slugToPopup(work) {
      this.callPopupFocus = event.currentTarget
      this.togglePopup()
      this.slug = work.slug
    },
  },
}
