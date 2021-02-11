const SongItem = (props) => {
    const { title, imageUrl } = props
    return(
        <div className='item row'>
            <div className="title-container">
                <p>{title}</p>
            </div>
            <div className="img-container">
                <img src={imageUrl} alt="single cover image" className="cover-img"/>
            </div>
        </div>
    )

}

export default SongItem