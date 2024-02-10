const carros = [

    { modelo: "Audi A3", marca: "Audi", ano: 2020, cor: "Azul" },
  
    { modelo: "Jeep Compact", marca: "Jeep", ano: 2021, cor: "Vermelho" },

    { modelo: "Porsche 911 Carrera T", marca: "Porsche", ano: 2017, cor: "Silver" },
  
  ];
  
  for (let i in carros) {
  
    console.log("Carro " + (parseInt(i)) + ";");
  
    for (let atributo in carros[i]) {
  
      console.log(atributo + ": " + carros[i][atributo]);
  
    }
  
    console.log("-----");
  
  }