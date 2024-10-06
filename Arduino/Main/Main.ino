
#include "Chassis.h"
#include "Ultrasonic.h"

#include <Wire.h>
Servo left;
Servo right;

int servoPin = 11;
int n = 0;

void setup(){
  Serial.begin(9600);
  left.attach(12);
  right.attach(10);
}


//chassis bot(12,10,89);
ULS sensor(7,8);

int center = 111;

void loop(){
 if(sensor.getDistance() > 12){
    left.write(0);
  }
  else{
    left.write(180);
  }
    right.write(89);
    delay(20);
}

/*void avoidObs(float dist){
  if(sensor.getDistance() > dist){
    bot.moveForward();
  }
  else{
    bot.moveBack();
  }
}*/
