
#include "Chassis.h"
#include "Ultrasonic.h"

const int forPin = 8;
const int backPin = 12;
const int speedControl = 9;

int i = 255;

void setup(){

  pinMode(forPin, OUTPUT);
  pinMode(backPin, OUTPUT);
}

bool rev = false;
void loop(){

    analogWrite(speedControl,i);
    if(rev){
      digitalWrite(forPin,LOW);
      digitalWrite(backPin,HIGH);
    }
    else{
      digitalWrite(forPin,HIGH);
      digitalWrite(backPin,LOW);
    }

  i--;
  if(i<0){
    i = 255;
    if(rev){
      rev = false;
    }
    else{
      rev = true;
    }
  }
  delay(20);
}
