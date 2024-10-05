
#include "Chassis.h"
#include "Ultrasonic.h"

#include <Wire.h>
Servo Servo1;

int servoPin = 11;
int n = 0;

void setup(){
  Servo1.attach(servoPin);
  pinMode(servoPin,OUTPUT);
  Serial.begin(9600);
}


chassis bot(9,10);
ULS sensor(7,8);



void loop(){
  avoidObs(12);
 
    
}

void avoidObs(float dist){
  if(sensor.getDistance() > dist){
    bot.moveForward();
  }
  else{
    bot.moveBack();
  }
}
