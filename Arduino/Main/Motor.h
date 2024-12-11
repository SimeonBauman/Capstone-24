//motor class, sets motor pins and is it is reversed or not
class motor{

  private:
    int forPin;
    int backPin;
    int speedPin;

    int reversed;
    
  public:
    motor(int forPin, int backPin, int  speedPin, bool isReversed = false){
      this->forPin = forPin;
      this->backPin = backPin;
      this->speedPin = speedPin;

      if(isReversed) this->reversed = -1;
      if(!isReversed) this->reversed = 1;  

      pinMode(forPin, OUTPUT);
      pinMode(backPin, OUTPUT);
    }

    //goes through all existing motors and applies the speed to it
    void move(int speed){

      speed *= reversed;
      
      if(speed > 255) speed = 255;
      if(speed < -255) speed = -255;
      
       analogWrite(speedPin,abs(speed));
       
      if(speed >= 0 ){
        digitalWrite(forPin,HIGH);
        digitalWrite(backPin,LOW);
      
      }
      else if (speed < 0){
        digitalWrite(forPin,LOW);
        digitalWrite(backPin,HIGH);
      }
      else{
        digitalWrite(forPin,LOW);
        digitalWrite(backPin,LOW);
      }
      
    }
};
