import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';

const city = [52.38333, 4.9];

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = React.createRef();
    this._mapInstance = null;
    this._mapSetup = {
      zoom: 12,
      zoomControl: false,
      marker: true
    };
    this._pin = L.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  createMap(pinList) {
    const {zoom} = this._mapSetup;
    this._mapInstance = L.map(this._mapRef.current, this._mapSetup);
    this._mapInstance.setView(city, zoom);

    L.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
    ).addTo(this._mapInstance);
    pinList.map((cords) => this.addPin(cords));
  }

  removeMap() {
    this._mapInstance.remove();
    this._mapInstance = null;
  }

  addPin(pinCords) {
    const pin = this._pin;
    L.marker(pinCords, {pin}).addTo(this._mapInstance);
  }

  getCords() {
    const {offerList} = this.props;
    const cordList = offerList.map((offer) => {
      return offer.coord;
    });
    return cordList;
  }

  componentDidMount() {
    this.createMap(this.getCords());
  }

  componentWillUnmount() {
    this.removeMap();
  }

  render() {
    return <section className="cities__map map" ref={this._mapRef}></section>;
  }
}

Map.propTypes = {
  offerList: PropTypes.array.isRequired
};

export default Map;
