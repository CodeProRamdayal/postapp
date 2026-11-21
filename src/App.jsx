import { useState } from "react";
import MainHeader from "./component/MainHeader";
import PostList from "./component/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openModal = () => setModalIsVisible(true);
  const closeModal = () => setModalIsVisible(false);

  return (
    <>
      <MainHeader onCreatePost={openModal} />
      <PostList
        modalIsVisible={modalIsVisible}
        onCloseModal={closeModal}
      />
    </>
  );
}

export default App;
