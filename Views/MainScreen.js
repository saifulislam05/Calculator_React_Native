import React from 'react'
import { View, StyleSheet,Text,ScrollView, Pressable} from 'react-native'
import styles from './MainScreenStyles'

const MainScreen = () => {
  return (
      <View style={styles.main_screen}>
          <ScrollView style={styles.main_display}>
              <Text style={styles.main_display_text}>
                  123
              </Text>
          </ScrollView>

          <View style={styles.main_display_keypad}>
              {/* First rows buttons  */}
              <View style={styles.main_display_keypad_row}>
                  
                  <Pressable>
                      <View style={styles.btn1_outer}>
                          <Text style={styles.bg1_button}>AC</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn2_outer}>
                          <Text style={styles.bg2_button}>()</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn1_outer}>
                          <Text style={styles.bg2_button}>%</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn1_outer}>
                          <Text style={styles.bg2_button}>/</Text>
                      </View>
                  </Pressable>
                  
              </View>
 {/* Second rows buttons  */}
              <View style={styles.main_display_keypad_row}>
                  
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>7</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>8</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>9</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn1_outer}>
                          <Text style={styles.bg2_button}>*</Text>
                      </View>
                  </Pressable>
                  
              </View>

       {/* Third rows buttons  */}
              <View style={styles.main_display_keypad_row}>
                  
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>7</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>8</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>9</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn1_outer}>
                          <Text style={styles.bg2_button}>*</Text>
                      </View>
                  </Pressable>
                  
              </View>

       {/* Fourth rows buttons  */}
              <View style={styles.main_display_keypad_row}>
                  
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>7</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>8</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>9</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn1_outer}>
                          <Text style={styles.bg2_button}>*</Text>
                      </View>
                  </Pressable>
                  
              </View>

       {/* Fifth rows buttons  */}
              <View style={styles.main_display_keypad_row}>
                  
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>7</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>8</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn_outer}>
                          <Text style={styles.bg_button}>9</Text>
                      </View>
                  </Pressable>
                    
                  <Pressable>
                      <View style={styles.btn1_outer}>
                          <Text style={styles.bg2_button}>*</Text>
                      </View>
                  </Pressable>
                  
              </View>

              
          </View>
    </View>
  )
}

export default MainScreen