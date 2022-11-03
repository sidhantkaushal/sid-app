import "./App.css";
import Card from "./components/Card";

const data = [
  {
    url:
      "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-04/Man%20United%20squad%20list.jpg?itok=zlwqh7Cb",
    prodName: "kicks",
    _id: 1,
    class: 32,
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae commodi, autem iusto neque reiciendis dolores harum, rerum quae, quia laudantium. Sed dignissimos minus eaque perferendis, magni neque similique. Quibusdam?",
  },
  {
    url:
      "https://www.telegraph.co.uk/content/dam/football/2019/05/01/TELEMMGLPICT000195477369_trans_NvBQzQNjv4BqeK8ehqBZJSTiVTgumtathbH8AD1LYTdJsoz8pklmEgw.jpeg",
    prodName: "jerseys",
    _id: 2,
    class: 32,
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae commodi, autem iusto neque reiciendis dolores harum, rerum quae, quia laudantium. Sed dignissimos minus eaque perferendis, magni neque similique. Quibusdam?",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "jackets",
    _id: 3,
    class: 32,
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae commodi, autem iusto neque reiciendis dolores harum, rerum quae, quia laudantium. Sed dignissimos minus eaque perferendis, magni neque similique. Quibusdam?",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "hoodies",
    _id: 4,
    class: 32,
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae commodi, autem iusto neque reiciendis dolores harum, rerum quae, quia laudantium. Sed dignissimos minus eaque perferendis, magni neque similique. Quibusdam?",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "hoodies",
    _id: 4,
    class: 32,
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae commodi, autem iusto neque reiciendis dolores harum, rerum quae, quia laudantium. Sed dignissimos minus eaque perferendis, magni neque similique. Quibusdam?",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "hoodies",
    _id: 4,
    class: 32,
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae commodi, autem iusto neque reiciendis dolores harum, rerum quae, quia laudantium. Sed dignissimos minus eaque perferendis, magni neque similique. Quibusdam?",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "hoodies",
    _id: 4,
    class: 32,
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae commodi, autem iusto neque reiciendis dolores harum, rerum quae, quia laudantium. Sed dignissimos minus eaque perferendis, magni neque similique. Quibusdam?",
  },
  {
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    prodName: "hoodies",
    _id: 4,
    class: 32,
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae commodi, autem iusto neque reiciendis dolores harum, rerum quae, quia laudantium. Sed dignissimos minus eaque perferendis, magni neque similique. Quibusdam?",
  },
];

function App() {
  const title = "we rockk";
  return (
    <div className="container">
      <h1>{title}</h1>
      <br />
      <div className="row">
        {data.map((val, i) => {
          return (
            <div className="col-6 col-sm-6 col-md-4 p-3">
              <Card values={val} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
