// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import React, {Component} from 'react';
import { StyleSheet, Text, View ,ScrollView } from 'react-native';


// export default function CreateTicketThirdPage() {
  
  import Demo from './Demo';
  
  export default function App() {
    return (
  <View>
    <Demo />
  </View>

 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollView:{
    width: windowWidth,
    height: windowHeight,
    

  },
});

// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View, Image, ScrollView} from "react-native";

// import React, { Component, useCallback, useState , useEffect } from 'react';
// import { ScrollView, View, Text, Button , SafeAreaView } from 'react-native';
// // import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import AppLoading from 'expo-app-loading';
// import {
//   useFonts,
//   Inter_900Black,
// } from '@expo-google-fonts/inter';
// export default () => {
//   let [fontsLoaded] = useFonts({
//     Inter_900Black,
//   });

//   if (!fontsLoaded) {
//     return <AppLoading />;
//   } else {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

//         <Text style={{ fontFamily: 'Inter_900Black' }}>
//           Inter Black
//         </Text>

//       </View>
//     );
//   }
// };
// const objects = [
//   ['avocado', '🥑'],
//   ['apple', '🍏'],
//   ['orage', '🍊'],
//   ['cactus', '🌵'],
//   ['eggplant', '🍆'],
//   ['strawberry', '🍓'],
//   ['coconut', '🥥'],
// ];

// const getRanomItem = () => {
//   const item = objects[~~(Math.random() * objects.length)];
//   return {
//     name: item[0],
//     icon: item[1],
//     id: Date.now() + Math.random(),
//   };
// };

// const _items = Array.from(new Array(5000)).map(() => getRanomItem());

// export default function List() {
//   const [items, setItems] = useState(_items);

//   const addItem = useCallback(() => {
//     setItems([getRanomItem()].concat(items));
//   }, [items]);

//   return (
//     <SafeAreaView style={{marginTop: 20}}>
//       <Button title="add item" onPress={addItem} />
//       <ScrollView>
//         {items.map(({name, icon}) => (
//           <View
//             style={{
//               borderWidth: 1,
//               margin: 3,
//               padding: 5,
//               flexDirection: 'row',
//             }}>
//             <Text style={{ fontSize: 20, width: 150 }}>{name}</Text>
//             <Text style={{ fontSize: 20 }}>{icon}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
// import React, { Component } from 'react';
// import { 
//   Text,
//   View,
//   ScrollView,
//   StyleSheet
// } from 'react-native';

// const styles = StyleSheet.create({
//   story: {
//     flex: 1,
//     width: 250,
//     height: 250,
//     alignSelf: 'center',
//   },
// });

// class App extends Component {
//   render() {
//     return (
//       <ScrollView style={{flex:1}}>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//         <View style={styles.story}>
//           <Text>Story Title</Text>
//           <Text>Story Text</Text>
//         </View>
//       </ScrollView>
//     );
//   }
// }

// export default App;
//  import React from 'react';


//  import {Animated, StyleSheet, Textnn, ScrollView, StatusBar , View ,Text  } from 'react-native';
//  import React, { useEffect, useState ,useRef } from "react";
//  import AnimatedHeader from 'react-native-animated-header';

//  import {
//   SafeAreaView,
//   SafeAreaProvider,
//   SafeAreaInsetsContext,
//   useSafeAreaInsets,
//   initialWindowMetrics,
// } from 'react-native-safe-area-context';
//  import Data from "./Data" ;

// export default function App() {
//   const offset = useRef(new Animated.Value(0)).current;

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
//         <AnimatedHeader animatedValue={offset} >
//         <ScrollView
//           style={{ flex: 1, backgroundColor: 'white' }}
//           contentContainerStyle={{
//             alignItems: 'center',
//             paddingTop: 220,
//             paddingHorizontal: 20
//           }}
//           showsVerticalScrollIndicator={false}
//           scrollEventThrottle={16}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { y: offset } } }],
//             { useNativeDriver: false }
//           )}
//         >
//           {Data.map(item => (
//             <View
//               key={item.id}
//               style={{
//                 marginBottom: 20
//               }}
//             >
//               <Text style={{ color: '#101010', fontSize: 32 }}>
//                 {item.title}
//               </Text>
//             </View>
//           ))}
//         </ScrollView>
//         </AnimatedHeader>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }
// import React from 'react';
// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar , View } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     backgroundColor: 'pink',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 42,
//   },
// });

