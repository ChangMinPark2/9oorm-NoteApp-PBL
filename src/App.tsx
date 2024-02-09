import React from "react";
import "./App.css";
import Nav from "./componets/Sidebar/Nav/Nav"
import Main from "./componets/Main"
import { useSelector } from "react-redux";
import { RootState } from "./store";
import CreateTagsModal from "./componets/Modal/CreateTagsModal/CreateTagsModal"
import CreateNoteModal from "./componets/Modal/CreateNoteModal/CreateNoteModal";
import ReadNoteModal from "./componets/Modal/ReadNoteModal/ReadNoteModal";

function App() {
    const modal = useSelector((state: RootState) => state.modalSlice);

    return (
        <div className="App">
            <Nav />
            <Main />
            {modal.tag_create && <CreateTagsModal />}
            {modal.note_edit && <CreateNoteModal />}
            {modal.note_read && <ReadNoteModal />}
        </div>
    );
}

export default App;