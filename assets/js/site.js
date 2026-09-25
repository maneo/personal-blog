// Homepage topic filter.
(function () {
  var chips = document.querySelectorAll(".filters [data-filter]");
  if (!chips.length) return;
  var entries = document.querySelectorAll(".log .entry");
  var empty = document.querySelector(".log__empty");

  function apply(topic) {
    var shown = 0;
    entries.forEach(function (el) {
      var match = topic === "all" || (" " + el.dataset.topics + " ").indexOf(" " + topic + " ") > -1;
      el.hidden = !match;
      if (match) shown++;
    });
    // Hide year headings whose lists became empty.
    document.querySelectorAll(".log__list").forEach(function (list) {
      var visible = list.querySelector(".entry:not([hidden])");
      list.hidden = !visible;
      list.previousElementSibling.hidden = !visible;
    });
    chips.forEach(function (c) {
      c.setAttribute("aria-pressed", String(c.dataset.filter === topic));
    });
    if (empty) empty.hidden = shown > 0;
  }

  chips.forEach(function (chip) {
    chip.setAttribute("role", "button");
    chip.addEventListener("click", function (e) {
      e.preventDefault();
      var topic = chip.dataset.filter;
      apply(topic);
      history.replaceState(null, "", topic === "all" ? location.pathname : "#" + topic);
    });
  });

  var initial = location.hash.slice(1);
  if (initial && document.querySelector('.filters [data-filter="' + initial + '"]')) apply(initial);
})();
