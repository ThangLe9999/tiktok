import { useEffect, useState } from "react";
// 1. useEffect(cb) // - GỌi callback mỗi khi component re-render // - Gọi callback sau khi component thêm element vào doom
// 2. useEffect(cb,[])
// 3. useEffect(cb,[deps]) // ----------------------------- // Callback luôn luôn được gọi sau khi component mounted
//
// const tabs = ["posts", "comments", "albums"];

const lessons = [
  {
    id: 1,
    name: "ReactJS la gi? Tai sao nen hoc ReactJS?",
  },
  {
    id: 2,
    name: "SPA/MPA la gi??",
  },
  {
    id: 3,
    name: "SocketIO?",
  },
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  //   const [title, setTitle] = useState("");
  //   const [posts, setPosts] = useState([]);
  //   const [type, setType] = useState("posts");
  //   const [showGoToTop, setShowGoToTop] = useState(false);
  //   const [width, setWidth] = useState(window.innerWidth);
  //   const [countdown, setCountdown] = useState(180);
  //   const [avatar, setAvatar] = useState();

  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       setCountdown((prevState) => prevState - 1);
  //     }, 1000);

  //     return (loop) => {
  //       clearInterval(timerId);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //       .then((res) => res.json())
  //       .then((posts) => {
  //         setPosts(posts);
  //       });
  //   }, [type]);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       //   if (window.scrollY >= 200) {
  //       //     setShowGoToTop(true);
  //       //   } else {
  //       //     setShowGoToTop(false);
  //       //   }
  //       setShowGoToTop(window.scrollY >= 200);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   });

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setWidth(window.innerWidth);
  //     };
  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     return () => {
  //       avatar && URL.revokeObjectURL(avatar.preview);
  //     };
  //   }, [avatar]);

  //   const handlePreviewAvatar = (e) => {
  //     const file = e.target.files[0];
  //     file.preview = URL.createObjectURL(file);
  //     setAvatar(file);
  //   };

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333",
              fontWeight: "bold",
              fontSize: 25,
              cursor: "pointer",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>

      {/* <br />
      <br />
      <input type="file" onChange={handlePreviewAvatar} /> <br />
      <br />
      {avatar && <img src={avatar.preview} width="20%" />}
      <h1>Countdown: {countdown}s</h1>
      <h1>{width}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "#000",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title || post.name} <br /> <br />
          </li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            color: "#fff",
            position: "fixed",
            bottom: "50px",
            right: "50px",
            fontSize: "20px",
            backgroundColor: "#000",
            cursor: "pointer",
            borderRadius: "20px",
            padding: "5px 15px",
            fontWeight: "bold",
          }}
        >
          Go to top
        </button>
      )} */}
    </div>
  );
}

export default Content;
