// Projects page: category filters (one active at a time) + live counter.
(function () {
  var chips = document.querySelectorAll('[data-filter]');
  if (!chips.length) return;
  var items = document.querySelectorAll('[data-cat]');
  var count = document.getElementById('count');

  function apply(filter) {
    var n = 0;
    items.forEach(function (item) {
      var show = filter === 'all' || item.getAttribute('data-cat').split(' ').indexOf(filter) !== -1;
      item.hidden = !show;
      if (show) n++;
    });
    count.textContent = n + (n === 1 ? ' project' : ' projects');
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) {
        c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
      });
      apply(chip.getAttribute('data-filter'));
    });
  });
})();
