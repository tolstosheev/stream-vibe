import './Button.scss'
import classNames from "classnames";
import Icon from "@/components/Icon";

const Button = (props) => {
    const {
        type = 'button',
        href,
        target,
        className,
        label,
        isLabelHidden = false,
        iconName,
        iconPosition = 'before',
        mode = '',
    } = props;

    const isLink = href !== undefined;
    const Component = isLink ? 'a' : 'button';
    const linkProps = {href, target};
    const buttonProps = {type}
    const specificProps = isLink ? linkProps : buttonProps;
    const title = isLabelHidden ? label : undefined;
    const IconComponent = iconName && (
        <Icon
            className='button__icon'
            name={iconName}
        />
    )

    return (
        <Component
            className={classNames(className, 'button', {
                [`button--${mode}`]: mode,
            })}
            aria-label = {title}
            title = {title}
            {...specificProps}
        >
            {iconPosition === 'before' && IconComponent}
            {!isLabelHidden && (
                <span className='button__label'>{label}</span>
            )}
            {iconPosition === 'after' && IconComponent}
        </Component>
    )
}

export default Button