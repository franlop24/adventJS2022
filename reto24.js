/*Algoritmo
Encontramos punto de partida
let ini = 'x,y';
Creamos ruta inicial y la insertamos en pila de rutas
let rutas = [[ini]];
Mientras rutas no esté vacía
    extraemos ruta (inicial o final, pop o shift)
    ruta_actual = rutas.pop()
    extraemos la ultima coordenada (x, y)
    Buscamos arriba (x - 1) descartamos si es menora 0
    Si posicion tiene Salida retornamos true
    Si no hay pared y no ha sido visitado agregamos nueva
    coordenada al final de ruta actual e insertamos en rutas
    Buscamos abajo (x + 1) descartamos si es mayor a n
    Si posicion tiene Salida retornamos true
    Si no hay pared y no ha sido visitado agregamos nueva
    coordenada al final de ruta actual e insertamos en rutas
    Buscamos izquierda (y - 1) descarta menor a 0
    Si posicion tiene Salida retornamos true
    Si no hay pared y no ha sido visitado agregamos nueva
    coordenada al final de ruta actual e insertamos en rutas
    Buscamos derecha (y + 1) descarta mayor a n
    Si posicion tiene Salida retornamos true
    Si no hay pared y no ha sido visitado agregamos nueva
    coordenada al final de ruta actual e insertamos en rutas
Retornamos false
*/
function canExit(maze) {
    let cor = '';
    maze.forEach((row, index) => {
      if(row.indexOf('S') !== -1){
        cor = `${index},${row.indexOf('S')}`;
      }
    })
    const paths = [[cor]];
    while (paths.length > 0) {
      const current = paths.pop()
      const head = current.pop();
      current.push(head)
      let [x, y] = head.split(',');
      x = Number(x);
      y = Number(y);
      if(x - 1 >= 0){
        let punto = maze[x - 1][y];
        if (punto === 'E') return true;
        else if (punto === ' ') {
          let newCor = `${x - 1},${y}`;
          if (current.indexOf(newCor) === -1) {
            paths.push([...current, newCor]);
          }
        }
      }
      if(x + 1 < maze.length){
        let punto = maze[x + 1][y];
        if (punto === 'E') return true;
        else if (punto === ' ') {
          let newCor = `${x + 1},${y}`;
          if (current.indexOf(newCor) === -1) {
            paths.push([...current, newCor]);
          }
        }
      }
      if(y - 1 >= 0){
        let punto = maze[x][y - 1];
        if (punto === 'E') return true;
        else if (punto === ' ') {
          let newCor = `${x},${y - 1}`;
          if (current.indexOf(newCor) === -1) {
            paths.push([...current, newCor]);
          }
        }
      }
      if(y + 1 < maze[0].length){
        let punto = maze[x][y + 1];
        if (punto === 'E') return true;
        else if (punto === ' ') {
          let newCor = `${x},${y + 1}`;
          if (current.indexOf(newCor) === -1) {
            paths.push([...current, newCor]);
          }
        }
      }
    }
    return false;
  }

  let result = canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]) // -> true
  console.log(result)

  result = canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
  ]) // -> false
  console.log(result)