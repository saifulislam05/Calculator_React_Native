import React, { useState } from 'react'
import { View, StyleSheet,Text,ScrollView, Pressable} from 'react-native'
import styles from './MainScreenStyles'

const MainScreen = () => {
const [value,setValue]=useState('0')

    const handlePress = (val) => {
        // console.log('pressed ' + val);
        if (val== "AC") {
            setValue('0')
        }

        else if (val == '=') {
            
        }
            
        else if (val == 'back') {
            
        }     
        else if (val == '()') {
            
        }

        else {
            if (value == '0') {
                if (val=='+') {
                    
                }
             setValue(val)
            }
            else if (isNaN(val)) {
              if (value.slice(-1)=='+'|| value.slice(-1)=='-'||value.slice(-1)=='*'||value.slice(-1)=='÷'||value.slice(-1)=='%' ) {
                  setValue(value.slice(0, -1)+ val)
              }
              // console.log(value.slice(-1));
              else {
                  
                  setValue(value+val)
                }
                
            //   setValue(value + val);
            }
            else {
                setValue(value+val)
            }

            // console.log(isNaN(val))
        }
}

  return (
    <View style={styles.main_screen}>
      <ScrollView style={styles.main_display}>
        <Text style={styles.main_display_text}>{value}</Text>
      </ScrollView>

      <View style={styles.main_display_keypad}>
        {/* First rows buttons  */}
        <View style={styles.main_display_keypad_row}>
          <Pressable onPress={() => handlePress("AC")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>AC</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("( )")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>()</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("%")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>%</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("÷")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>÷</Text>
            </View>
          </Pressable>
        </View>
        {/* Second rows buttons  */}
        <View style={styles.main_display_keypad_row}>
          <Pressable onPress={() => handlePress("7")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>7</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("8")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>8</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("9")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>9</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("*")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>×</Text>
            </View>
          </Pressable>
        </View>

        {/* Third rows buttons  */}
        <View style={styles.main_display_keypad_row}>
          <Pressable onPress={() => handlePress("4")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>4</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("5")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>5</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("6")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>6</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("-")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>-</Text>
            </View>
          </Pressable>
        </View>

        {/* Fourth rows buttons  */}
        <View style={styles.main_display_keypad_row}>
          <Pressable onPress={() => handlePress("1")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>1</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("2")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>2</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("3")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>3</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("+")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>+</Text>
            </View>
          </Pressable>
        </View>

        {/* Fifth rows buttons  */}
        <View style={styles.main_display_keypad_row}>
          <Pressable onPress={() => handlePress("0")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>0</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("dot")}>
            <View style={styles.btn_outer}>
              <Text style={styles.bg_button}>.</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("back")}>
            <View style={styles.btn1_outer}>
              <Text style={styles.bg1_button}>↩</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => handlePress("=")}>
            <View style={styles.btn2_outer}>
              <Text style={styles.bg2_button}>=</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default MainScreen