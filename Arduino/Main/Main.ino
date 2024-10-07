
#include "Chassis.h"

chassis bot;

void setup(){

 Serial.begin(9600);
}


void loop(){
   bot.move(bot.getSensorValue() * 5);
}
