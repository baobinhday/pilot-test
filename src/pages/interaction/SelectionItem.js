import classNames from "classnames";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const SelectionItem = ({ title, sub, des, classExt }) => (
  <div className={classNames("selected-item", classExt)}>
    <div className="selected-item__title">{title}</div>
    <div className="selected-item__sub">{sub}</div>
    <div className="selected-item__des">{des}</div>
    <IconButton className="selected-item__icon" aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  </div>
);

SelectionItem.defaultProps = {
  title: "",
  sub: "",
  des: "",
  classExt: ""
};
export default SelectionItem;