const boxElement = document.getElementById('box');

function transformToCircle() {
  boxElement.style.width = '500px';
  boxElement.style.height = '500px';
  boxElement.style.borderRadius = '50%';
}

function transformToBox() {
  boxElement.style.width = '500px';
  boxElement.style.height = '500px';
  boxElement.style.borderRadius = '0%';
}