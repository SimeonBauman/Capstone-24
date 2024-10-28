#include "Ultrasonic.h"
#include "Motor.h"

class chassis{

  private:
    
    ULS* sensor = new ULS(7,8);
    motor* left_motor = new motor(5,6,3);
    motor* right_motor = new motor(13,12,11);

    float errorTime = -1;

  public:
   
    
    chassis(){

      this->move(0);
    }
    void move(int speed, int max =255){
      if(speed > max) speed = max;
      left_motor->move(speed);
      right_motor->move(-speed);
    }

    void turn(int speed){
      this->left_motor->move(speed);
      this->right_motor->move(speed);
    }

    float getSensorValue(){
      return sensor->getDistance();
    }

    void avoidOBS(int distance, int limit){
      float error = (distance - limit);
      this->move(error*8,100);
      this->checkError(error, limit/4);
    }
    void checkError(float error, int margin){
      if(error > -margin && error < margin){
        if(this->errorTime == -1){
          this->errorTime = millis();
        }
        else if(millis() - this->errorTime > 3000){
          this->turn(100);
          delay(500);
          this->turn(0);
          this->errorTime = -1;
        }
        
      }

      else{
        this->errorTime=-1;
      }
    }

};
