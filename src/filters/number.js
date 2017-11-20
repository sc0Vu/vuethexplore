export default {
  name: 'number',
  methods: {
    read: function (value) {
      return value;
    },
    write: function (value) {
      return isNaN(value) ? 0 : parseInt(value, 10);
    },
  },
};
