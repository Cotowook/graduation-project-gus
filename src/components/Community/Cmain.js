import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import './Cmain.css';
import Cmain_map from './Cmain_map';
import Cbest from './Cbest';
// import loone from '../img/loone.png';
// import lotwo from '../img/lotwo.png';
// import lothree from '../img/lothree.png';

function Cmain() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/community/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error:', error));
  }, []);


return (
  <div className="Cmain">
    <div className="cmain_main">
      <div className="cmain_ab">
        <div className="cmain_a" />
      </div>

      <div className="cmain_crud">
        <div className="cmain_button">
          <Link to="/Community/Cbest" style={{ textDecoration: "none", color: "black" }}>
            <button className="cmain_bt">글 작성</button>
          </Link>
        </div>

        <hr />

        <div className="crud_main">
          <div className="crud_map">
            <table>
              <thead>
                <tr>
                  <th>작성자</th>
                  <th>제목</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.author}</td>
                    <td>{post.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="cmain_next">
        <button>이전</button>1 2 3 4 5<button>다음</button>
      </div>
    </div>

    <Routes>
      <Route path="Cbest" element={<Cbest />} />
    </Routes>
  </div>
);


}

export default Cmain;

