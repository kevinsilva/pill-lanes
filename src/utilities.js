export const makeDataCopies = (number) => {
  const result = [];

  const data = {
    label: "testLabel",
    img: "testImg",
    link: "testLink",
  };

  let counter = 0;

  while (counter < number) {
    result.push(Object.assign({}, data));
    counter++;
  }
  return result;
};

export const motorcycleData = [
  {
    label: "Triumph",
    img: "img/triumph.png",
    link: "https://www.triumphmotorcycles.com/",
  },
  {
    label: "Royal Enfield",
    img: "img/royal-enfield.png",
    link: "https://www.royalenfield.com/",
  },
  {
    label: "Harley Davidson",
    img: "img/harley-davidson.png",
    link: "https://www.harley-davidson.com/us/en/index.html",
  },
  {
    label: "Indian",
    img: "img/indian.png",
    link: "https://www.indianmotorcycle.com/en-us/",
  },
  {
    label: "Brixton",
    img: "img/brixton.png",
    link: "https://www.brixton-motorcycles.com/",
  },
  {
    label: "Victory",
    img: "img/victory.png",
    link: "https://www.victorymotorcycles.com/",
  },
  {
    label: "Yamaha",
    img: "img/yamaha.png",
    link: "https://www.yamaha-motor.eu/pt/pt/#/",
  },
  {
    label: "Kawasaki",
    img: "img/kawasaki.png",
    link: "https://www.kawasaki.com/en-us/",
  },
  {
    label: "Honda",
    img: "img/honda.png",
    link: "https://powersports.honda.com/",
  },
  {
    label: "Suzuki",
    img: "img/suzuki.png",
    link: "https://suzukicycles.com/",
  },
  {
    label: "Hyonsung",
    img: "img/hyosung.png",
    link: "https://hyosung.pt/",
  },
  {
    label: "Hero",
    img: "img/hero.png",
    link: "https://www.heromotocorp.com/",
  },
  {
    label: "KTM",
    img: "img/ktm.png",
    link: "https://www.ktm.com/en-us.html",
  },
  {
    label: "Husqvarna",
    img: "img/husqvarna.png",
    link: "https://www.husqvarna-motorcycles.com",
  },
  {
    label: "BMW Motorrad",
    img: "img/bmw.png",
    link: "https://www.bmwmotorcycles.com/en/home.html#/filter-all",
  },
  {
    label: "Peugeot",
    img: "img/peugeot.png",
    link: "https://peugeot-motocycles.com/fr/",
  },
  {
    label: "Gas Gas",
    img: "img/gas-gas.png",
    link: "https://www.gasgas.com/",
  },
  {
    label: "Bimota",
    img: "img/bimota.png",
    link: "https://bimota.it/?lang=en",
  },
  {
    label: "Aprilia",
    img: "img/aprilia.png",
    link: "https://www.aprilia.com/",
  },
  {
    label: "Benelli",
    img: "img/benelli.png",
    link: "https://www.benelli.com/",
  },
  {
    label: "Ducati",
    img: "img/ducati.png",
    link: "https://www.ducati.com/",
  },
  {
    label: "Moto Guzzi",
    img: "img/moto-guzzi.png",
    link: "https://www.motoguzzi.com/",
  },
  {
    label: "Piaggio",
    img: "img/piaggio.png",
    link: "https://www.piaggio.com/",
  },
  {
    label: "MV Agusta",
    img: "img/mvagusta.png",
    link: "https://www.mvagusta.com/",
  },
  {
    label: "Vespa",
    img: "img/vespa.png",
    link: "https://storeusa.vespa.com/",
  },
  {
    label: "Zero",
    img: "img/zero.png",
    link: "https://www.zeromotorcycles.com/",
  },
  {
    label: "Norton",
    img: "img/norton.png",
    link: "https://www.nortonmotorcycles.com/",
  },
  {
    label: "Lambretta<",
    img: "img/lambretta.png",
    link: "https://www.lambretta.com/",
  },
  {
    label: "Beta",
    img: "img/beta.png",
    link: "https://www.betamotor.com/en/",
  },
  {
    label: "Bajaj",
    img: "img/bajaj.png",
    link: "https://www.bajajauto.com/",
  },
];
