
const listeners = []

function addResizeListener(listener){
  listeners.push(listener)
}

function getViewport(){
  return {
    width: window.innerWidth, 
    height: window.innerHeight
  }
}

function updateDimensions(){
  listeners.map(listener => listener({width: window.innerWidth, height: window.innerHeight}))
}

window.addEventListener('resize', updateDimensions);

export default {
  addResizeListener,
  getViewport
}
  