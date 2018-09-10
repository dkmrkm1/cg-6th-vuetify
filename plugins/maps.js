import loadGoogleMapsApi from 'load-google-maps-api'

export default async (context, inject) => {
  const gmap = await loadGoogleMapsApi({
    // key: context.env.apiKey
    key: 'AIzaSyCJlve_6CJWmUuBL6NOzpU5wkvZUeIE9bM'
  })

  inject('gmap', gmap)
}
