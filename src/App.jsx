import "./App.css";
import Test3 from "./test3.jsx";
import { useState } from "react";
import IMG1 from "./assets/clickfunnels sales funnel clickfunnels landing page clickfunnels sales funnel.png";
import IMG2 from "./assets/clickfunnels sales funnel clickfunnels landing page clickfunnels sales funnel.png";
import IMG3 from "./assets/design wix website, wordpress woocommerce or move wordpress to wix, redesign wix.png";
import IMG4 from "./assets/design wix, wix ecommerce, wix store, wix redesign wix ecommerce, wix store, wix.png";
import IMG5 from "./assets/kajabi.png";
import IMG6 from "./assets/square website design squarespace redesign square online store square website.png";
import IMG7 from "./assets/squarespace redesign squarespace design.png";
const title = ``;
const desc = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis mollitia praesentium doloremque, reiciendis soluta consequatur. Cum sint corrupti, tempora excepturi, eum placeat alias suscipit provident modi
        veniam ex iure.`;
// const Book = ({ title, desc }) => {

//   return (
//     <div className="book">
//       <img src={IMG1} alt="" />
//       <div className="title">
//         <h4>{title} Clickfunnels Gig</h4>
//       </div>
//       <div className="desc">
//         <p> {desc}</p>
//       </div>
//     </div>
//   );
// };

const Booklist = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: <h4>{title} Clickfunnels Sales Funnel</h4>,
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis mollitia praesentium doloremque, reiciendis soluta consequatur. Cum sint corrupti, tempora excepturi, eum placeat alias suscipit provident modi
        veniam ex iure.`,
      img: <img src={IMG1} alt="" />,
    },

    {
      id: 2,
      title: <h4>{title} Clickfunnels Landing Page</h4>,
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis mollitia praesentium doloremque, reiciendis soluta consequatur. Cum sint corrupti, tempora excepturi, eum placeat alias suscipit provident modi
        veniam ex iure.`,
      img: <img src={IMG2} alt="" />,
    },

    {
      id: 3,
      title: <h4>{title} Wix to Wordpress</h4>,
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis mollitia praesentium doloremque, reiciendis soluta consequatur. Cum sint corrupti, tempora excepturi, eum placeat alias suscipit provident modi
        veniam ex iure.`,
      img: <img src={IMG3} alt="" />,
    },

    {
      id: 4,
      title: <h4>{title} Wix Ecommerce</h4>,
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis mollitia praesentium doloremque, reiciendis soluta consequatur. Cum sint corrupti, tempora excepturi, eum placeat alias suscipit provident modi
        veniam ex iure.`,
      img: <img src={IMG4} alt="" />,
    },

    {
      id: 5,
      title: <h4>{title} Kajabi</h4>,
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis mollitia praesentium doloremque, reiciendis soluta consequatur. Cum sint corrupti, tempora excepturi, eum placeat alias suscipit provident modi
        veniam ex iure.`,
      img: <img src={IMG5} alt="" />,
    },

    {
      id: 6,
      title: <h4>{title} Squarespace Design</h4>,
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis mollitia praesentium doloremque, reiciendis soluta consequatur. Cum sint corrupti, tempora excepturi, eum placeat alias suscipit provident modi
        veniam ex iure.`,
      img: <img src={IMG6} alt="" />,
    },

    {
      id: 7,
      title: <h4>{title} Clickfunnels Gig</h4>,
      desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam omnis mollitia praesentium doloremque, reiciendis soluta consequatur. Cum sint corrupti, tempora excepturi, eum placeat alias suscipit provident modi
        veniam ex iure.`,
      img: <img src={IMG7} alt="" />,
    },
  ]);

  return (
    <div className="Books">
      {books.map((my) => (
        <div className="books-preview" key={my.id}>
          <h1>{my.id}</h1>
          <span className="images">{my.img}</span>
          <h2>{my.title}</h2>
          <p>{my.desc}</p>
        </div>
      ))}
      <Test3 />
    </div>
    // <>
    //   <div className="book-container">
    //     <Book title="Wix" />
    //     <Book />
    //     <Book />
    //     <Book desc={desc} />
    //     <Book />
    //   </div>
    // </>
  );
};

export default Booklist;
