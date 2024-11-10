#include "Ultrasonic.h"
#include "Motor.h"

class chassis{

  private:
    
    ULS* sensor = new ULS(7,8);
    motor* left_motor = new motor(5,6,3);
    motor* right_motor = new motor(13,12,11);

    float errorTime = -1;

    float error = 0;
    float integral = 0;
    float der = 0;
    float previousError = 10000000;

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
      this->error = (distance - limit);
      this->integral = (this->integral + this->error) *.005;
      this->der = (this->error - this->previousError)/.005;
      this->previousError = this->error;
      float output = (8 * this->error + .5 * this->integral + .001 * this->der);
      this->move(output,175);
      Serial.println(output);
      this->checkError(this->error, limit/4);
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
          this->resetPID();
        }
        
      }

      else{
        this->errorTime=-1;
      }
    }

    void resetPID(){
      this->error = 0;
      this-> integral = 0;
      this-> der = 0;
      this-> previousError = 10000;
    }

};
