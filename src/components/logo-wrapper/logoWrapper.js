import React from "react";

function LogoWrapper (props) {
    const {src='',title=''} = props;

    const getBackgroundImageStyle = url => ({
        'backgroundImage': `url('${url}')`,
    });
    const emptyImageClass = src ? '' : '__empty';
    return (
        <div title={title} className={`logo__wrapper${emptyImageClass}`} style={getBackgroundImageStyle(src)} />
    )
}
export default LogoWrapper;