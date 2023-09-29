import classes from './Button.module.css';
function PrimaryButton(props) {
    return (
        <button className={classes.buttonprimary}>{props.name}</button>
    )
}

export default PrimaryButton;