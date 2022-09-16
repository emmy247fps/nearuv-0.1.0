import { useState } from "react";
import {
  IoMdSend,
  IoMdArrowRoundBack,
  IoIosHeartEmpty,
  IoIosChatboxes,
} from "react-icons/io";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TheAvatar } from "../../../comp-files/components";
import { commentPage } from "../../../utilities";

const MobileComment = () => {
  const [displayComment, setDisplayComment] = useState(false);
  return (
    <div className="mobileComment">
      <div className="section">
        {commentPage?.map((item, i) => (
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
                  <div className="mobileCommentIcons">
                    <span className="notify">
                      <AiFillLike size={15} />
                      <small className="number">50 </small>
                    </span>

                    <nav className="notify">
                      <AiFillDislike size={15} />
                      <small className="number">50 </small>
                    </nav>
                    <nav className="notify">
                      <nav className="notify">
                        <IoIosChatboxes size={15} />
                      </nav>
                      <small className="number">50 </small>
                    </nav>
                  </div>
                  <div>
                    <span>{item.commentTime} </span>
                    <span>
                      <b> Reply</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileComment;
