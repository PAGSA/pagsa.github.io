// Toggles dropdown submenus in the nav bar.
// Works the same way on desktop (click) and mobile (tap).
document.addEventListener('DOMContentLoaded', function () {
  var caretButtons = document.querySelectorAll('.caret-btn');

  caretButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var item = btn.closest('.nav-item');
      var isOpen = item.classList.contains('open');

      // Close any other open dropdowns first
      document.querySelectorAll('.nav-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          var openBtn = openItem.querySelector('.caret-btn');
          if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  // Close any open dropdown when clicking outside the nav
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item')) {
      document.querySelectorAll('.nav-item.open').forEach(function (item) {
        item.classList.remove('open');
        var btn = item.querySelector('.caret-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Close dropdowns on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-item.open').forEach(function (item) {
        item.classList.remove('open');
        var btn = item.querySelector('.caret-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
