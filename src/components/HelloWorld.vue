<script>
import axios from 'axios';

export default {
  data() {
    return {
      aya: 0,
      juz: 0,
      verse_key: 0,
      text_fr: '',
      notes: {},
      label: '',
      num: '',
      showNote: false,
    };
  },

  computed: {
    cleanLabel() {
      return this.$sanitize(this.label);
    },
  },

  mounted() {
    this.getAya();
  },

  methods: {
    getAya() {
      const vm = this;
      // Optionally the request above could also be done as
      axios
        .get('https://cya.modji.xyz/items/quran_ayat/824')
        .then(function (response) {
          const rez = response.data.data;
          vm.aya = rez.aya;
          vm.juz = rez.juz;
          vm.verse_key = rez.verse_key;
          vm.text_fr = rez.text_fr;
          vm.notes = rez.notes;
          vm.label = rez.notes[0]['text'];
          vm.num = rez.notes[0]['numero'];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div>Aya: {{ aya }} | Juz: {{ juz }} | Verse Key: {{ verse_key }}</div>
  <div>
    <span v-html="$sanitize(text_fr)"></span>
    <o-tooltip :label="$sanitize(label)" multiline position="bottom">
      <o-button> #{{ num }} - Hover Tooltip</o-button>
    </o-tooltip>
    <o-button @click="showNote = !showNote" variant="warning">
      #{{ num }} - Click me to toggle</o-button
    >
    <p v-html="$sanitize(label)" v-show="showNote"></p>
  </div>
</template>
