import loadGoogleMapsApi from 'load-google-maps-api'

export default async (context, inject) => {
  const gmap = await loadGoogleMapsApi({
    key: context.env.apiKey
  })

  inject('gmap', gmap)
}
