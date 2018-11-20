import Reactotron, { trackGlobalErrors, openInEditor, overlay } from 'reactotron-react-native'

console.disableYellowBox = true

if (__DEV__) {
  Reactotron
    .configure({
      name: 'React Native Demo',
      host: '192.168.11.5'
    })
    .use(trackGlobalErrors({
      veto: frame => vetoTest(frame.fileName)
    }))
    .use(openInEditor())
    .use(overlay())
    .connect()
}
