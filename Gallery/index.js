import {Component} from 'react'

import './index.css'

import ThumbnailItem from '../ThumbnailItem'

const imagesList = [
  {
    id: 0,
    imageUrl: 'https://wallpaperaccess.com/full/31189.jpg',
    thumbnailUrl: 'https://wallpaperaccess.com/full/31189.jpg',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://wallpapercave.com/wp/wp2506834.jpg',
    thumbnailUrl: 'https://wallpapercave.com/wp/wp2506834.jpg',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://i.pinimg.com/originals/37/4c/89/374c89251429e42d42428f3c99df5c56.jpg',
    thumbnailUrl:
      'https://i.pinimg.com/originals/37/4c/89/374c89251429e42d42428f3c99df5c56.jpg',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl: 'https://wallpaperaccess.com/full/31210.jpg',
    thumbnailUrl: 'https://wallpaperaccess.com/full/31210.jpg',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl:
      'https://i.pinimg.com/originals/a9/9e/34/a99e34c48753fa2cf4dc04a6b01f746d.jpg',
    thumbnailUrl:
      'https://i.pinimg.com/originals/a9/9e/34/a99e34c48753fa2cf4dc04a6b01f746d.jpg',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://wallpapershome.com/images/pages/pic_h/17125.jpg',
    thumbnailUrl: 'https://wallpapershome.com/images/pages/pic_h/17125.jpg',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://images.hdqwalls.com/wallpapers/beautiful-nature-photography-hd.jpg',
    thumbnailUrl:
      'https://images.hdqwalls.com/wallpapers/beautiful-nature-photography-hd.jpg',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://wallpaperaccess.com/full/31192.jpg',
    thumbnailUrl: 'https://wallpaperaccess.com/full/31192.jpg',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
  {
    id: 8,
    imageUrl:
      'https://i.pinimg.com/736x/03/db/c0/03dbc0ca723610444f8945aa774dc417--camera-test-sun.jpg',
    thumbnailUrl:
      'https://i.pinimg.com/736x/03/db/c0/03dbc0ca723610444f8945aa774dc417--camera-test-sun.jpg',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
  {
    id: 9,
    imageUrl:
      'https://p4.wallpaperbetter.com/wallpaper/1010/560/60/mountains-landscapes-nature-bridges-hdr-photography-free-desktop-background-wallpaper-preview.jpg',
    thumbnailUrl:
      'https://p4.wallpaperbetter.com/wallpaper/1010/560/60/mountains-landscapes-nature-bridges-hdr-photography-free-desktop-background-wallpaper-preview.jpg',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

class Gallery extends Component {
  state = {
    activeThumbnailId: imagesList[6].id,
  }

  clickThumbnailItem = id => {
    this.setState({activeThumbnailId: id})
  }

  renderSelectedImage = () => {
    const {activeThumbnailId} = this.state
    const {imageUrl, imageAltText} = imagesList[activeThumbnailId]

    return <img src={imageUrl} className="image-display" alt={imageAltText} />
  }

  render() {
    const {activeThumbnailId} = this.state

    return (
      <div className="gallery-cont">
        <div>
          <h1 className="heading">Nature Photography</h1>
          {this.renderSelectedImage()}
          <p className="text"> - - by Chiyaan</p>
          <ul className="image-list">
            {imagesList.map(eachImage => (
              <ThumbnailItem
                key={eachImage.id}
                imageDetails={eachImage}
                isActive={activeThumbnailId === eachImage.id}
                clickThumbnailItem={this.clickThumbnailItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Gallery