// export default App;
// // import React from 'react';
// import { StyleSheet, Text, View , Image , TextInput} from 'react-native';
// import React, {Component, PropTypes} from 'react';

// import RichTextEditor from 'react-rte';
// import { Editor } from 'react-draft-wysiwyg';
//  import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//  import Demo from './Demo';
// import Second from './second';
// export default class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={isCreat: ""};
//   }

// render(){
// const isCreat =this.state.isCreat;
//    return (
//     <View style={styles.container}>
//     {/* {isCreat ? (
//             <Editor />
//             ) : (
//         <Demo />
//         )
//     } */}
//     <View style={styles.Editor}>    <Editor/> </View>

//     <Demo/>
//     </View>
    
//   );
// }

// } 
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
 
    
//   },
//   Editor :{
//     top: 100 ,

//   }
// ,
// });
// class MyStatefulEditor extends Component {
//   static propTypes = {
//     onChange: PropTypes.func
//   };

//   state = {
//     value: RichTextEditor.createEmptyValue()
//   }

//   onChange = (value) => {
//     this.setState({value});
//     if (this.props.onChange) {
//       // Send the changes up to the parent component as an HTML string.
//       // This is here to demonstrate using `.toString()` but in a real app it
//       // would be better to avoid generating a string on each change.
//       this.props.onChange(
//         value.toString('html')
//       );
//     }
//   };

//   render() {
//     // The toolbarConfig object allows you to specify custom buttons, reorder buttons and to add custom css classes.
//     // Supported inline styles: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Inline-Styles.md
//     // Supported block types: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Custom-Block-Render.md#draft-default-block-render-map
//     const toolbarConfig = {
//       // Optionally specify the groups to display (displayed in the order listed).
//       display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
//       INLINE_STYLE_BUTTONS: [
//         {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
//         {label: 'Italic', style: 'ITALIC'},
//         {label: 'Underline', style: 'UNDERLINE'}
//       ],
//       BLOCK_TYPE_DROPDOWN: [
//         {label: 'Normal', style: 'unstyled'},
//         {label: 'Heading Large', style: 'header-one'},
//         {label: 'Heading Medium', style: 'header-two'},
//         {label: 'Heading Small', style: 'header-three'}
//       ],
//       BLOCK_TYPE_BUTTONS: [
//         {label: 'UL', style: 'unordered-list-item'},
//         {label: 'OL', style: 'ordered-list-item'}
//       ]
//     };
//     return (
//       <RichTextEditor toolbarConfig={toolbarConfig} />
//     );
//   } }
// import DropDownPicker from 'react-native-dropdown-picker'
//  import React, { useEffect, useState ,useRef } from "react";
// import flower  from  "./images/flower.png";
//  const Organization = ['Vaccine', 'Supply Chain', 'Regional lab'];

//  export default function App() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'Apple', value: 'apple'},
//     {label: 'Banana', value: 'banana'}
//   ]);
//   return (
//     <View style={styles.container}>
//      <DropDownPicker
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
    
