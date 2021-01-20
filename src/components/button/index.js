import LinkWrapper from '../link-wpapper/linkWrapper';

function Button (props) {
    const { text="Get More", onSort=null, typeSort=null, dataRole="", link=null, dataActive=false } = props;
    return (
        <>
            {dataRole==='link' && link ? (
                <LinkWrapper link={link}>
                    <button className="action_btn" data-role="link">{text}</button>
                </LinkWrapper>
            ) : (
                <button className="action_btn" data-active={dataActive} data-role="sort" onClick={()=>onSort(typeSort)}>{text}</button>
            )}
        </>)

}
export default Button;