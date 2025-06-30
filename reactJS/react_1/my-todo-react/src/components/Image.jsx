import PropTypes from 'prop-types'

function Image({imageUrl}){
    return (
        <>
            <img src={imageUrl} width="100px" />
        </>
    )
}

Image.propTypes = {
    imageUrl: PropTypes.number
}

export default Image