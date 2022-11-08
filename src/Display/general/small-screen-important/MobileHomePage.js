import React from "react";
import "../../../comp-files/app-style/_mobileHomePage.scss";
import Status from "../../.././comp-files/components/Status";
import TheAvatar from "../../../comp-files/components/TheAvatar";
import { AiOutlineMessage, AiOutlineLike } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import { MdSaveAlt } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

const MobileHomePage = () => {
  return (
    <>
      <Status />
      <div className="mobileHomePageContainer">
        <div className="cardContainer">
          <div className="mobileHomePageMainPostCard">
            <div className="mobileHomePageMainPostCardHeader">
              <TheAvatar imgUrl="/profile.jpg" />
              <span className="mobileHomePageMainPostCardWrapInfo">
                <p>emmanuel</p>
                <p>emmy</p>
                <p>8sec</p>
              </span>
            </div>
            <div className="mobileHomePageMainPostCardContent">
              <span>
                A text is a written or spoken passage,A text is a written or
                spoken passage, especially one that is used in a school or
                university for discussion or in an examination. I'll read the
                text aloud .
              </span>
            </div>
            <div className="mobileHomePageMainPostCardWrapInfoImg">
              <img
                src="https://observer.com/wp-content/uploads/sites/2/2017/03/c6qa1mmwcaelrfk.jpg?quality=80&w=1200&strip"
                alt=""
              />
            </div>
            <div className="mobileHomePageCardIconContainer">
              <div className="mobileHomePageCardIcon">
                <AiOutlineMessage size={30} />
                <AiOutlineLike size={30} />
                <BiRepost size={30} />
                <MdSaveAlt size={30} />
              </div>
              <div>
                <IoMdMore size={30} />
              </div>
            </div>
          </div>
          <div className="MobileProductScrollableContainer">
            <div className="MobileProductScrollable">
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="mobileHomePageContainer">
        <div className="cardContainer">
          <div className="mobileHomePageMainPostCard">
            <div className="mobileHomePageMainPostCardHeader">
              <TheAvatar imgUrl="/profile.jpg" />
              <span className="mobileHomePageMainPostCardWrapInfo">
                <p>emmanuel</p>
                <p>emmy</p>
                <p>8sec</p>
              </span>
            </div>
            <div className="mobileHomePageMainPostCardContent">
              <span>
                A text is a written or spoken passage,A text is a written or
                spoken passage, especially one that is used in a school or
                university for discussion or in an examination. I'll read the
                text aloud .
              </span>
            </div>
            <div className="mobileHomePageMainPostCardWrapInfoImg">
              <img
                src="https://observer.com/wp-content/uploads/sites/2/2017/03/c6qa1mmwcaelrfk.jpg?quality=80&w=1200&strip"
                alt=""
              />
            </div>
            <div className="mobileHomePageCardIconContainer">
              <div className="mobileHomePageCardIcon">
                <AiOutlineMessage size={30} />
                <AiOutlineLike size={30} />
                <BiRepost size={30} />
                <MdSaveAlt size={30} />
              </div>
              <div>
                <IoMdMore size={30} />
              </div>
            </div>
          </div>
          <div className="MobileProductScrollableContainer">
            <div className="MobileProductScrollable">
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="mobileHomePageContainer">
        <div className="cardContainer">
          <div className="mobileHomePageMainPostCard">
            <div className="mobileHomePageMainPostCardHeader">
              <TheAvatar imgUrl="/profile.jpg" />
              <span className="mobileHomePageMainPostCardWrapInfo">
                <p>emmanuel</p>
                <p>emmy</p>
                <p>8sec</p>
              </span>
            </div>
            <div className="mobileHomePageMainPostCardContent">
              <span>
                A text is a written or spoken passage,A text is a written or
                spoken passage, especially one that is used in a school or
                university for discussion or in an examination. I'll read the
                text aloud .
              </span>
            </div>
            <div className="mobileHomePageMainPostCardWrapInfoImg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="mobileHomePageCardIconContainer">
              <div className="mobileHomePageCardIcon">
                <AiOutlineMessage size={30} />
                <AiOutlineLike size={30} />
                <BiRepost size={30} />
                <MdSaveAlt size={30} />
              </div>
              <div>
                <IoMdMore size={30} />
              </div>
            </div>
          </div>
          <div className="MobileProductScrollableContainer">
            <div className="MobileProductScrollable">
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="MobileProductScrollableItem">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default MobileHomePage;
