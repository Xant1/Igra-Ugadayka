let dg = document.getElementById.bind(document),
  left = 1,
  right = 100,
  mid = 0,
  counter = 0,
  el_try = dg('try'),
  s_try = el_try.querySelector('span'),
  el_guess = dg('guess'),
  btn_game = dg('btn-game'),
  btn_ok = dg('btn-ok'),
  btn_left = dg('btn-left'),
  btn_right = dg('btn-right'),
  is_game = false;
btn_game.addEventListener('click', function () {
  left = 1;
  right = 100;
  counter = 0;
  guess();
});

function guess() {
  counter++;
  mid = Math.floor(left + (right - left) / 2);
  if (mid === left || mid === right) {
    hoorray();
  } else {
    el_try.style.display = 'block';
    s_try.innerText = '' + mid + '?';
    el_guess.style.display = 'block';
  }
}

function hoorray() {
  s_try.innerHTML = `${mid}!<br>Отгадал за ${counter} попыток.`;
  el_guess.style.display = 'none';
  mid = -1;
}

btn_ok.addEventListener('click', hoorray);
btn_left.addEventListener('click', function () {
  guess((right = mid));
});
btn_right.addEventListener('click', function () {
  guess((left = mid));
});
