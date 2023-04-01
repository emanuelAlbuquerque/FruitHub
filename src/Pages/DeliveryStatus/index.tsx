import { PageTitle } from 'components/PageTitle'
import { Status } from 'components/Status'
import { ContainerPages } from 'styles/ContainerPages'

import notedOrder from '../../assets/img/notedOrder.svg'
import ordering from '../../assets/img/ordering.svg'
import orderDelivery from '../../assets/img/orderDelivery.svg'
import orderReceived from '../../assets/img/orderReceived.svg'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import { ContainerStylePageDeliveryStatus } from './style'

// https://dev.to/franciscomendes10866/custom-maps-using-react-leaflet-and-mapbox-149i - Link para pesquisa do Map

export const DeliveryStatus = () => {
  return (
    <ContainerStylePageDeliveryStatus>
      <PageTitle
        text="Delivery Status"
        handleClickBack={() => console.log('voltei')}
        className="page_status-title"
      />
      <div className="page-container_status">
        <Status img={notedOrder} text="Order taken" variations="accepted" />
        <Status
          img={ordering}
          text="Order is being processed"
          variations="accepted"
        />
        <Status
          img={orderDelivery}
          text="Order is being delivered"
          variations="delivery"
        />

        <div className="container_map">
          <MapContainer
            center={
              {
                lat: -7.87232,
                lng: -35.4398
              } as LatLngExpression
            }
            zoom={15}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-7.87232, -35.4398] as LatLngExpression} />
          </MapContainer>
        </div>

        <Status
          img={orderReceived}
          text={'Order Received'}
          variations="processing"
        />
      </div>
    </ContainerStylePageDeliveryStatus>
  )
}
