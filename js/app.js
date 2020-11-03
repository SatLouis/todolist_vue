const vm = new Vue({
  el: "#todoapp",
  data: {
    input: '',
    checked: false,
    editing: '',
    catchEdit: '',
    todos: [{
      id: 1,
      title: '吃饭',
      completed: false
    }, {
      id: 2,
      title: '睡觉',
      completed: false
    }, {
      id: 3,
      title: '打豆豆',
      completed: true
    }]
  },
  methods: {
    submit(e) {
      if (e.keyCode === 13) {
        if (this.input) {
          let result = {
            id: this.todos.length - 0 + 1,
            title: this.input,
            completed: false
          };
          this.todos.push(result);
          this.input = '';
        }
      }
    },
    handle(val) {
      this.todos.some((item) => {
        if (item.id === val) {
          item.completed = this.checked;
          return true;
        }
      })
    },
    allSelect() {
      const result = this.todos.filter(item => item.completed === true);
      if (result.length === this.todos.length) { return this.checked = true };
      this.checked = false;
    },
    allChecked() {
      this.todos.forEach(item => item.completed = this.checked);
    },
    del(val) {
      const index = this.todos.findIndex(item => item.id === val);
      this.todos.splice(index, 1);
    },
    dbl(i) {
      this.editing = i;
      this.catchEdit = this.todos[i].title;
    },
    outEdit(i, e) {
      if (e.keyCode === 27) {
        if (this.catchEdit === this.todos[i].title) {
          return this.editing = false;
        }
      };
      if (e.keyCode === 13) {
        this.todos.some((item, index) => {
          if (index === i) {
            item.title = this.catchEdit;
            return true;
          }
        });
        this.editing = false;
      };
    },
    blurEdit(i) {
      this.todos.some((item, index) => {
        if (index === i) {
          item.title = this.catchEdit;
          return true;
        }
      });
      this.editing = false;
    },
    delConpleted() {
      const result = this.todos.filter((item) => item.completed === false);
      this.todos = result;
    }

  },
  watch: {}

});