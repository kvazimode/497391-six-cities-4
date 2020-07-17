import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
    this._mapInstance = null;
    this._mapSetup = {
      center: [52.38333, 4.9],
      zoom: 12,
      zoomControl: false,
      marker: true
    };
    this._pin = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  createMap(pinList) {
    const {center, zoom} = this._mapSetup;
    this._mapInstance = leaflet.map(this._mapRef.current, this._mapSetup);
    this._mapInstance.setView(center, zoom);

    leaflet.tileLayer(
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
    leaflet.marker(pinCords, {pin}).addTo(this._mapInstance);
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

  componentDidUpdate() {
    this.removeMap();
    this.createMap(this.getCords());
  }

  componentWillUnmount() {
    this.removeMap();
  }

  render() {
    return <section id="map" className="cities__map map" ref={this._mapRef}></section>;
  }
}

Map.propTypes = {
  offerList: PropTypes.array.isRequired
};

export default Map;
