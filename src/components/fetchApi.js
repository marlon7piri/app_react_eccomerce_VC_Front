export const getData = async () => {

 await fetch("http://localhost:5000/productos")
    .then((res) => res.json())
    .then((res) => {
      
    });
  
};