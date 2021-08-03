import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "./customRadioGroup.scss";
import classNames from 'classnames';

const CustomRadioGroup = ({ title, value, handleChange, options, classExt }) => (
  <FormControl className={classNames("custom-radio-group", classExt)} component="div">
    <FormLabel component="legend">{title}</FormLabel>
    <RadioGroup aria-label="custom-radio" name={value} value={value} onChange={handleChange}>
      {options.map(option => (
        <FormControlLabel value={option.value} control={<Radio />} label={option.text} disabled={option.disabled} />
      ))}
    </RadioGroup>
  </FormControl>
);

CustomRadioGroup.defaultProps = {
  title: "",
  value: undefined,
  handleChange: () => {},
  options: [],
  classExt: ""
};

export default CustomRadioGroup;