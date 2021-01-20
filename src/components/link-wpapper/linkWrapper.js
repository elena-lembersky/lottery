function linkWrapper (props) {
    const { link='' } = props;
    if (!link) return false;
    return (
        <a className="link-wrapper" href={link}>{props.children}</a>
    )
}
export default linkWrapper;