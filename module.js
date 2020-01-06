

const UICtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item was added.')
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add,
    get
  }
})();

UICtrl.add({
  id: 1,
  name: 'Arvydas'
});
console.log(UICtrl.get(1));