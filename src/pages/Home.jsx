import React, { useCallback, useEffect, useState } from "react";
import { NoteButton, NoteCard, NoteList, UserInfo, UserNotes, UserProfile } from "../styles/user-section";
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cards from './util/data';
import { Note, NoteBody, NoteFooter, NoteHeader, SaveButton } from "../styles/notes";
import { HomeContainer } from "../styles/home";

const Home = () => {
    const [title, setTitle] = useState("Type Your Title Here");
    const [text, setText] = useState("Type Your Notes Here");
    const [created, setCreated] = useState("00/00/0000");
    const [updated, setUpdated] = useState("00/00/0000");
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    const setCard = useCallback((card) => {
        const textEl = document.getElementById("text-note");
        textEl.focus();

        setText(card?.text);
        setTitle(card?.title);
        setCreated(card?.created);
        setUpdated(card?.updated);
    })

    const newCard = useCallback(() => {
        const titleEl = document.getElementById("title-note");
        titleEl.focus();

        setTitle("");
        setText("");
        setCreated(date);
        setUpdated(date);
    })

    const saveNote = () => {
        const newNote = {
            title: document.getElementById("title-note").value,
            text: document.getElementById("text-note").value,
            created: date,
            updated: date
        };

        console.log(newNote);

        setText("");
        setTitle("");
        setCreated("00/00/0000");
        setUpdated("00/00/0000");
    }


    return (
        <>
            <HomeContainer>
                <UserProfile>
                    <UserInfo>
                        <div className="logo">
                            <p>T</p>
                        </div>
                        <div className="user-info">
                            <p className="user-name">Thiago Sousa Farias</p>
                            <p className="user-email">thiago@gmail.com</p>
                        </div>
                    </UserInfo>
                    <UserNotes>
                        <NoteButton onClick={_ => newCard()}>
                            New
                        </NoteButton>
                        <NoteList>
                            {cards.map((card, index) => {
                                return <NoteCard id={index} onDoubleClick={_ => setCard(card)}>
                                    <div className="header">
                                        <h3>{card?.title}</h3>
                                        <FontAwesomeIcon className="delete" icon={faTrash} />
                                    </div>
                                    <q>{card?.text}</q>
                                    <p>{card?.created}</p>
                                </NoteCard>
                            })}
                        </NoteList>
                    </UserNotes>
                </UserProfile>
                <Note>
                    <NoteHeader>
                        <input id="title-note"
                            type="text"
                            name="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <SaveButton onClick={_ => saveNote()}>
                            Save
                        </SaveButton>
                    </NoteHeader>
                    <NoteBody>
                        <textarea name="text-note"
                            id="text-note"
                            cols="30"
                            rows="10"
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                    </NoteBody>
                    <NoteFooter>
                        <p>Created at: {created}</p>
                        <p>Updated at: {updated}</p>
                    </NoteFooter>
                </Note>
            </HomeContainer>
        </>
    )
}

export default Home;