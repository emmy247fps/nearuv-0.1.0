import React, { useState, useRef } from "react";
// import { productCard } from '../../utilities'
import "../../../comp-files/app-style/_commentPage.scss";
import {
  IoMdSend,
  IoMdArrowRoundBack,
  IoIosHeartEmpty,
  IoIosChatboxes,
} from "react-icons/io";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TheAvatar } from "../../../comp-files/components";
import { Link } from "react-router-dom";
import { commentPage } from "../../../utilities";
import MobileComment from "./MobileComment";

const CommentPage = (props) => {
  const { open, clickHandler, selected, refprop } = props;
  const commentRef = useRef();
  console.table(props);
  const [addedComment, setAddedComment] = useState("");
  let comment = [];
  const username = "testing username";
  const data = {
    text: "testing",
    sellers: "someone",
    comment: "23k",
    views: 400,
    rating: "56k",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addedComment);
  };
  const backHandler = (e) => {
    e.preventDefault();
  };
  if (selected)
    refprop?.current?.scollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="comment">
      <div className="commentSideBar">
        <div className="commentSideBarSection">
          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>
          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>
          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>
          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>

          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>

          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>

          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>

          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>

          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>
          <div className="commentSideBarContainer">
            <TheAvatar imgUrl="/profile.jpg" />
            <div className="commentSideBarContainerDetails">
              <h3>John.Remi</h3>
              <nav className="notify">
                <IoIosChatboxes size={20} />
                <small className="number">50 </small>
              </nav>
              <span className="commentSideBarContainerDetailsDate">
                {" "}
                8/8/22
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="commentBody" ref={commentRef}>
        <div className="section">
          {commentPage?.map((item, i) => (
            <div className="largeScreen">
              <div className="commentSection">
                <div className="img">
                  <TheAvatar imgUrl="/profile.jpg" />
                </div>

                <div className="commentWrap">
                  <div className="commentNote">
                    <span className="commentNoteName">{item.commentName} </span>
                    <span>{item.commentText} </span>
                    <br />
                    <div className="muted">
                      <span>{item.commentTime} </span>
                      <span>
                        <b> Reply</b>
                      </span>
                    </div>
                  </div>

                  <div className="commentLikeIcon">
                    <nav className="notify">
                      <AiFillLike size={20} />
                      <small className="number">50 </small>
                    </nav>

                    <nav className="notify">
                      <AiFillDislike size={20} />
                      <small className="number">50 </small>
                    </nav>
                    <nav className="notify">
                      <nav className="notify">
                        <IoIosChatboxes size={20} />
                      </nav>
                      <small className="number">50 </small>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <MobileComment className="mobileComment" />

          <div className="commentFooter" onSubmit={handleSubmit}>
            <TheAvatar link={username} imgUrl="/profile.jpg" />
            <input
              className="textarea"
              type="text"
              onChange={(e) => setAddedComment(e.target.value)}
              placeholder="Add comments"
              onFocus={() => console.log("test")}
            />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
