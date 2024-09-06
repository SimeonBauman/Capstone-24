
#include <Servo.h>


class chassis{

  private:
    Servo left;
    Servo right;
    int reversed = 3;

  public :

    chassis(int leftPin, int rightPin, int reversed = 3){
      this->left.attach(leftPin);
      this->right.attach(rightPin);
      this->reversed = reversed;
    }

    void moveForward(){
      this->left.write(90 + reversed);
      this->right.write(90 - reversed);
    }

    void turnLeft(){
      this->left.write(90 + reversed);
      this->right.write(90 + reversed);
    }

    void turnRight(){
      this->left.write(90 - reversed);
      this->right.write(90 - reversed);
    }

    void moveBack(){
      this->left.write(90 - reversed);
      this->right.write(90 + reversed);
    }

    void moveStop(){
      this->left.write(90);
      this->right.write(90);
    }

    void setReversed(){
      this->reversed *= -1;
    }
};
