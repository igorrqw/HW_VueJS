new Vue({
  el: ".root",
  data: {
    nameButton: "Перевернуть",
    lists: [
      "Элемент списка 1",
      "Элемент списка 2",
      "Элемент списка 3",
      "Элемент списка 4",
      "Элемент списка 5",
    ],
  },
  methods: {
    reverseMessage: function () {
      this.nameButton = this.nameButton.split("").reverse().join("");
    },
    addItemList: function () {
      this.lists.push("Новый элемент списка");
    },
    remove: function (idx) {
      this.lists.splice(idx, 1);
    },
  },
});
