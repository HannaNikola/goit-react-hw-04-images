import { ButtonLoad } from './Button.styled';

export const Button = ({ onClick, disabled }) => {
    return (
        <div>
            <ButtonLoad type="button" className="button" onClick={onClick} disabled={disabled}>Load more...</ButtonLoad>
        </div>
    )
}