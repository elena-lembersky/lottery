function LogoWrapper (props) {
    const {src=''} = props;
    const getBackgroundImageStyle = url => ({
        'background-image': `url('${url}')`,
    });
    return (
        <div style={getBackgroundImageStyle(src)}></div>
    )
}
export default LogoWrapper;