//     />
//   <Image style={styles.imageVector4} source={flower}/> 
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageVector1 :{
//     position:"absolute",
//     // width: 16 ,
//     // height:7.95 ,
//     // top : 350 ,
//     // bottom: 93.05 ,
//     // right:291 ,
//     // left :18 ,
//     width: 27,
//     height: 25,
//     alignSelf: 'center',
//     borderColor: "#438170",
    
//   }, 
// });


// // import ModalDropdown from 'react-native-modal-dropdown';
// import ModalDropdown from './components/ModalDropdown';

// const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
// const DEMO_OPTIONS_2 = [
//   {"name": "Rex", "age": 30},
//   {"name": "Mary", "age": 25},
//   {"name": "John", "age": 41},
//   {"name": "Jim", "age": 22},
//   {"name": "Susan", "age": 52},
//   {"name": "Brent", "age": 33},
//   {"name": "Alex", "age": 16},
//   {"name": "Ian", "age": 20},
//   {"name": "Phil", "age": 24},
// ];

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       dropdown_4_options: [],
//       dropdown_4_defaultValue: 'loading...',
//       dropdown_6_icon_heart: true,
//     };
//   }

//   render() {
//     const dropdown_6_icon = this.state.dropdown_6_icon_heart ? require('./images/heart.png') : require('./images/flower.png');
//     return (
//       <View style={styles.container}>
//         <StatusBar style="auto" />
//         <View style={styles.row}>
//           <View style={styles.cell}>
//             <ModalDropdown style={styles.dropdown_1}
//                            options={DEMO_OPTIONS_1}
//                            renderButtonComponent={TouchableHighlight}
//                            renderButtonProps={{ underlayColor: 'lightgray' }}
//             />
            
//             <ModalDropdown style={styles.dropdown_6}
//                            options={DEMO_OPTIONS_1}
//                            onSelect={(idx, value) => this._dropdown_6_onSelect(idx, value)}>
//               <Image style={styles.dropdown_6_image}
//                      source={dropdown_6_icon}
//               />
//             </ModalDropdown>
//           </View>
//           <View style={styles.cell}>
//             <ModalDropdown ref="dropdown_2"
//                            style={styles.dropdown_2}
//                            textStyle={styles.dropdown_2_text}
//                            dropdownStyle={styles.dropdown_2_dropdown}
//                            options={DEMO_OPTIONS_2}
//                            renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
//                            renderRow={this._dropdown_2_renderRow.bind(this)}
//                            renderRowComponent={TouchableHighlight}
//                            renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
//             />
//             <TouchableOpacity onPress={() => {
//               this.refs.dropdown_2.select(0);
//             }}>
//               <Text style={styles.textButton}>
//                 select Rex
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={styles.row}>
//           {/* <ScrollView ref={el => this._scrollView = el}
//                       style={styles.scrollView}
//                       contentContainerStyle={styles.contentContainer}
//                       showsVerticalScrollIndicator={true}
//                       scrollEventThrottle={1}>
//             <Text>
//               {'Scroll view example.'}
//             </Text>
//             <ModalDropdown ref={el => this._dropdown_3 = el}
//                            style={styles.dropdown_3}
//                            options={DEMO_OPTIONS_1}
//                            adjustFrame={style => this._dropdown_3_adjustFrame(style)}
//                            dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
//                            dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}
//             />
//           </ScrollView> */}
//         </View>
//         <View style={styles.row}>
//           <View style={[styles.cell, {justifyContent: 'flex-end'}]}>
//             <ModalDropdown style={styles.dropdown_4}
//                            dropdownStyle={styles.dropdown_4_dropdown}
//                            options={this.state.dropdown_4_options}
//                            defaultIndex={-1}
//                            defaultValue={this.state.dropdown_4_defaultValue}
//                            onDropdownWillShow={this._dropdown_4_willShow.bind(this)}
//                            onDropdownWillHide={this._dropdown_4_willHide.bind(this)}
//                            onSelect={(idx, value) => this._dropdown_4_onSelect(idx, value)}
//             />
//           </View>
//           <View style={[styles.cell, {justifyContent: 'flex-end'}]}>
//             <TouchableOpacity onPress={this._dropdown_5_show.bind(this)}>
//               <Text style={styles.textButton}>
//                 {'Show dropdown'}
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => this._dropdown_5_select(2)}>
//               <Text style={styles.textButton}>
//                 {'Select the 3rd option'}
//               </Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => this._dropdown_5_select(-1)}>
//               <Text style={styles.textButton}>
//                 {'Clear selection'}
//               </Text>
//             </TouchableOpacity>
//             <ModalDropdown ref={el => this._dropdown_5 = el}
//                            style={styles.dropdown_5}
//                            options={['Select me to hide', `I can't be selected`, 'I can only be selected outside']}
//                            defaultValue='Try the Show button above'
//                            onDropdownWillShow={this._dropdown_5_willShow.bind(this)}
//                            onDropdownWillHide={this._dropdown_5_willHide.bind(this)}
//                            onSelect={this._dropdown_5_onSelect.bind(this)}
//             />
//           </View>
//         </View>
//       </View>
//     );
//   }

//   _dropdown_2_renderButtonText(rowData) {
//     const {name, age} = rowData;
//     return `${name} - ${age}`;
//   }

//   _dropdown_2_renderRow(rowData, rowID, highlighted) {
//     let icon = highlighted ? require('./images/heart.png') : require('./images/flower.png');
//     let evenRow = rowID % 2;
//     return (
//       <View style={[styles.dropdown_2_row, {backgroundColor: evenRow ? 'lemonchiffon' : 'white'}]}>
//         <Image style={styles.dropdown_2_image}
//                 mode='stretch'
//                 source={icon}
//         />
//         <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
//           {`${rowData.name} (${rowData.age})`}
//         </Text>
//       </View>
//     );
//   }

