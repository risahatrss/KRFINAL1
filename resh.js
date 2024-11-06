const a = document.getElementById('in_a');
const b = document.getElementById('in_b');
const c = document.getElementById('in_c');
const d = document.getElementById('in_d');
function checkCapacity() {
  const v= +a.value, 
        h= +b.value,
        r= +c.value, 
        m= +d.value,
        cubeVolume = v * v * v,
        cylinderVolume = Math.PI * r * r * h,
        fitsInCube = m <= cubeVolume,
        fitsInCylinder = m <= cylinderVolume; 
    
    

    
  if (fitsInCube && fitsInCylinder){
      alert('эта жидкость поместится в оба сосуда')
  } else if (fitsInCube && !fitsInCylinder){
      alert('эта жидкость поместится только в кубическую ёмкость')
  } else if (fitsInCylinder && !fitsInCube ){
      alert('эта жидкость поместится только в цилиндрическую ёмкость')
  } else {
      alert('жидкость не поместится ни в один сосуд')
  }
}