export function createElem(obj) {
  const elem = document.createElement(`${obj.element}`);

  if (obj.class) {
    elem.classList.add(`${obj.class}`);
  }
  if (obj.value) {
    elem.innerHTML += `${obj.value}`;
  }
  if (obj.attribute) {
    elem.setAttribute(obj.attribute.name, obj.attribute.value);
  }
  if (obj.place) {
    obj.place.append(elem);
  } else {
    return elem;
  }
}