//   _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
//     if (rowID == DEMO_OPTIONS_1.length - 1) return;
//     let key = `spr_${rowID}`;
//     return (<View style={styles.dropdown_2_separator}
//                   key={key}
//     />);
//   }

//   _dropdown_3_adjustFrame(style) {
//     console.log(`frameStyle={width:${style.width}, height:${style.height}, top:${style.top}, left:${style.left}, right:${style.right}}`);
//     style.top -= 15;
//     style.left += 150;
//     return style;
//   }

//   _dropdown_4_willShow() {
//     setTimeout(() => this.setState({
//       dropdown_4_options: DEMO_OPTIONS_1,
//       dropdown_4_defaultValue: 'loaded',
//     }), 2000);
//   }

//   _dropdown_4_willHide() {
//     this.setState({
//       dropdown_4_options: [],
//       dropdown_4_defaultValue: 'loading',
//     });
//   }

//   _dropdown_4_onSelect(idx, value) {
//     // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
//     //alert(`idx=${idx}, value='${value}'`);
//     console.debug(`idx=${idx}, value='${value}'`);
//   }

//   _dropdown_5_show() {
//     this._dropdown_5 && this._dropdown_5.show();
//   }

//   _dropdown_5_select(idx) {
//     this._dropdown_5 && this._dropdown_5.select(idx);
//   }

//   _dropdown_5_willShow() {
//     return false;
//   }

//   _dropdown_5_willHide() {
//     let idx = this._dropdown_5_idx;
//     this._dropdown_5_idx = undefined;
//     return idx == 0;
//   }

//   _dropdown_5_onSelect(idx, value) {
//     this._dropdown_5_idx = idx;
//     if (this._dropdown_5_idx != 0) {
//       return false;
//     }
//   }

//   _dropdown_6_onSelect(idx, value) {
//     this.setState({
//       dropdown_6_icon_heart: !this.state.dropdown_6_icon_heart,
//     })
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   row: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   cell: {
//     flex: 1,
//     borderWidth: StyleSheet.hairlineWidth,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   contentContainer: {
//     height: 500,
//     paddingVertical: 100,
//     paddingLeft: 20,
//   },
//   textButton: {
//     color: 'deepskyblue',
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: 'deepskyblue',
//     margin: 2,
//   },

//   dropdown_1: {
//     flex: 1,
//     top: 32,
//     left: 8,
//   },
//   dropdown_2: {
//     alignSelf: 'flex-end',
//     width: 150,
//     marginTop: 32,
//     right: 8,
//     borderWidth: 0,
//     borderRadius: 3,
//     backgroundColor: 'cornflowerblue',
//   },
//   dropdown_2_text: {
//     marginVertical: 10,
//     marginHorizontal: 6,
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
//   dropdown_2_dropdown: {
//     width: 150,
//     height: 300,
//     borderColor: 'cornflowerblue',
//     borderWidth: 2,
//     borderRadius: 3,
//   },
//   dropdown_2_row: {
//     flexDirection: 'row',
//     height: 40,
//     alignItems: 'center',
//   },
//   dropdown_2_image: {
//     marginLeft: 4,
//     width: 30,
//     height: 30,
//   },
//   dropdown_2_row_text: {
//     marginHorizontal: 4,
//     fontSize: 16,
//     color: 'navy',
//     textAlignVertical: 'center',
//   },
//   dropdown_2_separator: {
//     height: 1,
//     backgroundColor: 'cornflowerblue',
//   },
//   dropdown_3: {
//     width: 150,
//     borderColor: 'lightgray',
//     borderWidth: 1,
//     borderRadius: 1,
//   },
//   dropdown_3_dropdownTextStyle: {
//     backgroundColor: '#000',
//     color: '#fff'
//   },
//   dropdown_3_dropdownTextHighlightStyle: {
//     backgroundColor: '#fff',
//     color: '#000'
//   },
//   dropdown_4: {
//     margin: 8,
//     borderColor: 'lightgray',
//     borderWidth: 1,
//     borderRadius: 1,
//   },
//   dropdown_4_dropdown: {
//     width: 100,
//   },
//   dropdown_5: {
//     margin: 8,
//     borderColor: 'lightgray',
//     borderWidth: 1,
//     borderRadius: 1,
//   },
//   dropdown_6: {
//     flex: 1,
//     left: 8,
//   },
//   dropdown_6_image: {
//     width: 40,
//     height: 40,
//   },
// });

// export default App;