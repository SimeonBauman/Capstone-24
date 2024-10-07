#include "Ultrasonic.h"
#include "Motor.h"

class chassis{

  private:
    
    ULS* sensor = new ULS(7,8);
    motor* left_motor = new motor(13,12,11);
    motor* right_motor = new motor(0,0,0);

  public:
   
    
    chassis(){

      this->move(0);
    }
    void move(int speed){
      left_motor->move(speed);
      right_motor->move(speed);
    }

    void turn(int speed){
      this->left_motor->move(-speed);
      this->right_motor->move(speed);
    }

    float getSensorValue(){
      return sensor->getDistance();
    }

};
