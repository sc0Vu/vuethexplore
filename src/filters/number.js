export default {
  name: 'number',
  methods: {
    read (value) {
      return value;
    },
    write (value) {
      return isNaN(value) ? 0 : parseInt(value, 10);
    },
  },
};
