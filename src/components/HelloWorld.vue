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
    };
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
</template>
