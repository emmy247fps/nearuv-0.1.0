import { memo } from 'react'
import { IoIosChatbubbles, IoIosPeople } from 'react-icons/io'
import { TheAvatar } from '../components'
import '../app-style/_itemsTemplate.scss'

const ItemsTemplate = (props) => {
  const { data, type, mobileIconClick, itemAction, closeHandler } = props
  return (
    <div className='homeContainer' onClick={closeHandler}>
      {data?.map((item, i) => (
        <div className={type === 'item' ? "homeContainerItems itemStyle" : type === 'product' && "homeContainerItems productStyle"} 
        key={i} onClick={() => itemAction(type === 'item' ? `/description/${item.slug}/${item.name}` : type === 'product' && item)}>
          {type === 'product' &&  <div className='productContainerInfo'>
                <span><b>{item.productName}</b></span>
                <div>
                <IoIosPeople className='sellerIcon' size={15}/> 
                <span className='sellerNum'><b>{item.sellers}k</b></span>
                </div>
              <div><b>{item.rating}</b></div>
              </div>
              }
          {type === 'item' && <img alt={item?.username} src={item?.img || "/logo.png"
          } style={{ width: "100%" }} className="homeContainerItemsImage" />}
          {type === 'product' && <img alt={item.productName} src={item?.globalProductImage?.length > 0
            // ? generatePublicUrl(product.globalProductImage[0].img)
            ? item?.globalProductImage[0]?.img
            : "/logo.png"
          } style={{ width: "95%" }} className="homeContainerItemsImage" />}
          {type === 'item' && <div className='overlay'>
            <div className='cardHeaderDesktopView'>
              <TheAvatar link={item?.username} imgUrl={item?.profilePicture} />
              <div className="id">
                <span className='userName'>{item?.username}</span>
                <div className="iconP" >
                  <IoIosPeople size={15} />
                  <div className="numFollowers"><b>{item?.followers}k</b></div>
                </div>
              </div>
              <IoIosChatbubbles className="mobileIcon" size={23} onClick={mobileIconClick} />
            </div>
            <div className="info">
              <span className='overlayText'>{item?.description}</span>
            </div>
          </div>}
        </div>
      ))}</div>
  )
}

export default memo(ItemsTemplate)