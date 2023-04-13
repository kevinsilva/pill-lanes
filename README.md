# Pill Lanes

It's an animated, interactive web component.

![preview](/img/pill-lanes.gif)

Pill-Lanes creates a panel container with moving lanes that have logos on a "pill" format. By moving at different speeds, they show all logos contained in it. Clicking on a "pill" will redirect you to a website.

This project is part of my journey of learning how to code.

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-success?style=flat-square&logo=codesandbox)](https://codesandbox.io/p/github/kevinsilva/pill-lanes/master?file=%2FREADME.md&workspace=%257B%2522activeFilepath%2522%253A%2522%252FREADME.md%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clgf0rj6b000x3b6ivfurxyq5%2522%253A%257B%2522key%2522%253A%2522clgf0rj6b000x3b6ivfurxyq5%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A8080%252C%2522key%2522%253A%2522clgf0rj6b000y3b6i9r77nk9a%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clgf0rj6b000x3b6ivfurxyq5%2522%252C%2522spacesOrder%2522%253A%255B%2522clgf0rj6b000x3b6ivfurxyq5%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

## Implementation Details

Tools (libraries) and techniques used.

The initial approach was to clearly define all the constituent elements of the component and classify them as either static or dynamic. This method was primordial to the further separation of concerns and problem thinking clarification. Two main tasks were established: the development of a visual manifestation of the component, using HTML and [SASS](https://sass-lang.com/), and the transcription of the functionality to a single JavaScript file.

Having broken down the first main task into smaller ones, I resorted to [BEM](http://getbem.com/naming/) naming, adapting the already defined elements to the nomenclature. To produce the animation, I have created copies of each lane, each with different moving timings so that the synchronisation creates an illusion of infinite movement.

The second main task started by establishing an array of objects as the data format to be used on the pills. I have transcribed part of the initial problem solving process into unit tests using [Jest](https://jestjs.io/). Small functions were used to create the static and dynamic elements, to organize the provided data into lanes with a maximum of 6 pills, and to render the created elements to the DOM. They are prefixed with the double underscore privacy convention as they are meant to compute business logic, and should not be accessible. Through ES6 modules, I was able to group every small tested "private" function into a single JS file.

## Usage

Instructions for developers that want to use the component.

Import the `pillLanes` function from `"./src/pill-lanes.js"` directory. The first argument is the data array and the second argument is the document element in which the component will be rendered.

```js
<script type="module">
  import {pillLanes} from "./src/pill-lanes.js"; const domEl =
  document.getElementById("test"); pillLanes(data, domEl);
</script>
```

The data to be displayed must be in an array of objects with three properties:

- `label` , the name to be displayed.
- `link`, the link's destination.
- `img`, the image's directory.

```js
const data = [
  {
    label: 'ducati',
    link: 'ducati.com',
    img: 'ducati.com/logo.jpg',
  },
  {
    label: 'yamaha',
    link: 'yamaha.com',
    img: 'yamaha.com/logo.jpg',
  },
];
```

> **! Note**
>
> The component will render a minimum of 1 pill, and a maximum of 30 pills (6 by lane). If more data is provided, it will not be rendered.

I did not include a production bundle because it was not part of my focus for this project.

## Development

Instructions for developers that want to run the code in development mode.

To install the component, clone repository, change into directory on the terminal and install with npm.

```bash
git clone https://github.com/kevinsilva/pill-lanes
cd pill-lanes
npm install
```

To run the application.

```bash
  npm run dev
```

To run the tests.

```bash
  npm test <file>
```

## Credits

Big thanks to my mentor 🎓, [William R. J. Ribeiro](https://github.com/williamrjribeiro/).

All images from:

- [Triumph](https://www.triumphmotorcycles.com/)
- [Harley Davidson](https://www.harley-davidson.com/us/en/index.html")
- [Royal Enfield](https://www.royalenfield.com/)
- [Indian Motorcycle](https://www.indianmotorcycle.com/en-us/)
- [Brixton Motorcycles](https://www.brixton-motorcycles.com/)
- [Victory Motorcycles](https://www.victorymotorcycles.com/)
- [Yamaha](https://www.yamaha-motor.eu/pt/pt/#/)
- [Kawasaki](https://www.kawasaki.com/en-us/)
- [Honda](https://powersports.honda.com)
- [Suzuki](https://suzukicycles.com/)
- [Hyonsung](https://hyosung.pt/)
- [Hero](https://www.heromotocorp.com/)
- [Husqvarna](https://www.husqvarna-motorcycles.com)
- [KTM](https://www.ktm.com/en-us.html)
- [BMW Motorrad](https://www.bmwmotorcycles.com/en/home.html#/filter-all)
- [Peugeot](https://peugeot-motocycles.com/fr/)
- [Gas Gas](https://www.gasgas.com/)
- [Bimota](https://bimota.it/?lang=en)
- [Aprilia](https://www.aprilia.com/)
- [Benelli](https://www.benelli.com/)
- [Ducati](https://www.ducati.com/)
- [Moto Guzzi](https://www.motoguzzi.com/)
- [Piaggio](https://www.piaggio.com/)
- [MV Agusta](https://www.mvagusta.com/)
- [Vespa](https://storeusa.vespa.com/)
- [Zero](https://www.zeromotorcycles.com/)
- [Norton](https://www.nortonmotorcycles.com/)
- [Lambretta](https://www.lambretta.com/)
- [Beta](https://www.betamotor.com/en/)
- [Bajaj](https://www.bajajauto.com/)

Inspiration from [Retool](https://retool.com).

## License

[MIT](https://choosealicense.com/licenses/mit/)
