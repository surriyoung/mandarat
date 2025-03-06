import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const MyList = ({ categoryImg, planTitle }) => {
  return (
    <Link to="/my-plan/my-plan-detail">
      <div className="my-list-box">
        <img src={categoryImg} alt="category" className="plan-category-img" />
        <span className="plan-title">{planTitle}</span>
        <IconButton
          sx={{
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        >
          <MoreHorizIcon sx={{ color: "black", height: 24 }} />
        </IconButton>
      </div>
    </Link>
  );
};

export default MyList;
