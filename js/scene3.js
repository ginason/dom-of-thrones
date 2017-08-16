function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage');
  trees = document.querySelector('#trees');
  stageImg = stage.querySelector('#stage-img');
  mySrc = trees.getAttribute('src');
  stageImg.setAttribute('src', mySrc);
  // Setup Cast

  // Character 1
  danerysContainer = document.createElement('div');
  stage.append(danerysContainer);
  danerysContainer.style.position = 'absolute'
  danerysContainer.style.width = '10%'
  danerysContainer.style.height = '20%';
  danerysContainer.style.top = '50%';
  danerysContainer.style.left = '30%';
  danerysContainer.style.border = '2px solid red';
  danerysContainer.style.background = 'pink';
  danerys = document.querySelector('#danerys')
  danerysContainer.append(danerys)
  dress = document.querySelector('#blue-dress')
  danerysContainer.append(dress)
  danerys.style.border = '2px solid white'
  danerysContainer.style.height = '44%'
  danerys.style.width = '70%'
  danerys.style.border = 'none'
  dress.style.border = 'none'
  danerysContainer.style.border = 'none'
  danerysContainer.style.background = 'none'
  // Character 2
  drogoContainer = document.createElement('div')
  stage.append(drogoContainer)
  drogoContainer.style.width = '8%'
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.height = '31%'
  drogoContainer.style.top = '55%'
  drogoContainer.style.left = '75%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.width = '75%'
  drogo.style.position = 'absolute'
  drogo.style.left = '33%'
  bulkyMan = document.querySelector('#bulky-man')
  drogoContainer.append(bulkyMan)
  bulkyMan.style.position = 'absolute'
  bulkyMan.style.top = '35%'
  bulkyMan.style.left = '25%'
  // Setup Props
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.left = '50%'
  egg.style.top = '20%'
  egg.style.height = '20%'
  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '35%'
    egg.style.left = '77%'
  })

  // Stage direction 2

  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '50%'
    egg.style.transform = 'rotateZ(200deg)'
  })
  frame(function() {
    egg.style.top = '30%'
    egg.style.left = '40%'
    egg.style.transform = 'rotateZ(140deg)'
  })
  frame(function() {
    egg.style.top = '20%'
    egg.style.left = '20%'
    egg.style.transform = 'rotateZ(260deg)'
  })



  frame(function() {
    egg.style.top = '30%'
    egg.style.left = '40%'
    egg.style.transform = 'rotateZ(140deg)'
  })
  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '50%'
    egg.style.transform = 'rotateZ(200deg)'
  })
  frame(function() {
    egg.style.top = '35%'
    egg.style.left = '77%'
  })


}
