document.addEventListener('mousemove', function(event) {
  let card_x = getTransformValue(event.clientX, window.innerWidth, 56);
  let card_y = getTransformValue(event.clientY, window.innerHeight, 56);
  let shadow_x = getTransformValue(event.clientX, window.innerWidth, 20);
  let shadow_y = getTransformValue(event.clientY, window.innerHeight, 20);
  let text_shadow_x = getTransformValue(event.clientX, window.innerWidth, 28);
  let text_shadow_y = getTransformValue(event.clientY, window.innerHeight, 28);

  document.querySelectorAll(".floating").forEach(function(element) {
    element.style.transform = "rotateX(" + card_y / 1 + "deg) rotateY(" + card_x + "deg)";
    element.style.boxShadow = -card_x + "px " + card_y / 1 + "px 55px rgba(0, 0, 0, .55)";
  });

  document.querySelectorAll(".svg").forEach(function(element) {
    element.style.filter = "drop-shadow(" + -shadow_x + "px " + shadow_y / 1 + "px 4px rgba(0, 0, 0, .6))";
  });

 
});

function getTransformValue(v1, v2, value) {
  return ((v1 / v2 * value - value / 2));
}

