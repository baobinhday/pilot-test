import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import './customCard.scss';

const CustomCard = ({ classExt, card, children, ...other }) => {
  const onClickCard = (e) => {
    if (e && other.onClickCard) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (other.onClickCard) {
      other.onClickCard(card);
    }
  };
  if (!card) return <div />;
  return (
    <Card
      onClick={onClickCard}
      className={classNames('custom-card', classExt)}
      variant="outlined"
    >
      <CardHeader
        avatar={card.avatar}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={card.title}
        subheader={card.sub}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

CustomCard.defaultProps = {
  classExt: '',
  card: null,
  onClickCard: null,
};

export default CustomCard;
