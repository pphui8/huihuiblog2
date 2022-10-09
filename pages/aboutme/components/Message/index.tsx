import React, { useEffect, useState } from 'react'
import { BsFillMarkdownFill } from "react-icons/bs";
import { VscOpenPreview } from "react-icons/vsc";
import styles from "./markdown.module.css";
import mystyles from "./Message.module.css";
import ReactMarkdown from 'react-markdown';
import toast from 'react-hot-toast';
import config from '../../../../config';

type Comment = {
  id: number
  username: string
  url: string
  value: string
  time: string
}

function Msg({msg} : {msg: Comment}) {
  const isNight = false;
  const toUrl = () => {
    if (msg.url === "none") {
      return;
    }
    window.open(msg.url, "_blank");
  };
  return (
    <div className={mystyles.msg}>
      <div className={mystyles.msgTitle} onClick={toUrl}>
        {msg.username + ":"}
      </div>
      <div
        className={
          isNight
            ? styles.markdown_body_night + " " + mystyles.msgArticle
            : styles.markdown_body + " " + mystyles.msgArticle
        }
      >
        <ReactMarkdown children={msg.value}></ReactMarkdown>
      </div>
      <div className={mystyles.timeTag}>{msg.time}</div>
    </div>
  );
}

export default function index() {
  const isNight = false;
  const baseURL = config.baseURL;
  const [message, setMessage] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const toMdDoc = () => {
    window.location.href = "https://www.markdownguide.org/";
  };
  const mdPreview = () => {
    let inputMsgCpn = document.querySelector("#userMessage") as HTMLDivElement | null;
    let inputMsg = inputMsgCpn === null ? "" : inputMsgCpn.innerHTML;
    if (showPreview === true) {
      setShowPreview(false);
      return;
    }
    if (inputMsg !== "") {
      setShowPreview(true);
      setMessage(inputMsg);
    } else {
      setShowPreview(false);
    }
  };
  const getComment = () => {
    fetch(baseURL + `comment`)
      .then((res) => res.json())
      .then((res: Comment[]) => {
        res.sort((a, b) => b.id - a.id);
        setComments(res);
      })
      .catch((err) => toast.error("request failed"));
  };

  useEffect(() => {
    getComment();
  }, []);

  const submit = () => {
    let inputUsernameCmp = document.querySelector(
      "#inputUsername"
    ) as HTMLDivElement | null;
    let inputUsername = inputUsernameCmp === null ? "" : inputUsernameCmp.innerHTML;
    let inputMsgCmp = document.querySelector("#userMessage") as HTMLDivElement | null;
    let inputMsg = inputMsgCmp === null ? "" : inputMsgCmp.innerHTML;
    if (inputUsername === "") {
      toast.error("please input a nickname you like");
      return;
    }
    if (inputMsg === "") {
      toast.error("please input your message");
      return;
    }
    toast.promise(submitData(inputUsername, inputMsg), {
      loading: "submitting...",
      success: "submitted!",
      error: "failed!",
    });
  };

  const submitData = (inputUsername: string, inputMsg: string) => {
    let inputUrlCmp = document.querySelector("#inputUrl") as HTMLDivElement | null;
    let inputUrl = inputUrlCmp === null ? "" : inputUrlCmp.innerHTML;
    if (inputUrl === "") {
      inputUrl = "none";
    }
    let result = fetch(baseURL + `addcomment`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        username: inputUsername.trim(),
        url: inputUrl.trim(),
        value: inputMsg.trim(),
        token: "pphui8",
        time: new Date().toLocaleString().split(" ")[0],
      }),
    }).then((res) => {
      document.querySelector("#inputUsername")!.innerHTML = "";
      document.querySelector("#inputUrl")!.innerHTML = "";
      document.querySelector("#userMessage")!.innerHTML = "";
      let comment = {
        id: Number.MAX_SAFE_INTEGER,
        username: inputUsername.trim(),
        url: inputUrl.trim(),
        value: inputMsg.trim(),
        time: new Date().toLocaleString().split(" ")[0],
      };
      setComments([comment, ...comments]);
    });
    return result;
  };

  return (
    <div
      className={
        isNight ? mystyles.messageContainerNight : mystyles.messageContainer
      }
    >
      <div className={mystyles.editContainer}>
        <div className={mystyles.user}>
          <input
            type="text"
            placeholder="nickname"
            id="inputUsername"
            autoComplete="off"
            className={mystyles.input}
          />
          <input
            type="text"
            placeholder="url (option)"
            id="inputUrl"
            autoComplete="off"
          />
        </div>
        <textarea
          maxLength={256}
          placeholder="leave a message"
          id="userMessage"
          className={mystyles.textarea}
        ></textarea>
        <span className={mystyles.previewBtn} onClick={mdPreview}>
          <VscOpenPreview />
        </span>
        <div className={mystyles.messageBottom}>
          <div className={mystyles.mdIcon} onClick={toMdDoc}>
            <BsFillMarkdownFill />
          </div>
          <div className={mystyles.submit} id="submit" onClick={submit}>
            submit
          </div>
        </div>
      </div>
      {showPreview ? (
        <div
          className={
            isNight
              ? mystyles.preview + " " + styles.markdown_body_night
              : mystyles.preview + " " + styles.markdown_body
          }
        >
          <ReactMarkdown children={message}></ReactMarkdown>
        </div>
      ) : null}
      <div className={mystyles.publshedMsg}>
        {comments.map((item, index) => {
          return <Msg key={index} msg={item}></Msg>;
        })}
      </div>
    </div>
  );
}