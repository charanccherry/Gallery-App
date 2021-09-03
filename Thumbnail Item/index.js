import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, clickThumbnailItem} = props
  const {thumbnailUrl, id, thumbnailAltText} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    clickThumbnailItem(id)
  }
  return (
    <li className="image-item">
      <button type="button" onClick={onClickThumbnail} className="btn-img">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
