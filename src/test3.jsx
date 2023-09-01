import { useState } from "react";

const Test3 = () => {
  // Creating constant "blogs" and using useState
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "How To Learn React",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, numquam adipisci odio dolorem in totam iste quasi eligendi ipsa reiciendis, dolores eos earum nam quia recusandae sapiente soluta pariatur excepturi?",
      author: "Folorunsho",
    },
    {
      id: 2,
      title: "Learning Components in React",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa fugit quo laboriosam consequuntur magni voluptate deleniti ad maxime dolores!",
      author: "Enzo",
    },
    {
      id: 3,
      title: "React Props",
      body: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odit inventore ea! Omnis facilis officia quibusdam. Officiis asperiores animi minus et illum cum. Laboriosam, ullam!",
      author: "Tonilo",
    },
  ]);

  return (
    // Output Data from the Blog array

    //METHOD 1
    // <div className="Blogs">
    //   <div className="blog1">
    //     <span>
    //       <h2>Title 1:</h2>
    //       <p>{blogs[0].title}</p>
    //     </span>

    //     <span>
    //       <h2>Body 1:</h2>
    //       <p>{blogs[0].body}</p>
    //     </span>
    //     <span>
    //       <h2>Author 1:</h2>
    //       <p>{blogs[0].author}</p>
    //     </span>
    //   </div>

    //   <br />
    //   <br />
    //   <div className="blog2">
    //     <span>
    //       <h2>Title 2:</h2>
    //       <p>{blogs[1].title}</p>
    //     </span>

    //     <span>
    //       <h2>Body 2:</h2>
    //       <p>{blogs[1].body}</p>
    //     </span>
    //     <span>
    //       <h2>Author 2:</h2>
    //       <p>{blogs[1].author}</p>
    //     </span>
    //   </div>

    //   <br />
    //   <br />

    //   <div className="blog3">
    //     <span>
    //       <h2>Title 3:</h2>
    //       <p>{blogs[2].title}</p>
    //     </span>

    //     <span>
    //       <h2>Body 3:</h2>
    //       <p>{blogs[2].body}</p>
    //     </span>
    //     <span>
    //       <h2>Author 3:</h2>
    //       <p>{blogs[2].author}</p>
    //     </span>
    //   </div>
    // </div>

    <div className="Blogs">
      {blogs.map((test) => (
        <div className="blog-preview" key={test.id}>
          <h2>{test.title}</h2>
          <p>Written by {test.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Test3;
