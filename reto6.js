function createCube(size) {
    let cubesTop = [];
    let cubesBottom = [];
    let spacies = size - 1;
    for(let i = 1; i <= size; i++){
      let cubeTop = ' '.repeat(spacies);
      cubeTop += '/\\'.repeat(i);
      cubeTop += '_\\'.repeat(size);
      let cubeBottom = ' '.repeat(spacies);
      cubeBottom += '\\/'.repeat(i);
      cubeBottom += '_/'.repeat(size);
      spacies--;
      cubesTop.push(cubeTop);
      cubesBottom.unshift(cubeBottom);
    }
    let cubeComplete = cubesTop.join('\n');
    cubeComplete += '\n';
    cubeComplete += cubesBottom.join('\n');
    return cubeComplete;
  }

console.log(createCube(3));