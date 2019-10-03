let viewport = document.querySelector('.implantacao');
let content = viewport.querySelector('.implantacao__content');
let scene = viewport.querySelector('.implantacao__scene');

let sb = new ScrollBooster({
  viewport,
  content,
  emulateScroll: true,
  onUpdate: (data)=> {
    content.style.transform = `translate(
      ${-data.position.x}px,
      ${-data.position.y}px
    )`
  }
});

scene.addEventListener('load', () => {
    // update sizes/metrics after image load
    sb.updateMetrics()
  
    // set viewport position to the center of an image
    let offsetX = content.scrollWidth - viewport.offsetWidth
    let offsetY = content.scrollHeight - viewport.offsetHeight
    sb.setPosition({
      x: offsetX / 2 + 100,
      y: 0,
    })
  })