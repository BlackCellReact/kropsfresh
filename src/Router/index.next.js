// /**
//  * Created by jlmconsulting on 3/10/18.
//  */
// /**
//  * Created by jlmconsulting on 3/10/18.
//  */
// import React, {
//     Component,
// } from 'react'
//
// import {
//     StyleSheet,
//     TouchableOpacity,
//     Image,
//     Navigator
// } from 'react-native'
// import {
//     Scene,
//     Router,
//     Route,
//     Overlay,
//     Stack,
//     Lightbox,
// } from 'react-native-router-flux';
//
// import {Provider} from 'mobx-react/native'
// import SideDrawer from '../SideDrawer'
// import SplashPage from '../SplashPage'
// import MainPage from '../MainPage'
//
// import Store from '../Store'
//
// class App extends Component {
//
//     renderMenuButton = () => {
//         return (
//             <TouchableOpacity
//                 style={styles.leftButtonContainer}
//                 onPress={() => this.drawer.open()}
//             >
//                 <Image
//                     source={require('./ic_menu_white_24dp.png')}
//                     style={{height: 24, width: 24}}
//                 />
//             </TouchableOpacity>
//         )
//     };
//
//     renderBackButton = () => {
//         return (
//             <TouchableOpacity
//                 style={styles.leftButtonContainer}
//                 onPress={Actions.pop}
//             >
//                 <Image
//                     source={require('./ic_arrow_back_white_24dp.png')}
//                     style={{height: 24, width: 24}}
//                 />
//             </TouchableOpacity>
//         )
//     };
//
//
//     render() {
//         return (
//             <Provider appStore={Store}>
//                 <Router name='root'>
//                     <Schema
//                         name='boot'
//                         sceneConfig={Navigator.SceneConfigs.FloatFromRight}
//                         hideNavBar
//                         type='replace' // When type='replace' is existing Actions.pop never work
//                     />
//
//                     <Route name='Drawer' hideNavBar type='reset'>
//                         <SideDrawer ref={c => { c ? this.drawer = c.drawer : this.drawer }}>
//
//                             {
//                                 /*Nested Routes are used for to manage the navbar cases (Route[Home] \ Router \ Route[Home_] )
//                                  React-Native-Reouter-Flux actions use the route names.*/
//                             }
//
//                             <Router name='drawerRoot'
//                                     sceneStyle={styles.routerScene}
//                                     navigationBarStyle={styles.navBar}
//                                     titleStyle={styles.navTitle}
//                             >
//                                 <Schema
//                                     name='home'
//                                     sceneConfig={Navigator.SceneConfigs.FloatFromRight}
//                                     hideNavBar={false}
//                                     renderLeftButton={this.renderMenuButton}
//                                 />
//                                 <Schema
//                                     name='interior'
//                                     sceneConfig={Navigator.SceneConfigs.FloatFromRight}
//                                     hideNavBar={false}
//                                     renderLeftButton={this.renderBackButton}
//                                 />
//
//                                 <Overlay key="overlay">
//                                     <Lightbox key="lightbox">
//                                         <Stack
//                                             // hideNavBar
//                                             key="root"
//                                             // titleStyle={{ alignSelf: 'center' }}
//                                         >
//                                             <Scene key="echo" back clone component={EchoView}
//                                                    getTitle={({ navigation }) => navigation.state.key}/>
//                                             <Scene key="SplashPage" component={SplashPage} title="SplashPage" initial={true}/>
//                                             <Scene key="MainPage" component={MainPage} title="MainPage"/>
//                                         </Stack>
//                                     </Lightbox>
//                                 </Overlay>
//                             </Router>
//                         </SideDrawer>
//                     </Route>
//                 </Router>
//             </Provider>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     navBar: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'green',
//     },
//     navTitle: {
//         color: 'white',
//     },
//     routerScene: {
//         paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
//     },
//     leftButtonContainer: {
//         paddingLeft: 15,
//         paddingRight: 20,
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
// })
// export default App