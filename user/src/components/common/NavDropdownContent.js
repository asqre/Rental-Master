import React from "react";
import NavDropdownItem from "./NavDropdownItem";
import {
  aboutItems,
  aboutPosts,
  certificationItems,
  certificationPosts,
  courseItems,
  coursePosts,
} from "../../data";
import NavDropDownPost from "./NavDropDownPost";

const NavDropdownContent = ({ activeDropdown }) => {
  let dropDownItems = [];
  let dropDownPosts = [];

  switch (activeDropdown) {
    case "about":
      dropDownItems = aboutItems;
      dropDownPosts = aboutPosts;
      break;
    case "courses":
      dropDownItems = courseItems;
      dropDownPosts = coursePosts;
      break;
    case "certification":
      dropDownItems = certificationItems;
      dropDownPosts = certificationPosts;
      break;
    default:
      break;
  }

  return (
    <div className="px-[5%] sm:px-[15%] flex flex-row justify-between items-start space-x-4">
      <div className="grid grid-cols-2 gap-4">
        {dropDownItems.map((item, index) => (
          <NavDropdownItem
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>

      <div className="flex flex-col space-y-4">
        <text
          className="text-[#5F6368]"
          style={{
            fontWeight: "500",
            fontSize: ".875rem",
            lineHeight: "1.71",
            letterSpacing: ".5px",
            textTransform: "uppercase",
          }}
        >
          Latest Posts
        </text>
        <div className="grid grid-cols-2 gap-4">
          {dropDownPosts.map((post, index) => (
            <NavDropDownPost
              key={index}
              title={post.title}
              date={post.date}
              imgSrc={post.imageSrc}
              href={post.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdownContent;
